import { Avatar, Box, styled, Typography } from '@mui/material';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.alpha.black[100]};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
      
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
`
);

export type GatewayPoolCardHeaderProps = {
  logo: string;
  title: string;
}

const GatewayPoolCardHeader = ({ title, logo }: GatewayPoolCardHeaderProps) => {
  return (
    <Box display="flex" alignItems="center">
      <AvatarWrapper>
        <img src={logo} alt={title} />
      </AvatarWrapper>
      <Typography
        sx={{
          ml: 1.5,
          fontWeight: 'normal'
        }}
        variant="h3"
        component="h3"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default GatewayPoolCardHeader;
