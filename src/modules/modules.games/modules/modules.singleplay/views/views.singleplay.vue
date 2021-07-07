<template>
  <div class="flex flex-row justify-center w-full min-h-screen align-middle">
    <template v-if="!levelCompleted">
      <div
        class="w-11/12 h-full mx-auto align-middle bg-gray-200 rounded-md shadow-lg md:w-full"
      >
        <!-- Mask -->
        <div v-if="Object.getOwnPropertyNames(levelSettings).length">
          <!-- Game header component -->
          <game-header
            class="px-4 py-1"
            :counters="counters"
            :difficulty="difficultyObject"
            :level="level"
            :game-started="gameStarted"
          />

          <!-- Game main interface -->
          <div class="flex flex-row w-full rounded-b-lg">
            <div class="w-3/4 bg-white">
              <!-- Game steps -->
              <!-- If last step is finished, we can go to the index after the finish step. That is what we do in the active prop -->
              <game-steps
                class="py-5"
                :steps="levelSteps"
                :active="levelCompleted ? levelSteps.length + 1 : activeStep"
              />

              <!-- Find words game -->
              <find-words
                :configs="levelSteps[this.activeStep]"
                :lang="language"
                @gameStarted="gameStarted = true"
                @gameStopped="gameStarted = false"
                @gameFinished="onStepFinished($event)"
                v-if="
                  levelSteps[activeStep]
                    ? levelSteps[activeStep].type == 'findWords'
                    : false
                "
              />

              <div class="flex justify-between w-11/12 py-5 mx-auto">
                <div
                  v-if="levelSteps.length > 1 && level > 1"
                  class="flex flex-row font-semibold align-middle cursor-pointer hover:text-primary"
                >
                  <i class="mr-1 text-2xl font-bold el-icon-arrow-left"></i>
                  <span>Previous</span>
                </div>
                <div
                  v-if="levelSteps.length > 1"
                  class="flex flex-row font-semibold align-middle cursor-pointer hover:text-primary"
                >
                  <i class="mr-1 text-2xl font-bold el-icon-arrow-left"></i>
                  <span>Next</span>
                </div>
              </div>
            </div>
            <div
              class="w-1/4 h-auto bg-white"
              style="
                background-image: linear-gradient(to bottom, #542c86, #644b8c);
              "
            >
              <!-- Game rules and results -->
              <game-rules :settings="levelSteps[activeStep]" />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="flex flex-col w-3/4 text-white">
        <div
          class="py-5 mx-auto animate__animated animate__fadeIn animate__slow"
        >
          <div class="text-2xl font-bold underline capitalize">
            CONGRATULATIONS, YOU FINISHED LEVEL {{ this.level }}
          </div>
        </div>
        <div class="flex flex-row justify-around w-full mt-auto">
          <div class="inline-block my-auto">
            <span
              class="inline-block mr-1 text-xl font-semibold align-middle"
              >{{ singleGame[this.level].counters.stars }}</span
            >
            <span class="inline-block"
              ><i
                class="text-2xl text-orange-500 align-middle el-icon-star-on animate__animated animate__swing animate__infinite"
              ></i
            ></span>
          </div>
          <div class="inline-block my-auto">
            <span
              class="inline-block mr-1 text-xl font-semibold align-middle"
              >{{ singleGame[this.level].counters.medals }}</span
            >
            <span class="inline-block my-auto"
              ><i
                class="text-xl text-gray-300 align-middle el-icon-medal animate__animated animate__swing animate__infinite"
              ></i
            ></span>
          </div>
          <div class="inline-block my-auto">
            <span class="inline-block mr-2 text-sm align-middle">Points:</span>
            <span
              class="inline-block text-xl font-semibold align-middle animate__animated animate__tada animate__infinite"
              >{{ singleGame[this.level].counters.points }}</span
            >
          </div>
        </div>
        <div class="grid w-full grid-flow-col gap-4 my-auto">
          <div
            class="flex flex-col animate__animated animate__slow animate__fadeIn"
            v-for="(step, index) in levelStepsResults"
            :key="index"
          >
            <div class="w-full text-lg font-bold text-center">
              <span
                ><i :class="`mr-1 el-icon-${step.icon}`"></i
                >{{ step.description }}</span
              >
            </div>
            <div class="flex flex-col w-full">
              <h1 class="text-lg font-bold">Level informations</h1>
              <div class="flex flex-row w-full my-1">
                <div class="w-1/4 text-right">
                  <span class="font-bold">Letter:</span>
                </div>
                <div class="w-3/4 text-center">
                  <span class="text-xl font-bold text-primary">{{
                    step.letter
                  }}</span>
                </div>
              </div>
              <div class="flex flex-row w-full my-1">
                <div class="w-1/4 text-right">
                  <span class="font-bold">Words required:</span>
                </div>
                <div class="w-3/4 text-center">{{ step.required }}</div>
              </div>
              <div class="flex flex-row w-full mb-1">
                <div class="w-1/4 text-right">
                  <span class="font-bold">Time:</span>
                </div>
                <div class="w-3/4 text-center">{{ step.time }} seconds</div>
              </div>
              <el-divider />
              <h1 class="text-lg font-bold">Scores</h1>
              <div class="flex flex-row w-full mb-1">
                <div class="w-1/4 text-right">
                  <span class="font-bold">Words found</span>
                </div>
                <div
                  :class="{
                    'w-3/4 text-xl font-extrabold text-center': true,
                    'text-green-600': true,
                    'text-red-600': false,
                  }"
                >
                  {{ step.total_found }} / {{ step.required }}
                </div>
              </div>
              <div class="flex flex-row w-full">
                <div class="w-1/4 text-right">
                  <span class="font-bold">Points earned:</span>
                </div>
                <div class="w-3/4 text-sm text-center">
                  <span class="text-xl font-extrabold text-primary">{{
                    step.score
                  }}</span>
                  points
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Affix to finish a successful game or restart a loosed one -->
    <template v-if="levelCompleted">
      <el-tooltip
        v-if="level > 1"
        content="Previous results"
        placement="top-end"
        effect="dark"
      >
        <el-affix
          class="absolute animate__animated animate__headShake animate__delay-1s animate__slow animate__infinite"
          position="bottom"
          :z-index="1000"
          style="right: 92%; top: 50%"
        >
          <el-button
            @click="previousLevel()"
            class="shadow"
            circle
            icon="el-icon-caret-left"
            type="primary"
          ></el-button>
        </el-affix>
      </el-tooltip>

      <el-tooltip
        content="Head to next level!"
        placement="top-end"
        effect="dark"
      >
        <el-affix
          class="absolute animate__animated animate__headShake animate__slow animate__infinite"
          position="bottom"
          :z-index="1000"
          style="left: 90%; top: 50%"
        >
          <el-button
            @click="nextLevel()"
            class="shadow"
            circle
            icon="el-icon-caret-right"
            type="primary"
          ></el-button>
        </el-affix>
      </el-tooltip>

      <el-tooltip
        content="Restart this level!"
        placement="top-end"
        effect="dark"
      >
        <el-affix
          class="absolute animate__animated animate__bounce animate__slow animate__infinite"
          position="bottom"
          :z-index="1000"
          style="top: 90%"
        >
          <el-button
            @click="restartLevel()"
            class="shadow"
            circle
            icon="el-icon-refresh-right"
            type="primary"
          ></el-button>
        </el-affix>
      </el-tooltip>
    </template>
  </div>
