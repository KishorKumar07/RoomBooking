import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/dark-rtl-logo.svg';
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/light-logo-rtl.svg';
import { Box, Typography, styled } from '@mui/material';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));


  return (
    <LinkStyled to="/" style={{marginTop:'20px'}}>
      {/* {customizer.activeMode === 'dark' ? (
        <LogoDarkRTL height={customizer.TopbarHeight} />
      ) : (
        <LogoLightRTL height={customizer.TopbarHeight} />
      )} */}
      <Box >
      <Typography color='black' variant='h1'>Nishanth's</Typography>
      <Typography color='black' variant='subtitle1'>Guest room app</Typography>
      </Box>


    </LinkStyled>
  );
};

export default Logo;
