import { Email, GitHub, LinkedIn, Linkedln } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          Páginas
        </Typography>

        <Link
          href="#home"
          underline="hover"
          className="link"
          sx={{ color: "white", margin: "0.5rem 0" }}
        >
          Voltar ao início
        </Link>

        <Link
          href="#experience"
          underline="hover"
          className="link"
          sx={{ color: "white", margin: "0.5rem 0" }}
        >
          Experiência
        </Link>

        {/* <Link
          to="about"
          className="link"
          sx={{ color: "white", margin: "0.5rem 0" }}
        >
          Sobre mim
        </Link> */}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          Contato
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GitHub sx={{ mr: 2, color: "white" }} />
          <Typography
            component="a"
            href="https://github.com/Rafaaandrade"
            target="_blank"
            variant="body2"
            sx={{ color: "white", my: 1, textDecoration: "none" }}
          >
            GitHub
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Email sx={{ mr: 2, color: "white" }} />
          <Typography
            component="a"
            href="mailto:rafaaandradedev@gmail.com"
            target="_blank"
            variant="body2"
            sx={{ color: "white", my: 1, textDecoration: "none" }}
          >
            Email
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LinkedIn sx={{ mr: 2, color: "white" }} />
          <Typography
            component="a"
            href="https://www.linkedin.com/in/rafael-andrade-828010214/"
            variant="body2"
            target="_blank"
            sx={{ color: "white", my: 1, textDecoration: "none" }}
          >
            Linkedln
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
