import { FilterData, GetGoogleSheetAccess } from "./server/AccessGoogleSheets";

import Image from "next/image";
import { NoData } from "./components/NoData";
import TableGrid from "./components/TableGrid";
import moment from "moment";

export default async function Home() {
	const data = await GetGoogleSheetAccess();
	if (!data) {
		return <NoData />;
	}
	const ParsedData = await FilterData(data);

	const IsAfterNoon = moment().isAfter(moment().hour(12).minute(0).second(0));
	const isHoliday = () => {
		// Holiday Consider is when the parsed data is empty
		// or the parsed data has only first period and it's empty and has no second period
		return (
			ParsedData.today.length === 0 ||
			(ParsedData.today.length === 1 &&
				ParsedData.today[0].LectureName === "" &&
				ParsedData.today[0].period === 1)
		);
	};
	return (
		<div className='flex flex-col gap-8 min-h-screen p-8 '>
			<main className='flex flex-col gap-3  m-auto'>
				<div className='flex flex-col gap-3 items-center justify-center'>
					<Image
						src='/iti.png'
						alt='ITI Logo'
						width={200}
						height={200}
						className='rounded-lg w-12'
						priority
					/>
					<h1 className='text-xl font-bold bg-gradient-to-br from-fuchsia-500 to-rose-500 text-transparent bg-clip-text text-center'>
						We are ITI Alexandria PWD Intake 45
					</h1>
				</div>
				{!isHoliday() ? (
					<div className='flex flex-col md:flex-row gap-3 justify-center'>
						<TableGrid
							data={ParsedData}
							scope={IsAfterNoon ? "today" : "tomorrow"}
						/>
						<TableGrid
							data={ParsedData}
							scope={IsAfterNoon ? "tomorrow" : "today"}
						/>
					</div>
				) : (
					<div>Enjoy Your Holiday</div>
				)}
			</main>
			
		</div>
	);
}
