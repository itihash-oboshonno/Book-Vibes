import Tag from "../Tag/Tag";

const ListedBook = ({ book }) => {

  const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

  return (
    <div className="border border-gray-200 rounded-2xl p-5 flex gap-5 shadow-lg">
      <div className="bg-gray-100 rounded-xl flex items-center justify-center w-40">
        <img className="max-w-40 object-cover h-full" src={image} alt="" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <p className="text-2xl font-bold font-PlayfairD">{bookName}</p>
        </div>
        <div>
          <p className="font-medium opacity-80">By: {author}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="font-semibold">Tags</p>
            <div className="flex items-center gap-3">
              {tags.map((tag, index) => (
                <Tag key={index} tag={tag}></Tag>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-4 opacity-80">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
              />
            </svg>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <p>Pages: {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-4">
              <div className="rounded-full px-4 py-2 bg-[#328EFF] bg-opacity-15"><p className="text-[#328EFF]">Category: {category}</p></div>
              <div className="rounded-full px-4 py-2 bg-[#FFAC33] bg-opacity-15"><p className="text-[#FFAC33]">Rating: {rating}</p></div>
              <button className="rounded-full px-4 py-2 text-white bg-primGreen">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
