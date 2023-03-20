import { Box, Container, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { color } from "../../constants/colors";
import { ApiService } from "../../service/api-service";
import Category from "../category/category";
import Videos from "../videos/videos";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const setSelectedCategoryHandler = (category) =>
    setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetch(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);

  return (
    <Stack>
      <Category
        setSelectedCategoryHandler={setSelectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            {selectedCategory}{" "}
            <span style={{ color: color.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
