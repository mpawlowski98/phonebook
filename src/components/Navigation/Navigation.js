import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const theme = createTheme({
    typography: {
      welcomeFont: {
        fontFamily: 'Arial',
        fontWeight: 300,
        fontSize: '1.2rem',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="welcomeFont"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
            component={Link}
            to="/"
          >
            PhoneBook
          </Typography>
          <Box>
            {isLoggedIn && <UserMenu />}
            {!isLoggedIn && (
              <>
                <Button
                  color="secondary"
                  variant="contained"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ ml: 2 }}
                  color="secondary"
                  variant="contained"
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
