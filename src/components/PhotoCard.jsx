import React from 'react';
import axios from 'axios';

const PhotoCard = ({ photo }) => {
  const handleDownload = async () => {
    try {
      await axios.get(`https://api.unsplash.com/photos/${photo.id}/download`, {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
        }
      });
      window.open(photo.links.download, '_blank');
    } catch (error) {
      console.error('Erro ao disparar o download', error);
    }
  };

  return (
    <div className="photo-card" onClick={handleDownload}>
      <img src={photo.urls.regular} alt={photo.alt_description} className="photo-img" />
      <div className="photo-data">
        <h3 className="photo-title">{photo.alt_description || 'Foto sem descrição'}</h3>
        <p>
          Photo by <a href={`https://unsplash.com/@${photo.user.username}`}>{photo.user.name}</a> on <a href="https://unsplash.com">Unsplash</a>
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
