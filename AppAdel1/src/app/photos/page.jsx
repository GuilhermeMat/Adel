"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const photos = () => {
    const [photos, setPhotos] = useState([]);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          const response = await axios.get('https://api.flickr.com/services/rest', {
            params: {
              method: 'flickr.people.getPhotos',
              api_key: 'fee58c9bd3eabcb2cf65b34534433d82',
              user_id: '200695492@N02',
              format: 'json',
              nojsoncallback: 1
            }
          });
          setPhotos(response.data.photos.photo);
        } catch (error) {
          console.error('Erro ao buscar fotos do Flickr:', error);
        }
      };
  
      fetchPhotos();
    }, []);
  
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Fotos do Flickr</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
          {photos.map(photo => (
            <div key={photo.id} style={{ margin: 10, alignItems:'center' }}>
              <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}  style={{width:'100%'}}/>
            </div>
          ))}
        </div>
      </div>
    );
  };  
  
  export default photos;