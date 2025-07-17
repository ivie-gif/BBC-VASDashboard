import {
  Box,
  Link,
  Paper,
  Stack,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import Image from 'components/base/Image';
import logo from '/LOGO.png';

const Login = (): ReactElement => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = () => {
    navigate(rootPaths.homeRoot);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Paper
        sx={{
          py: 6,
          px: { xs: 5, sm: 7.5 },
          width: { xs: '100%', sm: '350px' },
          mx: 'auto',
          mt: -35,
          background: 'rgba(255, 255, 255, 0.55)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px #4747470b',
          backdropFilter: 'blur(7.1px)',
          border: '6px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Stack justifyContent="center" gap={3}>
          <Box component="figure" mx="auto" textAlign="center" sx={{ mt: 1 }}>
            <Image src={logo} alt="bbc logo" height={60} />
          </Box>
          <Typography variant="h3" textAlign="center" color="text.secondary" sx={{ fontSize: 29, mb: 3 }}>
            BBC-VAS Dashboard
          </Typography>
          <TextField
            variant="filled"
            type="email"
            placeholder="Email"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: '#F2F1FF',
                border: '2px solid #E3E6E9',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: '#F2F1FF',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    size="small"
                    edge="end"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {showPassword ? (
                      <IconifyIcon icon="el:eye-open" color="text.secondary" />
                    ) : (
                      <IconifyIcon icon="el:eye-close" color="text.primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormGroup sx={{ ml: 1, width: 'fit-content' }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    '&.Mui-checked': {
                      color: '#6366F1',
                      ':before': {
                        color: '#6366F1',
                      },
                    },
                  }}
                />
              }
              label="Keep me signed in"
              sx={{
                color: 'text.secondary',
              }}
            />
          </FormGroup>
          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: 'fontWeightRegular',
              bgcolor: '#6366F1',
              borderRadius: 5,
              mt: 5,
              mb: 3,
              color: '#fff',
              '&:hover': {
                bgcolor: '#6366F1',
              },
              '&.MuiButton-root': {
                padding: '6px 0px',
              }
            }}
          >
            Log In
          </Button>
        </Stack>
      </Paper>
    </>
  );
};

export default Login;
