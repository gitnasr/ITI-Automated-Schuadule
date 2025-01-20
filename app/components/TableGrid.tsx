import { Schedule } from "../@types";
import TableItem from "./TableItem";

const TableGrid = ({
	data,
	scope,
}: {
	data: Schedule;
	scope: "today" | "tomorrow";
}) => {
	return (
		<div className='flex flex-col gap-3 items-start'>
		
			<div className='flex min-h-full flex-col gap-3  justify-center border border-gray-700 rounded-xl p-4'>
				{data[scope].map((item, index) => (
					<TableItem key={index} item={item} scope={scope} />
				))}
			</div>
		</div>
	);
};

export default TableGrid;
