<template>
  <div class="app">
    <div>
      <router-link to="/maneges">
        <v-btn depressed color="primary">
            <span class="boutton">Retour à la liste des manèges</span>
        </v-btn>
      </router-link>
    </div>
    <div class="manege">
      <v-alert
          type="error"
          dense
          v-if="error"
      >
        {{error}}
      </v-alert>
      <v-card elevation="8" style="padding: 60px;border-radius: 30px;">
        <v-card-title>Formulaire pour la modification du manège</v-card-title>
        <v-card-text>
          Afin d'incrire votre manège à aux Papiots vous devez remplirer le formulaire ci-dessous.
          Votre demande sera traitée sera dans les plus brefs délais.
        </v-card-text>
        <div>
          <v-form class="contactForm" action="/" @submit.prevent="submitForm">
            <v-text-field
                label="Nom de l'attraction"
                required
                v-model="form.nom">
            </v-text-field>
            <v-text-field
                label="Prix enfant"
                prefix="€"
                required
                v-model="form.prix_enfant">
            </v-text-field>
            <v-text-field
                label="Prix adulte"
                prefix="€"
                required
                v-model="form.prix_adulte">
            </v-text-field>
            <v-text-field
                label="Taille requise"
                type="number"
                step="0.1"
                v-model="form.taille_requise"
                required></v-text-field>
            <v-btn color="info" type="submit">Modifier</v-btn>
          </v-form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModifierManege",
  data(){
    return {
      form: {
        nom:'',
        prix_enfant:'',
        prix_adulte:'',
        taille_requise:''
      },
      error:''
    }
  },
  props: {
    attraction: Object,
  },
  methods:{
    submitForm(){
      console.log(this.form);
      this.form.id = this.attraction.id_attraction
      axios.put('http://localhost:3000/attractions', this.form)
          .then((reponse) => {
            console.log(reponse);
            this.$router.push('/maneges');
          })
          .catch(error => {
            console.error(error)
            this.error = error.response.status + " : " + error.response.data.error;
          })
    }
  }
}
</script>

<style scoped>
  v-btn{
    width: 20px;
  }
  .boutton{
    color: white;
  }
</style>