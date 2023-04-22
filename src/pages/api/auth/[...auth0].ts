import { handleAuth } from "@auth0/nextjs-auth0";

// NOTE: 以下をauth0が展開する
// - /api/auth/login
// - /api/auth/logout
// - /api/auth/callback
// - /api/auth/me
export default handleAuth();
