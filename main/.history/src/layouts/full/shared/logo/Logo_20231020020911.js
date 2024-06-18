import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/dark-rtl-logo.svg';
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/light-logo-rtl.svg';
import Logos from 'src/assets/images/logos/LOGO.svg'
import { styled } from '@mui/material';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));


  return (
    <LinkStyled to="/">
      {customizer.activeMode === 'dark' ? (
        <Logos height={customizer.TopbarHeight} />
      ) : (
        <Logos height={customizer.TopbarHeight} />
      )}
    </LinkStyled>
  );
};

export default Logo;
