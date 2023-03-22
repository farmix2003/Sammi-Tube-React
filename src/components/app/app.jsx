import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/main/main";
import Channel from "../../components/channel/channel";
import VideoDetail from "../video-detail/video-detail";
import Search from "../search/search";
import Navbar from "../navbar/navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />\
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/videos/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
