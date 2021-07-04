<template>
  <el-progress
    type="circle"
    :status="timerStatus"
    :width="width"
    :stroke-width="strokeWidth"
    :percentage="percentage"
  >
    <template #default>
      <span class="percentage-value"> {{ countdown }} </span>
    </template>
  </el-progress>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 150,
    },
    strokeWidth: {
      type: Number,
      default: 10,
    },
    // Triggers timer start
    active: {
      type: Boolean,
      default: false,
    },
    // Define countdown duration
    duration: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      percentage: 0.0,
      countdown: this.duration,
      clockIdentifier: 0,
      timerStatus: "",
    };
  },

  watch: {
    percentage: function (newValue) {
      if (newValue >= 100) {
        this.percentage = 100;
        this.stop();
        this.$emit("timerFinished");
      }
    },
    countdown: function (newValue) {
      if (newValue < 10) this.timerStatus = "exception";
      else if (newValue < this.duration / 2) this.timerStatus = "warning";
    },
    active: function (newValue, oldValue) {
      // Start timer if active is goes from false to true
      if (newValue && !oldValue) {
        this.$emit("timerLaunching");
        this.start();
      }
      if (!newValue && oldValue) this.reset();
    },
  },

  methods: {
    reset() {
      this.percentage = 0;
      this.countdown = this.duration;
      this.timerStatus = "";
      this.stop();
      this.clockIdentifier = 0;
    },
    start() {
      // Increase percentage of 100/duration each second
      this.clockIdentifier = setInterval(() => {
        this.percentage += 100 / this.duration;
        this.countdown -= 1; // Decrease countown
      }, 1000);
      this.$emit("timerLaunched");
    },
    stop() {
      // Reset interval
      if (this.clockIdentifier !== 0) {
        clearInterval(this.clockIdentifier);
        this.$emit("timerStopped");
      }
    },
  },
};
</script>
<style>
</style>