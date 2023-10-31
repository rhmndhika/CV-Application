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
import ProtectedRoutes from './ProtectedRoutes';

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
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
            } />
             <Route path='/profile' element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
            } />
              <Route path='/apply/:CompanyID' element={
                <ProtectedRoutes>
                  <Apply />
                </ProtectedRoutes>
            } />
             <Route path='/education' element={
                <ProtectedRoutes>
                  <FormEducation />
                </ProtectedRoutes>
            } />
             <Route path='/experience' element={
                <ProtectedRoutes>
                  <FormExperience />
                </ProtectedRoutes>
            } />
          </Routes>
        </Suspense>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
