import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Navigator from "./navigators/routers";
import BlueTheme from "./themes/blue";
import DarkTheme from "./themes/dark";
import './styles/app.css'
import Footer from "./components/Footer";
import BaseChanelContext from "./context/chanelContext";
import FirebaseContext from "./context/firebase";

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
        <FirebaseContext>
          <BaseChanelContext>
            <Navigator>
              <Header setTheme={setTheme} theme={theme}/>
            </Navigator>
            <Footer />
          </BaseChanelContext>
        </FirebaseContext>
      </ThemeProvider>
  );
}

export default App;
