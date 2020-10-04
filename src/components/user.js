import React, { useEffect, useContext } from 'react';

import { useAuth0 } from "@auth0/auth0-react"
import { UserContext } from '../assets/auth/authentication/user-context';
import rules from "../assets/auth/authorization/rbac-rules"
import PropTypes from 'prop-types';

const User = ({ children }) => {

    const {user, getAccessTokenSilently} = useAuth0();
    const {userInfo, setUser} = useContext(UserContext);

    useEffect(() => {
        (async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
                  scope: rules[user[process.env.REACT_APP_AUTH0_ROLE_URL]].static.join().replace(/[/,\r]/gm, "")
                });


                const setSession = () => {
                   setUser({
                    id: user.sub,
                    email: user.email,
                    picture: user.picture,
                    userName: user.given_name,
                    nickname: user.nickname,
                    role: user[process.env.REACT_APP_AUTH0_ROLE_URL],
                    token: accessToken,
                    language: user.locale
                  });
                };
                setSession();
            } catch (e) {
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