import React, {useState, useEffect, useContext} from "react";

import { useAuth0 } from "@auth0/auth0-react";

import PropTypes from 'prop-types';

import axios from "axios";
import { AuthConsumer } from "../auth/authentication/user-context"
import rules from "../auth/authorization/rbac-rules";
import Auth from "../auth/authentication/auth";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = `${window.location.origin}/callback`;
const api = process.env.REACT_APP_API_URL;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const ExtraPropTypes = require('react-extra-prop-types');
//const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//const [userMetadata, setUserMetadata] = useState(null);

const BandMedia = () => {

    //const { user } = useContext(AuthConsumer);
    const { user, getAccessTokenSilently } = useAuth0();
    //const [userMetadata, setUserMetadata] = useState(null);
    const [data, setData, userMetadata, setUserMetadata] = useState(0);

    //const data = {};

    useEffect( () => {

        (async () => {

            try {

                console.log(rules[user[process.env.REACT_APP_AUTH0_ROLE_URL]].static.join().replace(/[/,\r]/gm, " "))

                // for(const v in rules[user[process.env.REACT_APP_AUTH0_ROLE_URL]].static) =>
                // {
                //
                // }
                const accessToken = await getAccessTokenSilently({
                    audience: audience,

                    scope: 'upload:music'
                });

                console.log('access token');
                console.log(accessToken)

                const options = {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }

                const result = await axios.get(
                    api + '/admin/retrievesongs',
                    options
                );

                console.log(result.data);
                //data = result.data;

                setData(result.data)

                console.log(data);

                //setUserMetadata(user_metadata);
            } catch (e) {
                console.log('trouble in paradise')
                console.log(e.message);
            }

            //await getUserMetadata();

        })();
    },[setData]);

    return (
        data ? (
        <ul>
            {data.map(item => (
                <ul>
                <li key={item.id}>
                    {item.title}<br/>
                    <audio controls>
                        <source src={item.track} type="audio/mpeg">
                            {/*{item.title}*/}
                        </source>
                        <source src={item.track} type="audio/ogg">
                            {/*{item.title}*/}
                        </source>
                    </audio>
                    <br/>
                </li>
                </ul>
            ))}
        </ul>
        ) : <div> hello no data</div>
    )
}

BandMedia.propTypes = {
    id: ExtraPropTypes.uuid,
    title: PropTypes.string,
    track: PropTypes.string

}
export default BandMedia;