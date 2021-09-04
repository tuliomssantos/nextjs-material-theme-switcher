import type { NextPage } from "next";

// import { themeCreator } from "styles/theme";
// import { ThemeSetup } from "types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useContext } from "react";
import { ThemeContext } from "context/theme";
import { ThemeSetup } from "types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const newTheme: ThemeSetup = {
  palete: {
    primary: {
      main: "#fc035e",
    },
    secondary: {
      main: "##2cd1ab",
    },
  },
};

const Home: NextPage = () => {
  const classes = useStyles();

  const { handleSetTheme } = useContext(ThemeContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1>Home Page</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleSetTheme(newTheme);
        }}
      >
        Change Theme
      </Button>
    </div>
  );
};

export default Home;
