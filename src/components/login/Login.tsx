import React from "react";
import "./Login.scss";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Login = () => {
    const singIn = () => {
        signInWithPopup(auth, provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="loginLogo">
                <img src="./discordIcon.png" alt="" />
            </div>
            <Button onClick={singIn}>ログイン</Button>
        </div>
    );
};

export default Login;
