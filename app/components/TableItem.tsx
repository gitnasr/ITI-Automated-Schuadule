import { PeriodItem } from "../@types";

const TableItem = ({ item }: { item: PeriodItem }) => {
	

	return (
		<div className='grid gird-cols-2 w-full '>
			<div className='flex flex-col '>
				<h2
					className="text-2xl font-bold text-cyan-700">
					{item.period === 1
						? "09:00AM"
						: item.period === 2
						? "12:30PM"
						: "+04:00PM"}
				</h2>
			</div>
			<div className='flex flex-col'>
				<h2 className='text-2xl font-bold'>{item.LectureName}</h2>
				<h2 className='text-xs font-extralight'>{item.LectureLocation || "Online"}</h2>
			</div>
		</div>
	);
};

export default TableItem;
