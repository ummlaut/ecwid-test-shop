import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                buy: colors.green.darken3,
                cartBtn: colors.cyan.darken3,
                cartBtnCounter: colors.deepOrange.darken3,
                remove: colors.red.darken3,
                checkout: colors.blue.darken3
            }
        },
    }
}

export default new Vuetify(opts)