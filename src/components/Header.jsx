import { Link } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import { useEffect } from "react";

const Header = ({
  searchTerm,
  handleSearch,
  searchVisible,
  setSearchVisible,
}) => {
  const page = window.location.pathname;

  const isHomePage = () => {
    const x = page.split("/")[1];
    if (x === "") {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    isHomePage();
  }, []);

  return (
    <header style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container ">
        <div className="row border-bottom py-3">
          <div className="col-md-8 ml-auto d-flex">
            <Link to="/" className="d-flex">
              <img
                src="/meetup.svg"
                alt="app logo"
                style={{ width: "100px" }}
              />
            </Link>
          </div>
          <div className="col-md-4">
            {searchVisible && (
              <SearchFilter
                searchTerm={searchTerm}
                handleSearch={handleSearch}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
