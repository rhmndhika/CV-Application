import React, { useState, useEffect } from "react";
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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import Cookies from "js-cookie";
import Nav from "../components/Nav.tsx";
import { useParams } from "react-router-dom";

export default function Apply() {
  const { CompanyID } = useParams();
  const [profile, setProfile] = useState({});
  const [cv, setCV] = useState({});
  const id = Cookies.get("userID");

  useEffect(() => {
    const getProfileByEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/profile/find/${id}`
        );
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProfileByEmail();
  }, [id]);

  useEffect(() => {
    const getCVByID = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cv/find/${id}`);
        setCV(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCVByID();
  }, [id, CompanyID]);

  console.log(cv);

  const handleSubmitCV = async () => {
    try {
      await axios.post("http://localhost:5000/cv/create", {
        FirstName: profile?.FirstName,
        LastName: profile?.LastName,
        Age: profile?.Age,
        Address: profile?.Address,
        Nationality: profile?.Nationality,
        DateOfBirth: profile?.DateOfBirth,
        Email: profile?.Email,
        PhoneNumber: profile?.PhoneNumber,
        Salary: profile?.Salary,
        University: profile?.University,
        GraduationDate: profile?.GraduationDate,
        Qualification: profile?.Qualification,
        Major: profile?.Major,
        Position: profile?.Position,
        CompanyName: profile?.CompanyName,
        MonthEntry: profile?.MonthEntry,
        MonthLeave: profile?.MonthLeave,
        FieldOfWork: profile?.FieldOfWork,
        Industry: profile?.Industry,
        JobDescription: profile?.JobDescription,
        Company: CompanyID,
        Creator: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      {cv?.Company?.some((company) => company._id === CompanyID) ? (
        <Text>Applied</Text>
      ) : (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" value={profile?.FirstName} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" value={profile?.LastName} />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="age" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input type="text" value={profile?.Age} />
                </FormControl>
                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input type="text" value={profile?.Address} />
                </FormControl>
                <FormControl id="nationality" isRequired>
                  <FormLabel>Nationality</FormLabel>
                  <Input type="text" value={profile?.Nationality} />
                </FormControl>
                <FormControl id="dateOfBirth" isRequired>
                  <FormLabel>Date Of Birth</FormLabel>
                  <Input type="date" value={profile?.DateOfBirth} />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" value={profile?.Email} />
                </FormControl>
                <FormControl id="phoneNumber" isRequired>
                  <FormLabel>PhoneNumber</FormLabel>
                  <Input type="text" value={profile?.PhoneNumber} />
                </FormControl>
                <FormControl id="salary" isRequired>
                  <FormLabel>Salary</FormLabel>
                  <Input type="number" value={profile?.Salary} />
                </FormControl>
                <FormControl id="university" isRequired>
                  <FormLabel>University</FormLabel>
                  <Input type="text" value={profile?.University} />
                </FormControl>
                <FormControl id="GraduationDate">
                  <FormLabel>Graduation Date</FormLabel>
                  <Input type="date" value={profile?.GraduationDate} />
                </FormControl>
                <FormControl id="Qualification" isRequired>
                  <FormLabel>Qualification</FormLabel>
                  <Input type="text" value={profile?.Qualification} />
                </FormControl>
                <FormControl id="Major" isRequired>
                  <FormLabel>Major</FormLabel>
                  <Input type="text" value={profile?.Major} />
                </FormControl>
                <FormControl id="Position" isRequired>
                  <FormLabel>Position</FormLabel>
                  <Input type="text" value={profile?.Position} />
                </FormControl>
                <FormControl id="CompanyName" isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Input type="text" value={profile?.CompanyName} />
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl id="MonthEntry" isRequired>
                      <FormLabel>Month Entry</FormLabel>
                      <Input type="date" value={profile?.MonthEntry} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="MonthLeave" isRequired>
                      <FormLabel>Month Leave</FormLabel>
                      <Input type="date" value={profile?.MonthLeave} />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="FieldOfWork" isRequired>
                  <FormLabel>Field Of Work</FormLabel>
                  <Input type="text" value={profile?.FieldOfWork} />
                </FormControl>
                <FormControl id="Industry" isRequired>
                  <FormLabel>Industry</FormLabel>
                  <Input type="text" value={profile?.Industry} />
                </FormControl>
                <FormControl id="JobDescription" isRequired>
                  <FormLabel>Job Description</FormLabel>
                  <Textarea
                    placeholder="Your job description.."
                    value={profile?.JobDescription}
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSubmitCV}
                  >
                    Apply
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
}
