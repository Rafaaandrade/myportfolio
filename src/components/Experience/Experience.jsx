import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import Skills from "../Skills/Skills";

const Experience = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="experience">
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Dê uma olhada nos
        <span style={{ color: "rgba(0, 199, 255,255" }}> projetos </span> que
        desenvolvi até o momento
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            tags={p.tags}
            img={p.image}
            live={p.live}
            source={p.source}
          />
        ))}
      </Box>

      <Skills />
    </Box>
  );
};

export default Experience;
