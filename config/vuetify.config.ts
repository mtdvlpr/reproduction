import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { nl } from "date-fns/locale";

export default defineVuetifyConfiguration({
  date: { adapter: "date-fns", locale: nl },
});
