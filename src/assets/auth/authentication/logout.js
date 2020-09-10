import React from 'react';

import { AuthConsumer } from "./auth-context";
import {Link, Redirect} from "react-router-dom";

const Logout = () => (
    <AuthConsumer>
        {({ logout }) => (
            <Link to="/" className="btn btn-sm btn-danger" onClick={logout}>
                Logout
            </Link>
        )}
        {/*{( !authenticated ) => (*/}
        {/*    <Redirect to="/dashboard"/>*/}
        {/*)}*/}
    </AuthConsumer>
);

export default Logout;