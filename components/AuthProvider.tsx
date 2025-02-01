// import axios from 'axios';
// // import { env } from '@/lib/env';
// import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react"

// const JWT_SECRET_KEY = 'secret';
// const jwtSecret = new TextEncoder().encode(JWT_SECRET_KEY);

// const api = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// // wrapper for axios mock adapter that adds auth checks
// const withAuth = (...data) => async (config) => {
//     const token = config.headers.Authorization?.split(' ')[1]

//     // verifies access token if present
//     const verified = token ? await verifyToken(token) : false;

//     // return 403 if token is invalid and auth is enabled
//     if (env.USE_AUTH && !verified) {
//         return [403, { message: 'Unauthorized' }];
//     }

//     // calls original mock function
//     return typeof data[0] === 'function' ? data[0](config) : data
// }

// // verify jwt token
// export const verifyToken = async (token, options = undefined) => {
//     try {
//         const verification = await jose.jwtVerify(token, jwtSecret);
//         return options?.returnPayload ? verification.payload : true;
//     } catch {
//         return false;
//     }
// }

// const AuthContext = createContext(undefined)

// export const useAuth = () => {
//     const authContext = useContext(AuthContext);
//     if (!authContext) throw new Error('useAuth must be used within an AuthProvider')

//     return authContext
// }

// const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(null);

//     useEffect(() => {
//         const fetchMe = async () => {
//             try {
//                 const response = await api.get('/api/me');
//                 setToken(response.data.accessToken);
//             } catch {
//                 setToken(null);
//             }
//         }

//         fetchMe();
//     }, [])

//     // intercept **request add token to headers
//     // useLE blocks rendering child components which will trigger req
//     useLayoutEffect(() => {
//         const authInterceptor = api.interceptors.request.use((config) => {
//             config.headers.Authorization = !config._retry && token
//             ? `Bearer ${token}`
//             : config.headers.Authorization;
//         return config;
//         });

//         return () => {
//             api.interceptors.request.eject(authInterceptor);
//         }
//     }, [token]);

//     // intercept **response to check need for refresh
//     useLayoutEffect(() => {
//         const refreshInterceptor = api.interceptors.response.use(
//             (response) => response,
//             async (error) => {
//                 const originalRequest = error.config;

//                 // user has not been authenticated
//                 if (error.response.status === 403 && error.response.data.message === 'Unauthorized') {
//                     try {
//                         const response = await api.get('/api/refreshToken');
//                         setToken(response.data.accessToken);

//                         // retry original req which failed
//                         originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
//                         originalRequest._retry = true;

//                         return api(originalRequest)
//                     } catch {
//                         setToken(null);
//                     }
//                 }
//                 return Promise.reject(error);
//             }
//         )
//     })
// }