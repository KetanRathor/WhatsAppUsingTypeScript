import React from "react";
import { useState } from "react";
import { Box, AppBar, Stack, Toolbar, Divider, Avatar, Input, List, ListItem, ListItemAvatar, ListItemText, Button, Paper, Drawer, IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CommunitiesIcon, { StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon, DrawerBackIcon } from "./Icons/IconsAppBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SideBarHeader = (props) => {

  const [searchName, setSearchName] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);



  // const [people, setPeople] = useState([
  //   { id: 1, name: "Ashutosh", messages: "Hii How Are You" },
  //   { id: 2, name: "Ketan Rathor", messages: "Hii How Are You" },
  //   { id: 3, name: "Arpit", messages: "Hii How Are You" },
  //   { id: 4, name: "Sourabh", messages: "Hii How Are You" },
  //   { id: 5, name: "Mihir", messages: "Hii How Are You" },
  //   { id: 6, name: "Abhishek", messages: "Hii How Are You" },
  //   { id: 7, name: "Abhinandan", messages: "Hii How Are You" },
  //   { id: 8, name: "Pragya", messages: "Hii How Are You" }
  //   // Add more people as needed
  // ]);

  const openDrawer = () => {
    setProfileOpen(!profileOpen);
  };
  const closeDrawer = () => {
    setProfileOpen(false);
  }

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleSearchInputChange = (e) => {
    setSearchName(e.target.value);



    const clonePeople = JSON.parse(JSON.stringify(props.people));
    if (e.target.value === "") {
      props.setPeople(clonePeople);
    }
    else {
      const filteredPeople = clonePeople.filter((person) => person.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
      props.setPeople(filteredPeople);
    };
  }

  return (
    <Paper

      elevation={3}
      sx={{ border: "1px solid black" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "30vw",
          backgroundColor: "#111B21",
          overflow: "hidden",

        }}
      >
        <Stack
          position="static"
          sx={{
            height: "9.5vh",
            width: "30vw",
            backgroundColor: "#202C33",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              height: "5vh",
              width: "20vw",
              paddingLeft: "15px",
            }}
          >
            <Stack
              alignItems="flex-start"
              sx={{ width: "50%", display: "flex", p: 0 }}>
              <IconButton sx={{ p: 0 }} onClick={openDrawer}>
                <Avatar sx={{ bgcolor: deepOrange[500], fontSize: "medium" }}>
                  K
                </Avatar>
              </IconButton>

            </Stack>
            <Stack direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 1,
                width: "50%",
                paddingRight: "0px"
              }}
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
                <MenuIcon />
              </IconButton>



            </Stack>
          </Toolbar>
        </Stack>
        <Box
          display={"flex"}
          sx={{ display: "flex", width: "100%", height: "9%", borderBottom: "1px solid black", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            display={"flex"}
            sx={{
              alignItems: "center",
              marginLeft: "8px",
              // marginTop: "8px",
              height: "68%",
              width: "85%",
              backgroundColor: "#202C33",
              borderRadius: "8px",
            }}
          >
            <SearchOutlinedIcon
              sx={{
                fontSize: "18px",
                color: "#aebac1",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "12px",
              }}
            />
            <Box sx={{ color: "#aebac1", fontSize: "14px", paddingLeft: "35px" }}>
              <Input
                placeholder="Search or start new chat"
                fullWidth
                disableUnderline
                value={searchName}
                onChange={handleSearchInputChange}
                sx={{
                  color: "#aebac1",
                  fontSize: "13px",

                  height: "100%", // Adjust the height of the input
                  "&:hover, &:focus": {
                    outline: "none",
                  },
                }}
              />
            </Box>
          </Box>
          <FilterListIcon
            sx={{
              color: "#aebac1",
              fontSize: "22px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "12px",
              // marginTop: "10px",
              marginRight: "12px",
            }}
          />
        </Box>
        <List sx={{
          overflow: "auto", scrollbarWidth: "thin"
        }}
        >
          {props.people.map((person) => (
            <>
              <ListItem key={person.id} component="div" onClick={() => handlePersonClick(person)}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#394B59',  // Add a background color on hover if desired
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                  >{person.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={person.name}
                  secondary={person.messages}

                  primaryTypographyProps={{ sx: { color: "white" } }}
                  secondaryTypographyProps={{
                    sx: {
                      color: "#aebac1",
                      // borderBottom:"1px solid rgba(255, 255, 255, 0.5)" 
                    }
                  }}
                />
              </ListItem>
              <Divider
                variant="inset"
                component="li"
                color="white"
              />
            </>
          ))}
        </List>



        {/* <Box
      sx={{
        display: "flex",
          flexDirection: "column",
          height: "81vh",
          width: "70vh",
          backgroundColor: "blue",
        }}
      ></Box> */}
      </Box>
      <Drawer anchor="left" open={profileOpen}
      // onClose={toggleDrawer}
      >
        <Box sx={{ width: "30vw", height: "100vh", display: "flex", flexDirection: "column" }}
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
                {/* // sx={{}} */}


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
          {/* <Stack
            sx={{ display: "flex", height: "82%", width: "100%" }}
          >
            <Box

            >

            </Box>

          </Stack> */}


        </Box>
      </Drawer>
    </Paper>
  );
};
export default SideBarHeader;
