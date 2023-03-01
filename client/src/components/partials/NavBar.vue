<template>
  <div id="navbar">
    <nav>
      <v-row>
        <div class="logo col-2">
          <router-link to="/">
            <img src="../../assets/logo_banner.png" id="logo" />
          </router-link>
        </div>
        <div class="col-8 navbar">
          <router-link to="/">
            <v-icon color="white">mdi-home</v-icon>
            <span>Accueil</span>
          </router-link>
          <router-link to="/carte">
            <v-icon color="white">mdi-map</v-icon>
            <span>Carte interactive</span>
          </router-link>
          <div @click="(isOpen = !isOpen)">
            <a href="#">
              <v-icon color="white">mdi-view-list</v-icon>
              <span>Listes </span>
              <svg viewBox="0 0 1030 638" width="10">
                <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
                  fill="#FFF"></path>
              </svg>
            </a>
          </div>
          <router-link to="/contact">
            <v-icon size="24" color="white">mdi-email</v-icon>
            <span>Nous contacter</span>
          </router-link>
          <router-link to="/livre_d_or">
            <v-icon size="24" color="white">mdi-comment</v-icon>
            <span>Livre d'or</span>
          </router-link>
          <router-link to="/mes_billets" v-if="userConnected">
            <v-icon size="24" color="white">mdi-ticket</v-icon>
            <span>Mes billets</span>
          </router-link>
        </div>
        <div class="col-2 navbar">
          <router-link to="/connexion" class="connexion" v-if="!userConnected">
            <span class="accountIcon">
                <v-icon size="36" color="white">mdi-account-circle</v-icon>
                <span>Se connecter</span>
            </span>
          </router-link>
          <a class="accountIcon" @click="logout" v-else>
            {{userConnected.prenom}}
            <v-icon size="36" color="white">mdi-logout</v-icon>
          </a>
        </div>
      </v-row>
    </nav>
    <nav class="sub-menu-listes" v-if="isOpen">
        <div class="menu-item">
          <router-link to="/maneges">Liste des manèges</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/prestataires">Liste des prestataires</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/stands">Liste des stands</router-link>
        </div>
    </nav>
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";

export default {
  name: "NavBar",
  data: () => ({
    isOpen : false
  }),
  computed:{
    ...mapState(['userConnected']),
  },
  created() {
    this.isOpen=false;
  },
  methods: {
    ...mapMutations(['setUserConnected']),
    logout(){
      this.$cookie.delete('userAuthentificated');
      this.setUserConnected('')
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  text-align: center;
  padding: 10px;
  background-color: rgb(29, 28, 27);
  transition: all .2s ease-in-out;
}

.sub-menu-listes {
  display: flex;
  text-align: center;
  background-color: rgb(43, 42, 40);
}

nav text {
  text-align: center;
}

nav a {
  font-weight: bold;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  color: #ffffff;
  margin: 0 30px 0 30px;
  text-decoration: none;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar span {
  vertical-align: middle;
  margin-left: 10px;
}

nav a:hover {
  color: rgb(212, 128, 17);
}

nav a.router-link-exact-active {
  color: rgb(212, 128, 17);
}

#logo {
  width: 60%;
}
</style>