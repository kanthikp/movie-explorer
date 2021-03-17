import React, { useState, useEffect } from 'react';
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
import { Movie, MovieSearchResponse, MovieDetailsResponse } from '../types/movie';
import { fetchCollection, fetchDetails } from '../repo/movie';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Main(props: Props) {
  const { window } = props;
  // const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchString, setSearchString] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [totalMovieRecords, setTotalMovieRecords] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const fetchMovieDetails = (imdbId: string) => {
    fetchDetails({ i: imdbId, plot: 'full' }).then((resp: MovieDetailsResponse | Movie) => {
      try {
        debugger;
        setSelectedMovie(resp as Movie);
      } catch {}
    });
  };
  const fetchMovies = (params: any) => {
    fetchCollection(params).then((resp: MovieSearchResponse) => {
      if (resp.Response === 'True') {
        setMoviesData(resp.Search || []);
        setTotalMovieRecords(resp.totalResults || 0);
      }
    });
  };
  const onPageChange = (pageNumber: number) => {
    fetchMovies({ s: searchString, type: 'movie', page: pageNumber });
  };

  const searchPanel = (
    <Box
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      justifyContent="center"
      p={2}
      width={1}
      height="90%"
    >
      <Search
        onChange={(value: string) => {
          setSearchString(value);
          setSelectedMovie(undefined);
          fetchMovies({ s: searchString, type: 'movie' });
        }}
      />
      <Divider />
      <MovieList
        movies={moviesData}
        onSelect={(imdbId: string) => {
          // setSelectedMovie(moviesData.find((m) => m.imdbID === imdbId));
          fetchMovieDetails(imdbId);
        }}
      />
      <Divider />
      <Paginator
        totalMovieRecords={totalMovieRecords}
        pageSize={10}
        onChange={(value: number) => {
          onPageChange(value);
        }}
      />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box width={1} height="100vh" display="flex">
        <Box minWidth="350px">{searchPanel}</Box>
        <Box width="calc(100%-350px)" display="flex" bgcolor="blue">
          {selectedMovie && <MovieDetails movie={selectedMovie} />}
        </Box>
      </Box>
      {/* <div className={classes.root}>
      <CssBaseline />
      <Header title={selectedMovie?.Title || ''} />
      <nav className={classes.drawer} aria-label="mailbox folders">
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
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div> */}
    </>
  );
}
