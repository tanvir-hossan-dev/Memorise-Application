import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEditCardMutation } from "../../redux/features/card/cardApi";

const Edit = ({ data, setOpen }) => {
  const dispatch = useDispatch();
  const [creator, setCreator] = useState(data.creator || "");
  const [title, setTitle] = useState(data.title || "");
  const [message, setMessage] = useState(data.message || "");
  const [tags, setTags] = useState(data.tags || "");
  const { _id: id } = data;

  const [editCard, { isError, isSuccess, error }] = useEditCardMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    editCard({ id, data: { creator, title, message, tags } });
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };
  const clear = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Paper style={{ padding: "15px", marginTop: "40px" }}>
        <form autoComplete="off" noValidate>
          <Typography style={{ marginBottom: "10px" }} variant="h6">
            Update Memory
          </Typography>
          <TextField
            style={{ padding: "10px 0px" }}
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            required
          />
          <TextField
            style={{ padding: "10px 0px" }}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            style={{ padding: "10px 0px" }}
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <TextField
            style={{ padding: "10px 0px" }}
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />

          <div style={{ padding: "10px 0px" }}>
            <Button variant="contained" color="primary" size="large" fullWidth type="submit" onClick={handleSubmit}>
              Update
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Edit;