</template>

<script>
// Game header component
import GameHeader from "../components/components.game-header.vue";

// Game steps component
import GameSteps from "../components/components.game-steps.vue";

// Game rules component
import GameRules from "../components/components.game-rules.vue";

// Find words game component
import FindWords from "../components/components.findwords.vue";

// Import mixins
import localStorageManager from "../../../mixins/mixins.localstorage";

// Import services data
import { games } from "../../../services/data/games";
import { difficulties } from "../../../services/data/difficulties";

// Map getters from vuex
import { mapGetters } from "vuex";

export default {
  mixins: [
    localStorageManager({
      singleGame: {},
    }), // Then dynamically creates data to match the game language
  ],

  data() {
    return {
      level: 0, // Game level
      difficulty: "", // Game difficulty
      language: "", // Game language

      gameStarted: false,

      // Loading
      loading: {},
    };
  },

  components: {
    GameHeader,
    GameSteps,
    GameRules,
    FindWords,
  },

  computed: {
    ...mapGetters({
      authenticated: "users/getUser",
      isAuthenticated: "users/isAuthenticated",
      levelSettings: "games/getLevelSettings",
    }),

    // Points and rewards
    counters() {
      let counters = { stars: 0, points: 0, medals: 0 };
      if (this.singleGame) {
        Object.values(this.singleGame).forEach((levelData) => {
          Object.keys(levelData.counters).forEach((key) => {
            counters[key] += levelData.counters[key];
          });
        });
      }

      return counters;
    },

    // Active step of the given game
    activeStep() {
      return this.singleGame[this.level]
        ? this.singleGame[this.level].activeStep || 0
        : 0;
    },

    // Difficulty object for this level
    difficultyObject() {
      return difficulties.find(
        (difficulty) => difficulty.value === this.difficulty
      );
    },

    // Steps for this level, computed from server data
    levelSteps() {
      if (!this.levelSettings.steps) return [];

      return this.levelSettings.steps.map((step) => {
        const game = games.find((game) => game.type === step.type);
        return {
          ...game,
          letter: this.levelSettings.letter.toUpperCase(),
          time: step.time[this.difficultyObject.intValue],
          required: step.required,
          rewardPerWord: step.rewardPerWord,
        };
      });
    },

    // Steps for this level, computed from local save, including scores
    levelStepsResults() {
      if (!this.singleGame[`${this.level}`].steps) return [];

      return this.singleGame[`${this.level}`].steps.map((step) => {
        const levelStep = this.levelSteps.find(
          (levelStep) => levelStep.type === step.type
        );
        return {
          ...levelStep,
          ...step,
        };
      });
    },

    // Says if level is complete
    levelCompleted() {
      if (this.singleGame[`${this.level}`]) {
        return this.singleGame[`${this.level}`].completed;
      }

      return false;
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
    message(message, type = "success") {
      this.$message({
        showClose: true,
        message: message,
        type: type,
      });
    },
    onStepFinished(results) {
      // If step is successful, add rewards and points to the counters, and step details
      if (results.success) {
        const { score, total_found, type, required } = results;
        this.singleGame[`${this.level}`].counters.points += score;
        // Add step informations
        this.singleGame[`${this.level}`].steps[this.activeStep] = {
          total_found,
          score,
          type,
          required,
        };
        // If there are some steps left go to the next one
        if (this.activeStep < this.levelSteps.length - 1)
          this.singleGame[`${this.level}`].activeStep += 1;
        else {
          // Show navigation buttons
          // Navigate to finish step
          this.singleGame[`${this.level}`].counters.stars =
            this.levelSettings.rewards.stars;
          this.singleGame[`${this.level}`].counters.medals =
            this.levelSettings.rewards.medal;
          this.singleGame[`${this.level}`].completed = true;
        }
        this.singleGame = { ...this.singleGame }; // For the localStorage persitance module to handle the change
      }
    },

    // Restart level
    restartLevel() {
      // Reset level variables
      this.loading = this.toggleLoading();
      setTimeout(() => {
        this.singleGame[`${this.level}`] = {
          counters: {
            stars: 0,
            medals: 0,
            points: 0,
          },
          steps: [],
          completed: false,
          difficulty: this.difficultyObject.intValue,
          activeStep: 0,
        };
        this.singleGame = { ...this.singleGame };
        this.loading.close();
      }, 2000);
    },

    // Previous level
    previousLevel() {
      if (Number(this.level) > 1) {
        this.loading = this.toggleLoading();
        setTimeout(() => {
          this.$router.push({
            name: "single-play",
            params: {
              lang: this.language,
              level: Number(this.level) - 1,
              difficulty: this.difficulty,
            },
          });
          this.loading.close();
        }, 2000);
      }
    },

    // Go to the next level
    nextLevel() {
      // Navigate to next level
      this.loading = this.toggleLoading();
      setTimeout(() => {
        this.$router.push({
          name: "single-play",
          params: {
            lang: this.language,
            level: Number(this.level) + 1,
            difficulty: this.difficulty,
          },
        });
        this.loading.close();
      }, 2000);
    },
  },

  mounted() {
    // If user aint authenticated alert
    if (!this.isAuthenticated) {
      this.$confirm(
        "You are not authenticated so your game will not be saved. Continue ?",
        "Warning",
        {
          type: "warning",
          confirmButtonText: "No problem",
          cancelButtonText: "Ok let me sign in",
        }
      )
        .then(() => {
          this.loading = this.toggleLoading();
          setTimeout(async () => {
            this.loading.close();
          }, 2000);
        })
        .catch(() => {
          // Go to the sign in page
          this.$router.push({ name: "login" });
        });
    }

    // Create entry for this language in game data if none exist in local storage
    if (
      !Object.getOwnPropertyNames(this.singleGame).includes(`${this.level}`)
    ) {
      this.singleGame[`${this.level}`] = {
        // Data that will persist server-side
        counters: {
          stars: 0,
          medals: 0,
          points: 0,
        },
        steps: [],
        completed: false,

        // Unpersistent data
        activeStep: 0,
      };
    }
    // If it already exist, set difficulty for an uncomplete level
    if (!this.singleGame[`${this.level}`].completed) {
      this.singleGame[`${this.level}`].difficulty =
        this.difficultyObject.intValue;
    }

    this.singleGame = { ...this.singleGame };
  },

  async created() {
    // Get data from route
    let { level, difficulty, lang } = this.$route.params;
    this.level = level;
    this.language = lang;
    this.difficulty = difficulty;

    // For an authenticated user, game state has already been loaded and we will simply retrieve the right part of data
    // If no game save exists for this language, create a new game
    try {
      if (this.isAuthenticated) {
        await this.$store.dispatch("games/getLevelSettings", { lang, level });
      }
      // If user is not authenticated, ask for level demo data
      else {
        await this.$store.dispatch("games/getDemoLevelSettings", {
          lang,
          level,
        });
      }
    } catch (error) {
      this.message(error.message, "error");
      this.$router.back();
    }
  },
};
</script>

<style>
.linear-bg {
  background-image: linear-gradient(to right, #005aa2, #131441);
}
</style>