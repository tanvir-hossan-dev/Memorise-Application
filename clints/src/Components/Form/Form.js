import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase64 from "react-file-base64";

const Form = () => {
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState("");
  const [sendfile, setSendfile] = useState("");
  const handleSubmit = () => {};
  const submit = (e) => {
    e.preventDefault();
  };
  const clear = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Paper style={{ padding: "15px", marginTop: "40px" }}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a Memory</Typography>
          <TextField
            style={{ padding: "10px 0px" }}
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
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
            label="Message"
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
            <FileBase64
              type="file"
              multiple={false}
              onDone={(base64) => setSendfile(base64)}
            />
          </div>
          <div style={{ padding: "10px 0px" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              type="submit"
              onClick={submit}
            >
              Submit
            </Button>
          </div>
          <div style={{ padding: "10px 0px" }}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
              type="submit"
              onClick={clear}
            >
              Clear
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Form;
