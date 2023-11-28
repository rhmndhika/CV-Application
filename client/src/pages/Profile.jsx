import React, { useState, useEffect } from "react";
import FormProfile from "../components/FormProfile";
import Nav from "../components/Nav.tsx";
import FormEducation from "../components/FormEducation";
import FormExperience from "../components/FormExperience";
import {
  Box,
  ButtonGroup,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  useColorModeValue,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Form1 = ({ data, setData }) => {
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
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={data.FirstName}
                    onChange={(e) =>
                      setData({ ...data, FirstName: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={data.LastName}
                    onChange={(e) =>
                      setData({ ...data, LastName: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input
                type="text"
                value={data.Age}
                onChange={(e) => setData({ ...data, Age: e.target.value })}
              />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                value={data.Address}
                onChange={(e) => setData({ ...data, Address: e.target.value })}
              />
            </FormControl>
            <FormControl id="nationality" isRequired>
              <FormLabel>Nationality</FormLabel>
              <Input
                type="text"
                value={data.Nationality}
                onChange={(e) =>
                  setData({ ...data, Nationality: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="dateOfBirth" isRequired>
              <FormLabel>Date Of Birth</FormLabel>
              <Input
                type="date"
                value={data.DateOfBirth}
                onChange={(e) =>
                  setData({ ...data, DateOfBirth: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={data.Email}
                onChange={(e) => setData({ ...data, Email: e.target.value })}
              />
            </FormControl>
            <FormControl id="phoneNumber" isRequired>
              <FormLabel>PhoneNumber</FormLabel>
              <Input
                type="text"
                value={data.PhoneNumber}
                onChange={(e) =>
                  setData({ ...data, PhoneNumber: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="salary" isRequired>
              <FormLabel>Salary</FormLabel>
              <Input
                type="number"
                value={data.Salary}
                onChange={(e) => setData({ ...data, Salary: e.target.value })}
              />
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const Form2 = ({ data, setData }) => {
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
            <FormControl id="university" isRequired>
              <FormLabel>University</FormLabel>
              <Input
                type="text"
                value={data.University}
                onChange={(e) =>
                  setData({ ...data, University: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="GraduationDate">
              <FormLabel>Graduation Date</FormLabel>
              <Input
                type="date"
                value={data.GraduationDate}
                onChange={(e) =>
                  setData({ ...data, GraduationDate: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="Qualification" isRequired>
              <FormLabel>Qualification</FormLabel>
              <Input
                type="text"
                value={data.Qualification}
                onChange={(e) =>
                  setData({ ...data, Qualification: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="Major" isRequired>
              <FormLabel>Major</FormLabel>
              <Input
                type="text"
                value={data.Major}
                onChange={(e) => setData({ ...data, Major: e.target.value })}
              />
            </FormControl>
            <FormControl id="Position" isRequired>
              <FormLabel>Position</FormLabel>
              <Input
                type="text"
                value={data.Position}
                onChange={(e) => setData({ ...data, Position: e.target.value })}
              />
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const Form3 = ({ data, setData }) => {
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
              <Input
                type="text"
                value={data.CompanyName}
                onChange={(e) =>
                  setData({ ...data, CompanyName: e.target.value })
                }
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="MonthEntry" isRequired>
                  <FormLabel>Month Entry</FormLabel>
                  <Input
                    type="date"
                    value={data.MonthEntry}
                    onChange={(e) =>
                      setData({ ...data, MonthEntry: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="MonthLeave" isRequired>
                  <FormLabel>Month Leave</FormLabel>
                  <Input
                    type="date"
                    value={data.MonthLeave}
                    onChange={(e) =>
                      setData({ ...data, MonthLeave: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="FieldOfWork" isRequired>
              <FormLabel>Field Of Work</FormLabel>
              <Input
                type="text"
                value={data.FieldOfWork}
                onChange={(e) =>
                  setData({ ...data, FieldOfWork: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="Industry" isRequired>
              <FormLabel>Industry</FormLabel>
              <Input
                type="text"
                value={data.FieldIndustryOfWork}
                onChange={(e) => setData({ ...data, Industry: e.target.value })}
              />
            </FormControl>
            <FormControl id="JobDescription" isRequired>
              <FormLabel>Job Description</FormLabel>
              <Textarea
                placeholder="Your job description.."
                value={data.JobDescription}
                onChange={(e) =>
                  setData({ ...data, JobDescription: e.target.value })
                }
              />
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const Profile = () => {
  const [step, setStep] = useState(1);
  const toast = useToast();
  const navigate = useNavigate();
  const id = Cookies.get("userID");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfileByID = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/profile/find/${id}`
        );
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProfileByID();
  }, [id]);

  const [dataFormSatu, setDataFormSatu] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    Address: "",
    Nationality: "",
    DateOfBirth: "",
    Email: "",
    PhoneNumber: "",
    Salary: "",
    University: "",
    GraduationDate: "",
    Qualification: "",
    Major: "",
    Position: "",
    CompanyName: "",
    MonthEntry: "",
    MonthLeave: "",
    FieldOfWork: "",
    Industry: "",
    JobDescription: "",
    creator: id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/profile/create", {
        FirstName: dataFormSatu.FirstName,
        LastName: dataFormSatu.LastName,
        Age: dataFormSatu.Age,
        Address: dataFormSatu.Address,
        Nationality: dataFormSatu.Nationality,
        DateOfBirth: dataFormSatu.DateOfBirth,
        Email: dataFormSatu.Email,
        PhoneNumber: dataFormSatu.PhoneNumber,
        Salary: dataFormSatu.Salary,
        University: dataFormSatu.University,
        GraduationDate: dataFormSatu.GraduationDate,
        Qualification: dataFormSatu.Qualification,
        Major: dataFormSatu.Major,
        Position: dataFormSatu.Position,
        CompanyName: dataFormSatu.CompanyName,
        MonthEntry: dataFormSatu.MonthEntry,
        MonthLeave: dataFormSatu.MonthLeave,
        FieldOfWork: dataFormSatu.FieldOfWork,
        Industry: dataFormSatu.Industry,
        JobDescription: dataFormSatu.JobDescription,
        creator: dataFormSatu.creator,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      {profile ? (
        <Text>Profile Already Created</Text>
      ) : (
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
        >
          {step === 1 ? (
            <Form1 data={dataFormSatu} setData={setDataFormSatu} />
          ) : step === 2 ? (
            <Form2 data={dataFormSatu} setData={setDataFormSatu} />
          ) : (
            <Form3 data={dataFormSatu} setData={setDataFormSatu} />
          )}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1);
                  }}
                  isDisabled={step === 1}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
                <Button
                  w="7rem"
                  isDisabled={step === 3}
                  onClick={() => {
                    setStep(step + 1);
                  }}
                  colorScheme="teal"
                  variant="outline"
                >
                  Next
                </Button>
              </Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  type="submit"
                  colorScheme="red"
                  variant="solid"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      )}
    </>
  );
};

export default Profile;
