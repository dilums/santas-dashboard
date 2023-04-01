import giftList from "@/data/giftList.json";
export default function Gifts() {
  return (
    <div className="">
      <div className="px-4 font-bold text-2xl mt-4">Gifts</div>
      {giftList.map((i) => (
        <div className="py-2 px-4" key={i.name}>
          <div className="flex flex-wrap xl:flex-nowrap drop-shadow-md bg-white">
            <div className="w-32 shrink-0 p-3">
              <div className="h-full grid place-items-center">
                <div className="">
                  <div className="h-24 w-24">
                    <img alt="" src={i.image} />
                  </div>
                  <div className="text-center font-semibold mt-1">{i.name}</div>
                </div>
              </div>
            </div>
            <div className="w-32 shrink-0 p-3">
              <div className="h-full grid place-items-center">
                <div className="h-8 w-8">
                  <img
                    alt=""
                    src={
                      i.naughty
                        ? "https://res.cloudinary.com/ds574fco0/image/upload/v1671536252/live/santa-dashboard/naugthy_leb49u.png"
                        : "https://res.cloudinary.com/ds574fco0/image/upload/v1671536252/live/santa-dashboard/nice_gbojhu.jpg"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-72 shrink-0 p-3">
              <ul className="list-disc ml-4">
                {i.behaviors.map((j) => (
                  <li key={j} className="py-1.5">
                    {j}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-44 shrink-0 p-3">
              <ul>
                {i.presents.map((j) => (
                  <li key={j} className="py-1.5 flex">
                    <div>{i.naughty ? `🖤` : `🎁`}</div>
                    <div className="ml-2">{j}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full 2xl:grow  p-3 italic">{`"${i.note}"`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
