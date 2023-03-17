import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';


const Home = () => {
  return (
    <>
    <HeroSection  name= 'GK store'/>
    <Services/>
    <Trusted/>
    </>
  )
};

const Wrapper = styled.section`
  height:100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;
export default Home;
