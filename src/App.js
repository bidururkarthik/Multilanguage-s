// src/App.js
import React, { useState } from 'react';
import Menu from './Component/Menu/Menu';
import Settings from './Component/Settings/Settings';
import Container from '@mui/material/Container';

function App() {
  const [language, setLanguage] = useState('en'); // Default language: English

  const menuLabels = {
    en: { home: 'Home', movies: 'Movies', tvShows: 'TV Shows', sports: 'Sports', live: 'Live' },
    fr: { home: 'Accueil', movies: 'Films', tvShows: 'Séries', sports: 'Sports', live: 'En direct' },
    de: { home: 'Zuhause', movies: 'Filme', tvShows: 'Fernsehsendungen', sports: 'Sport', live: 'Live' },
    ru: { home: 'Дом', movies: 'Фильмы', tvShows: 'Телешоу', sports: 'Спорт', live: 'Прямой эфир' },
    es: { home: 'Inicio', movies: 'Películas', tvShows: 'Programas de TV', sports: 'Deportes', live: 'En vivo' },
    zh: { home: '主页', movies: '电影', tvShows: '电视剧', sports: '运动', live: '直播' }
  };

  return (
    <Container maxWidth="md">
      <Settings language={language} setLanguage={setLanguage}/>
      <Menu labels={menuLabels[language]} />
    </Container>
  );
}

export default App;
