import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "./assets/students.svg";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  if(!localStorage.getItem('accessToken') || localStorage.getItem('accessToken')== undefined) navigate('/login');
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                <br />
                <br />
                <br />
                    <img src={Students} alt="students" style={{ display : 'flex',   justifyContent : 'center', alignItems: 'center'}} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={4}>
                        <StyledTitle>
                            <br />
                            Welcome to 
                            <br />
                            Skill Quest
                            <br />
                        </StyledTitle>
                        <StyledText>
                            Streamline Recruitment using Pre-Trained Transformers.
                        </StyledText>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Home

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  color: #252525; 
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
