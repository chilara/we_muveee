import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";
import { TbLayoutList } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { LiaCalendarAltSolid } from "react-icons/lia";

const Planner = ({ dates, customers, slots: selectedSlot, onSelectSlot }) => {
  return (
    <Box minHeight={"100vh"} width={"80%"}>
      <Box
        padding={"16px 24px 16px 24px"}
        height={"60px"}
        borderBottom={"1px solid #DCDCDC"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Text color={"#272D37"} fontWeight={400} fontSize={"20px"}>
          Good evening, Elon
        </Text>
        <Box
          padding={"8px 12px 8px 12px"}
          height={"34px"}
          width={"350px"}
          borderRadius={"50px"}
          border={"1px solid #DAE0E6"}
          display={"flex"}
          gap={".5rem"}
          alignItems={"center"}
        >
          <BsSearch />
          <Text fontSize={"12px"} color={"#717273"}>
            Search
          </Text>
        </Box>
        <Flex gap={"1rem"} justifyContent={"center"} alignItems={"center"}>
          <IoIosNotificationsOutline />
          <HiOutlineMoon />
          <IoIosContact />
        </Flex>
      </Box>
      <Box px={"7rem"}>
        <Text color={"#272D37"} fontSize={"24px"} fontWeight={700} mt={"10px"}>
          Planner
        </Text>
        <Box
          padding={"12px 6px 12px 6px"}
          width={"400px"}
          height={"60px"}
          borderRadius={"50px"}
          bgColor={"#EBEFF3"}
          display={"flex"}
          gap={"4rem"}
          alignItems={"center"}
          mt={"3.5rem"}
          ml={"35%"}
        >
          <Box
            borderRadius={"48px"}
            bgColor={"#FAFBFC"}
            width={"194px"}
            height={"48px"}
            padding={"8px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={".5rem"}
          >
            <TbLayoutList />
            <Text
              textAlign={"center"}
              fontSize={"16px"}
              color={"#5F6D7E"}
              fontWeight={600}
            >
              List
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={".5rem"}
          >
            <RxDashboard />
            <Text
              textAlign={"center"}
              fontSize={"16px"}
              color={"#5F6D7E"}
              fontWeight={600}
            >
              Board
            </Text>
          </Box>
        </Box>
        <Text color={"#272D37"} fontSize={"24px"} fontWeight={600} mt={"1rem"}>
          Slots
        </Text>
        <Text fontWeight={"bold"} fontSize={"12px"} color={"#272D37"}>
          Only the first four days are the available slots
        </Text>
        <Box mt={"1rem"} gap={"2rem"} display={"flex"} flexDir={"column"}>
          {customers.map((item, customerIndex) => (
            <Flex
              key={customerIndex}
              height={"fit-content"}
              borderLeft={item.borderB}
              flexDir={"column"}
              alignItems={"flex-start"}
              borderLeftRadius={"8px"}
              borderBottom={"1px solid #DAE0E6"}
              gap={"1rem"}
              transition={"all 0.2s ease-in-out"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Flex
                gap={".6rem"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                pl={"1rem"}
              >
                <Box
                  borderRadius={"4px"}
                  width={"20px"}
                  height={"20px"}
                  bgColor={item.color}
                  mt={"1rem"}
                >
                  <Text fontSize={"12px"} color={"#fff"} textAlign={"center"}>
                    {item.id}
                  </Text>
                </Box>
                <Text
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#5F6D7E"}
                  mt={"1rem"}
                >
                  {item.name}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} gap={"1rem"} pl={"2.9rem"}>
                <Text color={"#5F6D7E"} fontSize={"13px"}>
                  {item.pickUP}
                </Text>
                <Text color={"#5F6D7E"} fontSize={"13px"}>
                  -
                </Text>
                <Text color={"#5F6D7E"} fontSize={"13px"}>
                  {item.dropOFF}
                </Text>
              </Flex>
              <Flex>
                {dates.map((date, dateIndex) => (
                  <Flex
                    onClick={onSelectSlot(`${dateIndex}`, customerIndex)}
                    key={dateIndex}
                    backgroundColor={
                      selectedSlot[customerIndex] === `${dateIndex}`
                        ? "blue.500"
                        : ""
                    }
                    color={
                      selectedSlot[customerIndex] === `${dateIndex}`
                        ? "#fff"
                        : ""
                    }
                    padding={"4px"}
                    border={"1px solid #DAE0E6"}
                    borderRadius={"4px"}
                    ml={"2.9rem"}
                    mb={".7rem"}
                    gap={".2rem"}
                    cursor="pointer"
                  >
                    <LiaCalendarAltSolid />
                    <Text
                      fontSize={"12px"}
                      color={
                        selectedSlot[customerIndex] === `${dateIndex}`
                          ? "#fff"
                          : "#5F6D7E"
                      }
                    >
                      {date}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Planner;
