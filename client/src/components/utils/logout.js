import React from 'react';
import Auth from "./Auth";
import { Redirect } from "react-router-dom";
const Logout = () => {
        Auth.logoutUser();
        return <Redirect to="/login" />;
      
};

export default Logout;