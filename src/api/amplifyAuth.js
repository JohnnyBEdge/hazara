import {Auth} from 'aws-amplify';
// import {useState} from 'react';

// const [authenticated, setAutheticated] = useState(false);
// const [isAuthenticating, setIsAuthenticating] = useState(true)

export const authCheck =  async ()  => {

    try {
        let authProps;
        let authenticated = false;
        const authUser = await Auth.currentAuthenticatedUser();
        let isAuthenticating = false;
        
        return authProps = {
          authUser: authUser,
          authenticated: authenticated,
          isAuthenticating: isAuthenticating
      };
    } catch(err) {
      if (err !== 'No current user') {
        console.log(err);
      }
    }
  };