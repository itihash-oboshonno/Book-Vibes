import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { theReadListIdHolder } from "../Utility/addToDB";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {

  const [readBooks, setReadBooks] = useState([]);

  const allBooks = useLoaderData();

  useEffect( () => {
    const readList = theReadListIdHolder();
    
    const readListForShow = allBooks.filter(book => readList.includes(book.bookId))

    setReadBooks(readListForShow);
  }, [])

  return (
    <div>
      <div className="flex justify-center bg-gray-100 rounded-2xl p-6 my-5">
        <h3 className="text-3xl font-bold">Books</h3>
      </div>
      <div className="flex justify-center">
        <button className="px-4 py-3 rounded-lg flex justify-center items-center gap-1 bg-primGreen text-white text-lg">
          Sort By
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="my-10">
        <Tabs>
          <TabList>
            <Tab>
              <p className="text-lg">Read Books</p>
            </Tab>
            <Tab>
              <p className="text-lg">Wishlist Books</p>
            </Tab>
          </TabList>

          <TabPanel>
            <div><p className="my-10 text-lg">Number of Read Books: <span className="font-semibold">{readBooks.length}</span></p></div>
            <div className="grid grid-cols-1 gap-5">
              {
                readBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
