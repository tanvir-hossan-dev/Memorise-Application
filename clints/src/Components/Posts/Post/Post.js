import React, { useState } from "react";
import { Button, Card, Typography, Modal, Box } from "@mui/material";
import moment from "moment";
import Edit from "../../Edit/Edit";
import { useDeleteCardMutation } from "../../../redux/features/card/cardApi";
const Post = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [deleteCard] = useDeleteCardMutation();

  const handleDelete = async (id) => {
    deleteCard(id);
  };

  return (
    <>
      <Card style={{ padding: "10px" }}>
        <Typography variant="h5">Title :{data.title}</Typography>
        <Typography variant="h6">Creator :{data.creator}</Typography>
        <Typography variant="h5">Message :{data.message}</Typography>
        <Typography variant="h6">Tags :{data.tags}</Typography>
        <Typography variant="h6">Time : {moment(data.createdAt).fromNow()}</Typography>
        <div>
          <Button onClick={handleOpen} variant="contained">
            Edit
          </Button>
          <Button
            style={{ marginLeft: "30px" }}
            variant="contained"
            color="error"
            onClick={() => handleDelete(data._id)}
          >
            Delete
          </Button>
        </div>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Edit data={data} setOpen={setOpen} />
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default Post;
