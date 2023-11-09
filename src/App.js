import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import './styles/app.css';
import { AuthContext } from "./context";



function App() {
        const [isAuth, setIsAuth] = useState(false)
        const [isLoading, setLoading] = useState(true)

        useEffect(() => {
          if(localStorage.getItem('auth')) {
              setIsAuth(true)
          }
          setLoading(false)
        }, [])

        return (
          <AuthContext.Provider value={{
              isAuth,
              setIsAuth,
              isLoading,
          }}>
          
              <BrowserRouter>
                  <Navbar/>
                  <AppRouter/>
              </BrowserRouter>
          </AuthContext.Provider>
        )
}
          
export default App; 
