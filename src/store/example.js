export default {
    state: {
        tabs: [
            {
                component: 'Tab1',
                text: 'Персональная информация',
                status: true
            },
            {
                component: 'Tab2',
                text: 'Детали сертификата',
                status: false
            }
        ]
    },
    mutations: {
        SET_TABS(state, index) {
            state.tabs.forEach((item, i) => {
                    if (i === index) {
                        item.status = true
                    } else {
                        item.status = false
                    }
                }
            )
        }
    },
    actions: {
        SET_TABS({commit}, index) {
            commit("SET_TABS", index);
        }
    },
    getters: {
        GET_TABS(state) {
            return state.tabs;
        }
    },
}