import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos }) => {
  if (photos.length === 0) {
    return <p>Nenhuma foto encontrada</p>;
  }

  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
