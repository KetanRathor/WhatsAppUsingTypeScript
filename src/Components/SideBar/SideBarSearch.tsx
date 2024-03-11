// import React from "react";
// import { Box, Input, } from "@mui/material";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import FilterListIcon from "@mui/icons-material/FilterList";


// const SideBarSeacrh = (props) =>{

// return(

// <Box
//           display={"flex"}
//           sx={{ display: "flex", width: "100%", height: "9%", borderBottom: "1px solid black", alignItems: "center", justifyContent: "center" }}
//         >
//           <Box
//             display={"flex"}
//             sx={{
//               alignItems: "center",
//               marginLeft: "8px",
//               // marginTop: "8px",
//               height: "68%",
//               width: "85%",
//               backgroundColor: "#202C33",
//               borderRadius: "8px",
//             }}
//           >
//             <SearchOutlinedIcon
//               sx={{
//                 fontSize: "18px",
//                 color: "#aebac1",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginLeft: "12px",
//               }}
//             />
//             <Box sx={{ color: "#aebac1", fontSize: "14px", paddingLeft: "35px" }}>
//               <Input
//                 placeholder="Search or start new chat"
//                 fullWidth
//                 disableUnderline
//                 // value={searchName}
//                 onChange={(e)=>props.handleSearchInputChange(e.target.value)}
//                 sx={{
//                   color: "#aebac1",
//                   fontSize: "13px",

//                   height: "100%", // Adjust the height of the input
//                   "&:hover, &:focus": {
//                     outline: "none",
//                   },
//                 }}
//               />
//             </Box>
//           </Box>
//           <FilterListIcon
//             sx={{
//               color: "#aebac1",
//               fontSize: "22px",
//               alignItems: "center",
//               justifyContent: "center",
//               marginLeft: "12px",
//               // marginTop: "10px",
//               marginRight: "12px",
//             }}
//           />
//         </Box>

// )
//         }
//         export default SideBarSeacrh;

import React, { ChangeEvent } from "react";
import { Box, Input } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";

interface SideBarSearchProps {
  handleSearchInputChange: (value: string) => void;
}

const SideBarSearch: React.FC<SideBarSearchProps> = (props) => {
  return (
    <Box
      display={"flex"}
      sx={{
        display: "flex",
        width: "100%",
        height: "9%",
        borderBottom: "1px solid black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
          marginLeft: "8px",
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              props.handleSearchInputChange(e.target.value)
            }
            sx={{
              color: "#aebac1",
              fontSize: "13px",
              height: "100%",
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
          marginRight: "12px",
        }}
      />
    </Box>
  );
};

export default SideBarSearch;
