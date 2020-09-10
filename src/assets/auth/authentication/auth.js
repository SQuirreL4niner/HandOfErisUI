import React, {Component} from "react";

import { Auth0Provider } from "@auth0/auth0-react"
import auth0 from "auth0-js";

//import {AUTH_CONFIG} from process.env;
import { AuthProvider } from "./auth-context"
//import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = `${window.location.origin}/callback`;

const auth = new auth0.WebAuth({
    domain: domain,
    clientID: clientId,
    redirectUri: redirectUri,
    audience: `https://${domain}/userinfo`,
    responseType: "token id_token"
});

class Auth extends Component {
    state = {
        authenticated: false,
        user: {
            role: "visitor"
        },
        accessToken: ""
    };

    initiateLogin = () => {
        auth.authorize()
    };

    logout = () => {
        this.setState({
            authenticated: false,
            user: {
                role: 'visitor'
            },
            accessToken: ''
        });
    };

    handleAuthentication = () => {
        auth.parseHash((err, authResult) => {
            if(err){
                console.log(err);
                console.log(`Error ${err.error} occurred`);
                return;
            }
            console.log(authResult);
           this.setSession(authResult.idTokenPayload, authResult.idToken);
        });
    };

    setSession(data, token) {
        const user = {
            id: data.sub,
            email: data.email,
            picture: data.picture,
            user: data.user,
            role: data[process.env.REACT_APP_AUTH0_ROLE_URL],
            token: token,
            sub: data.sub
        };
        this.setState({
            authenticated: true,
            accessToken: data.accessToken,
            user
        });
    }

    render() {
        const authProviderValue = {
            ...this.state,
            initiateLogin: this.initiateLogin,
            handleAuthentication: this.handleAuthentication,
            logout: this.logout
        };
        return (
            <AuthProvider value={authProviderValue}>
                {this.props.children}
            </AuthProvider>
        );
    }
}

export default Auth;