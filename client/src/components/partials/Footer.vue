<template>
  <div>
    <v-footer class="footer">

      <v-container>
        <v-row class="rowInfos">
          <!-- Colonne gauche réseau sociaux-->
          <div class="col-3 ">
            <span> Retrouvez-nous sur :</span>
            <div>
              <v-icon size="36" color="white">mdi-facebook</v-icon>
              <span>Facebook</span>
            </div>

            <div>
              <v-icon size="36" color="white">mdi-instagram</v-icon>
              <span>Instagram</span>
            </div>

            <div>
              <v-icon size="36" color="white">mdi-twitter</v-icon>
              <span>Twitter</span>
            </div>
          </div>

          <!-- Colonne droite sommaire -->
          <div class="col-6 ">
            <router-link to="/">
              <v-icon color="white">mdi-home</v-icon>
              <span>Accueil</span>
            </router-link>
            <router-link to="/carte">
              <v-icon color="white">mdi-map</v-icon>
              <span>Carte interactive</span>
            </router-link>
            <router-link to="/liste_manege">
              <v-icon color="white">mdi-view-list</v-icon>
              <span>Liste des manèges</span>
            </router-link>
            <router-link to="/contact">
              <v-icon size="24" color="white">mdi-email</v-icon>
              <span>Nous contacter</span>
            </router-link>
          </div>
          <div class="col-3">
            <span style="margin-top: 20px ;">Réalisé par le groupe 9 composé de : </span>
            <ul style="color: white;">
              <li>BASQUIN Nicolas</li>
              <li>BOLMONT Hugo</li>
              <li>DUBOL Lucas</li>
              <li>IMALOU Redha</li>
              <li>PICOT Nicolas</li>
              <li>VALENNE Nathan</li>
            </ul>
          </div>
        </v-row>
        <v-row class="rowCopyright">
          <span>SAE-G9 &copy; 2022. Tous droits réservés</span>
        </v-row>
      </v-container>

    </v-footer>
  </div>
</template>

<script>
export default {
  name: "FooterVue"
}
</script>

<style scoped>
.footer {
  margin-top: 300px;
  width: 100%;
  background-color: rgb(29, 28, 27);
  ;
  position: absolute;
  height: 300px;
}

.footer span {
  padding-right: 10px;
  padding-left: 10px;

  font-weight: bold;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
}

.rowInfos,
.rowCopyright {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>