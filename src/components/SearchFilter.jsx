const SearchFilter = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="🔍 Search by title and tags"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchFilter;
