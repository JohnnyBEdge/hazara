import React from 'react';
import EventsTable from '../../components/EventsTable';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';

const Admin = ({events, setEvents}) => {

    return (
        <div>
            <AmplifyAuthenticator usernameAlias="email">
                <AmplifySignIn slot="sign-in" hideSignUp />
                <AmplifySignUp
        // slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "Email",
            placeholder: "Email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Password",
            required: true,
          }
        ]} 
      />
                <AmplifySignOut/>
                <EventsTable events={events} setEvents={setEvents}/>
            </AmplifyAuthenticator>
        </div>
    )
}

export default Admin;