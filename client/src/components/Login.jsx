import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();    
        try {
          const response = await axios.post('http://localhost:5000/login', {
            username,
            password,
          });
    
          if (response) {
            Cookies.set('token', response.data.accessToken, { expires: 3 });
            Cookies.set('userID', response.data.userID, { expires: 3 });
            Cookies.set('username', response.data.username, { expires: 3 });
            Cookies.set('email', response.data.email, { expires: 3 });
            Cookies.set('isAdmin', response.data.isAdmin, { expires: 3 });
            setTimeout(() => {
              navigate('/home');
            }, 3000)
          }
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <form onSubmit={handleSubmit}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify="flex-end">
              <Text color={'blue.500'}><Link to="/register">Dont have account?</Link></Text>
            </Stack>
            <Button type="submit" colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
        </form>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}