import { AppBar, Box, Link, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, px: 5, py: 2, maxWidth: "1200px", mx: "auto" }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <CustomToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
              Rafael Andrade
            </Typography>
          </Box>

          <CustomBox>
            <Link href="#home" underline="hover" className="link">
              Home
            </Link>

            <Link href="#experience" underline="hover" className="link">
              Experiência
            </Link>

            {/* <Link to="about" className="link">
              Sobre mim
            </Link> */}
          </CustomBox>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
