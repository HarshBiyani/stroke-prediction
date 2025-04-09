import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dataset from './pages/Dataset';
import Predict from './pages/Predict';
import './App.css';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#6F4E37', // coffee brown
      },
      secondary: {
        main: '#C4A484', // beige
      },
      background: {
        default: '#F5E6D3', // light beige
        paper: '#FFFFFF'
      },
      text: {
        primary: '#2C1810', // dark coffee
        secondary: '#6F4E37' // coffee brown
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/dataset" element={<Dataset />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
