import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Navigator from "./navigators/routers";
import BlueTheme from "./themes/blue";
import './styles/app.css'

function App() {
  const [theme, setTheme] = useState<"blue"|"dark">("blue")
  return (
      <ThemeProvider theme={theme === "blue" ? BlueTheme : BlueTheme}>
        <Header setTheme={setTheme} />
        <Navigator />
      </ThemeProvider>
  );
}

export default App;
