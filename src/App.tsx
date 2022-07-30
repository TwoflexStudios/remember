import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Navigator from "./navigators/routers";
import BlueTheme from "./themes/blue";
import DarkTheme from "./themes/dark";
import './styles/app.css'
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState<"blue"|"dark">("blue")

  useEffect(() => {
    if(localStorage.getItem("@preferedTheme")){
      const preferedTheme:any = localStorage.getItem("@preferedTheme");
      setTheme(preferedTheme)
    }else{
      localStorage.setItem("@preferedTheme", "blue")
    }
  },[])
  return (
      <ThemeProvider theme={theme === "blue" ? BlueTheme : DarkTheme}>
        <Navigator>
          <Header setTheme={setTheme} theme={theme}/>
        </Navigator>
        <Footer />
      </ThemeProvider>
  );
}

export default App;
