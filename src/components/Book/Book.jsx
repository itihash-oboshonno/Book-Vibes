import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;

  return (
    <div className="border border-gray-200 rounded-2xl p-5 grid gap-y-3">
      <div>
        <Link
          to={`books/${bookId}`}
          className="h-80 rounded-xl flex justify-center mx-auto"
        >
          <img
            className="object-cover w-full max-h-80 rounded-xl"
            src={image}
            alt=""
          />
        </Link>
      </div>
      <div className="flex justify-start gap-2">
        {tags.map((tag) => (
          <Tag tag={tag}></Tag>
        ))}
      </div>
      <Link to={`books/${bookId}`}>
        <p className="font-bold font-PlayfairD text-2xl">{bookName}</p>
      </Link>
      <p className="font-medium opacity-80">By: {author}</p>
      <hr className="border-t-2 border-dashed" />
      <div className="flex justify-between items-center">
        <p className="font-medium opacity-80">{category}</p>
        <div className="flex gap-2 items-center">
          <p>{rating}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <Link to={`books/${bookId}`} className="flex justify-center">
        <button className="hover:bg-primGreen border border-primGreen hover:text-white bg-transparent text-primGreen transition ease-in-out rounded-lg py-1 font-semibold text-lg w-full">
          Details
        </button>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
