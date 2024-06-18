import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logos } from 'src/assets/images/logos/LOGO.png';

import { styled } from '@mui/material';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled to="/">
        {customizer.activeMode === 'dark' ? (
          <Logos height={customizer.TopbarHeight} />
        ) : (
          <Logos height={customizer.TopbarHeight} />
        )}
      </LinkStyled>
    );
  }
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
