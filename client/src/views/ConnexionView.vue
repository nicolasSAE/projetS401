<template>
  <div id="app">
    <div id="connexion">
      <div style="width:40%">
        <v-alert
            type="error"
            dense
            v-if="error"
        >
          {{error}}
        </v-alert>
        <v-card elevation="4" class="cardConnexion">
          <div class="headerConnexion" style="margin-bottom: 15px;">
            <img src="../assets/wheel.gif" style="width: 20%">
          </div>
          <div>
            <div id="formConnexion" >
              <label for="username">Nom d'utilisateur</label>
              <v-text-field type="text" id="username" v-model="form.username" required></v-text-field>
              <label for="password">Mot de passe</label>
              <v-text-field type="password" id="password" v-model="form.password" required></v-text-field>
              <v-btn color="success" @click="submitForm">Se connecter</v-btn>
            </div>
          </div>
        </v-card>
      </div>
      <div>
        <br>
        <span>Vous n'avez pas de compte ? Cliquez <router-link to="/inscription">ici</router-link> pour vous le
          créer</span>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {mapMutations} from "vuex";

export default {
  name: 'ConnectionView',
  metaInfo: {
    title: 'Connexion - Les Papiots'
  },
  data(){
    return {
      form: {
        username: '',
        password: ''
      },
      error:""
    }
  },
  methods: {
    ...mapMutations(['setUserConnected']),
    submitForm() {
      axios.post("http://localhost:3000/account/connexion", this.form)
          .then((user) => {
            //console.log(user.data.data);
            this.$cookie.set('userAuthentificated', JSON.stringify(user.data.data), 1);
            this.setUserConnected(JSON.parse(this.$cookie.get('userAuthentificated')));
            this.$router.push('/');
          })
          .catch((error) => {
            this.error = error.response.status + " : " + error.response.data.err;
            //console.log(error)
          })

    }
  },
  computed:{

  }
}



</script>
<style scoped>
#connexion,
.headerConnexion,
#formConnexion {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cardConnexion {
  border-radius: 40px;
  padding: 10px 0 20px 0;
}
</style>
