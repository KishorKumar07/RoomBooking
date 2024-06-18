import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Typography, styled } from '@mui/material';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  const ownerName = localStorage.getItem('ownername');
  const guestName = localStorage.getItem('guestname');

  const displayName = ownerName || guestName || 'User';

  return (
    <LinkStyled to="/" style={{ marginTop: '20px' }}>
      <Box>
        <Typography color="black" variant="h1">{displayName}'s</Typography>
        <Typography color="black" variant="subtitle1">Guest room app</Typography>
      </Box>
    </LinkStyled>
  );
};

export default Logo;
