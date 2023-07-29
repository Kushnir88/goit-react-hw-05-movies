import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = React.lazy(() => import('../components/Home'));
const MovieDetails = React.lazy(() => import('../components/MovieDetails'));
const Cast = React.lazy(() => import('../components/Cast'));
const Reviews = React.lazy(() => import('../components/Reviews'));
const SearchPage = React.lazy(() => import('../pages/SearchPage'));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Пошук</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
