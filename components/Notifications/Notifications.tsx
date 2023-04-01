import notificationsList from "@/data/notificationsList.json";
const priorityColorMap: { [key: string]: string } = {
  High: "#F6A9B7",
  Medium: "#FBF7A9",
  Low: "#96DC9D",
};

const RequestTypeMap: { [key: string]: string } = {
  "Task Update": "📒",
  "Child's Request": "👶",
  "Latest News": "📻",
};

export default function Notificatios() {
  return (
    <div className="">
      <div className="px-4 font-bold text-2xl mt-4">Notifications</div>
      <ul className="px-4 mt-4">
        {notificationsList.map((i, index) => (
          <li
            key={index}
            className="my-2 drop-shadow-md rounded-md pl-3"
            style={{ background: priorityColorMap[i.priority] }}
          >
            <div className="bg-white rounded-r-md  p-3 ">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold"> {i.title} </div>

                <div className="text-lg">
                  {RequestTypeMap[i.title.split(":")[0]]}
                </div>
              </div>
              <p className="py-2">{i.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
