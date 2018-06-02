    import Vue from 'vue'
    import Vuex from 'vuex'
    import ls from '../utils/localStorage'
    import router from '../router'

    Vue.use(Vuex)

    const state = {
      user: ls.getItem('user'),
      //使用auth存储用户登陆状态
      auth: ls.getItem('auth')
    }

    const mutations = {
      UPDATE_USER(state, user) {
        state.user = user
        ls.setItem('user', user)
      },

      //修改登陆状态
      UPDATE_AUTH(state, auth) {
        state.auth = auth
        ls.setItem('auth', auth)
      }
    }

    const actions = {
      login({
        commit
      }, user) {
        if (user)
        //注册用户放入state中
        commit('UPDATE_USER', user)
        //修改用户登陆状态
        commit('UPDATE_AUTH', true)
        router.push('/')
      }
    }

    const store = new Vuex.Store({
      state,
      mutations,
      actions
    })

    export default store
