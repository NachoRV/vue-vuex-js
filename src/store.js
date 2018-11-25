
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  /**
   * https://coursetro.com/posts/code/144/A-Vuex-Tutorial-by-Example---Learn-Vue-State-Management
   *
   * State declaramos las propiedades o variables que queremos almacenar en el Store
   * En el componente podemos importarlas con:
   *  import { mapState } from 'vuex';
   *   computed: {
    ...mapState(['titel']),
    },
   */
  state: {

    titel: 'Hola desde el Store Nacho',
    i: 0,

  },
  /**
   * los utilizamos para acceder a los datos cuando necesitemos realizar calculos con ellos
   * En el componente podemos importarlas con:
   * import { mapGetters } from 'vuex'
   * ...mapGetters(['countTitel'])
  */
  getters: {
    countTitel: state => state.titel.length,
  },
  /**
   * Son para modificar los datos del State
  */

  mutations: {
    increment(state)  {
      console.log('mutatio')
      state.i = state.i + 1
    }
  },

  actions: {
    async getCount(context, data) {
      context.commit('increment', data);
    },
  },
});
