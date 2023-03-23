import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ videos }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "400px", md: "300px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link
        to={`/channel/${
          videos?.snippet?.channelId ? videos?.snippet.channelId : videos?.id
        }`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={videos?.snippet?.thumbnails?.default?.url}
            alt={videos?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant={"h6"}>
            {videos?.snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: "14px", color: "grey", ml: "5px" }} />
          </Typography>
          {videos?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "grey" }}
            >
              {parseInt(videos?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
