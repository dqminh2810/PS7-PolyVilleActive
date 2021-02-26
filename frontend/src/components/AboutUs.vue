<template>
 <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
  <p>
   Nous somme une équipe de 3 personnes issus de la promotion 2022 de polytech Nice Sophia. <br><br>
   Nous avons alons nous présenter.
  </p>
 </div>
 <div class="row mb-5">
  <div class="col resize-img">
   <img src="../../img/photo.jpg"/>
  </div>
  <div class="col-9">
   <p class="jumbotron h-100">
    Hamza
   </p>
  </div>
 </div>

 <div class="row mb-5">
  <div class="col-9">
   <p class="jumbotron h-100">
    Léo <!-- est un étudiant de 21 ans originaire de Saint-Cyr-Sur-Mer dans le var. <br>
    Sa passion pour l'informatique et sa curiosité le pousse à explorer de nouvelles voies et à ne pas rester statiques. -->
   </p>
  </div>
  <div class="col resize-img">
   <img src="../../img/IMG_20201208_113041.jpg"/>
  </div>
 </div>

 <div class="row mb-5">
  <div class="col resize-img">
   <img src="../../img/avatar2.jpg"/>
  </div>
  <div class="col-9">
   <p class="jumbotron h-100">
    Minh
   </p>
  </div>
 </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>
 .resize-img{
  display: inline-block;
  position:relative;
  width: 30vh;
  height: 30vh;
  overflow: hidden;
  border-radius: 50%;
 }

 .resize-img img{
  width: auto;
  height: 100%;
 }
</style>
