import React from "react";
import "./App.css";
import { Container, AppBar, Typography, Grid, Grow } from "@mui/material";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";
import { useSelector } from "react-redux";

function App() {
  const selector = useSelector((item) => item.postReducers);

  return (
    <>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h3" align="center">
            Memories
          </Typography>
        </AppBar>
      </Container>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spaching={3}
          >
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
}

export default App;
