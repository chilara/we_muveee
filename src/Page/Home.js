import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ListBar from "../Components/listBar";
import Planner from "../Components/planner";
import { customers } from "../Components/data";

const Home = () => {
  const [dates, setDates] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState({});
  const [dateIndex, setDateIndex] = useState("");
  let selectedSlot_ = {};

  useEffect(() => {
    const fetchSevenDaysAfterCurrentDate = () => {
      const arrayOfDates = [];
      const currentDate = new Date();
      for (let i = 1; i <= 7; i++) {
        arrayOfDates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return arrayOfDates;
    };
    setDates(fetchSevenDaysAfterCurrentDate());
    fetchSevenDaysAfterCurrentDate();
  }, []);

  const onSelectSlot = (dateIndex, customerIndex) => () => {
    const selectedDates = Object.values(selectedSlot);
    if (selectedDates.includes(dateIndex)) {
      alert(
        `date has been picked ${dates[dateIndex]}. Please pick another date`
      );
      return;
    }
    if (dateIndex > 3) {
      alert("Please pick from the first four days");
      return;
    }
    selectedSlot_ = {
      ...selectedSlot,
      [customerIndex]: `${dateIndex}`,
    };
    console.log(selectedSlot_);
    setDateIndex(dateIndex);
    setSelectedSlot(selectedSlot_);
  };

  return (
    <Box display={"flex"}>
      <ListBar
        customers={customers}
        onSelectSlot={onSelectSlot}
        dates={dates}
        setSelectedSlot={setSelectedSlot}
        slots={selectedSlot}
        dateIndex={dateIndex}
        setDateIndex={setDateIndex}
      />
      <Planner
        customers={customers}
        onSelectSlot={onSelectSlot}
        dates={dates}
        slots={selectedSlot}
        dateIndex={dateIndex}
        setDateIndex={setDateIndex}
        setSelectedSlot={setSelectedSlot}
      />
    </Box>
  );
};

export default Home;
