<template>
    <div class="error-404">
      <h1>Erreur 404</h1>
      <p>Page introuvable.</p>
      <router-link to="/">Retour à la page d'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Error404Page'
  }
  </script>
  
  <style scoped>
.error-404 {
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
</style>
  