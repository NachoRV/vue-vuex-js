import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  /**
   * State declaramos las propiedades o variables que queremos almacenar en el Store
   * en el componente podemos importarlas con:
   *  import { mapState } from 'vuex';
   *   computed: {
    ...mapState(['titel']),
    },
   */
  state: {

    titel: 'Hola desde el Store Nacho',

  },
  /**
   * los utilizamos para acceder a los datos cuando necesitemos realizar calculos con ellos
   */
  getters: {
    countTitel: state => {
      return state.titel.length;
    },
  },
  mutations: {

  },
  actions: {

  },
});
