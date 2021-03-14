import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Search from './Search';
import MovieDetails from './MovieDetails';
import Header from './MovieDetails/Header';
import MovieList from './MovieList';
import Paginator from './Paginator';
import { Box } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    bottomDrawer: {
      marginTop: 'auto',
      marginBottom: '.94rem'
    }
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Main(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchString, setSearchString] = React.useState<string>('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const filterMovieResults = (value: string) => {
    setSearchString(value);
  };

  const drawer = (
    <Box display="flex" flexDirection="column">
      <Box className={classes.toolbar} />
      <Search onChange={(value: string) => filterMovieResults(value)} />
      <Divider />
      <MovieList />
      <Divider />
      <Box className={classes.bottomDrawer}>
        <Paginator
          totalPages={10}
          currentPage={1}
          onChange={(value: number) => {
            alert(value);
          }}
        />
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title={searchString} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {searchString && <MovieDetails />}
    </div>
  );
}
