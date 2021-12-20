import { Box, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Box)(
  ({ theme }) => `
        border-radius: 0;
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper>
      <Box
        p={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2021 - Pylon Board
          </Typography>
        </Box>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
