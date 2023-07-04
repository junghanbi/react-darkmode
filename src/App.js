import Darkmode from 'Darkmode';
import { useState } from 'react';
import { darkTheme, lightTheme } from 'theme';
import './App.css';
import { ThemeProvider } from "styled-components"

function App() {
  const [toggle, setToggle] = useState(false)
  const onToggle = () => {
    setToggle(!toggle)
  }
  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <Darkmode onToggle={onToggle} toggle={toggle}/>
    </ThemeProvider>
  );
}

export default App;
