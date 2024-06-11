import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#f5f5f5',
  text: '#333',
};

const darkTheme = {
  background: '#333',
  text: '#f5f5f5',
};

const ToggleButton = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
`;

const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 5px;
`;

const LightDarkToggle = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
      </Container>
    </ThemeProvider>
  );
};

export default LightDarkToggle;
