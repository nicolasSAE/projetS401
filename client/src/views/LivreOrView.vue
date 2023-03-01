<template>
  <div>
    <v-container>
      <v-row class="livre_or">
        <v-alert
            type="error"
            dense
            v-if="error"
        >
          {{ error }}
        </v-alert>
        <span class="main-title">Livre d'or</span>
        <div>
          <v-form class="contactForm" action="/" method="post">
            <label for="email">Nom</label>
            <v-text-field type="text" id="nom" v-model="form.nom"></v-text-field>
            <label for="email">Message</label>
            <v-textarea type="text" id="message" v-model="form.message"></v-textarea>

            <v-btn color="success" @click="submitForm">Envoyer</v-btn>
          </v-form>
        </div>
      </v-row>
      <h1>Vos commentaires</h1>
      <v-row>
        <v-card class="col-6" v-for="(comment, index) in comments" :key="index">
          <v-card-title>{{ comment.nom }}</v-card-title>
          <v-card-text>{{ comment.message }}</v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LivreOrView",
  data() {
    return {
      form: {
        nom: '',
        message: ''
      },
      error: '',
      comments: []
    }
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:3000/formulaires/avis-livre-d-or', this.form)
          .then((comment) => {
            console.log(comment)
            this.$router.push('/');
          })
          .catch((error) => {
            this.error = error.response.status + " : " + error.response.data.err;
            console.log(error)
          })
    },
  },
  created() {
    axios.get('http://localhost:3000/formulaires/avis-livre-d-or')
        .then((comments) => {
          console.log(comments);
          this.comments = comments.data.data;
        })
        .catch((error) => {
          this.error = error.response.status + " : " + error.response.data.err;
        })
  }
}
</script>

<style scoped>
.livre_or {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.main-title {
  font-size: 7em;
}
</style>