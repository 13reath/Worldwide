import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenicated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenicated) navigate("/");
    },
    [isAuthenicated, navigate]
  );

  return isAuthenicated ? children : null;
}

export default ProtectedRoute;
