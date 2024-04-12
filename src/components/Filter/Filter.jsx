import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { filterMovies } from "../../redux/filterSlice";

const { Search } = Input;

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Search
      placeholder="Type to search movie by title"
      allowClear
      defaultValue={filter}
      onSearch={(value) => dispatch(filterMovies(value))}
      style={{
        width: 250,
      }}
    />
  );
};

export default Filter;
