import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

export default () => {
  return new Vuex.Store({
    state: {
      randomData: null,
      getterData: 'Macbook'
    },
    mutations,
    actions,
    getters: {
	    getterData: state => {
	      return state.getterData
	    }
	}
  })
}