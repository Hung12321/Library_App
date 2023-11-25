export const oktaConfig = {
    clientId: '0oadaxvxkqj7nAUlg5d7',
    issuer: 'https://dev-82289667.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
