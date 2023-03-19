import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { color } from "../../constants/colors";
import SearchBar from "../search-bar/search-bar";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        zIndex: 999,
        position: "sticky",
        top: 0,
        background: color.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={30} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
