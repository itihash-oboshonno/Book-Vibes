import bannerImg from "../../assets/banner book.png"

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse p-5 py-20">
        <img src={bannerImg} className="max-w-sm rounded-lg" />
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold font-PlayfairD my-5 md:leading-normal">Books to freshen up your bookshelf</h1>
          <button className="btn my-5 bg-primGreen border border-primGreen text-white text-lg hover:bg-transparent hover:border-primGreen hover:text-primGreen">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
