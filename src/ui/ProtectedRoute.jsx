import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);

  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is no authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [navigate, isLoading, isAuthenticated]);

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  // 4. If there is a use, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
