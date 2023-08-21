import {
  Box,
  Button,
  Flex,
  Text,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { customers } from "./data";

const ListBar = ({ dates, slots, onSelectSlot }) => {
  return (
    <Box
      minHeight={"100vh"}
      borderRight={"1px solid #DAE0E6"}
      width={"20%"}
      display={{ lg: "flex", base: "none" }}
      flexDir={"column"}
    >
      <Box
        padding={"16px 24px 16px 24px"}
        height={"60px"}
        borderBottom={"1px solid #DCDCDC"}
      >
        <Text color={"#272D37"} fontWeight={600} fontSize={"20px"}>
          Brand Logo
        </Text>
      </Box>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Button
          mt={"1rem"}
          bg={"#437EF7"}
          color={"#fff"}
          fontSize={"14px"}
          fontWeight={600}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={".5rem"}
        >
          <IoIosAdd />
          <Text color={"#fff"} fontSize={"14px"} fontWeight={600}>
            Add new List
          </Text>
        </Button>
      </Flex>
      <Box height={"400px"} borderBottom={"1px solid #DCDCDC"} mt={"2rem"}>
        <Box padding={"12px 24px 12px 24px"}>
          <Text fontSize={"14px"} fontWeight={600} color={"#5F6D7E"}>
            Menu
          </Text>
        </Box>
        <Flex flexDir={"column"}>
          {customers.map((item, customerIndex) => (
            <Accordion allowToggle key={customerIndex}>
              <AccordionItem margin={"0 5%"} width={"90%"}>
                <h2>
                  <AccordionButton
                    padding={"12px"}
                    border={"1px solid #DCDCDC"}
                    mt={"10px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    bg={"#FFFFFF"}
                    transition={"all 0.2s ease-in-out"}
                    _hover={{
                      transform: "scale(1.02)",
                      bg: "#F3F9FE",
                      color: "#437EF7",
                      border: "1px solid #f3f9fe",
                    }}
                  >
                    <Flex
                      gap={"1rem"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        borderRadius={"4px"}
                        width={"20px"}
                        height={"20px"}
                        bgColor={"#EFEFF1"}
                      >
                        <Text
                          fontSize={"12px"}
                          color={"#5F6D7E"}
                          textAlign={"center"}
                        >
                          {item.id}
                        </Text>
                      </Box>
                      <Text
                        fontSize={"14px"}
                        fontWeight={700}
                        color={"#5F6D7E"}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontSize={"12px"}
                  textAlign="justify"
                  mb={"8px"}
                  bg={"#F3F3F3"}
                  lineHeight={{
                    lg: "160%",
                    base: "170%",
                  }}
                >
                  <Flex justifyContent={"space-between"}>
                    <Text color={"#5F6D7E"}>{item.pickUP}</Text>
                    <Text color={"#5F6D7E"}>-</Text>
                    <Text color={"#5F6D7E"}>{item.dropOFF}</Text>
                    <Select
                      placeholder="Pick a Date"
                      value={slots[customerIndex]}
                      size={"xs"}
                      width={"50%"}
                      color={"#5F6D7E"}
                      onChange={(e) => {
                        const dateIndex_ = e.target.value;
                        onSelectSlot(dateIndex_, customerIndex)();
                      }}
                    >
                      {dates.map((item, index) => (
                        <option key={index} value={index}>
                          {item}
                        </option>
                      ))}
                    </Select>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ListBar;
