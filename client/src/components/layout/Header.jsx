// // import {
// //   AppBar,
// //   Backdrop,
// //   Badge,
// //   Box,
// //   IconButton,
// //   Toolbar,
// //   Tooltip,
// //   Typography,
// // } from "@mui/material";
// // import React, { Suspense, lazy, useState } from "react";
// // import { orange } from "../../constants/color";
// // import {
// //   Add as AddIcon,
// //   Menu as MenuIcon,
// //   Search as SearchIcon,
// //   Group as GroupIcon,
// //   Logout as LogoutIcon,
// //   Notifications as NotificationsIcon,
// // } from "@mui/icons-material";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { server } from "../../constants/config";
// // import toast from "react-hot-toast";
// // import { useDispatch, useSelector } from "react-redux";
// // import { userNotExists } from "../../redux/reducers/auth";
// // import {
// //   setIsMobile,
// //   setIsNewGroup,
// //   setIsNotification,
// //   setIsSearch,
// // } from "../../redux/reducers/misc";
// // import { resetNotificationCount } from "../../redux/reducers/chat";
// // import {
// //   useAcceptFriendRequestMutation,
// //   useGetNotificationsQuery,
// // } from "../../redux/api/api";

// // import './style.css';
// // import Logo from "../../assets/Logo.png"

// // const SearchDialog = lazy(() => import("../specific/Search"));
// // const NotifcationDialog = lazy(() => import("../specific/Notifications"));
// // const NewGroupDialog = lazy(() => import("../specific/NewGroup"));



// // const Header = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
  
// //   const { isSearch, isNotification, isNewGroup } = useSelector(
// //     (state) => state.misc
// //   );
// //   const { notificationCount } = useSelector((state) => state.chat);
// //   const { isLoading, data, error, isError } = useGetNotificationsQuery();

// //   const handleMobile = () => dispatch(setIsMobile(true));

// //   const openSearch = () => dispatch(setIsSearch(true));

// //   const openNewGroup = () => {
// //     dispatch(setIsNewGroup(true));
// //   };

// //   const openNotification = () => {
// //     dispatch(setIsNotification(true));
// //     dispatch(resetNotificationCount());
// //   };

// //   const navigateToGroup = () => navigate("/groups");

// //   const logoutHandler = async () => {
// //     try {
// //       const { data } = await axios.get(`${server}/api/v1/user/logout`, {
// //         withCredentials: true,
// //       });
// //       dispatch(userNotExists());
// //       toast.success(data.message);
// //     } catch (error) {
// //       toast.error(error?.response?.data?.message || "Something went wrong");
// //     }
// //   };

// //   return (
// //     <>
// //       <Box sx={{ flexGrow: 1 }} height={"4rem"}>
// //         <AppBar
// //           position="static"
// //           sx={{
// //             bgcolor: orange,
// //           }}
// //         >
// //           <Toolbar>
// //             <Typography
// //               variant="h6"
// //               sx={{
// //                 display: { xs: "none", sm: "block" },
// //               }}
// //             >
// //               <Logo/>
              
// //             </Typography>

// //             <Box
// //               sx={{
// //                 display: { xs: "block", sm: "none" },
// //               }}
// //             >
// //               <IconButton color="inherit" onClick={handleMobile}>
// //                 <MenuIcon />
// //               </IconButton>
// //             </Box>
// //             <Box
// //               sx={{
// //                 flexGrow: 1,
// //               }}
// //             />
// //             <Box>
// //               <IconBtn
// //                 title={"Search"}
// //                 icon={<SearchIcon />}
// //                 onClick={openSearch}
// //               />

// //               <IconBtn
// //                 title={"New Group"}
// //                 icon={<AddIcon />}
// //                 onClick={openNewGroup}
// //               />

// //               <IconBtn
// //                 title={"Manage Groups"}
// //                 icon={<GroupIcon />}
// //                 onClick={navigateToGroup}
// //               />

