const SelectFilter = ({ handleChange }) => {
  return (
    <select
      id="selectEventType"
      className="form-control"
      onChange={handleChange}
    >
      <option value="Both" selected disabled>
        Select Event Type
      </option>
      <option value="Offline">Offline</option>
      <option value="Online">Online</option>
      <option value="Both">Both</option>
    </select>
  );
};

export default SelectFilter;
