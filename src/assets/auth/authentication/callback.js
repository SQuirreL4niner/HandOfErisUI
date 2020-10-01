// import React from 'react';
// import { Redirect } from 'react-router-dom';
//
// import { UserConsumer } from "./user-context";
//
// const Callback = props => (
//     <UserConsumer>
//         {({handleAuthentication}) => {
//             if(/access_token|id_token|error/.test(props.location.hash)) {
//                 handleAuthentication();
//             }
//             return <Redirect to="/"/>;
//         }}
//     </UserConsumer>
// );
//
// export default Callback;