<template>
  <div
    class="flex flex-row justify-between w-full rounded-t-md"
    style="background-color: #ba4198"
  >
    <div class="flex justify-center w-1/6">
      <div class="flex flex-row justify-start w-full">
        <img src="@/assets/logo.svg" height="80" width="80" :class="{ 'object-contain animate__headShake animate__infinite': true, 'animate__animated': gameStarted }"/>
      </div>
    </div>
    <div class="flex w-1/6 mr-5 justify-self-start">
      <div class="flex flex-col mr-1">
        <el-avatar
          class="m-auto align-middle"
          icon="el-icon-user-solid"
          size="medium"
        />
      </div>
      <div class="flex flex-col my-auto">
          <span class="font-medium text-white">{{ username }}</span>
          <span class="text-xs font-light text-gray-300">Playing</span>
      </div>
    </div>
    <div
      class="flex justify-between w-3/6 text-white align-middle justify-self-center"
    >
      <div class="inline-block my-auto">
        <span class="inline-block mr-1 text-xl font-semibold align-middle">{{
          counters.stars
        }}</span>
        <span class="inline-block"
          ><i class="text-2xl text-orange-500 align-middle el-icon-star-on animate__animated animate__swing animate__infinite"></i
        ></span>
      </div>
      <div class="inline-block my-auto">
        <span class="inline-block mr-1 text-xl font-semibold align-middle">{{
          counters.medals
        }}</span>
        <span class="inline-block my-auto"
          ><i class="text-xl text-gray-300 align-middle el-icon-medal animate__animated animate__swing animate__infinite"></i
        ></span>
      </div>
      <div class="inline-block my-auto">
        <span class="inline-block mr-2 text-sm align-middle">Points:</span>
        <span class="inline-block text-xl font-semibold align-middle animate__animated animate__tada animate__infinite">{{
          counters.points
        }}</span>
      </div>
      <div class="inline-block my-auto">
        <span class="inline-block mr-2 text-sm align-middle">Level:</span>
        <span class="inline-block text-xl font-semibold align-middle">
          {{ getLevel() }}
        </span>
      </div>
      <div class="inline-block my-auto">
        <span class="inline-block mr-2 text-sm align-middle">Difficulty:</span>
        <span
          :class="`inline-block text-xl font-semibold text-${ difficulty.color }-500 align-middle`"
        >
          {{ difficulty.text }}
        </span>
      </div>
    </div>
    <div class="flex justify-end w-1/6 my-auto">
      <el-button
        class="font-semibold text-white special-blue-bg hover:bg-blue-400 hover:border-blue-400 hover:text-white"
        >EXIT</el-button
      >
    </div>
  </div>
</template>

<script>
// Map getters from vuex
import { mapGetters } from "vuex";

export default {
  props: {
    counters: {
      type: Object,
      required: true,
    },
    difficulty: {
      type: Object,
      required: true,
    },
    level: {
      type: [String, Number],
      required: true,
    },
    gameStarted: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      authenticated: "users/getUser",
    }),
    username() {
      return this.authenticated.username || "Guest";
    },
  },

  methods: {
    getLevel() {
      return this.level < 10 ? `0${this.level}` : this.level;
    },
  },
};
</script>

<style>
.special-blue-bg {
  background-color: #27aae1;
  border-color: #889ca5;
}
</style>