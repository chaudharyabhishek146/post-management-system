import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    photo: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFormData({ ...formData, photo: event.target.files[0] });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    // Add logic to handle form submission, e.g., API call
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "400px",
        margin: "auto",
        marginTop: 4,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" align="center">
        New Post
      </Typography>

      <TextField
        label="Title"
        name="title"
        variant="outlined"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

      <TextField
        label="Description"
        name="description"
        variant="outlined"
        multiline
        rows={4}
        value={formData.description}
        onChange={handleInputChange}
        required
      />

      <Button variant="outlined" component="label">
        Upload Photo
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {formData.photo && (
        <Typography variant="body2" color="textSecondary">
          Selected File: {formData.photo.name}
        </Typography>
      )}

      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </Box>
  );
};