// //               <IconBtn
// //                 title={"Notifications"}
// //                 icon={<NotificationsIcon />}
// //                 onClick={openNotification}
// //                 value={notificationCount}
// //               />{data?.allRequests.length> 0 && (
// //                 <span
// //                   className="notification-badge"
// //                 >
// //                   {data?.allRequests.length}
// //                 </span>
// //               )}

// //               <IconBtn
// //                 title={"Logout"}
// //                 icon={<LogoutIcon />}
// //                 onClick={logoutHandler}
// //               />
// //             </Box>
// //           </Toolbar>
// //         </AppBar>
// //       </Box>

// //       {isSearch && (
// //         <Suspense fallback={<Backdrop open />}>
// //           <SearchDialog />
// //         </Suspense>
// //       )}

// //       {isNotification && (
// //         <Suspense fallback={<Backdrop open />}>
// //           <NotifcationDialog />
// //         </Suspense>
// //       )}

// //       {isNewGroup && (
// //         <Suspense fallback={<Backdrop open />}>
// //           <NewGroupDialog />
// //         </Suspense>
// //       )}
// //     </>
// //   );
// // };

// // const IconBtn = ({ title, icon, onClick, value }) => {
// //   return (
// //     <Tooltip title={title}>
// //       <IconButton color="inherit" size="large" onClick={onClick} position="relative">
// //         {value ? (
// //           <Badge badgeContent={value} color="error">
// //             {icon}
// //           </Badge>
// //         ) : (
// //           icon
// //         )}
// //       </IconButton>
// //     </Tooltip>
// //   );
// // };

// // export default Header;




// import {
//   AppBar,
//   Backdrop,
//   Badge,
//   Box,
//   IconButton,
//   Toolbar,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import React, { Suspense, lazy, useState } from "react";
// import { orange } from "../../constants/color";
// import {
//   Add as AddIcon,
//   Menu as MenuIcon,
//   Search as SearchIcon,
//   Group as GroupIcon,
//   Logout as LogoutIcon,
//   Notifications as NotificationsIcon,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../constants/config";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { userNotExists } from "../../redux/reducers/auth";
// import {
//   setIsMobile,
//   setIsNewGroup,
//   setIsNotification,
//   setIsSearch,
// } from "../../redux/reducers/misc";
// import { resetNotificationCount } from "../../redux/reducers/chat";
// import {
//   useAcceptFriendRequestMutation,
//   useGetNotificationsQuery,
// } from "../../redux/api/api";

// import './style.css';
// import Logo from "../../assets/Logo.png";

// const SearchDialog = lazy(() => import("../specific/Search"));
// const NotifcationDialog = lazy(() => import("../specific/Notifications"));
// const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

// const Header = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  
//   const { isSearch, isNotification, isNewGroup } = useSelector(
//     (state) => state.misc
//   );
//   const { notificationCount } = useSelector((state) => state.chat);
//   const { isLoading, data, error, isError } = useGetNotificationsQuery();

//   const handleMobile = () => dispatch(setIsMobile(true));

//   const openSearch = () => dispatch(setIsSearch(true));

//   const openNewGroup = () => {
//     dispatch(setIsNewGroup(true));
//   };

//   const openNotification = () => {
//     dispatch(setIsNotification(true));
//     dispatch(resetNotificationCount());
//   };

//   const navigateToGroup = () => navigate("/groups");

//   const logoutHandler = async () => {
//     try {
//       const { data } = await axios.get(`${server}/api/v1/user/logout`, {
//         withCredentials: true,
//       });
//       dispatch(userNotExists());
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }} height={"4rem"}>
//         <AppBar
//           position="static"
//           sx={{
//             bgcolor: orange,
//           }}
//         >
//           <Toolbar>
//             <Box
//               sx={{
//                 display: { xs: "none", sm: "flex" },
//                 alignItems: "center",
//                 gap: 1
//               }}
//             >
//               <img 
//                 src={Logo} 
//                 alt="Logo" 
//                 style={{
//                   height: "3.5rem",
//                   width: "auto",
//                   objectFit: "contain"
//                 }}
//               />
//             </Box>

