import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthData } from "../context/AuthContext";
import axios from "axios";




function ProtectedRoute(props) {
    const navigate = useNavigate();
    const { value1, value2, value3 } = useContext(AuthData);
    const [userData, setUserData] = value3;
    const [isLoggedIn, setLoggedIn] = useState(false);
    var token = localStorage.getItem('token');

    const checkUserToken = () => {
        // console.log(userData);
        if (!token || token === undefined) {
            // setLoggedIn(false);
            console.log("Getting false")
            return navigate("/login")
        } else {

            // console.log("Token Illa")

            // checkingJwtExpire();
            gettingNewToken();
        }
        // setLoggedIn(true);



    }

    async function checkingJwtExpire() {

        console.log(token)
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };

        //   console.log(config);
        // const token = userData.token;
        try {

            // var token = {
            //     localStorage.getItem('token')
            //     }
            // console.log(token)
            // const body = JSON.stringify({
            //     token:token
            // });
            // console.log(body);

            await axios.post(
                // `http://localhost:3001/budgetize/users/checkJwt`,
                `https://starfish-app-uva3q.ondigitalocean.app/budgetize/users/checkJwt`,

                config
            ).then((res) => {
                console.log(res);

                if (res.data.msg === "Jwt Expired") {
                    console.log("Jwt Expired raa")
                    navigate("/login");
                } else if (res.data.msg === "Jwt Valid") {
                    console.log("Hello")
                    gettingNewToken();
                }
                // else{
                // navigate("/login");
                // }
            })
        } catch (err) {
            console.error(err);
           
        }
    }
    async function gettingNewToken() {

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };

        console.log(config);
        // const token = userData.token;
        try {

            // const body = JSON.stringify(token);
            console.log(token);

            // localStorage.removeItem('token');
            await axios.post(
                // `http://localhost:3001/budgetize/users/refreshToken`,
                `https://starfish-app-uva3q.ondigitalocean.app/budgetize/users/refreshToken`,

                config
            ).then((res) => {
                console.log(res)
                setUserData(res.data);
                localStorage.setItem('token', res.data.token);
            })
        } catch (err) {
            console.error("error ", err);

            navigate("/login");

            // if(err.response.status===403){
            //     navigate("/login");
            // }
        }
    }

    useEffect(() => {

        checkUserToken()
        // checkJwtExpired();
    }, []);

    return <>
        {userData ? props.children : null}
    </>
}

export default ProtectedRoute;