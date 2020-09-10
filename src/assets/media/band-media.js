import React, {useState, useEffect, useContext} from "react";

import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import { AuthConsumer } from "../auth/authentication/auth-context"
import rules from "../auth/authorization/rbac-rules";
import Auth from "../auth/authentication/auth";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = `${window.location.origin}/callback`;
const api = process.env.REACT_APP_API_URL;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
//const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//const [userMetadata, setUserMetadata] = useState(null);

const BandMedia = () => {

    const { user } = useContext(AuthConsumer);
    const { getAccessTokenSilently } = useAuth0();
    const [data, setData, userMetadata, setUserMetadata] = useState({rehearsalJams: []});

    useEffect(async () => {

        const getUserMetadata = async () => {

            try {
                const accessToken = await getAccessTokenSilently({
                    audience: audience,
                    scope: 'read:messages'
                });

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                const { user_metadata } = await metadataResponse.json();

                console.log('metadata response ');
                console.log(user_metadata);

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }

        }

        await getUserMetadata();

        console.log(user);
        let scopes = rules[user.role].static;
        console.log(scopes);

        const options = {
            headers: {
                'Scope': scopes,
                'Authorization': user.token
            }
        }
        const result = await axios.get(
            api + '/retrievesongs',
            options
        );

        setData(result.data)
    }, []);

    return (
        <ul>
            {data.rehearsalJams.map(item => (
                <ul>
                <li key={item.objectID}>
                    <audio controls>
                        <source src={item.url} type="audio/mpeg">
                            {item.name}
                        </source>
                        <source src={item.url} type="audio/ogg">
                            {item.name}
                        </source>
                    </audio>
                </li>
                </ul>
            ))}
        </ul>
    )
}

export default BandMedia;