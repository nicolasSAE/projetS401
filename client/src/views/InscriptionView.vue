<template>
  <div id="app">
    <div id="inscription">
      <div style="width:40%">
        <v-alert
            type="error"
            dense
            v-if="error"
        >
          {{error}}
        </v-alert>
        <v-card elevation="4" class="cardInscription">
          <div class="headerInscription" style="margin-bottom: 15px;">
            <img alt="Roue" src="../assets/wheel.gif" style="width: 20%">
          </div>
          <div>
                <v-form id="formInscription" @submit.prevent="submitForm" action="/" method="post">
                  <v-col cols="6">
                    <label for="nom">Nom</label>
                    <v-text-field type="text" id="nom" v-model="form.nom" required></v-text-field>
                    <label for="prenom">Prénom</label>
                    <v-text-field type="text" id="prenom" v-model="form.prenom" required></v-text-field>
                    <label for="email">Adresse Email</label>
                    <v-text-field type="text" id="email" v-model="form.mail" required></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <label for="username">Nom d'utilisateur</label>
                    <v-text-field type="text" id="username" v-model="form.username" required></v-text-field>
                    <label for="password">Mot de passe</label>
                    <v-text-field type="password" id="password" v-model="form.password" required></v-text-field>
                  </v-col>
                  <v-btn color="success" type="submit" >S'inscrire</v-btn>
                </v-form>
          </div>
        </v-card>
      </div>
      <div>
        <span>Vous avez déjà un compte ? Cliquez <router-link to="/connexion">ici</router-link> pour vous
          connecter</span>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'InscriptionView',
  data(){
    return {
      form: {
        nom:'',
        prenom:'',
        mail:'',
        username:'',
        password:''
      },
      error:''
    }
  },
  metaInfo: {
    title: 'Inscription - Les Papiots'
  },
  methods : {
    submitForm(){
      axios.post('http://localhost:3000/account/inscription', this.form)
          .then((res) => {
            console.log(res);
          })
          .then(()=>this.$router.push('/'))
          .catch((error) => {
            this.error = error.response.status + " : " + error.response.data.err;
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
#inscription,
.headerInscription,
#formInscription {
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