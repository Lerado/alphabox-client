<template>
  <div
    class="flex flex-col w-full min-h-screen bg-bottom bg-cover"
    :style="`background-image: url('${require('@/assets/backgrounds/main-menu-bg.png')}')`"
  >
    <div class="flex flex-row justify-between w-full px-5 py-5">
      <el-button @click="$router.back()" type="text">
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
        </el-option>
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
        <div
          @click="onSingleGameChoosen()"
          class="cursor-pointer animate__animated animate__pulse animate__infinite"
        >
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
        <div class="opacity-50 cursor-not-allowed">
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
        <div class="opacity-50 cursor-not-allowed">
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
        <div class="opacity-50 cursor-not-allowed">
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

    <!-- Popup for single game -->
    <el-dialog
      title="Game settings"
      v-model="singleGameParams.popup"
      width="25%"
      :center="true"
    >
      <el-form
        class="flex flex-col justify-center w-full"
        ref="singleGameForm"
        label-position="top"
        :model="singleGameParams.form"
        :rules="singleGameParams.formRules"
      >
        <el-form-item prop="language" class="block w-full">
          <el-select v-model="singleGameParams.form.language" class="w-full">
            <el-option
              v-for="(language, index) in languagesOptions"
              :key="index"
              :value="language.id"
              :label="language.label"
            >
              <flag :iso="language.countryCode" />
              {{ language.label }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="difficulty" class="block w-full mt-5">
          <el-select v-model="singleGameParams.form.difficulty" class="w-full">
            <el-option
              v-for="(difficulty, index) in difficultiesOptions"
              :key="index"
              :value="difficulty.value"
              :label="difficulty.text"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="block w-full mt-8">
          <el-button
            class="w-full text-lg text-white bg-primary"
            @click="onSingleGameLaunched()"
            >Let's go</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// Map getters
import { mapGetters } from "vuex";
// Mixins for local storage management
import localStorageMixins from "../mixins/mixins.localstorage.js";
// Languages front infos
import { languages } from "../services/data/languages";
// Difficulties
import { difficulties } from "../services/data/difficulties";

export default {
  mixins: [
    localStorageMixins({
      selectedLanguage: "",
      singleGame: {},
    }),
  ],

  data() {
    return {
      singleGameParams: {
        popup: false,
        form: {
          language: "",
          difficulty: "",
        },
        formRules: {
          language: {
            required: true,
            message: "You must choose a language for the game",
          },
          difficulty: {
            required: true,
            message: "Choose a difficulty!",
          },
        },
      },

      // Loading
      loading: null,
    };
  },

  computed: {
    ...mapGetters({
      supportedLanguages: "games/getSupportedLanguages",
    }),

    languagesOptions() {
      return this.supportedLanguages.map((language) =>
        languages.find((element) => (element.id = language))
      );
    },

    difficultiesOptions() {
      return difficulties;
    },
  },

  methods: {
    toggleLoading() {
      return this.$loading({
        lock: true,
        text: "Loading...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "text-3xl",
      });
    },
    onSingleGameChoosen() {
      this.singleGameParams.popup = true;
    },
    onSingleGameLaunched() {
      this.$refs["singleGameForm"].validate(async (valid) => {
        if (!valid) return;
        // If a game has been detected, the user decides wether to continue or to start a new one
        if (Object.getOwnPropertyNames(this.singleGame).length) {
          this.singleGameParams.popup = false;
          this.$confirm(
            "We detected a save. Do you want to resume ?",
            "Resume game ?",
            {
              type: "info",
              distinguishCancelAndClose: true,
              confirmButtonText: "Yes",
              cancelButtonText: "No, start a new game",
            }
          )
            .then(() => {
              this.loading = this.toggleLoading();
              // Compute last played level
              let resumeLevel = 1;
              for (const level of Object.keys(this.singleGame).sort(
                (a, b) => a - b
              )) {
                if (this.singleGame[`${level}`].completed) resumeLevel++;
                else break;
              }
              setTimeout(() => {
                this.$router.push({
                  name: "single-play",
                  params: {
                    lang: this.singleGameParams.form.language,
                    level: resumeLevel,
                    difficulty:
                      resumeLevel > 1
                        ? this.difficultiesOptions.find(
                            (difficulty) =>
                              difficulty.intValue ==
                              this.singleGame[resumeLevel - 1].difficulty
                          ).value
                        : this.singleGameParams.form.difficulty,
                  },
                });
                this.loading.close();
              }, 2000);
            })
            .catch((action) => {
              if (action === "cancel") {
                this.loading = this.toggleLoading();
                setTimeout(() => {
                  this.singleGame = {};
                  this.$router.push({
                    name: "single-play",
                    params: {
                      lang: this.singleGameParams.form.language,
                      level: 1,
                      difficulty: this.singleGameParams.form.difficulty,
                    },
                  });
                  this.loading.close();
                }, 3000);
              }
            });
        } else {
          this.loading = this.toggleLoading();
          setTimeout(() => {
            this.singleGame = {};
            this.$router.push({
              name: "single-play",
              params: {
                lang: this.singleGameParams.form.language,
                level: 1,
                difficulty: this.singleGameParams.form.difficulty,
              },
            });
            this.loading.close();
          }, 3000);
        }
      });
    },
  },

  async created() {
    // Fetch supported languages
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