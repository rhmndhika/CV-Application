"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function FormExperience() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="CompanyName" isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="MonthEntry" isRequired>
                  <FormLabel>Month Entry</FormLabel>
                  <Input type="date" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="MonthLeave" isRequired>
                  <FormLabel>Month Leave</FormLabel>
                  <Input type="date" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="FieldOfWork" isRequired>
              <FormLabel>Field Of Work</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="Industry" isRequired>
              <FormLabel>Industry</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="JobDescription" isRequired>
              <FormLabel>Job Description</FormLabel>
              <Textarea placeholder="Your job description.." />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
