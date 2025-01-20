import Image from "next/image";
import TableGrid from "./components/TableGrid";

export default function Home() {
	return (
		<div className='flex flex-col gap-8 min-h-screen p-8'>
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
					<h1 className='text-xl font-bold bg-gradient-to-br from-fuchsia-500 to-rose-500 text-transparent bg-clip-text'>
						We are ITI Alexandria PWD Intake 45
					</h1>

				</div>

				<div className=' text-center'>
					<h2 className='text-2xl  font-bold text-emerald-600 '>Our Schedule For Today</h2>
				</div>
        <TableGrid />

			</main>
			<footer className='flex flex-wrap items-center justify-center  antialiased text-sm '>
				Made with ❤️ @ IT Alexandria Labs by{" "}
				<a
					href='https://github/gitnasr'
					referrerPolicy='no-referrer'
					target='_blank'>
					Nasr
				</a>
			</footer>
		</div>
	);
}
