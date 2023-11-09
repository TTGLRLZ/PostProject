import React, { useContext } from 'react';
import {Navigate, Route, Routes } from "react-router-dom";
import {publicRoutes, privateRoutes} from "../../router"
import { AuthContext } from '../../context';
import Loader from './Loading/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ? 
            <Routes>
                {privateRoutes.map(route => 
                    <Route 
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to ='/posts'/>}>
                </Route>
            </Routes>  
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route 
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to ='/login'/>}>
                </Route>
            </Routes> 
    );
};

export default AppRouter;