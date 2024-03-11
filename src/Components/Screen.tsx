import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {grey} from "@mui/material/colors";
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { useSelector } from "react-redux";


const Screen = () => {
  const selectedPerson = useSelector((state:any)=>state.selectedPerson)



  return (
    <Box
      sx={{
        display: {xs:selectedPerson?'none':'flex',sm:"flex"},
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#222E35",
        overflow:"hidden"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
        }}
      >
        <img
          src="/WhatsAppPic.jpg"
          alt="WhatsApp Pic"
          width="320px"
          height="188px"
        />
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Typography
              sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",letterSpacing: "-0.5px",fontSize: "31px", color: grey[300], paddingTop: "25px",
              lineHeight: "1.4", // Adjust line height
              fontWeight: "lighter", }}
            >
              Download WhatsApp for Windows
              <br />
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ paddingTop: "15px", color:"grey"}}>
              Make calls, share your screen and get a faster experience when you
              download the Windows app.
            </Typography>
            <Box
            sx={{paddingTop:"30px"}}
            >
                <Button
                sx={{height:"35px",width:"120px",color:"black", backgroundColor:"#00A884", borderRadius:"25px",padding:"10px",fontSize:"14px",textTransform: 'none'}}
                >
                    Get the app
                </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
      display={"flex"}
      position={"relative"}
      top={"60px"}
      >
      <Typography sx={{color:"grey",fontSize:"12px",paddingTop:"2px"}}>
        
        <HttpsRoundedIcon sx={{fontSize:"15px",marginRight:"2px"}}/>
        
      Your personal messages are end-to-end encrypted
      </Typography>
      </Box>
    </Box>
  );
};
export default Screen;


