import React from "react";
import { Box, Divider, Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import getCurrentTime from "../CurrentTime";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPerson } from "../Slices/peopleSlice";

import { useNavigate } from "react-router-dom";


interface personProps{
  person:{
    contactNumber: number;
       name: string;
      messages: string[];
      time: string ;
    }
}
const Person:React.FC<personProps> = ({person}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let lastMsg = person.messages.length;

  return (
    <>
    {/* <Link to={`/${props.person.contactNumber}`}> */}
      <ListItem

        onClick={() =>  {dispatch(setSelectedPerson(person))
        navigate(`${person.contactNumber}`)
        }}

        sx={{
          overflow: "hidden",
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#394B59', 
          },
        }}
      >
        <ListItemAvatar>
          <Avatar
          >{person.name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography
              display={"flex"}

            >{person.name}</Typography>
            <Typography
              sx={{ fontSize: "11px" }}
            >{getCurrentTime()}</Typography>
          </Box>
         
          <Typography
            variant="caption"
          >{person.messages[lastMsg - 1]}</Typography>
          
        </ListItemText>

      
      </ListItem>
      {/* </Link> */}
      <Divider
        variant="inset"
        component="li"
        color="white"
      />
    </>

  )
}




export default function SideBarList({searchName,handlePersonClick}:any) {
  const people = useSelector((state:any) => state.people.contact)
  let cloneArray = [...people]

  

  if (searchName) {
    cloneArray = cloneArray.filter(user => user.name.toLowerCase().includes(searchName));
  }
  function displayList() {

    let arr = [];
    for (let i = 0; i < cloneArray.length; i++) {
      arr.push(<Person person={cloneArray[i]} 
        // handlePersonClick={handlePersonClick} 
        key={i}
        />)
    }
    return arr
  }


  return (
    <List
      sx={{ overflow: "auto", scrollbarWidth: "thin" }}
    >

      {
        displayList()
      }

    </List>

  )
}