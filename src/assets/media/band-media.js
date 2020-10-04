import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";

const ExtraPropTypes = require('react-extra-prop-types');

const BandMedia = () => {

    const { getAccessTokenSilently } = useAuth0();
    const [data, setData] = useState(0);

    useEffect( () => {
        (async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
                    scope: 'upload:music'
                });

                const getMedia = async () => {
                    const options = {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }

                    const result = await axios.get(
                      process.env.REACT_APP_API_URL + '/retrievesongs',
                      options
                    );

                    setData(result.data)
                }
                await getMedia();
            } catch (e) {
                console.log('trouble in paradise')
                console.log(e.message);
            }
        })();
    },[]);

    return (
        data ? (
        <ul>
            {data.map(item => (
                <ul>
                <li key={item.id}>
                    {item.title}<br/>
                    <audio controls>
                        <source src={item.track} type="audio/mpeg">
                        </source>
                        <source src={item.track} type="audio/ogg">
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