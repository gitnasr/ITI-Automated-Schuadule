import { Schedule, Scope } from "../types";

import TableItem from "./TableItem";

const TableGrid = ({
	data,
	scope,
}: {
	data: Schedule;
	scope: Scope;
}) => {
	return (
		<div className='flex flex-col gap-3 lg:items-start w-full'>
		
			<div className='flex  flex-col gap-6 justify-center border border-gray-700 rounded-xl p-4'>
				{data[scope].map((item, index) => (
					<TableItem key={index} item={item} scope={scope} />
				))}
			</div>
		</div>
	);
};

export default TableGrid;
