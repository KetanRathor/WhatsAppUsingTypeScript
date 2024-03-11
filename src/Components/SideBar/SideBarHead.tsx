import React from 'react'
import { useState } from "react";
import { Box, AppBar, Stack, Avatar, Drawer, IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CommunitiesIcon, { StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon } from "../Icons/IconsAppBar";
import Menu from '@mui/material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuItem from '@mui/material/MenuItem';
import { useParams } from 'react-router-dom';




const SideBarHead = () => {

  const [profileOpen, setProfileOpen] = useState(false);
  const openDrawer = () => {
    setProfileOpen(!profileOpen);
  };
  function closeDrawer() {
    setProfileOpen(false);
  }

  

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={'space-between'}
        // position="static"
        sx={{
          height: "9.5vh",
          // width: "100%",
          backgroundColor: "#202C33",
          padding:"6px 16px",
        }}
      >
        <IconButton sx={{ p: 0 }}
          onClick={openDrawer}
        >
          
          <Avatar sx={{ bgcolor: deepOrange[500], fontSize: "medium" }}>
            K
          </Avatar>
        </IconButton>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <IconButton>
            <CommunitiesIcon />
          </IconButton>

          <IconButton>
            <StatusIcon />
          </IconButton>

          <IconButton>
            <ChannelsIcon />
          </IconButton>

          <IconButton>
            <NewChatIcon />
          </IconButton>

          <IconButton>
            <AccountMenu />
          </IconButton>
        </Stack>
        <Drawer anchor="left" open={profileOpen}
          // onClose={toggleDrawer}
        >
          <Box sx={{
             width: "30vw",
             
           height: "100vh", display: "flex", flexDirection: "column" }}
          >
            <Stack
              sx={{ display: "flex", alignItems: "flex-end", flexDirection: "row", justifyContent: "flex-start", backgroundColor: "#006654", height: "18%", width: "100%" }}
            >
              <Box
                sx={{ display: "flex", padding: "2px", marginLeft: "20px", marginBottom: "10px" }}
              >
                <Box
                  onClick={closeDrawer}
                >


                  <ArrowBackIcon
                    sx={{ color: "#aebac1", marginBottom: "4px" }}
                  />
                </Box>
                <Typography
                  sx={{ fontSize: "18px", marginLeft: "20px", color: "white" }}
                >
                  Profile
                </Typography>

              </Box>

            </Stack>
            <Stack
              sx={{ display: "flex", height: "82%", width: "100%", bgcolor: "green" }}
            >
              <Box
                sx={{
                  display: "flex", height: "55%", width: "100%", bgcolor: "yellow",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <IconButton>
                  <Avatar
                    sx={{ height: "35vh", width: "20vw", fontSize: "100px" }}
                  >
                    K
                  </Avatar>
                </IconButton>

              </Box>

            </Stack>


          </Box>
        </Drawer>
      </Stack>
</>
      )
}


export default SideBarHead;

function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        // sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <MenuIcon />
      </IconButton>


      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          New Group
        </MenuItem>
        <MenuItem onClick={handleClose}>
          New Community
        </MenuItem>

        <MenuItem onClick={handleClose}>
          Archived
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Starred Message
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Select Chats
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Setting
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Log out
        </MenuItem>
      </Menu>



    </>
  );
}

