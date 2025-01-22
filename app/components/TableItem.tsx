import { PeriodItem } from "../types";
import moment from "moment";

const TableItem = ({ item, scope }: { item: PeriodItem; scope: string }) => {
	return (
		<div className='grid gird-cols-2 w-full '>
			<div className='flex flex-col '>
				<span className='text-xs font-extralight '>
					{scope === "today"
						? `TODAY, ${moment().format("DD MMM")}`
						: `TOMORROW, ${moment().add(1,"day").format("DD MMM")}`}
				</span>
				<h2 className='text-2xl font-bold text-cyan-700 '>
					{item.period === 1
						? "09:00AM"
						: item.period === 2
						? "12:30PM"
						: "+04:00PM"}
				</h2>
			</div>
			<div className='flex flex-col'>
				<h2 className='text-2xl font-bold'>
					{item.LectureName ? item.LectureName : "Nothing, Enjoy"}
				</h2>
				<h2 className='text-xs font-extralight'>
					{item.LectureName &&
						(item.LectureLocation
							? item.LectureLocation
							: "Can't Detect Location")}
				</h2>
			</div>
		</div>
	);
};

export default TableItem;
