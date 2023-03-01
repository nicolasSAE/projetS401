<template>
  <div id="app">
    <div class="image">
      <v-img :src="require('../../public/manege/manege1.jpg')" class="image_principale">
      </v-img>
      <h1 class="titre_fete_foraine">Les Papiots</h1>
      <h2 class="date">Du 1 juillet au 15 juillet 2023 à Belfort</h2>
    </div>
    <div class="text">
      <p>
        La grande fête foraine de l’Est de la France, Les Papiots s’installent
        tous les ans pendant près de deux mois, de début juillet à fin août,
        près du centre-ville de Belfort. À cette occasion, un peu plus de 80
        forains en tous genres (manèges, jeux, boutiques, stands de nourriture)
        sont présents lors de ce grand événement.
      </p>
      <hr />
    </div>

    <div class="manege">
      <h2 id="titre_troisieme_partie">Une grande variétée de manèges</h2>
      <v-carousel cycle>
        <v-carousel-item v-for="(item, i) in imagesManeges" :key="i" :src="item.src">
        </v-carousel-item>
      </v-carousel>
    </div>
    <h2 id="titre_sponsor">Sponsors</h2>
    <div class="sponsors">
      <div>
        <v-row>
          <v-col cols="3" v-for="(sponsor, index) in imagesSponsors" :key="index">
            <v-card align="center">
              <v-img class="sponsor" :src="sponsor.src"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AccueilView",

  metaInfo: {
    title: "Accueil - Les Papiots",
  },
  data: () => ({
    imagesManeges: [
      { src: require("../../public/manege/manege4.jpg") },
      { src: require("../../public/manege/manege2.jpg") },
      { src: require("../../public/manege/manege3.jpg") },
      { src: require("../../public/manege/peche_aux_canards.jpg") },
    ],
    imagesSponsors: [
      { src: require("../../public/logo/sponsors/france-3-bourgogne-franche-comte-logo.jpg") },
      { src: require("../../public/logo/sponsors/letudiant.png") },
      { src: require("../../public/logo/sponsors/societe-generale-logo.png") },
      { src: require("../../public/logo/sponsors/LEstRepublicain.png") },
      { src: require("../../public/logo/sponsors/IUTBM_quadri.jpg") },
      { src: require("../../public/logo/sponsors/J'aime_lire.png") },
      { src: require("../../public/logo/sponsors/Logo-Cristalline.jpg") },
      { src: require("../../public/logo/sponsors/Logo_Carrefour.png") }
    ],
  }),
};
</script>

<style scoped>
/* Première partie de la page d'acceuil */

.image {
  width: 100%;
}

.image_principale {
  float: left;
  width: 100%;
  max-height: 100%;
  filter: blur(4px);
}

.image .titre_fete_foraine {
  position: absolute;
  margin-top: 20%;
  margin-left: 7%;
  color: aliceblue;
  font-size: 160px;
  font-family: Poppins, sans-serif;
  backdrop-filter: blur();
  filter: blur(0);
}

.date {
  position: absolute;
  margin-top: 32%;
  margin-left: 8%;
  color: aliceblue;
  font-size: 40px;
  font-family: Poppins, sans-serif;
}

/* Deuxième partie de la page d'acceuil */

.text {
  margin-top: 1200px;
}

/* Troisième partie de la page d'acceuil */

.manege {

  max-height: 28%;
  margin-bottom: 30px;
}

#titre_troisieme_partie {
  font-size: 45px;
  font-family: Poppins, sans-serif;
  padding: 30px 0px 30px 8%;
}

/* Quatrième partie de la page d'acceuil */

#titre_sponsor {
  font-size: 45px;
  font-family: Poppins, sans-serif;
  padding: 30px 0px 30px 8%;
}

.sponsors {
  margin-left: 60px;
  margin-right: 60px;
}

.sponsor {
  margin-top: 20px;
  width: 50%;
  height: 50%;
}
</style>
