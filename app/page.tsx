import Image from "next/image";
import TableGrid from "./components/TableGrid";
import moment from "moment";
import { GetGoogleSheetAccess } from "./server/AccessGoogleSheets";

export default function Home() {
  GetGoogleSheetAccess()
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

				<div className=' text-center'>
					<h2 className='text-2xl  font-bold text-emerald-600 '>
						Our Schedule For Today ({moment().format("MMM DD")})
					</h2>
				</div>
				<TableGrid />
			</main>
			<footer className='text-center text-sm font-black font-mono'>
				<span>Made with ❤️ @ IT Alexandria Labs by</span>
				<a
					className=' decoration-sky-500 underline decoration-2	 ml-1'
					href='https://github/gitnasr'
					referrerPolicy='no-referrer'
					target='_blank'>
					Nasr
				</a>
			</footer>
		</div>
	);
}
