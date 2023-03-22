import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
import { color } from "../../constants/colors";

const VideoCard = ({ videos }) => {
  console.log(videos);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "300px", md: "300px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/videos/${videos.id.videoId}`}>
        <CardMedia
          image={videos?.snippet?.thumbnails?.high?.url}
          alt={videos?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "300px", md: "300px" },
            height: "180px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: color.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/videos/${videos.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: "0.4" }}>
            {moment(videos?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography
            variant={"subtitle1"}
            fontWeight={"bold"}
            fontSize={"15px"}
          >
            {videos?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography
            variant={"subtitle2"}
            sx={{ opacity: "0.6", fontSize: "14px" }}
          >
            {videos?.snippet?.description.slice(0, 70)}
          </Typography>
        </Link>
        <>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={1}
          >
            <Avatar src={videos?.snippet?.thumbnails?.high?.url} />
            <Typography variant={"subtitle2"} color={"gray"}>
              {videos?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
