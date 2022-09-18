import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useAddCardMutation } from "../../redux/features/card/cardApi";

const Form = () => {
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState("");
  const [err, setErr] = useState("");
  const [addCard, { isLoading, isError }] = useAddCardMutation();

  const isInputValid = () => {
    if (!title.length || !creator.length || !message.length || !tags.length) {
      setErr("Please fill up your all information");
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isInputValid()) {
      addCard({ creator, title, message, tags });
      setTimeout(() => {
        setCreator("");
        setTitle("");
        setMessage("");
        setTags("");
        setErr("");
      }, 500);
    }
  };
  const clear = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setCreator("");
      setTitle("");
      setMessage("");
      setTags("");
      setErr("");
    }, 500);
  };

  return (
    <div style={{ padding: "15px", marginTop: "40px", marginLeft: "20px" }}>
      <Paper>
        <form autoComplete="off" noValidate>
          <Typography variant="h6">Creating a Post</Typography>
          <TextField
            style={{ padding: "0px 0px" }}
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            required={true}
          />
          <TextField
            style={{ padding: "10px 0px" }}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            style={{ padding: "10px 0px" }}
            name="message"
            variant="outlined"
            label="Description"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <TextField
            style={{ padding: "10px 0px" }}
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <div style={{ padding: "10px 0px" }}>
            <Button variant="contained" color="primary" size="large" fullWidth type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div style={{ padding: "10px 0px" }}>
            <Button variant="contained" color="secondary" size="small" fullWidth type="submit" onClick={clear}>
              Clear
            </Button>
          </div>
        </form>
      </Paper>
      {err && (
        <Button style={{ marginTop: "10px" }} variant="contained" color="error">
          {err}
        </Button>
      )}
    </div>
  );
};

export default Form;
