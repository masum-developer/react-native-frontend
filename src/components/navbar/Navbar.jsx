import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Stack } from '@mui/material';
import { ButtonComp } from '../ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from "@mui/system";
import { useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Cookies from "js-cookie";
import { Alert, message, notification, Space, Spin } from 'antd';


const drawerWidth = 240;
// const navItems = ['Peer Education', 'Group Discussion', 'Community', 'Contact'];
const navItems = [
    {
        id: 1,
        title: 'Get Started',
        slug: '?tab=html_introduction'
    },
    {
        id: 2,
        title: 'Contact',
        slug: 'Contact'
    },
];

const settings = ['Logout'];

const Navbar = (props) => {
    const { user, isAuthenticated } = useSelector(state => state.auth)
    const { windowProp } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    // console.log('user, isAuthenticated', user, isAuthenticated);

    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleUserMenu = (val) => {
        //do logout
        if (val.toLowerCase() === 'logout') {
            Cookies.remove(process.env.NEXT_PUBLIC_TOKEN_NAME);
            message.success("Logged out successfully");

            setTimeout(() => {
                window.location.href = "/";
            }, 2000)
        }
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Box sx={{ flexGrow: 1, color: '#413434', display: { xs: 'none', sm: 'block' } }}>

                <img src="logo.svg" slt="logo"></img>
            </Box>

            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item?.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item?.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Stack direction="column" alignItems="center" justifyContent="center">
                <Link href="/auth/login">
                    <ButtonComp myWidth='110px'>Sign In</ButtonComp>
                </Link>

                <Box mt={2}>
                    <a target="_blank" href="https://ts4u.us/auth/register" rel="noopener noreferrer">
                        <ButtonComp background="#313641" myWidth='110px' color='white'>Sign Up</ButtonComp>
                    </a>
                </Box>
            </Stack>
        </Box>
    );

    const container = windowProp !== undefined ? () => window().document.body : undefined;



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        border: '1px solid #D7DAE0',
        borderRadius: theme.shape.borderRadius,
        //   backgroundColor: '#CDC0F8',
        //   '&:hover': {
        //     backgroundColor: '#CDC0F8',
        //   },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '18ch',
                '&:focus': {
                    width: '24ch',
                },
            },
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: 'black'
            }
        },
    }));

    return (
        <Box>
            <AppBar sx={{ p: 1, background: '#FFFFFF', boxShadow: '1px 635px 254px rgba(0, 0, 0, 0.01), 1px 357px 214px rgba(0, 0, 0, 0.05), 0px 159px 159px rgba(0, 0, 0, 0.09), 0px 40px 87px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)', height: { xs: '70px', sm: '108px' }, padding: '0' }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, color: '#413434', display: { xs: 'none', sm: 'block' } }}>

                            <Link href='/'>
                                <img style={{ height: '100px', width: '100px', objectFit: 'contain', cursor: 'pointer' }} src="/logo2.png" slt="logo"></img>
                            </Link>
                        </Box>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon style={{ color: 'black' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Box direction="row" sx={{ display: { xs: 'none', md: 'block' } }}>
                            {navItems?.map((item) => (
                                <Link href={`${item?.slug}`}>
                                    <Typography variant='body1' key={item?.id} sx={{ mx: 1, color: '#413434', display: 'inline-block', cursor: 'pointer' }}>
                                        {item?.title}
                                    </Typography>
                                </Link>
                            ))}
                            {isAuthenticated ?
                                <>
                                    <Tooltip title="Open settings">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{ p: 0 }}>
                                            <Avatar alt={user?.firstName} src={user?.profilePicture} />
                                        </IconButton>
                                    </Tooltip>

                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={() => handleUserMenu(setting)}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </> :
                                <>
                                    <Link href="/auth/login">
                                        <ButtonComp style={{ marginLeft: '5px' }} myWidth='110px'>Sign In</ButtonComp>
                                    </Link>

                                    <a target="_blank" href="https://ts4u.us/auth/register" rel="noopener noreferrer">
                                        <ButtonComp style={{ marginLeft: '15px' }} background="#313641" myWidth='110px' color='white'>Sign Up</ButtonComp>
                                    </a>
                                </>
                            }

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

Navbar.propTypes = {
    windowProp: PropTypes.func,
};

export default Navbar;