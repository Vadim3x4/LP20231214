import * as React from 'react';
import { useEffect } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Container, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useSelector, useDispatch } from 'react-redux';
// import deleteSessionFromLocalStorage from '@/feature/utils/session/deleteSessionFromLocalStorage';

import {
  AppBarRestyled,
  HeaderWrapper,
  MenuButtonRestyled,
  MenuIconButtonRestyled,
  NavigationListItem,
  NavigationUlItem,
  SignInButtonRestyled,
  ToolbarRestyled,
} from './Header-style';
// import { selectAccessKey, setAccessKey } from '../../store/slices/sessionSlice';
import LintuIcon from '../img/icon';

interface Props {
  handleOpenSignInModal: () => void;
}

function Header({ handleOpenSignInModal }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const router = useRouter();
  const session = useSession();

  // useEffect(() => {
  //   if (session?.error === 'RefreshAccessTokenError') {
  //     signIn(); // Force sign in to hopefully resolve error
  //   }
  // }, [session]);

  console.log('session form header >>>', session);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isDesktop) {
    return (
      <AppBarRestyled>
        <Container maxWidth="xl">
          <ToolbarRestyled>
            <div>
              <Link href="/">
                <LintuIcon />
              </Link>
            </div>

            <HeaderWrapper>
              <Box component="nav">
                <NavigationUlItem>
                  <NavigationListItem key={'portfolios'}>
                    <MenuButtonRestyled
                      href={{
                        pathname: '/portfolios',
                      }}
                    >
                      Portfolios
                    </MenuButtonRestyled>
                  </NavigationListItem>
                  <NavigationListItem key={'settings'}>
                    <MenuButtonRestyled
                      href={{
                        pathname: '/settings',
                      }}
                    >
                      Settings
                    </MenuButtonRestyled>
                  </NavigationListItem>
                </NavigationUlItem>
              </Box>

              {session?.data ? (
                <SignInButtonRestyled
                  href="#"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Sign Out
                </SignInButtonRestyled>
              ) : (
                <SignInButtonRestyled href="#" onClick={handleOpenSignInModal}>
                  SignIn
                </SignInButtonRestyled>
              )}
            </HeaderWrapper>
          </ToolbarRestyled>
        </Container>
      </AppBarRestyled>
    );
  }

  return (
    <AppBarRestyled>
      <Container maxWidth="md">
        <ToolbarRestyled>
          <Link href="/">
            <LintuIcon />
          </Link>
          <div>
            {session?.data ? (
              <SignInButtonRestyled
                href="#"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign Out
              </SignInButtonRestyled>
            ) : (
              <SignInButtonRestyled href="#" onClick={handleOpenSignInModal}>
                SignIn
              </SignInButtonRestyled>
            )}
            <MenuIconButtonRestyled
              id="menu-button"
              aria-controls={open ? 'menu-button' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </MenuIconButtonRestyled>
            <Menu
              id="item-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'item-button',
              }}
            >
              <MenuItem key={'portfolios'}>
                <Link href="/portfolios">Portfolios</Link>
              </MenuItem>
              <MenuItem key={'settings'}>
                <Link href="/settings">Settings</Link>
              </MenuItem>
            </Menu>
          </div>
        </ToolbarRestyled>
      </Container>
    </AppBarRestyled>
  );
}

export default Header;
