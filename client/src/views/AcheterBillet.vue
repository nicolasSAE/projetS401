<template>
  <div id="app">
    <div id="inscription">
      <div style="width:40%">
        <v-card elevation="4" class="cardInscription">
          <div class="headerInscription" style="margin-bottom: 15px;">
            <img alt="Roue" src="../assets/wheel.gif" style="width: 20%">
          </div>
          <div>
            <v-form id="formBillet" @submit.prevent="submitBillet" action="/" method="post">
              <v-select :items="namesAttrations" item-value="selectedAttraction" v-model="selectedAttraction">
              </v-select>
              <v-btn color="success" type="submit" >Prendre un billet</v-btn>
            </v-form>
          </div>
        </v-card>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: 'AcheterBilletView',
  metaInfo: {
    title: 'Prendre un billet'
  },
  data(){
    return {
      selectedAttraction: null
    }
  },
  computed:{
    ...mapState(['attractions','userConnected']),
    namesAttrations(){
      let names = [];
      this.attractions.forEach(attraction => names.push(attraction.nom))
      return names;
    },
    findIdAttraction(){
      let attraction = this.attractions.find(attraction => attraction.nom == this.selectedAttraction);
      return attraction.id_attraction;
    }
  },
  created() {
    this.$store.dispatch('getAttractionsFromAPI');
  },
  methods : {
    submitBillet(){
      axios.post(`http://localhost:3000/billets/post/${this.userConnected.id}`, {id_attraction:this.findIdAttraction})
          .then((res) => console.log(res))
          .then(()=>this.$router.push("/mes_billets"))
          .catch((error)=>{
            console.log(`http://localhost:3000/billets/post/${this.userConnected.id}`);
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>
#inscription,
.headerInscription,
#formBillet {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cardInscription {
  border-radius: 40px;
  padding: 10px 0 20px 0;
}
</style>