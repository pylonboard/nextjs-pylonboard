import { styled, Typography } from '@mui/material';
import Link from 'src/components/Link';


const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        align-items: center;
        
        &:hover {
          text-decoration: none;
        }
         
        img {
          display: block;
          width: 40px;
        }
`
);

const TypographyTitle = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(16)};
    margin-left: 4px;
    letter-spacing: 0.5px;
`
);

function Logo() {
  return (
    <LogoWrapper href="/">
      <img src="/static/images/logo/pylon-logo.png" />
      <TypographyTitle>Pylon Board</TypographyTitle>
    </LogoWrapper>
  );
}

export default Logo;
