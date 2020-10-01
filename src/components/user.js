import React, { useState, useEffect, useContext } from 'react';

import {Auth0Provider, useAuth0} from "@auth0/auth0-react"
import { UserContext } from '../assets/auth/authentication/user-context';
import rules from "../assets/auth/authorization/rbac-rules"
import PropTypes from 'prop-types';

const User = ({ children }) => {

    const {user, getAccessTokenSilently} = useAuth0();

    let userData = {};
    //const {userInfo, setUser} = useContext(UserContext);
    let whatever = {};
    console.log('hi im here')
    const {userInfo, setUser} = useContext(UserContext);
    let checkSession = false;

    //const userState = { id: 0, email: '', picture: '', user: '', role: '', token: ''};
    //const userData = { userState, accessToken: '' };

    useEffect(() => {
        (async () => {
            try {

              //if(!checkSession) {
                const accessToken = await getAccessTokenSilently({
                  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
                  scope: rules[user[process.env.REACT_APP_AUTH0_ROLE_URL]].static.join().replace(/[/,\r]/gm, "")
                });


                const setSession = () => {
                   userData = {
                    id: user.sub,
                    email: user.email,
                    picture: user.picture,
                    userName: user.given_name,
                    nickname: user.nickname,
                    role: user[process.env.REACT_APP_AUTH0_ROLE_URL],
                    token: accessToken,
                    language: user.locale
                  }
                  setUser(userData);
                  console.log('check')
                };


                //setUser(data)
                //userData.userState = user;
                //userData.accessToken = accessToken;

                console.log('printing from over here')
                setSession();
                //console.log(data);
                // whatever = ({id, email, picture, userName, nickname, role, token, language}) => {
                //     const newUser = {id, email, picture, userName, nickname, role, token, language};
                //     setUser(initialUser => [...initialUser, {
                //         id:userData.id,
                //         email:userData.email,
                //         picture:userData.picture,
                //         userName:userData.userName,
                //         nickname:userData.nickname,
                //         role:userData.role,
                //         token:userData.token,
                //         language:userData.language}]);
                // }
                //setData(accessToken);

                //setUser(userData);
                console.log(userData);

                this.checkSession = true;
                // const authProviderValue = {
                //   ...this.state,
                //   // initiateLogin: this.initiateLogin,
                //   // handleAuthentication: this.handleAuthentication,
                //   // logout: this.logout
                // };

              //}
            } catch (e) {
                console.log('is this working');
                console.log(e.message);
            }
        })();
    },[]);


    return (
      // <></>
            <UserContext.Provider value={userInfo}>
                {children}
            </UserContext.Provider>
        );
}

User.propTypes = {
    id: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    userName: PropTypes.string,
    nickname: PropTypes.string,
    role: PropTypes.string,
    token: PropTypes.string,
    language: PropTypes.string
}

export default User;