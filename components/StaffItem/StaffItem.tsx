type Props = {
  item: {
    name: string;
    image: string;
    email: string;
    phone: string;
    specialty: string;
    service: string;
  };
};

function createTableItems<T extends string>(...keys: T[]): T[] {
  return keys;
}

const tableItems = createTableItems("email", "phone", "specialty", "service");

export default function StaffItem({ item }: Props) {
  return (
    <div className="">
      <div className=" h-12"> </div>
      <div className="bg-white drop-shadow-md rounded-lg">
        <div className="flex justify-center">
          <div
            className="h-24 w-24 bg-white rounded-full p-1.5"
            style={{ marginTop: "-48px" }}
          >
            <img
              alt={item.name}
              src={item.image}
              className="w-full rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-2 text-lg font-semibold"> {item.name} </div>
        </div>
        <div className="p-3">
          <table className="w-full">
            <tbody>
              {tableItems.map((i) => (
                <tr key={i}>
                  <td className="capitalize font-semibold text-sm">{i}</td>

                  <td className="text-right text-sm">{item[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
