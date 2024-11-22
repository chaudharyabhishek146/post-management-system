import React from "react";
import Box from "@mui/material/Box";
import { PostCard } from "../ui/card";
import { PostForm } from "../postform";


const PageContent = ({ pathname }) => {

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname === "/"  && <PostCard />}
      {pathname === "/home"  && <PostCard />}
      {pathname === "/create" && <PostForm />}
    </Box>
  );
};

export default PageContent;
