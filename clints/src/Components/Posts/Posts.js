import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Posts/Post/Post";
import { useGetAllCardQuery } from "../../redux/features/card/cardApi";

const Posts = () => {
  const { data, isLoading, error, isError, isSuccess } = useGetAllCardQuery();

  let content = null;

  if (isLoading) {
    content = <h2>Loading.....</h2>;
  } else if (!isLoading && isError) {
    content = <h2>Error ocured</h2>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <h2>No data found</h2>;
  } else if (!isLoading && !isError && data?.length > 0) {
    content = data.map((item) => (
      <Grid key={item._id} xs={12} sm={6} item>
        <Post data={item} />
      </Grid>
    ));
  }

  return (
    <Grid container style={{ marginTop: "40px" }} spacing={2}>
      {content}
    </Grid>
  );
};

export default Posts;
