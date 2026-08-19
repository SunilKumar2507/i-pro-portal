import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
    Button,
} from '@mui/material';
import { Close, Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/ipro new image.png';
import './header.css';

const productLinks = [
    { label: 'Car Insurance', to: '/4-wheeler' },
    { label: 'Two-Wheeler Insurance', to: '/2-wheeler' },
    { label: 'Commercial Vehicle Insurance', to: '/commercial-insurance' },
    { label: 'Health Insurance', to: '/healthinsurance' },
    { label: 'Life Insurance', to: '/lifeinsurance' },
    { label: 'Home Insurance', to: '/homeinsurance' },
    { label: 'Travel Insurance', to: '/travelinsurance' },
    { label: 'Corporate Insurance', to: '/corporate-insurance' },
];

const advisoryLinks = [
    { label: 'Our Services', to: '/our-services' },
    { label: 'Our Business', to: '/our-business' },
    { label: 'Why Insurance Intermediary?', to: '/why-insurance-intermediary' },
    { label: 'Why i-Pro Infinity', to: '/why-ipro-infinty' },
];

const companyLinks = [
    { label: 'About Us', to: '/Aboutus' },
    { label: 'Our Beliefs', to: '/beliefs-section' },
    { label: 'Careers', to: '/career' },
    { label: 'Contact Us', to: '/contact-us' },
];

const loginLinks = [
    { label: 'Customer Login', href: 'https://web.iproinfinity.com/customer-profile/' },
    { label: 'Partner Login', href: 'https://web.iproinfinity.com/login.php' },
    { label: 'Partner Registration', href: 'https://web.iproinfinity.com/pos/' },
];

const menuPaperProps = {
    sx: {
        minWidth: 260,
        maxWidth: 320,
        maxHeight: '72vh',
        overflowY: 'auto',
        p: 0,
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(13, 71, 161, 0.18)',
    },
};

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const navigate = useNavigate();

    const [mobileAnchor, setMobileAnchor] = React.useState(null);
    const [productsAnchor, setProductsAnchor] = React.useState(null);
    const [advisoryAnchor, setAdvisoryAnchor] = React.useState(null);
    const [companyAnchor, setCompanyAnchor] = React.useState(null);
    const [loginAnchor, setLoginAnchor] = React.useState(null);
    const menuCloseTimer = React.useRef(null);
    const isHoveringMenu = React.useRef(false);

    const closeAllMenus = React.useCallback(() => {
        clearTimeout(menuCloseTimer.current);
        setMobileAnchor(null);
        setProductsAnchor(null);
        setAdvisoryAnchor(null);
        setCompanyAnchor(null);
        setLoginAnchor(null);
    }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', closeAllMenus, { passive: true });

        return () => window.removeEventListener('scroll', closeAllMenus);
    }, [closeAllMenus]);

    const openHoverMenu = (event, setAnchor) => {
        closeAllMenus();
        isHoveringMenu.current = true;
        setAnchor(event.currentTarget);
    };

    const keepHoverMenuOpen = () => {
        isHoveringMenu.current = true;
        clearTimeout(menuCloseTimer.current);
    };

    const delayCloseMenus = () => {
        isHoveringMenu.current = false;
        clearTimeout(menuCloseTimer.current);
        menuCloseTimer.current = setTimeout(() => {
            if (!isHoveringMenu.current) {
                closeAllMenus();
            }
        }, 400);
    };

    const goHome = () => {
        closeAllMenus();
        navigate('/');
    };

    const renderInternalItem = item => (
        <MenuItem key={item.to} onClick={closeAllMenus}>
            <Link to={item.to} className="menu-link">
                {item.label}
            </Link>
        </MenuItem>
    );

    const renderExternalItem = item => (
        <MenuItem key={item.href} onClick={closeAllMenus}>
            <a href={item.href} className="menu-link" target="_blank" rel="noopener noreferrer">
                {item.label}
            </a>
        </MenuItem>
    );

    return (
        <AppBar position="sticky" className="app-bar">
            <Toolbar className="toolbar">
                <div className="brand-identity">
                    <img
                        src={logo}
                        className="header-logo"
                        alt="I-Pro Infinity"
                        onClick={goHome}
                    />
                    <span className="insurance-broking-text">Insurance Broking Services</span>
                </div>

                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            onClick={event => setMobileAnchor(event.currentTarget)}
                            className="hamburger-icon"
                            aria-label={mobileAnchor ? 'Close navigation menu' : 'Open navigation menu'}
                        >
                            {mobileAnchor ? <Close /> : <MenuIcon />}
                        </IconButton>
                        <Menu
                            anchorEl={mobileAnchor}
                            open={Boolean(mobileAnchor)}
                            onClose={closeAllMenus}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            PaperProps={{
                                sx: {
                                    width: 'min(94vw, 380px)',
                                    maxHeight: '84vh',
                                    borderRadius: '12px',
                                    mt: 1,
                                    overflowY: 'auto',
                                    p: 0,
                                    boxShadow: '0 12px 32px rgba(13, 71, 161, 0.2)',
                                },
                            }}
                        >
                            <div className="mobile-menu-head">
                                <span>Menu</span>
                                <button type="button" onClick={closeAllMenus}>Close</button>
                            </div>
                            {location.pathname !== '/' && (
                                <MenuItem onClick={goHome}>
                                    <span className="menu-link">Home</span>
                                </MenuItem>
                            )}
                            <MenuItem className="mobile-menu-label" disabled>Insurance Products</MenuItem>
                            {productLinks.map(renderInternalItem)}
                            <MenuItem className="mobile-menu-label" disabled>Advisory</MenuItem>
                            {advisoryLinks.map(renderInternalItem)}
                            <MenuItem className="mobile-menu-label" disabled>Company</MenuItem>
                            {companyLinks.map(renderInternalItem)}
                            <MenuItem className="mobile-menu-label" disabled>Login</MenuItem>
                            {loginLinks.map(renderExternalItem)}
                        </Menu>
                    </>
                ) : (
                    <nav className="menu-items" aria-label="Main navigation">
                        {location.pathname !== '/' && (
                            <Button color="inherit" onClick={goHome}>
                                <span className="nav-link">Home</span>
                            </Button>
                        )}

                        <Button
                            color="inherit"
                            onClick={event => setProductsAnchor(event.currentTarget)}
                            onMouseEnter={event => openHoverMenu(event, setProductsAnchor)}
                        >
                            <span className="nav-link">Products</span>
                        </Button>
                        <Menu
                            anchorEl={productsAnchor}
                            open={Boolean(productsAnchor)}
                            onClose={closeAllMenus}
                            MenuListProps={{
                                onMouseEnter: keepHoverMenuOpen,
                                onMouseLeave: delayCloseMenus,
                            }}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            PaperProps={menuPaperProps}
                        >
                            {productLinks.map(renderInternalItem)}
                        </Menu>

                        <Button
                            color="inherit"
                            onClick={event => setAdvisoryAnchor(event.currentTarget)}
                            onMouseEnter={event => openHoverMenu(event, setAdvisoryAnchor)}
                        >
                            <span className="nav-link">Advisory</span>
                        </Button>
                        <Menu
                            anchorEl={advisoryAnchor}
                            open={Boolean(advisoryAnchor)}
                            onClose={closeAllMenus}
                            MenuListProps={{
                                onMouseEnter: keepHoverMenuOpen,
                                onMouseLeave: delayCloseMenus,
                            }}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            PaperProps={menuPaperProps}
                        >
                            {advisoryLinks.map(renderInternalItem)}
                        </Menu>

                        <Button
                            color="inherit"
                            onClick={event => setCompanyAnchor(event.currentTarget)}
                            onMouseEnter={event => openHoverMenu(event, setCompanyAnchor)}
                        >
                            <span className="nav-link">Company</span>
                        </Button>
                        <Menu
                            anchorEl={companyAnchor}
                            open={Boolean(companyAnchor)}
                            onClose={closeAllMenus}
                            MenuListProps={{
                                onMouseEnter: keepHoverMenuOpen,
                                onMouseLeave: delayCloseMenus,
                            }}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            PaperProps={menuPaperProps}
                        >
                            {companyLinks.map(renderInternalItem)}
                        </Menu>

                        <Button
                            color="inherit"
                            onClick={event => setLoginAnchor(event.currentTarget)}
                            onMouseEnter={event => openHoverMenu(event, setLoginAnchor)}
                        >
                            <span className="nav-link">Login</span>
                        </Button>
                        <Menu
                            anchorEl={loginAnchor}
                            open={Boolean(loginAnchor)}
                            onClose={closeAllMenus}
                            MenuListProps={{
                                onMouseEnter: keepHoverMenuOpen,
                                onMouseLeave: delayCloseMenus,
                            }}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            PaperProps={menuPaperProps}
                        >
                            {loginLinks.map(renderExternalItem)}
                        </Menu>

                        <Button color="inherit" onClick={() => navigate('/contact-us')} className="quote-nav-button">
                            Get Assistance
                        </Button>
                    </nav>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
