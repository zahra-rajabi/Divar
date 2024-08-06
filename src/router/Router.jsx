import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import Loader from "components/modules/Loader";
import SinglePostPage from "pages/SinglePostPage";
function Router({ show, setShow }) {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<HomePage show={show} setShow={setShow} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/posts/:id" element={<SinglePostPage />} />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default Router;
