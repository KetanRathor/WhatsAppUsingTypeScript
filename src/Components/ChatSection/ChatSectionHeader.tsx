import React from "react";
import { AppBar, Avatar, Box, Paper, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import { VideoCallIcon } from "./Icons/IconsAppBar";
import VideocamIcon from '@mui/icons-material/Videocam';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBack from '@mui/icons-material/ArrowBack';
// import MessageSection from "./MesssageSection";

// import CommunitiesIcon, { VideoCallIcon } from "./Icons/IconsAppBar";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxToolkitHooks";
// import { setSelectedPerson } from "../Slices/selctedPersonSlice";

const ChatSectionHeader = () => {

  const selectedPerson = useAppSelector((state)=>state.people.selectedPerson)

  const {mobileNo} = useParams()
  const navigate = useNavigate();

  console.log("param", typeof mobileNo)
  const arr = useAppSelector((state)=>state.people.contact)
  
  const obj:any=arr.find(arrObj => arrObj.contactNumber=== Number(mobileNo))
  console.log("first77",obj)


    return (
        <>

            {/* <Paper
                sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100%",
                    backgroundColor: "blue",

                    
                    overflow: "hidden",
                    border: "1px solid black"

                }}
            > */}
                <Stack

                    position="static"
                    sx={{
                        height: "9.5vh",
                        width: "100%",
                        backgroundColor: "#202C33",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        // paddingLeft:"10px"
                    }}
                >
                    <Box
                        sx={{ display: "flex",alignItems:"center", height: "100%", width: "5%", marginLeft:"10px" }}
                    >
                        <ArrowBack
                        sx={{fontSize:"15px", display:{xs:obj?'block':'none',sm:'none'}}}
                  onClick={()=>navigate("/")}
                        
                  />

                        <Avatar sx={{ bgcolor: deepOrange[500], fontSize: "medium" }}>
                        {obj.name ? obj.name[0] : null}
                        </Avatar>
                    </Box>
                    <Box
                        sx={{ display: "flex",alignItems:"center",justifyContent: "flex-start", height: "100%", width: "70%",marginLeft:"38px",
                        //  marginLeft: "5px"
                         }}
                    >
                        {obj.name}
                    </Box>
                    <Box
                        sx={{ display: "flex",alignItems:"center",justifyContent:"flex-end", height: "100%", width: "20%", gap:3, marginLeft:"20px" }}
                    >
                        <Box
                        sx={{display: 'flex', alignItems: 'center',height:"20px",width:"40px"}}
                        >
                        <VideocamIcon/>
                        <ExpandMoreIcon
                        sx={{fontSize:"20px"}}
                        />
                        </Box>
                    <Box
                    sx={{display: 'flex', alignItems: 'center'}}
                    >
                        <SearchIcon/>

                    </Box>

                    <Box
                    sx={{display: 'flex', alignItems: 'center'}}
                    >
                        <AccountMenu/>

                    </Box>

                    </Box>

                </Stack>
                <Box

                >

                </Box>







            {/* </Paper> */}


                 


        </>

    )
}

export default ChatSectionHeader;

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
               <MoreVertIcon />
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
          Contact info
          </MenuItem>
          <MenuItem onClick={handleClose}>
          Select messages
          </MenuItem>
          
          <MenuItem onClick={handleClose}>
          Close chat
          </MenuItem>
          <MenuItem onClick={handleClose}>
          Mute notifications
          </MenuItem>
          <MenuItem onClick={handleClose}>
          Disappearing messages
          </MenuItem>
          <MenuItem onClick={handleClose}>
          Clear chat
          </MenuItem>
          <MenuItem onClick={handleClose}>
          Delete chat
          </MenuItem>
          <MenuItem onClick={handleClose}>
          Report
          </MenuItem>
          <MenuItem onClick={handleClose}>
          Block
          </MenuItem>
        </Menu>
  
  
  
        </>
    );
  }