import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TenantRegister from "../../screens/Tenant/tenant.jsx";
import Login from "../../screens/Home/login.jsx";
import TransportProPricing from "../../screens/Pricing/pricing.jsx";
import TransportSuccessPage from "../../screens/Success/success.jsx";
import TenantManagement from "../../screens/TenantManagement/TenantManagement.jsx";
import BackupDashboard from "../../screens/Backup/backup.jsx";
import AdminDashboard from "../../screens/admin/admindashboard.jsx";
import Tenant from "../../screens/Tenant/tenant.jsx";
import AdminLogin from "../../screens/adminlogin/adminlogin.jsx";
import TenantDashboard from "../../screens/Dashboard/TenantDashboard.jsx";
import AnalyticsDashboard from "../../screens/Analytics/analytics.jsx";
import TenantRegister from "../../screens/Register/register.jsx";
import ProtectedRoute from "../../config/ProtectedRoute/protectedroute.jsx";
import React from "react";
import ForgetPassword from "../../screens/ForgetPassword/forgetpassword.jsx";
import ResetCode from "../../screens/ResetCode/resetcode.jsx";
import ResetPassword from "../../screens/ResetPassword/resetpassword.jsx";
import TrialInfo from "../../screens/Trail-info/trail-info.jsx";
import SubscribePage from "../../screens/Subscribe/subscribe.jsx";
function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<TenantRegister />} />
        <Route path="/pricing" element={<TransportProPricing />} />
        <Route path="/success" element={<TransportSuccessPage />} />
        <Route path="/tenant-management" element={<TenantManagement />} />
        <Route path="/backup" element={<BackupDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/tenant-register" element={<TenantRegister />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-code" element={<ResetCode/>}/>
        <Route path="/password-reset" element={<ResetPassword/>}/>
        <Route path="/trail-info" element={<TrialInfo/>}/>
        <Route path="/subscribe" element={<SubscribePage/>}/>
        {/* <Route path="/success-payment"  element={</>}/> */}
      </Routes>
    </Router>
  );
}

export default RouterConfig;
