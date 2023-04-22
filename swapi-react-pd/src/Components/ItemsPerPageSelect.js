import { useEffect, useState } from "react";

export default function ItemsPerPageSelect({
  itemsPerPage,
  itemsPerPageSetter,
}) {
  useEffect(() => setItemsPerPageState(itemsPerPage), [itemsPerPage]);
  const [itemsPerPageState, setItemsPerPageState] = useState([]);
  const itemsPerPageOptions = [10, 20, 30, 40, 50];
  const handleChange = (event) => itemsPerPageSetter(event.target.value);
  return (
    <select value={itemsPerPageState} onChange={handleChange}>
      {itemsPerPageOptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
