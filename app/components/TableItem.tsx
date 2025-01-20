import classNames from "classnames";
import moment from "moment";

const TableItem = ({ item }) => {
    const currentTime = moment("08:03", "HH:mm").format("HH:mm");
    console.log("🚀 ~ TableItem ~ currentTime:", currentTime)
    const time = moment("09:00", "HH:mm").format("HH:mm");
    console.log("🚀 ~ TableItem ~ time:", time)
    const status = {
        done: currentTime > time,
        upcoming: currentTime < time,
    }    

    return (
        <div className="flex flex-row gap-3 p-5">
        <div>
            <h2 className={classNames(
                "text-2xl font-bold ",
                {
                    "text-cyan-600": status.upcoming,
                    "text-green-600": status.done,
                }
            )}>09:00 AM</h2>
        </div>
        <div>
            <h2 className="text-2xl font-bold">Mahmoud Auf</h2>
        </div>
    </div>
    );
}

export default TableItem;