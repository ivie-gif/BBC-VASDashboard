import { ReactElement, PropsWithChildren } from 'react';
import { Box, Stack } from '@mui/material';
import backgroundImg from '/background.png';

const AuthLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Box
      sx={{
        backgroundColor: '#dcdce6',
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <Stack minHeight="100vh" justifyContent="center" py={10}>
        <Box maxWidth={640} width={1} mx="auto" px={5}>
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default AuthLayout;
