import React, { useState } from "react";
import SideBarHead from "./SideBarHead";
import SideBarSeacrh from "./SideBarSearch";
import SideBarList from "./SideBarList";
import {Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const SideBar = () => {
  const selectedPerson = useSelector((state:any) => state.people.selectedPerson)



  const [searchName, setSearchName] = useState("")


  function handleSearchInputChange(searchText:string) {
    setSearchName(searchText.toLowerCase());
  }

  return (
    <>
      <Box
        display={"flex"}
        // elevation={2}
        sx={{
          borderRight: "1px solid black",
          // borderTop: "1px solid black",
          // display: { xs: selectedPerson ? 'none' : 'block', sm: 'none' }
          // display: { xs: selectedPerson ? 'none' : 'block', sm: 'block' }
          // display:{xs:(props.selectedPerson)?"none":"block",sm:"block"}
        }}

      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: { xs: '100vw', sm: "30vw" },
            // width: "30vw" ,
            backgroundColor: "#111B21",
            overflow: "hidden",

          }}
        >
          <SideBarHead />
          <SideBarSeacrh handleSearchInputChange={handleSearchInputChange} />
          <SideBarList
            // people={props.people}
            searchName={searchName}
            // handlePersonClick={handlePersonClick}
          />

        </Box>
      </Box>
    </>
  )
}
export default SideBar;