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
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/ipro new image.png';
import './header.css';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const navigate = useNavigate();

    // Anchors
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    const [whatWeDoAnchor, setWhatWeDoAnchor] = React.useState(null);
    const [aboutUsAnchor, setAboutUsAnchor] = React.useState(null);
    const [productsAnchor, setProductsAnchor] = React.useState(null);
    const [motorAnchor, setMotorAnchor] = React.useState(null);
    const [partnersAnchor, setPartnersAnchor] = React.useState(null);

    const handleOpen = setter => event => setter(event.currentTarget);
    const handleClose = setter => () => setter(null);

    // Shared dropdown menu style
    const menuPaperProps = {
        sx: {
            minWidth: 220,
            maxWidth: 280,
            maxHeight: '400px',
            overflowY: 'auto',
            p: 0,
            boxShadow: 3,
        },
    };

    return (
        <AppBar
            position="sticky"
            className={`app-bar ${isMobile ? 'mobile' : ''}`}
            sx={{
                backgroundColor: isMobile ? '#0d47a1' : 'transparent',
                boxShadow: 'none',
            }}
        >
            <Toolbar className="toolbar" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Logo */}
                <img
                    src={logo}
                    className="header-logo"
                    alt="Logo"
                    style={{
                        width: isMobile ? '140px' : '180px',
                        height: isMobile ? '50px' : '70px',
                        objectFit: 'contain',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/')}
                />

                {/* Menu Items */}
                <div className="menu-items">
                    {isMobile ? (
                        <>
                            {/* Hamburger Menu */}
                            <IconButton
                                color="inherit"
                                onClick={handleOpen(setMenuAnchor)}
                                className="hamburger-icon"
                            >
                                <MenuIcon />
                            </IconButton>
                           <Menu
  anchorEl={menuAnchor}
  open={Boolean(menuAnchor)}
  onClose={handleClose(setMenuAnchor)}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  PaperProps={{
    sx: {
      width: "260px",
      maxHeight: "80vh",
      borderRadius: "12px",
      mt: 1,
      boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
      overflowY: "auto",
      p: 0
    }
  }}
>
    <MenuItem onClick={handleOpen(setMotorAnchor)}>
  <span className="menu-link">
    Motor Insurance ▶
  </span>
</MenuItem>

<Menu
  anchorEl={motorAnchor}
  open={Boolean(motorAnchor)}
  onClose={handleClose(setMotorAnchor)}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  PaperProps={menuPaperProps}
>

<MenuItem onClick={handleClose(setMotorAnchor)}>
  <Link to="/2-wheeler" className="menu-link">
    Two-Wheeler Insurance
  </Link>
</MenuItem>

<MenuItem onClick={handleClose(setMotorAnchor)}>
  <Link to="/4-wheeler" className="menu-link">
    Four-Wheeler Insurance
  </Link>
</MenuItem>

<MenuItem onClick={handleClose(setMotorAnchor)}>
  <Link to="/commercial-insurance" className="menu-link">
    Commercial Vehicle Insurance
  </Link>
</MenuItem>

</Menu>
                                {location.pathname !== '/' && (
                                    <MenuItem
                                        onClick={() => {
                                            handleClose(setMenuAnchor)();
                                            navigate('/');
                                        }}
                                    >
                                        <span className="menu-link">Home</span>
                                    </MenuItem>
                                )}
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/our-services" className="menu-link">
                                        Our Services
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/why-ipro-infinty" className="menu-link">
                                        Why I-Pro Infinity
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/Aboutus" className="menu-link">
                                        About Us
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/beliefs-section" className="menu-link">
                                        Our Beliefs
                                    </Link>
                                </MenuItem>
                                {/* Products simplified for mobile */}
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/healthinsurance" className="menu-link">
                                        Health Insurance
                                    </Link>
                                </MenuItem>
                               
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/corporate" className="menu-link">
                                        Corporate Insurance
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/travelinsurance" className="menu-link">
                                        Travel Insurance
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/Lifeinsurance" className="menu-link">
                                        Life Insurance
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/homeinsurance" className="menu-link">
                                        Home Insurance
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <Link to="/career" className="menu-link">
                                        Careers
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <a
                                        href="https://web.iproinfinity.com/pos/"
                                        className="menu-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Partner Registration
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <a
                                        href="https://web.iproinfinity.com/login.php"
                                        className="menu-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Partner Login
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMenuAnchor)}>
                                    <a
                                        href="https://web.iproinfinity.com/customer-profile/"
                                        className="menu-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Customer Login
                                    </a>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            {/* Show Home in Desktop if not on home page */}
                            {location.pathname !== '/' && (
                                <Button color="inherit" onClick={() => navigate('/')}>
                                    <span className="nav-link">HOME</span>
                                </Button>
                            )}

                            {/* What We Do */}
                            <Button color="inherit" onClick={handleOpen(setWhatWeDoAnchor)}>
                                <span className="nav-link">WHAT WE DO</span>
                            </Button>
                            <Menu
                                anchorEl={whatWeDoAnchor}
                                open={Boolean(whatWeDoAnchor)}
                                onClose={handleClose(setWhatWeDoAnchor)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                PaperProps={menuPaperProps}
                            >
                                <MenuItem onClick={handleClose(setWhatWeDoAnchor)}>
                                        <Link to="/our-business" className="menu-link">
                                        Our Business
                                    </Link>
                                </MenuItem>
                                    <MenuItem onClick={handleClose(setWhatWeDoAnchor)}>
                                        <Link to="/why-insurance-intermediary" className="menu-link">
                                            Why an Insurance intermediary?
                                        </Link>
                                    </MenuItem>
                               
                                    
                                    <MenuItem onClick={handleClose(setWhatWeDoAnchor)}>
                                        <Link to="/why-ipro-infinty" className="menu-link">
                                            Why i-Pro Infinity
                                        </Link>
                                    </MenuItem>
                            </Menu>

                            {/* About Us */}
                            <Button color="inherit" onClick={handleOpen(setAboutUsAnchor)}>
                                <span className="nav-link">ABOUT US</span>
                            </Button>
                            <Menu
                                anchorEl={aboutUsAnchor}
                                open={Boolean(aboutUsAnchor)}
                                onClose={handleClose(setAboutUsAnchor)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                PaperProps={menuPaperProps}
                            >
                                <MenuItem onClick={handleClose(setAboutUsAnchor)}>
                                    <Link to="/beliefs-section" className="menu-link">
                                        Our Beliefs
                                    </Link>
                                </MenuItem>
                                {/* <MenuItem onClick={handleClose(setAboutUsAnchor)}>
                                    <Link to="/2-wheeler" className="menu-link">
                                        Our Mentors
                                    </Link>
                                </MenuItem> */}
                                <MenuItem onClick={handleClose(setAboutUsAnchor)}>
                                        <Link to="/Aboutus" className="menu-link">
                                        Our Team
                                    </Link>
                                </MenuItem>
                            </Menu>

                            {/* Products */}
                            <Button color="inherit" onClick={handleOpen(setProductsAnchor)}>
                                <span className="nav-link">PRODUCTS</span>
                            </Button>
                            <Menu
                                anchorEl={productsAnchor}
                                open={Boolean(productsAnchor)}
                                onClose={handleClose(setProductsAnchor)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                PaperProps={menuPaperProps}
                            >

                                    <MenuItem onClick={handleClose(setProductsAnchor)}>
                                        <Link to="/personal-insurance" className="menu-link">
                                            Personal Insurance
                                        </Link>
                                   
                                </MenuItem>
                                {/* Alphabetical order */}
                                
                                <MenuItem onClick={handleClose(setProductsAnchor)}>
                                    <Link to="/healthinsurance" className="menu-link">
                                        Health Insurance
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setProductsAnchor)}>
                                        <Link to="/homeinsurance" className="menu-link">
                                        Home Insurance
                                    </Link>
                                </MenuItem>
                                    <MenuItem onClick={handleClose(setProductsAnchor)}>
                                        <Link to="/lifeinsurance" className="menu-link">
                                            Life Insurance
                                        </Link>
                                    </MenuItem>
                                {/* Motor with submenu */}
                                <MenuItem onClick={handleOpen(setMotorAnchor)}>
                                    <span className="menu-link">
                                        Motor Insurance <span className="menu-arrow">▶</span>
                                    </span>
                                </MenuItem>
                                    <MenuItem onClick={handleClose(setProductsAnchor)}>
                                        <Link to="/travelinsurance" className="menu-link">
                                            Travel Insurance
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose(setProductsAnchor)}>
                                        <Link to="/corporate-insurance" className="menu-link">
                                            Corporate
                                        </Link>
                                       
                                    </MenuItem>
                                    <MenuItem onClick={handleClose(setProductsAnchor)}>
                                        <Link to="/corporate" className="menu-link">
                                            Corporate Insurance
                                        </Link>
                                    </MenuItem>
                            </Menu>

                            {/* Motor Submenu */}
                            <Menu
                                anchorEl={motorAnchor}
                                open={Boolean(motorAnchor)}
                                onClose={handleClose(setMotorAnchor)}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                PaperProps={menuPaperProps}
                            >
                                <MenuItem onClick={handleClose(setMotorAnchor)}>
                                        <Link to="/2-wheeler" className="menu-link">
                                        Two-Wheeler Insurance
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMotorAnchor)}>
                                        <Link to="/4-wheeler" className="menu-link">
                                        Four-Wheeler Insurance
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose(setMotorAnchor)}>
                                        <Link to="/commercial-insurance" className="menu-link">
                                        Commercial Vehicle Insurance
                                    </Link>
                                </MenuItem>
                            </Menu>

                              

                            {/* Careers */}
                            <Button color="inherit">
                                <Link to="/career" className="nav-link">
                                    CAREERS
                                </Link>
                            </Button>

                            {/* Partners */}
                            <Button color="inherit" onClick={handleOpen(setPartnersAnchor)}>
                                <span className="nav-link"> Login </span>
                            </Button>
                            <Menu
                                anchorEl={partnersAnchor}
                                open={Boolean(partnersAnchor)}
                                onClose={handleClose(setPartnersAnchor)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                PaperProps={menuPaperProps}
                            >
                                    <MenuItem onClick={handleClose(setPartnersAnchor)}>
                                        <a
                                            href="https://web.iproinfinity.com/customer-profile/"
                                            className="menu-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Customer Login
                                        </a>
                                    </MenuItem>
                                <MenuItem onClick={handleClose(setPartnersAnchor)}>
                                    <a
                                        href="https://web.iproinfinity.com/login.php"
                                        className="menu-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Partner Login
                                    </a>
                                </MenuItem>
                                    <MenuItem onClick={handleClose(setPartnersAnchor)}>
                                        <a
                                            href="https://web.iproinfinity.com/pos/"
                                            className="menu-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Partner Registration
                                        </a>
                                    </MenuItem>
                                
                            </Menu>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
