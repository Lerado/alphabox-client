<template>
  <div
    class="flex flex-row justify-between w-full px-4 py-2 rounded-t-md"
    style="background-color: #ba4198"
  >
    <div class="flex w-1/5 mr-5 justify-self-start">
        <div class="flex flex-col">
            <el-avatar class="align-middle" icon="el-icon-user-solid" size="medium" />
        </div>
    </div>
    <div class="flex justify-between w-3/5 text-white align-middle justify-self-center">
      <div class="inline-block">
        <span class="inline-block mr-1 text-xl font-semibold align-middle">{{ counters.stars }}</span>
        <span class="inline-block align-middle"><i class="text-2xl text-orange-500 align-middle el-icon-star-on"></i></span>
      </div>
      <div class="inline-block">
        <span class="inline-block mr-1 text-xl font-semibold align-middle">{{ counters.medals }}</span>
        <span class="inline-block align-middle"><i class="text-xl text-gray-300 align-middle el-icon-medal"></i></span>
      </div>
      <div class="inline-block">
        <span class="inline-block mr-2 text-sm align-middle">Points:</span>
        <span class="inline-block text-xl font-semibold align-middle">{{ counters.points }}</span>
      </div>
      <div class="inline-block">
        <span class="inline-block mr-2 text-sm align-middle">Level:</span>
        <span class="inline-block text-xl font-semibold align-middle">
            {{ getLevel() }}
        </span>
      </div>
      <div class="inline-block">
        <span class="inline-block text-xl font-semibold text-yellow-500 align-middle">
            {{ getDifficulty() }}
        </span>
      </div>
    </div>
    <div class="flex justify-end w-1/5 align-middle">
    <el-button class="font-semibold text-white special-blue-bg hover:bg-blue-400 hover:border-blue-400 hover:text-white">EXIT</el-button>
    </div>
  </div>
</template>

<script>

// Import levels data
import { difficulties } from "../../../services/data/difficulties";

export default {
    props: {
        counters: {
            type: Object,
            required: true
        },
        difficulty: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    },

    methods: {
        getLevel() {
            return this.level < 10 ? `0${ this.level }` : this.level;
        },

        getDifficulty() {
            let difficulty = difficulties.find(level => level.value === this.difficulty);
            if (difficulty) {
                return difficulty.text.toUpperCase()
            }
        }
    }
};
</script>

<style>
.special-blue-bg {
    background-color: #27aae1;
    border-color: #889ca5;
}
</style>