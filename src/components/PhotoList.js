import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function PhotoList() {
  const { user, photos, loadingPhotos } = useContext(UserContext);

  if (!user?.isLoggedIn) return null;
  if (loadingPhotos) return <p>Loading photos...</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {photos.slice(0, 10).map(photo => (
        <div key={photo.id} style={{ margin: '10px' }}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p style={{ fontSize: '12px', width: '150px' }}>{photo.title}</p>
        </div>
      ))}
    </div>
  );
}
