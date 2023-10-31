import React, { lazy, Suspense, useEffect} from 'react';
import { Spinner } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Register from './components/Register';
import Login from './components/Login';
import Profile from './pages/Profile';
import FormProfile from './components/FormProfile';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import Apply from './pages/Apply';

function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
        <Suspense fallback={
          <div style={{display : "flex", justifyContent : "center", alignItems : "center", height: "100%", marginTop : "300px"}}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
          </div>}>
          <Routes>
            <Route path='/' element={
               <Login />
           } />
            <Route path='/register' element={
                <Register />
            } />
             <Route path='/home' element={
                <Home />
            } />
             <Route path='/profile' element={
                <Profile />
            } />
              <Route path='/apply/:CompanyID' element={
                <Apply />
            } />
             <Route path='/education' element={
                <FormEducation />
            } />
             <Route path='/experience' element={
                <FormExperience />
            } />
            {/* <Route path='/signup' element={ tokenUserId ? <Navigate to="/welcome" replace={true} /> : <Signup />} />
            <Route path='/signin' element={ tokenUserId ? <Navigate to="/welcome" replace={true} /> : <SignIn />} />
            <Route path='/welcome' element={<Welcome />} /> */}
          </Routes>
        </Suspense>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
