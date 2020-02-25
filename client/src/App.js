import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Link to="/">
          MovieList
        </Link>
        <Link to="/movies/">
          Movie
        </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/movies/:id">
          <Movie />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
