import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api-service";
import ChannelCard from "../channel-card/channel-card";
import Videos from "../videos/videos";
const Channel = () => {
  const [videos, setVideos] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetch(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetails(dataChannelDetail.items[0]);
        const dataVideos = await ApiService.fetch(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(dataVideos?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });
  return (
    <Box minHeight={"95vh"} mt={"10vh"}>
      <Box>
        <ChannelCard videos={channelDetails} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Channel;
