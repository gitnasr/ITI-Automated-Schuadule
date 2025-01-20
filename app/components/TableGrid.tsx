import TableItem from "./TableItem";

const TableGrid = () => {
	return (
		<div className='flex flex-col gap-3 items-center justify-center border border-gray-700 rounded-xl p-4'>
			<TableItem />
			<TableItem />
			<TableItem />

			<div className="text-xs">
				<div className='flex items-center gap-3 '>
				<div className='w-3 h-3 rounded-full bg-green-600'></div>
					<h3>Green is Done or Ingoing</h3>
				</div>
                <div className='flex items-center gap-3 '>
				<div className='w-3 h-3 rounded-full bg-cyan-600'></div>
					<h3>Cyan is Upcoming</h3>
				</div>
			</div>
		</div>
	);
};

export default TableGrid;
