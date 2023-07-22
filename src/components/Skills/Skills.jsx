import { styled } from "@mui/system";

import { Box, Icon, Typography } from "@mui/material";
import React from "react";
import { icons } from "../../constants/icons";
import IconContainer from "../IconContainer/IconContainer";

const Skills = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "center",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const SkillBox = styled(Box)(({ theme }) => ({
    marginLeft: "1.5rem",
    display: "flex",
    overflowWrap: "break-word",
    flex: 1,
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));

  return (
    <CustomBox sx={{ my: 5, padding: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ color: "white", mb: 3 }}>
          Aqui estão algumas das minhas habilidades
        </Typography>
      </Box>

      <SkillBox>
        {/* <Box
          sx={{
            display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
      
          }}
        > */}
        
          {icons.map((icon) => (
            <IconContainer key={icon.id} name={icon.name} src={icon.src} />
          ))}
        {/* </Box> */}
        
      </SkillBox>
    </CustomBox>
  );
};

export default Skills;
