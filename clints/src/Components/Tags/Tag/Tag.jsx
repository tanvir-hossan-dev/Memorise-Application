import { Button } from "@mui/material";
import React from "react";

const Tag = ({ tags, id }) => {
  console.log(tags.toString());
  console.log(tags.map((tag) => tag.toString()));
  return tags.map((tag) => (
    <Button style={{ margin: "15px 5px 0" }} key={id} variant="outlined">
      {tag.toString()}
    </Button>
  ));
};

export default Tag;
