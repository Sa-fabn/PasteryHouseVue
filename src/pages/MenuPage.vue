<template>
    <div class="menu-page">
      <h1>Menu</h1>
      <div class="gallery-container">
        <div class="image-gallery">
          <div v-for="(image, index) in images" :key="index" class="image-item">
            <img :src="image.url" :alt="image.alt" class="gallery-image">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  const images = ref([]);
  
  onMounted(async () => {
    try {
  const response = await axios.get('https://pixabay.com/api/', {// une requete http est envoyée à l'api pixabay pour géner les images.
    params: {
      key: '42523714-b8254dcc1f05cc8bff83f89aa',
      q: 'pâtisserie',
      per_page: 100,
      image_type: 'photo',
      orientation: 'horizontal',
      category: 'food',
      safesearch: 'true',
      editors_choice: 'true',
      order: 'popular',
      min_width: 400,
      min_height: 300
    }
  });
  
      // les données des images récupérées seront stockés dans un tableau d'objet images.value, chaque objet ou image a 2 propriétés
      images.value = response.data.hits.map(hit => ({
        url: hit.webformatURL,
        alt: hit.tags
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des images :', error);
    }
  });
  </script>
  
  <style scoped>
  .menu-page {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .gallery-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 70vh; 
    overflow-y: scroll;
  }
  
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
  }
  
  .image-item {
    position: relative;
  }
  
  .gallery-image {
    width: 100%;
    height: auto;
  }
  
  .image-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
  }
</style>