import React, { useState } from "react";
import { Button, Card, Typography, Modal, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import Edit from "../../Edit/Edit";
import { useDeleteCardMutation } from "../../../redux/features/card/cardApi";
import { FaRegEdit } from "react-icons/fa";

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
      <Card style={{ padding: "20px" }}>
        <Typography variant="h6">Title : {data.title}</Typography>
        <Typography>Creator : {data.creator}</Typography>
        <Typography>Description : {data.message}</Typography>
        <Typography>Tags : {data.tags}</Typography>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <IconButton onClick={handleOpen} variant="contained">
              <FaRegEdit />
            </IconButton>
            <IconButton
              style={{ float: "right" }}
              aria-label="delete"
              onClick={() => handleDelete(data._id)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </div>
          <Typography style={{ fontSize: "14px" }} variant="h6">
            {" "}
            {moment(data.createdAt).fromNow()}
          </Typography>
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
