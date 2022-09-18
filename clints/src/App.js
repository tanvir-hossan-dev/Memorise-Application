import React, { useState } from "react";
import "./App.css";
import { AppBar, Typography, Grid, Grow, TextField } from "@mui/material";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";
import Tags from "./Components/Tags/Tags";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const hanldeDebounce = (fn, delay) => {
    let timeOut;
    return (...args) => {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doDebounce = (value) => {
    setSearchTerm(value);
  };

  const debounceKey = hanldeDebounce(doDebounce, 500);
  return (
    <>
      <AppBar position="static" color="inherit">
        <div style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" align="left">
            CRUD
          </Typography>
          <TextField
            style={{ width: "700px" }}
            id="outlined-search"
            label="Search field"
            type="search"
            onChange={(e) => debounceKey(e.target.value)}
          />
        </div>
      </AppBar>
      <Grow in style={{ padding: "0px 20px" }}>
        <Grid container>
          {" "}
          <Tags />{" "}
        </Grid>
      </Grow>
      <Grow in style={{ padding: "0px 20px" }}>
        <Grid container spaching={8}>
          <Grid item xs={9}>
            <Posts searchTerm={searchTerm} />
          </Grid>
          <Grid item xs={3}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </>
  );
}

export default App;
