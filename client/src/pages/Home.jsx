import React, { useState, useEffect } from 'react'
import CompanyCard from '../components/CompanyCard'
import { Center, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Nav from '../components/Nav.tsx'
import axios from 'axios'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'

const Home = () => {

  const [profile, setProfile] = useState({});
  const id = Cookies.get('userID');

  useEffect(() => {
    const getProfileByID = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/find/${id}`);
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProfileByID();
  }, [id]);

  return (
    <>
    <Nav />
    <Center margin="20px">
      {profile ? 
        <CompanyCard />
        :
        <VStack>
          <Text>Please Create Your Profile First Before Applying</Text>
          <Link to="/profile">To Profile</Link>
        </VStack>
      }
    </Center>
    </>
  )
}

export default Home