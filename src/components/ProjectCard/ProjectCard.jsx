import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectCard = ({ img, title, description, tags, live, source }) => {
  return (
    <Card sx={{ maxWidth: 375, margin: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" image={img} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            mx: "auto",
            mb: 3,
          }}
        >
          {live && (
            <Button
              sise="small"
              style={{
                backgroundColor: "rgba(0, 199, 255, 255)",
                variant: "contained",
              }}
              href={live}
              target="_blank"
            >
              Live
            </Button>
          )}
          <Button
            sise="small"
            style={{
              backgroundColor: "rgba(0, 199, 255, 255)",
              variant: "contained",
            }}
            href={source}
            target="_blank"
          >
            Código
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: 2,
          }}
        >
          {tags.map((t) => (
            <Chip label={t} key={t} variant="outlined" />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
