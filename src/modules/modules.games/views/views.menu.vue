<template>
  <div
    class="flex flex-col w-full min-h-screen bg-bottom bg-cover"
    :style="`background-image: url('${require('@/assets/backgrounds/main-menu-bg.png')}')`"
  >
    <div class="flex flex-row justify-between w-full px-5 py-5">
      <el-button type="text">
        <i class="text-3xl font-bold text-white el-icon-arrow-left"></i>
      </el-button>
      <el-select v-model="selectedLanguage" class="w-1/12" :size="'small'">
        <el-option
          v-for="(language, index) in languagesOptions"
          :key="index"
          :value="language.id"
          :label="language.label"
          >
          <flag :iso="language.countryCode" />
          {{ language.label }}
        </el-option
        >
      </el-select>
    </div>
    <div
      class="flex flex-col justify-center w-full h-full text-center align-middle "
      style="padding: 6% 0%"
    >
      <div
        class="grid w-full grid-flow-col grid-rows-4 mx-auto text-lg font-bold text-center text-white md:w-1/2 lg:w-1/3 gap-y-12 gap-x-5 sm:grid-rows-2 sm:gap-x-32 sm:gap-y-16"
        style="height: 22rem"
      >
        <div class="cursor-pointer">
          <div
            class="flex flex-row justify-center h-full align-middle bg-center bg-no-repeat bg-contain "
            :style="`background-image: url('${require('@/assets/backgrounds/purple-bg.png')}')`"
          >
            <img
              width="100"
              class="object-contain object-center"
              src="@/assets/avatar/avatar-single-player.png"
              alt=""
            />
          </div>
          <p>
            Single <span class="px-1 py-px rounded-lg bg-primary">player</span>
          </p>
        </div>
        <div class="cursor-pointer">
          <div
            class="flex flex-row justify-center h-full align-middle bg-center bg-no-repeat bg-contain "
            :style="`background-image: url('${require('@/assets/backgrounds/aqua-bg.png')}')`"
          >
            <img
              width="100"
              class="object-contain object-center"
              src="@/assets/avatar/avatar-benchmark.png"
              alt=""
            />
          </div>
          <p>Dash<span class="px-1 py-px rounded-lg bg-primary">board</span></p>
        </div>
        <div class="cursor-pointer">
          <div
            class="flex flex-row justify-center h-full align-middle bg-center bg-no-repeat bg-contain "
            :style="`background-image: url('${require('@/assets/backgrounds/blue-bg.png')}')`"
          >
            <img
              width="120"
              class="object-contain object-center"
              src="@/assets/avatar/avatar-multiplayer.png"
              alt=""
            />
          </div>
          <p>
            Multi<span class="px-1 py-px rounded-lg bg-primary">player</span>
          </p>
        </div>
        <div class="cursor-pointer">
          <div
            class="flex flex-row justify-center h-full align-middle bg-center bg-no-repeat bg-contain "
            :style="`background-image: url('${require('@/assets/backgrounds/green-bg.png')}')`"
          >
            <img
              width="100"
              class="object-contain object-center"
              src="@/assets/avatar/avatar-settings.png"
              alt=""
            />
          </div>
          <p><span class="px-1 py-px rounded-lg bg-primary">Set</span>tings</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Map getters
import { mapGetters } from "vuex";
// Mixins for local storage management
import localStorageMixins from "../mixins/localStorage";
// Languages front infos
import { languages } from "../services/data/languages";

export default {
  mixins: [localStorageMixins],

  // data() {
  //   return {
  //     selectedLanguage: "",
  //   };
  // },

  computed: {
    ...mapGetters({
      supportedLanguages: "games/getSupportedLanguages",
    }),

    languagesOptions() {
      console.log(this.supportedLanguages.map(language => (languages.find(element => element.id = language))));
      return this.supportedLanguages.map(language => (languages.find(element => element.id = language)));
    },
  },

  async created() {
    await this.$store.dispatch("games/fetchSupportedLanguages");
  },
};
</script>

<style scoped>
div.cursor-pointer:hover {
  animation: bounce 1s infinite;
  animation-delay: 200ms;
}
</style>