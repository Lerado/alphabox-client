<template>
  <div class="flex flex-row justify-center w-full">
    <el-steps
      class="w-10/12 mx-auto align-middle"
      :active="active"
      space="75%"
      process-status="process"
      finish-status="success"
    >
      <el-step
        v-for="(step, index) in mapSteps"
        :key="index"
        :icon="`el-icon-${step.icon}`"
        :description="step.description"
        :title="step.title"
      ></el-step>
      <!-- <el-step :icon="'el-icon-question'" :title="'Etape 2'">2</el-step>
              <el-step :icon="'el-icon-chat-dot-square'" :title="'Etape 3'"
                >2</el-step
              >
              <el-step :icon="'el-icon-edit'" :title="'Etape 4'">3</el-step> -->
    </el-steps>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Object,
      required: true,
    },
    active: {
      type: Number,
      required: true
    }
  },
  computed: {
    mapSteps() {
      let mapSteps = [ ...this.steps ];
      mapSteps.push({ icon: "success", description: "", title: "Finished" });
      return mapSteps;
    }
  },
};
</script>

<style>
</style>