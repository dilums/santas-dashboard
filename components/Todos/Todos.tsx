import toDosList from "@/data/todoList.json";
import Tick from "@/components/Tick";

export default function Todos() {
  return (
    <div className="">
      <div className="px-4 font-bold text-2xl mt-4">Tasks</div>
      <div className="flex flex-wrap px-2 mt-2">
        {toDosList.map((i, dayIndex) => (
          <div className="p-2 w-full lg:w-1/2" key={i.key}>
            <div className="bg-white drop-shadow-md rounded-md flex h-full">
              <div className="w-32">
                <div className="w-32 h-32 p-4 relative">
                  <img
                    alt=""
                    src="https://res.cloudinary.com/ds574fco0/image/upload/v1671536525/live/santa-dashboard/cal_fyo4zn.png"
                  />
                  <div
                    className="absolute text-3xl font-semibold text-gray-400"
                    style={{
                      top: "60%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {i.key + 11}
                  </div>
                </div>
              </div>
              <div className="grow p-3">
                <ul>
                  {i.tasks.map((j, index) => (
                    <li key={j.key} className="text-sm py-2 relative">
                      <div className="px-4"> {j.desc} </div>
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: "2px",
                          left: "-1px",
                          top: 0,
                          bottom: 0,
                          background: "#edebea",
                        }}
                      ></div>
                      <div
                        className="absolute rounded-full w-5 h-5 bg-white"
                        style={{
                          left: 0,
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Tick ticked={dayIndex < 4} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
