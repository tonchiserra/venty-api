import { expressjwt, GetVerificationKey } from 'express-jwt'
import { expressJwtSecret } from 'jwks-rsa'

export const checkJwt = expressjwt({
    secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksUri: "https://venty.us.auth0.com/.well-known/jwks.json"
    }) as GetVerificationKey,
    audience: 'https://venty.us.auth0.com/api/v2/',
    issuer: "https://venty.us.auth0.com/",
    algorithms: ['RS256']
})