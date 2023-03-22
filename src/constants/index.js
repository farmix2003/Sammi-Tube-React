import {
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  Nature,
  OndemandVideo,
  School,
  Sports,
  SportsEsports,
  TheaterComedy,
} from "@mui/icons-material";

export const logo = "https://pbs.twimg.com/media/Ex4a77fXMAEMmtl.jpg";

export const category = [
  { name: "New", icon: <Home /> },
  { name: "Movie", icon: <OndemandVideo /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <Sports /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcast", icon: <GraphicEq /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "Nature", icon: <Nature /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];
