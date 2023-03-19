import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { color } from "../../constants/colors";
import Category from "../category/category";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <Stack>
      <Category />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            {selectedCategory}{" "}
            <span style={{ color: color.secondary }}>videos</span>
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
