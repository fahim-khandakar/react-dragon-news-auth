import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card px-5 my-8  bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p className="text-base">
            {details.slice(0, 200)}{" "}
            <Link
              to={`/news/${_id}`}
              className="text-blue-600 font-medium text-base"
            >
              Read More...
            </Link>{" "}
          </p>
        ) : (
          <p className="text-base">{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
