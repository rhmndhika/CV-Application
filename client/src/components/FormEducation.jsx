'use client'

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
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function FormEducation() {

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="university" isRequired>
                <FormLabel>University</FormLabel>
                <Input type="text" />
            </FormControl>
            <FormControl id="GraduationDate">
                <FormLabel>Graduation Date</FormLabel>
                <Input type="date" />
            </FormControl>
            <FormControl id="Qualification" isRequired>
              <FormLabel>Qualification</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="Major" isRequired>
              <FormLabel>Major</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="Position" isRequired>
              <FormLabel>Position</FormLabel>
              <Input type="text" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}