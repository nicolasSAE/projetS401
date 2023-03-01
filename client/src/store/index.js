import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    attractions:[],
    prestataires:[],
    stands:[],
    attractionMap:null,
    userConnected:{},
    billets:[],
  }),
  mutations: {
      setAttractionsContent(state, attractions){
        state.attractions = attractions
      },
      setPrestatairesContent(state, prestataires){
        state.prestataires = prestataires
      },
      setStandsContent(state, stands){
        state.stands = stands
      },
      setAttractionMapContent(state, attraction){
        state.attractionMap = attraction[0];
      },
      setUserConnected(state, user){
        state.userConnected = user;
      },
      setBilletsUser(state, billets){
          state.billets = billets;
      },
  },
  actions: {
    async getAttractionsFromAPI(context) {
      let attractions = await axios.get('http://localhost:3000/attractions');
      context.commit('setAttractionsContent', attractions.data);
    },

    async getAttractionsFromAPIwithNumEmpla(context,id) {
      let attractions = await axios.get('http://localhost:3000/attractions/'+id);
      context.commit('setAttractionMapContent', attractions.data);
    },

    async getPrestatairesFromAPI(context){
      let prestataires = await axios.get('http://localhost:3000/prestataires');
      context.commit('setPrestatairesContent', prestataires.data);
    },

    async getStandsFromAPI(context){
      let stands = await axios.get('http://localhost:3000/stands');
      context.commit('setStandsContent', stands.data);
    },

      async getBilletsByCompte(context){
        let id = this.state.userConnected.id;
          let billets = await axios.get('http://localhost:3000/billets/'+id);
          context.commit('setBilletsUser', billets.data);
      },
  },
  modules: {
  }
})
