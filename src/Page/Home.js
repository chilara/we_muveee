import React from "react";
import { Box } from "@chakra-ui/react";
import ListBar from "../Components/listBar";
import Planner from "../Components/planner";

const Home = () => {
  return (
    <Box display={"flex"}>
      <ListBar />
      <Planner />
    </Box>
  );
};

export default Home;
