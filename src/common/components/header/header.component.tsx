import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Container } from "@mui/system";
import { TopHeader } from "./header.styles";
import Link from "next/link";
import { useState } from "react";

import { menu } from "./menu";

const ShortCutMenu: React.FC = ({}) => (
  <>
    <Link href="/" title="search">
      <IconButton disableRipple color="inherit">
        <SearchIcon />
      </IconButton>
    </Link>
    <Link href="/" title="account">
      <IconButton disableRipple color="inherit">
        <PersonOutlinedIcon />
      </IconButton>
    </Link>
    <Link href="/" title="favorite">
      <IconButton disableRipple color="inherit">
        <FavoriteBorderIcon />
      </IconButton>
    </Link>
    <Link href="/cart" title="cart">
      <IconButton disableRipple color="inherit">
        <ShoppingBagOutlinedIcon />
      </IconButton>
    </Link>
  </>
);

const BurgerMenu: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  const hasChildren = (item) => {
    const { items: children } = item;

    if (children === undefined) {
      return false;
    }

    if (children.constructor !== Array) {
      return false;
    }

    if (children.length === 0) {
      return false;
    }

    return true;
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
  };

  const SingleLevel = ({ item }) => {
    return (
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    );
  };

  const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };

    return (
      <>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItem key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </>
    );
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: { minWidth: 400, maxWidth: "80%", pt: "64px" },
        }}
      >
        <IconButton
          color="inherit"
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: 15, right: 30 }}
        >
          <CloseOutlinedIcon />
        </IconButton>
        {menu.map((item, key) => (
          <MenuItem key={key} item={item} />
        ))}
      </SwipeableDrawer>
    </>
  );
};

export const Header: React.FC = ({ children }) => (
  <>
    <TopHeader></TopHeader>
    <AppBar color="transparent" position="fixed" elevation={0}>
      <Container>
        <Toolbar>
          <BurgerMenu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            Title
          </Typography>
          {children}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ShortCutMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
);
