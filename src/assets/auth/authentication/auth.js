// import React, {useState, useEffect, useContext} from "react";
//
// import {Auth0Provider, useAuth0} from "@auth0/auth0-react"
// import auth0 from "auth0-js";
//
// //import {AUTH_CONFIG} from process.env;
// import { AuthProvider } from "./auth-context"
// import rules from "../authorization/rbac-rules";
// //import { Auth0Provider } from "@auth0/auth0-react";
//
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const redirectUri = `${window.location.origin}/callback`;
//
// const { user, getAccessTokenSilently } = useAuth0();
//
// const Auth = () => {
//     state = {
//         authenticated: false,
//         user: {
//             role: "visitor"
//         },
//         accessToken: ""
//     };
//
//     useEffect(async () => {
//
//
//
//         try {
//             const accessToken = await getAccessTokenSilently({
//                 audience: 'https://info.handoferis.us',
//                 scope: rules[user[process.env.REACT_APP_AUTH0_ROLE_URL]].static.join().replace(/[/,\r]/gm, "")
//             });
//
//             const setSession =  () => {
//                 const user = {
//                     id: user.sub,
//                     email: user.email,
//                     picture: user.picture,
//                     user: user.user,
//                     role: user[process.env.REACT_APP_AUTH0_ROLE_URL],
//                     token: accessToken
//                 };
//                 this.setState({
//                     authenticated: true,
//                     accessToken: data.accessToken,
//                     user
//                 });
//             }
//         }
//         catch (e) {
//             console.log('trouble in paradise');
//             console.log(e.message);
//         }
//     }
//
//
//
//     render() {
//         const authProviderValue = {
//             ...this.state,
//             initiateLogin: this.initiateLogin,
//             handleAuthentication: this.handleAuthentication,
//             logout: this.logout
//         };
//         return (
//             <AuthProvider value={authProviderValue}>
//                 {this.props.children}
//             </AuthProvider>
//         );
//     }
// }
//
// export default Auth;