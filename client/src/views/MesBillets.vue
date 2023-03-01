<script>
import { mapState} from 'vuex';
export default {
  name: 'MesBilletsVue',
  metaInfo: {
    title: 'Liste de mes billets'
  },
  data () {
    return {
      search: '',
      attractionSelected:{}
    }
  },
  computed:{
    ...mapState(['billets', 'attractions']),
  },
  created() {
    this.$store.dispatch('getBilletsByCompte');
    this.$store.dispatch('getAttractionsFromAPI');
  },
  methods:{
    findIdAttraction(id){
      let attraction = this.attractions.find(attraction => attraction.id_attraction == id);
      return attraction.nom;
    }
  }
}
</script>

<template>
  <div id="app">
    <v-container>

      <h1>Vos billets</h1>
      <router-link to="/acheter_billet" >
        <v-btn depressed color="primary" class="mb-4">Acheter</v-btn>
      </router-link>
      <div v-for="(billet, index) in this.billets" :key="index">
        <div>
          <v-card elevation="4" class="mb-5">
            <v-card-text>
              <span>Date : {{billet.date_billet}}</span><br>
              <span>Prix : {{billet.prix}}€</span><br>
              <span>Attraction : {{findIdAttraction(billet.id_attraction)}}</span><br>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>