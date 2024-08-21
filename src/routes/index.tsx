import { Route, Routes } from "react-router-dom";
import AspirantSignUp from "../container/signup/aspirant/AspirantSignUp";
import Landing from "../container/landing";
import Login from "../container/auth/login";
import CompanySignUp from "../container/signup/company/CompanySignUp";
import ContentRoutes from "./contentRotes";
import ForgotPassword from "../container/auth/forgot-password";
import ResetPassword from "../container/auth/reset-password";
import PasswordResetSuccess from "../container/auth/reset-password/PasswordResetSuccess";
import SckilledSCP from "../container/sckilled-scp";
import SckilledJob from "../container/sckilled-job";
import VerifySuccess from "../container/verify_success";
import { UnProtectedRoute } from "./ProtectedRoute";
import Admin from "../container/admin";

const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          } />
          <Route path="/company-signup" element={
            <UnProtectedRoute>
              <CompanySignUp /> 
            </UnProtectedRoute>
          }/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
          <Route path="/verify-success" element={<VerifySuccess />} />
          <Route path="/aspirant-signup" element={
            <UnProtectedRoute>
              <AspirantSignUp />
            </UnProtectedRoute>
          } />
          <Route path="/sckilled-scp" element={<SckilledSCP />} />
          <Route path="/sckilled-job" element={<SckilledJob />} />
          <Route path="*" element={<ContentRoutes />} />
        </Routes>
    </>
  );
};

export default AppRoutes;
