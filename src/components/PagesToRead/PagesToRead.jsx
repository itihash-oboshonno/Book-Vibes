import { useLoaderData } from "react-router-dom";
import CustomChart from "../CustomChart/CustomChart";

const PagesToRead = () => {

    const allBooks = useLoaderData();

    return (
        <div>
            <CustomChart allBooks={allBooks}></CustomChart>
        </div>
    );
};

export default PagesToRead;