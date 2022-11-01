import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PetsIcon from "@mui/icons-material/Pets";
import StoreIcon from "@mui/icons-material/Store";
import LogoutIcon from "@mui/icons-material/Logout";
// ----------------------------------------------------------------------

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: <HomeIcon />,
  },
  {
    title: "pets",
    path: "/dashboard/pets",
    icon: <PetsIcon />,
  },
  {
    title: "store",
    path: "/dashboard/store",
    icon: <StoreIcon />,
  },
  {
    title: "user",
    path: "/dashboard/user",
    icon: <SupervisedUserCircleIcon />,
  },
  {
    title: "logout",
    path: "/logout",
    icon: <LogoutIcon />,
  },
];

export default navConfig;
