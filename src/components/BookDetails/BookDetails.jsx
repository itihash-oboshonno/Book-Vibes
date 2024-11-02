import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../Tag/Tag";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();
  const bookData = data.find((book) => book.bookId === id);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = bookData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 md:gap-10 my-10">
      <div className="bg-gray-100 rounded-2xl flex justify-center items-center p-20">
        <img className="object-cover max-h-[600px]" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-PlayfairD font-bold text-4xl">{bookName}</p>
        <p className="font-medium text-xl opacity-80">By: {author}</p>
        <hr />
        <p className="font-medium">{category}</p>
        <hr />
        <p>
          <span className="font-semibold">Review: </span>
          {review}
        </p>
        <div className="flex items-center gap-3">
          <p className="font-semibold">Tags</p>
          <div className="flex items-center gap-3">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag}></Tag>
            ))}
          </div>
        </div>
        <hr />
        <p>
          Number of Pages: <span className="font-semibold">{totalPages}</span>
        </p>
        <p>
          Publisher: <span className="font-semibold">{publisher}</span>
        </p>
        <p>
          Year of Publishing:{" "}
          <span className="font-semibold">{yearOfPublishing}</span>
        </p>
        <p>
          Rating: <span className="font-semibold">{rating}</span>
        </p>
        <div className="flex gap-3">
          <button className="btn hover:bg-primGreen border border-primGreen hover:text-white bg-transparent text-primGreen text-base shadow-none">
            Mark As Read
          </button>
          <button className="btn hover:bg-[#50B1C9] hover:text-white border border-[#50B1C9] bg-transparent hover:border-[#50B1C9] text-[#50B1C9] text-base">
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
