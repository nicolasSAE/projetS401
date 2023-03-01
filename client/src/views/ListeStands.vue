<template>
  <div id="app">
    <v-container>
      <v-row>
        <div class="col-6">
          <div class="accueil">
            <h1>Liste des stands</h1>
          </div>
          <v-app id="inspire">
            <v-text-field
                style="width: 50%;max-height: 32px;margin-bottom: 30px;"
                v-model="search"
                append-icon="mdi-magnify"
                label="Recherche"
            ></v-text-field>
            <div>
              <div v-for="(stand, index) in filterSearch" :key="index">
                <div>
                  <v-card elevation="4" class="mb-3">
                    <v-card-title>{{stand.nom.toUpperCase()}}</v-card-title>
                    <v-card-text>
                      <v-img
                          max-width="200px"
                          src="https://www.animation-evenement-ville.fr/wp-content/uploads/2020/11/LE-CHAMBOULTOUT-FORAIN-VIGNETTE-SITE.jpg"
                      ></v-img>
                      <span>Propriétaire : {{stand.compte.nom}} {{stand.compte.prenom}}</span><br>
                      <span>Type de stand : {{stand.type_stand.designation}}</span><br>
                      <span>Temps d'attente : {{stand.attente}} min</span><br>
                      <span>Prix : {{stand.prix}}€</span>
                      <div v-if="isAdmin || isPresta(stand.compte.id)" >
                        <router-link :to="{name:'prestataire', params:{id:stand.id_stand}}">
                          <v-btn depressed color="primary">Modifier</v-btn>
                        </router-link>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </div>

          </v-app>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ListeStands",
  data() {
    return {
      search: '',
    }
  },
  computed:{
    ...mapState(['stands','userConnected']),
    filterSearch() {
      let filter = this.stands.filter(stand => stand.nom.includes(this.search));
      //console.log(Array.isArray(this.attractions), this.attractions);
      if (filter.length !== 0)
        return filter;
      else return this.stands;
    },
    isAdmin(){
      if(this.userConnected==null){
        return false;
      }
      return this.userConnected.role=="admin"
    }
  },
  created() {
    this.$store.dispatch('getStandsFromAPI');
  },
  methods: {
    isPresta(id){
      //si c'est son attraction
      if(this.userConnected==null){
        return false;
      }
      console.log(this.userConnected.id+"    "+id)
      return this.userConnected.id == id;
    }
  }
}
</script>

<style scoped>

</style>