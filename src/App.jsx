import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
          }
        });
        setPhotos(response.data);
      } catch (error) {
        console.error('Erro ao buscar fotos', error);
      }
    };

    fetchPhotos();
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.alt_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PhotoGrid photos={filteredPhotos} />
      <Footer />
    </div>
  );
};

export default App;
