<script>
import { mapState} from 'vuex';
export default {
  name: 'ListeManegeView',
  metaInfo: {
    title: 'Liste des manèges - Les Papiots'
  },
  data () {
    return {
      search: '',
      attractionSelected:{}
    }
  },
  computed:{
    ...mapState(['attractions','userConnected']),
    filterSearch() {
      let filter = this.attractions.filter(attraction => attraction.nom.includes(this.search));
      //console.log(Array.isArray(this.attractions), this.attractions);
      if (filter.length !== 0)
        return filter;
      else return this.attractions;
    },
    isAdmin(){
      if(this.userConnected==null){
        return false;
      }
      return this.userConnected.role=="admin"
    }

  },
  created() {
    this.$store.dispatch('getAttractionsFromAPI');
  },
  methods:{
    saveAttractionSelected(attraction){
      this.attractionSelected = attraction;
    },
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

<template>
  <div id="app">
    <v-container>
      <v-row>
        <div class="col-6">
          <div class="accueil">
            <h1>Liste des manèges</h1>
          </div>
          <v-app id="inspire">
            <v-text-field
                style="width: 50%;max-height: 32px;margin-bottom: 30px;"
                v-model="search"
                append-icon="mdi-magnify"
                label="Recherche"
            ></v-text-field>
            <div>
              <div v-for="(attraction, index) in filterSearch" :key="index">
                <div>
                  <v-card elevation="4" class="mb-3">
                    <v-card-title>{{attraction.nom.toUpperCase()}}</v-card-title>
                    <v-card-text>
                      <v-img
                          max-width="200px"
                          src="https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg"
                      ></v-img>
                      <span>Propriétaire : {{attraction.compte.nom}} {{attraction.compte.prenom}}</span><br>
                      <span>Type d'attraction : {{attraction.type_attraction.designation}}</span><br>
                      <span>Taille requise : {{attraction.taille_requise}}m</span><br>
                      <span>Temps d'attente : {{attraction.attente}} min</span><br>
                      <span>Prix enfant : {{attraction.prix_enfant}}€   -   </span>
                      <span>Prix adulte : {{attraction.prix_adulte}}€</span>
                      <div v-if="isAdmin || isPresta(attraction.compte.id)">
                        <router-link :to="{name:'manege', params:{id:attraction.id_attraction}}" >
                          <v-btn  depressed color="primary" @click="saveAttractionSelected(attraction)">Modifier</v-btn>
                        </router-link>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </div>
          </v-app>
        </div>
        <div class="col-6">
          <router-view :attraction="attractionSelected"></router-view>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
</style>