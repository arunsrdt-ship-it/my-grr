import { BrowserRouter, useRoutes } from "react-router-dom";
import { useState } from "react";
import routes from "./components/routes/routes";

function AppRoutes({ isAuthenticated, currentUser, login }) {
  return useRoutes(routes(isAuthenticated, currentUser, login));
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const login = (user) => setCurrentUser(user);
  const isAuthenticated = !!currentUser;

  return (
    <BrowserRouter>
      <AppRoutes
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        login={login}
      />
    </BrowserRouter>
  );
}

export default App;
