import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { color } from "../../constants/colors";
import { ApiService } from "../../service/api-service";
import Videos from "../videos/videos";
const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetch(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container sx={{ maxWidth: "90%" }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2}>
          Search results for{" "}
          <span style={{ color: color.secondary }}>{id}</span> videos
        </Typography>
      </Container>
      <Videos videos={videos} />
    </Box>
  );
};

export default Search;
