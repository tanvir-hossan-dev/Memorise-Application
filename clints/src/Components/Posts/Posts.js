import { Grid } from "@mui/material";
import React from "react";
import Post from "../Posts/Post/Post";
import { useGetAllCardQuery } from "../../redux/features/card/cardApi";

const Posts = ({ searchTerm }) => {
  const { data, isLoading, isError } = useGetAllCardQuery();

  let content = null;

  if (isLoading) {
    content = <h2>Loading.....</h2>;
  } else if (!isLoading && isError) {
    content = <h2>Error ocured</h2>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <h2>No data found</h2>;
  } else if (!isLoading && !isError && data?.length > 0) {
    content = data
      .filter(
        (item) =>
          item.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )

      .map((item) => (
        <Grid key={item._id} xs={12} sm={4} item>
          <Post data={item} />
        </Grid>
      ));
  }

  return (
    <Grid container style={{ marginTop: "40px" }} spacing={3}>
      {content}
    </Grid>
  );
};

export default Posts;
