import {
  Avatar,
  Button,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add Post"
        sx={{ position: "fixed", bottom: 20, left: { xs: 150, md: 30 } }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            width: 400,
            height: 300,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "1rem",
          }}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            marginBottom={2}
            color={"grey"}
          >
            Create Post
          </Typography>
          <Box display={"flex"} marginBottom={2} gap={1} alignItems={"center"}>
            <Avatar sx={{ height: 30, width: 30 }} />
            <Typography>Ubaid Khan</Typography>
          </Box>
          <TextField
            placeholder="What's on your mind?"
            multiline
            fullWidth
            rows={4}
            variant="standard"
          />
          <Stack direction={"row"} gap={1} my={3}>
            <EmojiEmotionsIcon color="primary" />
            <VideoCameraBackIcon color="secondary" />
            <PersonAddAlt1Icon color="success" />
          </Stack>
          <Button variant="contained" fullWidth>
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