//             <Box
//               sx={{
//                 display: { xs: "block", sm: "none" },
//               }}
//             >
//               <IconButton color="inherit" onClick={handleMobile}>
//                 <MenuIcon />
//               </IconButton>
//             </Box>
//             <Box
//               sx={{
//                 flexGrow: 1,
//               }}
//             />
//             <Box>
//               <IconBtn
//                 title={"Search"}
//                 icon={<SearchIcon />}
//                 onClick={openSearch}
//               />

//               <IconBtn
//                 title={"New Group"}
//                 icon={<AddIcon />}
//                 onClick={openNewGroup}
//               />

//               <IconBtn
//                 title={"Manage Groups"}
//                 icon={<GroupIcon />}
//                 onClick={navigateToGroup}
//               />

//               <IconBtn
//                 title={"Notifications"}
//                 icon={<NotificationsIcon />}
//                 onClick={openNotification}
//                 value={notificationCount}
//               />{data?.allRequests.length> 0 && (
//                 <span
//                   className="notification-badge"
//                 >
//                   {data?.allRequests.length}
//                 </span>
//               )}

//               <IconBtn
//                 title={"Logout"}
//                 icon={<LogoutIcon />}
//                 onClick={logoutHandler}
//               />
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>

//       {isSearch && (
//         <Suspense fallback={<Backdrop open />}>
//           <SearchDialog />
//         </Suspense>
//       )}

//       {isNotification && (
//         <Suspense fallback={<Backdrop open />}>
//           <NotifcationDialog />
//         </Suspense>
//       )}

//       {isNewGroup && (
//         <Suspense fallback={<Backdrop open />}>
//           <NewGroupDialog />
//         </Suspense>
//       )}
//     </>
//   );
// };

// const IconBtn = ({ title, icon, onClick, value }) => {
//   return (
//     <Tooltip title={title}>
//       <IconButton color="inherit" size="large" onClick={onClick} position="relative">
//         {value ? (
//           <Badge badgeContent={value} color="error">
//             {icon}
//           </Badge>
//         ) : (
//           icon
//         )}
//       </IconButton>
//     </Tooltip>
//   );
// };

// export default Header;




import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  AccountCircle as ProfileIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants/config";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userNotExists } from "../../redux/reducers/auth";
import {
  setIsMobile,
  setIsNewGroup,
  setIsNotification,
  setIsSearch,
} from "../../redux/reducers/misc";
import { resetNotificationCount } from "../../redux/reducers/chat";
import {
  useAcceptFriendRequestMutation,
  useGetNotificationsQuery,
} from "../../redux/api/api";

import './style.css';
import Logo from "../../assets/Logo.png";
import Profile from "../specific/Profile";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotifcationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isSearch, isNotification, isNewGroup } = useSelector(
    (state) => state.misc
  );
  const { notificationCount } = useSelector((state) => state.chat);
  const { isLoading, data, error, isError } = useGetNotificationsQuery();

  const handleMobile = () => dispatch(setIsMobile(true));
  const handleProfileToggle = () => setIsProfileOpen(!isProfileOpen);

  const openSearch = () => dispatch(setIsSearch(true));

  const openNewGroup = () => {
    dispatch(setIsNewGroup(true));
  };

  const openNotification = () => {
    dispatch(setIsNotification(true));
    dispatch(resetNotificationCount());
  };

  const navigateToGroup = () => navigate("/groups");

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      dispatch(userNotExists());
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1
              }}
            >
              <img 
                src={Logo} 
                alt="Logo" 
                style={{
                  height: "3.5rem",
                  width: "auto",
                  objectFit: "contain"
                }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
                value={notificationCount}
              />
              {data?.allRequests.length > 0 && (
                <span className="notification-badge">
                  {data?.allRequests.length}
                </span>
              )}

              <IconBtn
                title={"Profile"}
                icon={<ProfileIcon />}
                onClick={handleProfileToggle}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="right"
        open={isProfileOpen}
        onClose={handleProfileToggle}
      >
        <Box 
          sx={{ 
            width: 320,
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.85)',
            p: 3
          }}
        >
          <Profile user={user} />
        </Box>
      </Drawer>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotifcationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick} position="relative">
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;