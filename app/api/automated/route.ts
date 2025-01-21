import { CronJobAction } from "@/app/server/AccessGoogleSheets";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
	try {
		const { success, message } = await CronJobAction();
		return NextResponse.json({ success, message });
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				message:
					error instanceof Error ? error.message : "An unknown error occurred",
			},
			{ status: 500 }
		);
	}
}
