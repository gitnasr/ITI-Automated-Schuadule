"use server";
import { google } from "googleapis";
import moment from "moment";
import { Schedule } from "../types";

const SPREADSHEET_ID = "15niRN3yDfeglOy4UPiYB7UrpOxhp83slN4BJcD2HAvs";
const SHEET_NAME = "PD&SQLBI_45_Alex!A1:L1000";

const FIRST_PERIOD_INDEX = 4;
const SECOND_PERIOD_INDEX = 7;

const THIRD_PERIOD_INDEX = 10;

export const FilterData = async (data: (string | undefined)[][]) => {
	const todayAsTableFormat = moment().format("D-MMM-YY");
	const tomorrowAsTableFormat = moment().add(1, "days").format("D-MMM-YY");
	const Schedule: Schedule = {
		today: [],
		tomorrow: [],
	};
	for (let index = 48; index < data.length; index++) {
		const rowOnTable = data[index];

		const timeCell = rowOnTable[2];

		if (timeCell === undefined) {
			continue;
		}

		let targetSchedule = null;

		if (timeCell === todayAsTableFormat) {
			targetSchedule = Schedule.today;
		} else if (timeCell === tomorrowAsTableFormat) {
			targetSchedule = Schedule.tomorrow;
		}

		if (targetSchedule) {
			const LectureName = rowOnTable[FIRST_PERIOD_INDEX];

			const InstructorName = rowOnTable[FIRST_PERIOD_INDEX + 1];
			const LectureLocation = rowOnTable[FIRST_PERIOD_INDEX + 2] || "";
			targetSchedule.push({
				period: 1,
				time: timeCell,
				LectureName,
				InstructorName,
				LectureLocation,
			});

			// Check if we have second day
			if (rowOnTable.at(SECOND_PERIOD_INDEX)) {
				targetSchedule.push({
					period: 2,
					time: timeCell,
					LectureName: rowOnTable.at(SECOND_PERIOD_INDEX),
					InstructorName: rowOnTable.at(SECOND_PERIOD_INDEX + 1),
					LectureLocation: rowOnTable.at(SECOND_PERIOD_INDEX + 2) || "",
				});
			}

			// Check if we have third day
			if (rowOnTable.at(THIRD_PERIOD_INDEX)) {
				targetSchedule.push({
					period: 3,
					time: timeCell,
					LectureName: rowOnTable.at(THIRD_PERIOD_INDEX),
					InstructorName: rowOnTable.at(THIRD_PERIOD_INDEX + 1),
					LectureLocation: rowOnTable.at(THIRD_PERIOD_INDEX + 2) || "",
				});
			}
		}
	}
	return Schedule;
};

export async function GetGoogleSheetAccess() {
	const auth = new google.auth.GoogleAuth({
		keyFile: "account-secret.json",
		scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
	});

	const sheets = google.sheets({ version: "v4", auth });

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: SPREADSHEET_ID,
		range: SHEET_NAME,
	});
	const TableAsArray = response.data.values;
	if (TableAsArray == null || TableAsArray == undefined) {
		return null;
	}
	return response.data.values;
}
