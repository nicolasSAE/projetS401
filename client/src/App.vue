<template>
  <v-app>
    <NavBar />
    <router-view />
    <FooterVue />
  </v-app>
</template>

<script>
import NavBar from "./components/partials/NavBar.vue";
import FooterVue from "./components/partials/Footer.vue";
import {mapMutations} from "vuex";
export default {
  name: "App",
  components: {
    NavBar,
    FooterVue
  },

  data: () => ({
  }),
  methods:{
    ...mapMutations(['setUserConnected'])
  },
  created(){
    this.setUserConnected(JSON.parse(this.$cookie.get('userAuthentificated')));
  }
};
</script>
