import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box minHeight={"90vh"}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
        minHeight={"80vh"}
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
