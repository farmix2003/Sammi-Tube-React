import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { color } from "../../constants/colors";
const SearchBar = () => {
  return (
    <Paper
      component={"form"}
      sx={{ border: `1px solid ${color.secondary}`, pl: 2, boxShadow: "none" }}
    >
      <input type={"text"} placeholder="Search..." className="search-bar" />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
