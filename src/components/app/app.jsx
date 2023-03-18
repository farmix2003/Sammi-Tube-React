import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/main/main";
import Channel from "../../components/channel/channel";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />\
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </Box>
  );
};

export default App;
