import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState } from "react";

const EventDetails = () => {
  const [searchVisible, setSearchVisible] = useState(true);
  const eventId = useParams();

  const API_URL = import.meta.env.VIRE_API_URL;
  const { data, loading, error } = useFetch(
    `${API_URL}/events/${eventId.eventId}`
  );

  return (
    <>
      <Header
        searchVisible={searchVisible}
        setSearchVisible={setSearchVisible}
      />
      <main style={{ backgroundColor: "#F7F7F7" }}>
        <section className="container py-4">
          {loading && <p>Loading...</p>}
          {error && <p>Error occured while fetching event details.</p>}
          {data && (
            <div className="row">
              {/* Left-Side Content */}
              <article className="col-md-7">
                <header>
                  <h2>{data.title}</h2>
                  <h6 className="h6 mt-3">Hosted By:</h6>
                  <p>
                    <strong>{data.hostedBy}</strong>
                  </p>
                </header>

                <figure>
                  <img
                    src={data.eventPoster}
                    alt="Event Poster"
                    className="img-fluid"
                  />
                </figure>

                <section>
                  <h5 className="mt-4 fw-bold">Details:</h5>
                  <p>{data.description}</p>
                </section>

                <section>
                  <h5 className="fw-bold mb-2">Additional Information: </h5>
                  <p className="mb-1">
                    <span className="fw-semibold">Dress Code:</span>{" "}
                    {data.dressCode}
                  </p>
                  <p>
                    <span className="fw-semibold">Age Restriction:</span>
                    {data.ageRestriction} and above
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3">Event Tags:</h5>
                  <div className="d-flex flex-wrap gap-3">
                    {data.eventTags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-2 rounded text-light bg-danger"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              </article>

              {/* Right-Side Content */}
              <aside className="col-md-5">
                <section className="card px-3 py-3">
                  <div className="d-flex mb-3">
                    <div className="col-md-2 px-2 d-flex justify-content-center my-auto">
                      <AccessTimeIcon />
                    </div>
                    <div className="col-md-10 d-flex flex-column justify-content-center">
                      <p className="mb-0">
                        {data.startingDateAndTime.split("T").join(" • ")} to
                      </p>
                      <p className="mb-0">
                        {data.endingDateAndTime.split("T").join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <div className="col-md-2 px-2 d-flex justify-content-center my-auto">
                      <LocationOnOutlinedIcon />
                    </div>
                    <div className="col-md-10 d-flex flex-column justify-content-center">
                      <p className="mb-0">{data.venue}</p>
                      <p className="mb-0">{data.address}</p>
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <div className="col-md-2 px-2 d-flex justify-content-center my-auto">
                      <CurrencyRupeeIcon />
                    </div>
                    <div className="col-md-10 d-flex flex-column justify-content-center">
                      <p className="mb-0">{data.price}</p>
                    </div>
                  </div>
                </section>

                <section className="mt-4">
                  <h5 className="fw-bold">
                    Speakers: ({data.speakers.length})
                  </h5>
                  <div className="d-flex gap-3 mt-4">
                    {data.speakers.map((speaker) => (
                      <article
                        key={speaker._id}
                        className="card px-2 py-2 bg-light d-flex flex-column align-items-center rounded"
                        style={{ width: "170px", height: "150px" }}
                      >
                        <img
                          src={speaker.image}
                          alt="Speaker photo"
                          style={{ width: "60px", height: "60px" }}
                          className="img-fluid rounded-circle"
                        />
                        <p className="mb-0 text-center fw-bold">
                          {speaker.name}
                        </p>
                        <p className="mb-0 text-center">
                          {speaker.designation}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              </aside>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default EventDetails;
