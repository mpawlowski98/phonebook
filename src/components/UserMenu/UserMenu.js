import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  Button,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

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
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="welcomeFont">Welcome, {user.name}</Typography>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            type="button"
            variant="contained"
            disableElevation
            onClick={() => dispatch(logOut())}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
