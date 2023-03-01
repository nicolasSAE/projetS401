<template>
  <div class="accueil">
    <div class="contactContent">
      <v-card elevation="8" style="width: 60%;padding: 60px;border-radius: 30px;">
        <v-card-title>Un problème ?</v-card-title>
        <v-card-text>
          Vous pouvez nous contacter en remplissant le formulaire ci-dessous.
          Votre demande sera traitée sera dans les plus brefs délais.
        </v-card-text>
        <div>
          <div>
            <label for="email">Adresse mail</label>
            <v-text-field type="text" id="email" v-model="form.email"></v-text-field>
            <label for="prenom">Prénom</label>
            <v-text-field type="text" id="prenom" v-model="form.prenom"></v-text-field>
            <label for="email">Nom</label>
            <v-text-field type="text" id="nom" v-model="form.nom"></v-text-field>
            <label for="email">Message</label>
            <v-textarea type="text" id="message" v-model="form.message"></v-textarea>

            <v-btn color="success" @click="submitForm">Envoyer</v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactView",
  data(){
    return{
      form:{
        email:'',
        prenom:'',
        nom:'',
        message:''
      }
    }
  },
  metaInfo: {
    title: "Nous contacter - Les Papiots",
  },
  methods : {
    submitForm(){
      axios.post('http://localhost:3000/formulaires/contact', this.form)
          .then((res) => console.log(res))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.contactContent,
.contactForm {
  display: flex;
  justify-content: center;
}

.contactForm {
  flex-direction: column;
}
</style>
