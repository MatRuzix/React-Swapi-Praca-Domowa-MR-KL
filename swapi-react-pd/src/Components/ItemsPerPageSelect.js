import { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";

export default function ItemsPerPageSelect({
  itemsPerPage,
  itemsPerPageSetter,
}) {
  useEffect(() => setItemsPerPageState(itemsPerPage), [itemsPerPage]);
  const [itemsPerPageState, setItemsPerPageState] = useState([]);
  const itemsPerPageOptions = [10, 20, 30, 40, 50];
  const handleChange = (event) => itemsPerPageSetter(event.target.value);
  return (
    <div>
      <Select value={itemsPerPageState} onChange={handleChange}>
        {itemsPerPageOptions.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
