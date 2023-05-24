import { Layout } from 'Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { LoginPage } from 'pages/Login';
import { RegisterPage } from 'pages/Register';
import { ContactsPage } from 'pages/Contacts';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

// const HomePage = lazy(() => import('./pages/Home'));
// const RegisterPage = lazy(() => import('./pages/Register'));
// const LoginPage = lazy(() => import('./pages/Login'));
// const ContactsPage = lazy(() => import('./pages/Contacts'));

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
