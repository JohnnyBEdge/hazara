import React, {useState} from 'react';
import EventsTable from '../../components/EventsTable';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { CreateAdminBtn, SignUp, BtnContainer} from './AdminElements'

const Admin = ({eventsData, setEvents}) => {

  const [createAdmin, setCreateAdmin] = useState(false);
  const [btnContent, setBtnContent] = useState('Create New Admin')

  const toggleAdminBtn = () => {
    setCreateAdmin(!createAdmin);
    btnContent === 'Create New Admin' ? setBtnContent('Cancel') : setBtnContent('Create New Admin');
  }

  
    return (
        <div>
            <AmplifyAuthenticator usernameAlias="email">
                <AmplifySignIn slot="sign-in" hideSignUp /> 
            </AmplifyAuthenticator>

                <AmplifySignOut/>
                {createAdmin ? 
                <SignUp
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
                :
                

                <EventsTable eventsData={eventsData} setEvents={setEvents} />
                }
            {/* </AmplifyAuthenticator> */}
            <BtnContainer>
              <CreateAdminBtn onClick={toggleAdminBtn}>{btnContent}</CreateAdminBtn>
            </BtnContainer>
        </div>
    )
}

export default Admin;