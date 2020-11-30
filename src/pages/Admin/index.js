import React, {useState} from 'react';
import EventsTable from '../../components/EventsTable';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { CreateAdminBtn} from './AdminElements'

const Admin = ({events, setEvents}) => {

  const [createAdmin, setCreateAdmin] = useState(false);
  const [btnContent, setBtnContent] = useState('Create Admin')

  const toggleAdminBtn = () => {
    setCreateAdmin(!createAdmin);
    btnContent === 'Create Admin' ? setBtnContent('Cancel') : setBtnContent('Create Admin');
  }

    return (
        <div>
            <AmplifyAuthenticator usernameAlias="email">
                <AmplifySignIn slot="sign-in" hideSignUp /> 
                <AmplifySignOut/>
                {createAdmin ? 
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
                /> :
                
                <EventsTable events={events} setEvents={setEvents}/>
                }
            </AmplifyAuthenticator>
              <CreateAdminBtn onClick={toggleAdminBtn}>{btnContent}</CreateAdminBtn>
        </div>
    )
}

export default Admin;