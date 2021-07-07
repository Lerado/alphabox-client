<template>
  <div class="w-full min-h-screen font-sans bg-gray-900">
    <el-scrollbar :native="false">
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <transition
          name="custom-transitions"
          :enter-active-class="`animate__animated animate__${this.transitionEnter} animate__slower`"
          :leave-active-class="`animate__animated animate__${this.transitionLeave} animate__fast`"
        >
          <component class="animate__animated animate__fadeIn animate__slower" :is="Component" />
        </transition>
      </router-view>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionEnter: "slideInRight",
      transitionLeave: "fadeOut",
    };
  },
  watch: {
    $route(to, from) {
      if (from.meta.transitions) this.transitionLeave = from.meta.transitions.leave || this.transitionLeave
      if (to.meta.transitions) this.transitionEnter = to.meta.transitions.enter || this.transitionEnter;
    },
  },
};
</script>