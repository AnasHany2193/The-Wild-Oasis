import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handelChange(e) {
    searchParams.set("sortBy", e.target.value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <Select
      type="white"
      value={sortBy}
      options={options}
      onChange={handelChange}
    />
  );
}

export default SortBy;
