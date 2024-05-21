
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from "./hooks/useAuth";
import Login from "./scenes/login";
import Profile from "./scenes/profile";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};
const App = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
  </BrowserRouter>
);

export default App;

