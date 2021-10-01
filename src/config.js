const oktaAuthConfig = {
   
    issuer: 'https://${dev-08088131.okta.com}/oauth2/default',
    clientId: '${0oa22lhoczG7v7U1K5d7}',
    redirectUri: window.location.origin + '/login/callback',
  };
  
  const oktaSignInConfig = {
    baseUrl: 'https://${yourOktaDomain}',
    clientId: '${0oa22lhoczG7v7U1K5d7}',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
     
    }
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
  };
  
  export { oktaAuthConfig, oktaSignInConfig };