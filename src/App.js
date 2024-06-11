import Home from "./pages/Home";
import { useState } from "react";
import styled,{ThemeProvider} from "styled-components";

const lightTheme = {
  background: '#f5f5f5',
  text: 'rgba(39,40,61,255)',
};

const darkTheme = {
  background: 'rgba(39,40,61,255)',
  text: '#f5f5f5',
};
const ToggleButton = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 100px;
  right: 200px;
  background-color: blue;
`;

const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px 0px 70px 0px;
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Home/> 
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
