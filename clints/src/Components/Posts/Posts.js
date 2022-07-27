import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import { getPost } from "../../redux/actions/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector((item) => item.postReducers);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:4000/posts");
      dispatch(getPost(data));
    };
    getData();
  }, []);
  return !data.length ? (
    <h1>Emty data</h1>
  ) : (
    <>
      <Grid container style={{ marginTop: "40px" }} spacing={2}>
        {data.map((item) => (
          <Grid key={item._id} xs={12} sm={6} item>
            <Post data={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
