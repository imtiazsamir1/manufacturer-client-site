// import { signOut } from "firebase/auth";
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Navigate, useLocation } from "react-router-dom";
// import auth from "../../firebase.init";
// import Loading from "../Sheared/Loading";
// // import useAdmin from "../Hooks/useAdmin";

// const Admin = ({ children }) => {
//   const location = useLocation();
//   const [user, loading, error] = useAuthState(auth);
//   const [admin, adminLoading] = useAdmin(user);
//   if (loading || adminLoading) {
//     return <Loading></Loading>;
//   }
//   if (!user || !admin.admin) {
//     signOut(auth);
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   return children;
// };

// export default Admin;
