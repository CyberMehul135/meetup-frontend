import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import SelectFilter from "./components/SelectFilter";

function App() {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchVisible, setSearchVisible] = useState(true);

  const API_URL = import.meta.env.VIRE_API_URL;
  const { data, loading, error } = useFetch(`${API_URL}/events`);

  useEffect(() => {
    setFilteredEvents(data);
  }, [data]);

  const handleChange = (e) => {
    const value = e.target.value;
    const filterEvents =
      value === "Both"
        ? data
        : data.filter((event) => event.eventType === value);
    setFilteredEvents(filterEvents);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filterEvents = data.filter(
      (event) =>
        event.title.toLowerCase().includes(value.toLowerCase()) ||
        event.eventTags.join("").toLowerCase().includes(value.toLowerCase())
    );
    setFilteredEvents(filterEvents);
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        searchVisible={searchVisible}
        setSearchVisible={setSearchVisible}
      />
      <main style={{ backgroundColor: "#F7F7F7" }}>
        <section className="container py-4">
          <div className="row">
            <div className="col-md-9">
              <h1 className="fw-semi-bold">Meetup Events</h1>
            </div>
            <div className="col-md-3 d-flex align-items-center">
              <SelectFilter handleChange={handleChange} />
            </div>
          </div>

          <div className="row mt-4">
            {loading && <p>Loading...</p>}
            {error && <p>Error while fetching event</p>}
            {filteredEvents &&
              filteredEvents.map((event) => (
                <Card cardData={event} key={event._id} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
