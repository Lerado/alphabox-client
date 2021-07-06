<template>
  <div>
    <!-- Popup results for find words -->
    <el-dialog
    @closed="onGameFinished()"
    :close-on-click-modal="false"
    v-model="popupGameResults"
    width="40%"
    :center="true"
    >
      <template #title>
        <span class="text-xl font-semibold text-green-600" v-if="results.success">
          <i class="mr-1 el-icon-success"></i>
          Success
        </span>
        <span class="text-xl font-bold text-red-600" v-else>
          <i class="mr-1 el-icon-error"></i>
          Failed
        </span>
      </template>
      <div class="flex flex-col w-full">
        <h1 class="text-lg font-bold">Level informations</h1>
        <div class="flex flex-row w-full mt-1">
          <div class="w-1/4 text-right"><span class="font-bold text-black">Game:</span></div>
          <div class="w-3/4 text-center">{{ configs.description }}</div>
        </div>
        <div class="flex flex-row w-full my-1">
          <div class="w-1/4 text-right"><span class="font-bold text-black">Letter:</span></div>
          <div class="w-3/4 text-center"><span class="text-xl font-bold text-primary">{{ configs.letter }}</span></div>
        </div>
        <div class="flex flex-row w-full my-1">
          <div class="w-1/4 text-right"><span class="font-bold text-black">Words required:</span></div>
          <div class="w-3/4 text-center">{{ results.required }}</div>
        </div>
        <div class="flex flex-row w-full mb-1">
          <div class="w-1/4 text-right"><span class="font-bold text-black">Time:</span></div>
          <div class="w-3/4 text-center">{{ configs.time }} seconds</div>
        </div>
        <el-divider />
        <h1 class="text-lg font-bold">Scores</h1>
        <div class="flex flex-row w-full mt-1">
          <div class="w-1/4 text-right"><span class="font-bold text-black">Words found</span></div>
          <div :class="{ 'w-3/4 text-lg font-extrabold text-center': true, 'text-green-600': results.success, 'text-red-600': !results.success}">{{ results.total_found }} / {{ results.required }}</div>
        </div>
        <el-divider />
        <h1 class="text-lg font-bold">Some words you did not found</h1>
        <div class="flex flex-row justify-around w-full mt-1">
          <el-tag v-for="(word, index) in results.someWords" :key="index">{{ word }}</el-tag>
        </div>
      </div>
      
    </el-dialog>
    <div class="flex flex-col justify-center w-full">
      <div class="flex flex-row justify-center w-full">
        <timer
          @timerLaunched="onTimerLaunched()"
          @timerFinished="onTimerFinished()"
          :duration="configs.time"
          :active="start"
        />
      </div>
      <div class="flex flex-row justify-center w-full mt-4">
        <el-button
          round
          :class="{
            'animate__animated': !start || results.success === false,
            'animate__pulse animate__infinite animate__delay-2s': true,
          }"
          type="primary"
          @click="onGameStarted()"
          :disabled="!locked"
          >{{ Object.getOwnPropertyNames(results).length > 0 && !results.success ? 'Restart' : 'Start' }}</el-button
        >
      </div>
    </div>
    <el-scrollbar
      class="w-11/12 h-auto p-2 mx-auto my-2 border-gray-700 shadow-md border-1"
    >
      <div class="flex flex-row justify-start w-full py-2">
        <p
          v-for="(word, index) in words"
          :key="index"
          :class="{ 'p-1 mr-1 font-semibold text-white rounded-lg item': true, 'bg-blue-800': word.check === null, 'bg-red-800': !word.check, 'bg-green-800': word.check }"
        >
          {{ word.value }}
        </p>
      </div>
    </el-scrollbar>
    <div class="flex flex-row w-11/12 py-5 mx-auto my-5">
      <div class="flex flex-col w-10/12">
        <el-input
          ref="textarea"
          type="textarea"
          @keypress.enter="pushWords()"
          v-model="textareaContent"
          :disabled="locked"
          :autofocus="true"
          :autosize="{ minRows: 5, maxRows: 20 }"
        />
      </div>
      <div class="flex flex-col justify-center w-2/12 text-center align-middle">
        <i
          class="text-2xl font-medium text-blue-500 cursor-pointer hover:text-primary el-icon-turn-off-microphone"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
// Import timer component
import Timer from "../../../components/components.timer.vue";

export default {
  props: {
    configs: {
      type: Object,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      start: false,
      // Words entered by the players
      words: [],
      textareaContent: "",
      locked: true,

      // Game results
      results: {},
      // Popup game results
      popupGameResults: false,

      // Screen loader
      loading: null,
    };
  },

  components: {
    Timer,
  },

  methods: {
    toggleLoading($message = "Loading...") {
      return this.$loading({
        lock: true,
        text: $message,
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "text-3xl",
      });
    },
    reset() {
      this.words = [];
      this.textareaContent = "";
      this.locked = true;
      this.results = {};
      this.start = false;
    },
    onGameStarted() {
      // Splash loader
      this.loading = this.toggleLoading();
      this.reset(); //Reset component
      setTimeout(() => {
        this.loading.close();
        this.$emit("gameStarted");
        this.start = true; // Triggers timer start
        this.$refs["textarea"].focus() // Focus text area
      }, 3000);
    },
    onGameFinished() {
      // If success finish the game, else propose step restart
      if (this.results.success) {
        this.loading = this.toggleLoading("Loading next step...");
        setTimeout(() => {
          // Emit finish event, passing results to the parent component
          this.$emit("gameFinished", this.results);
          // Reset this component
          this.reset();
          this.loading.close();
        }, 2000);
      }
    },
    onTimerLaunched() {
      // Unlock component
      this.locked = false;
    },
    onTimerFinished() {
      // Lock component
      this.locked = true;
      this.loading = this.toggleLoading("Computing results");
      setTimeout(async () => {
        // Compute results
        this.results = await this.$store.dispatch("games/findWordsResults", {
          words: this.words.map((word) => word.value),
          lang: this.lang,
          level: this.$route.params.level,
        });
        // Update words status
        this.words = this.words.map(word => ({
          value: word.value,
          check: this.results.results[word.value]
        }));
        this.loading.close();
        this.$emit("gameStopped");
        this.popupGameResults = true;
      }, 3000);
    },
    pushWords() {
      let parsed = this.textareaContent.replace(",", "");
      parsed = parsed.trim();
      parsed = parsed.replace("\n", "");
      parsed = parsed.replace(";", "");

      // Split by space character
      let splitted = parsed.split(" ").map((word) => ({
        value: word,
        check: null,
      }));

      // Filter non existing words
      splitted = splitted.filter(
        (word) =>
          this.words.findIndex((word_) => word_.value == word.value) === -1
      );

      this.words.push(...splitted);
      this.textareaContent = "";
    },
  },
};
</script>

<style>
</style>