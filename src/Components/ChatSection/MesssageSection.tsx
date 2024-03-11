import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
// import bg from "../images/BackgroundImage.png"
import { green } from "@mui/material/colors";
import getCurrentTime from "../CurrentTime";

import { setSelectedPerson } from "../Slices/peopleSlice";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxToolkitHooks";



const Message = (props:any) => {

    return (
        <Box

            sx={{
                maxWidth:"100%",
                display: "flex", 
                justifyContent: "flex-end", 
                height: "4.5vh",
                // width:"15vw",
                margin: "10px",
            }}
        >
            <Stack
                // maxWidth={"10%"}
                display={"flex"}
                direction={"row"}
                spacing={2}
                sx={{
                    height: "4.5vh",
                    // width:"20vw",
                    bgcolor: "darkgreen",
                    padding: "5px", borderRadius: "10px",
                    marginTop:"auto"
                    
                }}
            >
                <Box
                    overflow={"hidden"}
                >
                    {props.msg}
                </Box>
                <Typography sx={{
                    //  marginTop: "2vh",
                    fontSize: "10px"
                }}>
                    {props.time}
                </Typography>
            </Stack>
        </Box>
    )
}


export default function MessageSection() {
    // const people = useSelector((state => state.people.contact))

    // let selectedPerson = useSelector((state) => state.people.selectedPerson)
    const {mobileNo} = useParams()

  const arr = useAppSelector((state)=>state.people.contact)
  const obj:any=arr.find((arrObj)=>arrObj.contactNumber===Number(mobileNo))
  console.log("first22",obj)

    // const style = {
    //     paperContainer: {
    //         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${bg})`,
    //         bagroundRepeat: "repeat",
    //         backgroundSize: "cover",
            
    //     }
    // }

    function chat() {


        let chatArr = [];
       
        for (let i = 0; i < obj.messages.length; i++) {
            chatArr.push(<Message msg={obj.messages[i]} time={getCurrentTime()}
            key={i}
            
            />)
            
        // }
    }
        // console.log("chatArr",chatArr)
        return chatArr
    }


    return (
        <Stack

            // style={style.paperContainer} width="100%"
            height="100%"

            sx={{

                display: "flex",
                height: "77vh",
                width: "100%",

                // backgroundColor: "blue",

                
                overflow: "hidden",
                border: "1px solid black",
                marginTop:"auto",
                bgcolor:"black"


            }}

        >

            {
                chat()
            }

        </Stack>

    )
} 
