import raindeers from "@/data/raindeers.json";
import elves from "@/data/elves.json";
import StaffItem from "@/components/StaffItem";

export default function Staff() {
  return (
    <div className="">
      <div className="px-4 font-bold text-2xl mt-4"> Reindeers</div>
      <div className="flex flex-wrap mt-2">
        {raindeers.map((i) => (
          <div
            className="p-2 w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4"
            key={i.name}
          >
            <StaffItem item={i} />
          </div>
        ))}
      </div>
      <div className="px-4 font-bold text-2xl pt-8 pb-6">Elves</div>
      <div className="flex flex-wrap">
        {elves.map((i) => (
          <div
            className="p-2 w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4"
            key={i.name}
          >
            <StaffItem item={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
