// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import Badge from "@mui/material/Badge";
// import Avatar from "@mui/material/Avatar";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Box from "@mui/material/Box";
// import Logo from "../Photos/Logo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Toggle Drawer
//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   // Menu Items
//   const menuItems = [
//     "Dashboard",
//     "Incidents",
//     "Locations",
//     "Activities",
//     "Documents",
//     "Cypher AI",
//   ];

//   // User Information
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     profileImage: "/profile-icon.png", // Placeholder for default image
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <AppBar className="shadow-xl" sx={{ backgroundColor: "#f5f5f5" ,  boxShadow: 3  }} position="static">
//         <Toolbar className="flex justify-between items-center px-6 py-3">
//           {/* Logo Section */}
//           <Box className="flex items-center">
//             <img
//               className="cursor-pointer"
//               src={Logo}
//               alt="Logo"
//               style={{ height: "30px", marginRight: "10px" }}
//             />
//             <Typography
//               variant="h6"
//               className="text-black font-semibold"
//             ></Typography>
//           </Box>

//           {/* Desktop Links */}
//           <Box className="hidden md:flex gap-4">
//             {" "}
//             {/* Decreased gap */}
//             {menuItems.map((item, index) => (
//               <Typography
//                 key={index}
//                 variant="body1"
//                 className="text-black   cursor-pointer px-3 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-200 hover:text-red-500"
//               >
//                 {item}
//               </Typography>
//             ))}
//           </Box>

//           {/* Notification and Profile */}
//           <Box className="flex items-center gap-12 text-black ">
//             {/* Notification Icon */}
//             <IconButton className="" color="inherit">
//               <Badge badgeContent={3} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>

//             {/* Profile Box */}
//             <Box className="flex items-center gap-2 p-2  -ml-10 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
//               {/* Default Profile Image */}
//               <Avatar
//                 alt="User Profile"
//                 src={user.profileImage}
//                 className="w-8 h-8"
//               />
//               <Box className="hidden md:flex flex-col items-start">
//                 <Typography className="text-sm font-medium text-gray-800">
//                   {user.name}
//                 </Typography>
//                 <Typography className="text-xs text-gray-600 ">
//                   {user.email}
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>

//           {/* Mobile Menu Icon */}
//           <Box className="md:hidden text-black">
//             <IconButton
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile Menu */}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <List sx={{ width: 250 }}>
//           {menuItems.map((item, index) => (
//             <ListItem
//               button
//               key={index}
//               onClick={toggleDrawer(false)}
//               className="transition duration-300 ease-in-out hover:bg-gray-200 hover:text-red-500"
//             >
//               <ListItemText primary={item} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Logo from "../Photos/Logo.png";
import { Link, Outlet} from "react-router-dom";
import Profile from "../Photos/Profile.png"




const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Menu Items with Routes
  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Incidents", path: "/incidents" },
    { text: "Locations", path: "/locations" },
    { text: "Activities", path: "/activities" },
    { text: "Documents", path: "/documents" },
    { text: "Cypher AI", path: "/cypher-ai" },
  ];

  // User Information
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage: Profile, // Placeholder for default image
  };

  return (
    <>
      {/* Navbar */}
      <AppBar className="shadow-xl" sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }} position="static">
       
        <Toolbar className="flex justify-between items-center px-6 py-3">

          {/* Logo Section */}
          <Box className="flex items-center">
            <img
              className="cursor-pointer"
              src={Logo}
              alt="Logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
            <Typography
              variant="h6"
              className="text-black font-semibold"
            ></Typography>
          </Box>

          {/* Desktop Links */}
          <Box className="hidden md:flex gap-4">
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                component={Link} // Use Link from React Router
                to={item.path}
                variant="body1"
                className="text-black cursor-pointer px-3 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-200 hover:text-red-500"
              >
                {item.text}
              </Typography>
            ))}
          </Box>

          {/* Notification and Profile */}
          <Box className="flex items-center gap-12 text-black">
            {/* Notification Icon */}
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* Profile Box */}
            <Box className="flex items-center gap-2 p-2 -ml-10 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
              <Avatar
                alt="User Profile"
                src={user.profileImage}
                className="w-8 h-8"
              />
              <Box className="hidden md:flex flex-col items-start">
                <Typography className="text-sm font-medium text-gray-800">
                  {user.name}
                </Typography>
                <Typography className="text-xs text-gray-600">
                  {user.email}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Mobile Menu Icon */}
          <Box className="md:hidden text-black">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              component={Link} // Use Link from React Router
              to={item.path}
              onClick={toggleDrawer(false)}
              className="transition duration-300 ease-in-out hover:bg-gray-200 hover:text-red-500"
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

     
    </>
  );
};

export default Navbar;
