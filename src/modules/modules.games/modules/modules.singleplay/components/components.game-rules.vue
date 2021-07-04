<template>
  <div>
    <div class="w-full py-5 text-center" style="background-color: #3d2769">
      <p class="text-xl font-semibold text-center text-white">Game rules</p>
    </div>
    <div class="w-11/12 py-5 mx-auto">
      <el-skeleton :rows="5" animated v-if="loading"></el-skeleton>
      <template v-else>
        <el-steps class="h-56" direction="vertical" :active="mapInstructions.length" finish-status="process">
          <el-step
            v-for="(instruction, index) in mapInstructions"
            :key="index"
            :title="instruction"
          >
            <template #title>
                <p class="text-white">{{ instruction }}</p>
            </template>
          </el-step>
        </el-steps>
      </template>
      <el-divider />
      <div class="w-full py-10 text-6xl font-bold text-center text-primary">
          <div class="animate__animated animate__infinite animate__delay-2s animate__slower animate__tada">{{ letter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Game instructions
    settings: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      // Is skeleton data loading
      loading: true,
    };
  },

  computed: {
    mapInstructions() {
      return this.settings.instructions.map(instruction => {
          // Replace patterns in string with their values
          let parseInstruction = instruction;
          let regexp = ['time', 'letter', 'required'];
          regexp.forEach(exp => {
              parseInstruction = parseInstruction.replace(`:${ exp }`, this.settings[`${ exp }`]);
          });
          return parseInstruction;
      });
    },
    letter() {
        if (this.settings.letter)
            return this.settings.letter.toUpperCase();
        
        return '';
    }
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>

<style>
.el-skeleton.is-animated .el-skeleton__item {
  opacity: 25%;
}
</style>