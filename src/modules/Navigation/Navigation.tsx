import React, { Fragment } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import { useRouter } from 'next/router';

import styles from '@modules/Navigation/Navigation.module.css';
import { NavigationType } from '@utils/constants';

interface HeaderProps {
  sections: NavigationType[];
  title: string;
  logo: string;
}

const Navigation = (props: HeaderProps) => {
  const { sections, title, logo } = props;
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (target: NavigationType) => {
    if (target.hash && target.url === router.pathname) {
      const id = target.hash;
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push({ pathname: target.url, hash: target.hash }, undefined, { scroll: false });
    }
  };

  return (
    <Fragment>
      <AppBar position="absolute" className={styles.navbar} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar sx={{ maxHeight: 190 }}>
          <Typography
            component="a"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}
            className={styles.homeLink}
          >
            <Box width={220} sx={{ height: '57px' }}>
              <Image
                src={logo}
                width="214"
                height="57"
                alt={title}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto"
                }} />
            </Box>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu de navegacion"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              sx={{
                marginLeft: 'auto',
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className={styles.mobileMenu}
              sx={{
                '& .MuiMenu-paper': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{section.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections?.map((section, index) => (
              <Box key={section.id} sx={{ ml: `${index === 0 ? 'auto' : '36px'}` }}>
                <Button
                  onClick={() => handleClick(section)}
                  color="secondary"
                  variant="contained"
                  className={styles.button}
                >
                  {section.title}
                </Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navigation;
