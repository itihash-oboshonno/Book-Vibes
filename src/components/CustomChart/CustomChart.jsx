import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { theWishListIdHolder } from "../Utility/addToDB";

const CustomChart = ({allBooks}) => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
      y + height / 3
    }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Adding my custom data to the chart from wish-list:
  const wishList = theWishListIdHolder();
  console.log(wishList);
  const wishBooks = allBooks.filter(book => wishList.includes(book.bookId))
  console.log(wishBooks);

  const data = wishBooks.map(item => ({name: item.bookName, uv:item.totalPages}));
  console.log(data);

  return (
    <div className="rounded-2xl bg-gray-100 p-20 flex justify-center items-center my-10">
      <h1>{name}</h1>
      <BarChart
        className="max-w-full bg-transparent"
        width={1000}
        height={600}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default CustomChart;
