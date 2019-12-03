/* eslint-disable no-console */
export const state = () => ({
  wp_menu: [],
  wp_pages: [],
  isLoading: true,
  error: ''
})

export const mutations = {
  loadMenu (state, payload) {
    state.wp_menu = payload
  },
  loadPages (state, payload) {
    state.wp_pages = payload
  },
  set_isLoading (state, payload) {
    state.isLoading = payload
  },
  set_error (state, payload) {
    state.error = payload
  }
}
export const actions = {
  async LOAD_PAGES ({
    commit
  }) {
    const {
      data
    } = await this.$axios.get(`${process.env.api_root}/posts`, {
      progress: true
    })
    commit('loadPages', data)
    return data
  },
  async LOAD_MENU ({
    commit
  }) {
    console.log('CARICO LE PAGINE')
    const {
      data
    } = await this.$axios.get(`${process.env.api_root}/menu`, {
      progress: true
    })
    commit('loadMenu', data)
    return data
  },
  doneLoading ({
    commit
  }, done) {
    commit('set_isLoading', !done)
  }
}

export const getters = {
  pages (state) {
    return state.wp_pages
  },
  menu: (state) => {
    if (state.wp_menu === undefined || state.wp_menu === null) {
      return []
    }
    return state.wp_menu
  },

  isLoading: (state) => {
    return state.isLoading
  }
}

// export const state = () => ({
//   wp_menu: [],
//   wp_pages: [],
//   isLoading: true,
//   error: ''
// })

// export const getters = () => ({
//   menu: (state) => {
//     if (state.mainMenu === undefined || state.mainMenu === null) {
//       return []
//     }
//     return state.mainMenu
//   },
//   pages: (state) => {
//     // if (!state.pages) {
//     // return []
//     // }
//     return state.pages
//   },
//   isLoading: (state) => {
//     return state.isLoading
//   }
// })

// export const mutations = () => ({
//   /**
//    *
//    * @param {object} state
//    * @param {object} payload
//    */
//   LOAD_MENU (state, payload) {
//     state.wp_menu = payload
//   },
//   LOAD_PAGES (state, payload) {
//     state.wp_pages = payload
//   },
//   set_isLoading (state, payload) {
//     state.isLoading = payload
//   },
//   set_error (state, payload) {
//     state.error = payload
//   }
// })
