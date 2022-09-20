import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removedTag, selectedTag } from "../../../redux/features/filters/filtersSlice";

const Tag = ({ tags }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filters);
  console.log(selectedTags);
  const allTags = tags
    .toString()
    .split(" ")
    .map((arrtag) => arrtag);

  return allTags.map((tag) => {
    const isSelectedTag = selectedTags.includes(tag) ? true : false;
    const handleSubmit = () => {
      if (isSelectedTag) {
        dispatch(removedTag(tag));
      } else {
        dispatch(selectedTag(tag));
      }
    };

    return (
      <Button
        style={{ margin: "15px 5px 0" }}
        onClick={handleSubmit}
        key={tag._id}
        variant={isSelectedTag ? "contained" : "outlined"}
      >
        {tag}
      </Button>
    );
  });
};

export default Tag;
