import React, { useState, useEffect} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Stack, Text, Button, Divider, ButtonGroup, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';

const CompanyCard = () => {

    const [companys, setCompanys] = useState([]);
    const [profile, setProfile] = useState([]);
    const id = Cookies.get('userID');

    useEffect(() => {
      const getDistributors = async () => {
        try {
          const response = await axios.get("http://localhost:5000/company/get/all");
          setCompanys(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      getDistributors();
    }, []);

    useEffect(() => {
      const getProfileByEmail = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/profile/find/${id}`);
          setProfile(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      getProfileByEmail();
    }, [id]);


  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center" margin="10px">
        {companys.map((item) => {
            return (
            <Card maxW='sm' margin="20px">
                <CardBody>
                    <Image
                    src={item.Image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{item.Name}</Heading>
                    <Text>
                        {item.Description}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={`/apply/${item._id}`}>
                            <Button variant='solid' colorScheme='blue'>
                                Apply
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        )
        })}
    </Flex>
  )
}

export default CompanyCard