import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { nl as nlDate } from "date-fns/locale";
import {nl} from 'vuetify/locale'

export default defineVuetifyConfiguration({
  locale: { locale: 'nl', messages: { nl } },
  date: { adapter: "date-fns", locale: { nl: nlDate } },
});
