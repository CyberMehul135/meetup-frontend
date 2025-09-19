import { useNavigate } from "react-router-dom";

const Card = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/eventDetails/${cardData._id}`)}
      className="col-md-4 mb-5"
    >
      <article className="card overflow-hidden">
        <img src={cardData.eventPoster} alt="Event Poster" />
        <div className="card-body">
          <h4 className="card-title">{cardData.title}</h4>
          <p className="card-text">
            <span>Date: {cardData.startingDateAndTime.split("T")[0]}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>Time: {cardData.startingDateAndTime.split("T")[1]}</span>
          </p>
        </div>
        <div className="card-img-overlay">
          <p
            className={`${
              cardData.eventType === "Online"
                ? "bg-primary text-white"
                : "bg-light text-primary"
            } d-inline-block px-2 py-1 rounded `}
          >
            {cardData.eventType}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Card;
