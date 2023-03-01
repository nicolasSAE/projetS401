<template>
  <div class="accueil">
    <div class="contactContent">
      <v-card elevation="8" style="width: 60%;padding: 60px;border-radius: 30px;">
        <v-card-title>Formulaire pour l'inscription d'un manège</v-card-title>
        <v-card-text>
          Afin d'incrire votre manège à aux Papiots vous devez remplirer le formulaire ci-dessous.
          Votre demande sera traitée sera dans les plus brefs délais.
        </v-card-text>
        <div>
          <v-form class="contactForm" action="#">
            <v-text-field label="Surface : " required></v-text-field>
            <v-text-field label="Nom : " required></v-text-field>
            <v-text-field label="Prénom" required></v-text-field>
            <v-textarea label="Message" required></v-textarea>
            <v-btn color="success" type="submit">Envoyer</v-btn>
          </v-form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormulaireView",
  metaInfo: {
    title: "Formulaire manège - Les Papiots",
  },
};
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
