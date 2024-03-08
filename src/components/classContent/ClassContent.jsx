import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ClassContent = ({ classContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!classContent) return; // Don't fetch data if classContent is not provided

    fetch("courseContent.json")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(classContent);
        console.log(jsonData);
        const singleClassData = jsonData.find(
          (item) => item.id === classContent
        );
        console.log(singleClassData);
        console.log(jsonData);
        setData(singleClassData);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [classContent]); // Add classContent to the dependency array
  return (
    <Box pb={3}>
      <Typography variant="h3">{data.description}</Typography>
    </Box>
  );
};

export default ClassContent;
