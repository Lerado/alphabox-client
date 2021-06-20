<template>
  <div
    class="flex flex-row justify-center w-full min-h-screen align-middle linear-bg"
  >
    <div
      class="w-11/12 h-full mx-auto my-5 align-middle bg-gray-200 rounded-md shadow-lg md:w-10/12"
    >
      <!-- Game header component -->
      <game-header
        :counters="{ stars: 4, medals: 1, points: 230 }"
        :difficulty="'easy'"
        :level="1"
      />

      <!--  -->
      <div class="flex flex-row w-full rounded-b-lg">
        <div class="w-3/4 bg-white">
          <div class="flex flex-row justify-center w-full py-5">
            <el-steps
              class="w-10/12 mx-auto align-middle"
              :active="0"
              space="75%"
              finish-status="success"
            >
              <el-step
                :icon="'el-icon-s-opportunity'"
                :description="'Step one'"
                :title="'Etape 1'"
                >1</el-step
              >
              <el-step :icon="'el-icon-question'" :title="'Etape 2'">2</el-step>
              <el-step :icon="'el-icon-chat-dot-square'" :title="'Etape 3'"
                >2</el-step
              >
              <el-step :icon="'el-icon-edit'" :title="'Etape 4'">3</el-step>
            </el-steps>
          </div>
          <div class="flex flex-col justify-center w-full">
            <div class="flex flex-row justify-center w-full">
              <el-progress
                type="circle"
                :width="150"
                :stroke-width="10"
                :percentage="15"
              ></el-progress>
            </div>
            <div class="flex flex-row justify-center w-full mt-2">
              <el-button>Start</el-button>
            </div>
          </div>
          <el-scrollbar
            class="w-11/12 h-auto p-2 mx-auto my-2 border-gray-700 shadow-md border-1"
          >
            <div class="flex flex-row justify-between w-full py-2">
              <p
                v-for="i in 100"
                :key="i"
                class="p-1 mr-1 font-semibold text-white bg-blue-800 rounded-lg item"
              >
                word
              </p>
            </div>
          </el-scrollbar>
          <div class="flex flex-row w-11/12 py-5 mx-auto my-5">
            <div class="flex flex-col w-10/12">
              <el-input
                type="textarea"
                :autofocus="true"
                :autosize="{ minRows: 5, maxRows: 20 }"
              />
            </div>
            <div
              class="flex flex-col justify-center w-2/12 text-center align-middle "
            >
              <i
                class="text-2xl font-medium text-blue-500 cursor-pointer hover:text-primary el-icon-microphone"
              ></i>
            </div>
          </div>
          <div class="flex justify-between w-11/12 py-5 mx-auto">
            <div
              class="flex flex-row font-semibold align-middle cursor-pointer hover:text-primary"
            >
              <i class="mr-1 text-2xl font-bold el-icon-arrow-left"></i>
              <span>Previous</span>
            </div>
            <div
              class="flex flex-row font-semibold align-middle cursor-pointer hover:text-primary"
            >
              <i class="mr-1 text-2xl font-bold el-icon-arrow-right"></i>
              <span>Next</span>
            </div>
          </div>
        </div>
        <div
          class="w-1/4 h-auto bg-white"
          style="background-image: linear-gradient(to bottom, #542c86, #644b8c)"
        >
          <div
            class="w-full py-5 text-center"
            style="background-color: #3d2769"
          >
            <p class="text-xl font-semibold text-center text-white">
              Game rules
            </p>
          </div>
          <div class="flex w-full align-bottom shadow-md">
            <div class="h-64"></div>
          </div>
          <div
            class="flex flex-wrap content-end justify-center align-bottom"
            style="height: 48%"
          >
            <div class="flex flex-row justify-between w-10/12 mx-auto">
              <el-button type="primary">Replay</el-button>
              <el-button type="primary" disabled>Continue</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Game header component
import GameHeader from "../components/components.game-header.vue";

// Import mixins
import globalMixins from "@/mixins/mixins.global";
import localStorageManager from "../../../mixins/mixins.localstorage";

export default {
  mixins: [
    globalMixins, // Register global mixins
    localStorageManager({
      singleGame: {}
    }) // Then dynamically creates data to match the game language
  ],

  data() {
    return {
      level: 0, // Game level
      difficulty: "", // Game difficulty,
      language: "", // Game language
    };
  },

  components: {
    GameHeader,
  },

  created() {
    // Get data from route
    let { level, difficulty, lang } = this.$route.params;
    this.level = level;
    this.language = lang;
    this.difficulty = difficulty;

    // Create entry for this language in game data
    this.singleGame[`${ lang }`] = {};

    // For an authenticated user, game state has already been loaded and we will simply retrieve the right part of data
    // If no game save exists for this language, create a new game

    // If user is not authenticated, ask for level demo data
  },
};
</script>

<style>
.linear-bg {
  background-image: linear-gradient(to right, #005aa2, #131441);
}
</style>