<script>
import {mapState} from "vuex";

export default {
    name: 'ListePrestataire',
    metaInfo: {
    title: 'Liste des prestataires - Les Papiots'
  },
  data () {
    return {
      search: '',
    }
  },
  computed:{
    ...mapState(['prestataires']),
    filterSearch() {
      let filter = this.prestataires.filter(prestataire => prestataire.nom.includes(this.search));
      //console.log(Array.isArray(this.prestataires), this.prestataires);
      if (filter.length !== 0)
        return filter;
      else return this.prestataires;
    }
  },
  created() {
    this.$store.dispatch('getPrestatairesFromAPI');
  }
}
</script>

<template>
  <div id="app">
      <v-container>
        <div class="accueil">
          <h1>Liste des prestataires</h1>
        </div>
        <v-app id="inspire">
          <v-text-field
              style="width: 50%;max-height: 32px;margin-bottom: 30px;"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>
          <div>
            <div v-for="(prestataire, index) in filterSearch" :key="index">
              <a @click="$router.push(`/liste_prestataire/${prestataire.id}`)">
                <v-card elevation="4" class="mb-3">
                  <v-card-text>
                    <v-card-title>{{prestataire.nom}} {{prestataire.prenom}}</v-card-title>
                    <span>Contact : {{prestataire.mail}}</span>
                  </v-card-text>
                </v-card>
              </a>
            </div>
          </div>
        </v-app>
      </v-container>
  </div>
</template>

<style scoped>
  div{
    max-width: 500px;
  }
</style>