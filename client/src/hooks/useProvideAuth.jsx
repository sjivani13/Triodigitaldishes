// import { useReducer, useEffect, useContext, createContext } from "react";
// import { useNavigate } from "react-router-dom";

// const initialState = {
//     isAuthenticated: null,
//     user: null,
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "LOGIN":
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user: action.payload,
//             };
//         case "LOGOUT":
//             localStorage.clear();
//             return {
//                 ...state,
//                 isAuthenticated: false,
//                 user: null,
//             };
//         default:
//             return state;
//     }
// };

// const authContext = createContext();
// export function ProvideAuth({ children }) {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <authContext.Provider
//             value={{
//                 state,
//                 dispatch,
//             }}
//         >
//             {children}
//         </authContext.Provider>
//     );
// }

// export const useAuth = () => {
//     return useContext(authContext);
// };

// export function useProvideAuth() {
//     const { state, dispatch } = useAuth();
//     let navigate = useNavigate();

//     const signin = async (username, password) => {
//         try {
//             const response = await api.post(`/auth/signin`, {
//                 username: username,
//                 password: password,
//             });
//             localStorage.setItem("MernAppUser", JSON.stringify(response.data));
//             dispatch({
//                 type: "LOGIN",
//                 payload: response.data,
//             });
//             return response;
//         } catch (error) {
//             console.log(error);
//             if (error.response) {
//                 throw new Error(error.response.data.error);
//             } else {
//                 throw error;
//             }
//         }
//     };

//     const signup = async (username, email, password, confirmPassword) => {
//         try {
//             await api.post(`/auth/signup`, {
//                 username: username,
//                 password: password,
//                 confirmPassword: confirmPassword,
//                 email: email,
//             });
//             return await signin(username, password);
//         } catch (error) {
//             console.log(error);
//             if (error.response) {
//                 throw new Error(error.response.data.error);
//             } else {
//                 throw error;
//             }
//         }
//     };

//     const signout = () => {
//         dispatch({
//             type: "LOGOUT",
//         });
//         navigate("/");
//     };

//     const getCurrentUser = () => {
//         return JSON.parse(localStorage.getItem("MernAppUser"));
//     };

//     useEffect(() => {
//         const savedUser = JSON.parse(localStorage.getItem("MernAppUser")) || false;
//         if (savedUser) {
//             dispatch({
//                 type: "LOGIN",
//                 payload: savedUser,
//             });
//         } else {
//             dispatch({
//                 type: "LOGOUT",
//             });
//         }
//     }, [dispatch]);

//     return {
//         state,
//         getCurrentUser,
//         signin,
//         signup,
//         signout,
//     };
// }