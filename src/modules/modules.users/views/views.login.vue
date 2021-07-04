<template>
  <div class="flex flex-row w-full min-h-screen bg-cover">
    <div
      class="flex-row justify-center hidden w-1/4 bg-bottom bg-no-repeat bg-cover border-r-8 border-solid lg:flex border-primary"
      :style="`background-image: url(${require('@/assets/backgrounds/login-bg-1.png')}); padding-top: 40%`"
    >
      <!-- <el-button
        style="font-family: VT323"
        type="text"
        class="text-3xl text-white animate-pulse hover:animate-none"
        >Play now <span class="text-primary">!!!</span></el-button
      > -->
    </div>
    <div
      class="w-full bg-center bg-no-repeat bg-cover lg:w-3/4"
      :style="`background-image: url(${require('@/assets/backgrounds/login-bg-2.png')});`"
    >
      <div class="flex justify-between flex-grow-0 w-full px-10 pt-5 pb-10">
        <router-link to="/">
          <el-button type="text">
            <i
              class="text-3xl font-bold text-white el-icon-arrow-left"
            ></i> </el-button
        ></router-link>

        <el-button
          @click="toggleForms = !toggleForms"
          type="text"
          class="text-lg font-semibold text-white underline"
          >{{ `Sign ${toggleForms ? "in" : "up"}` }}</el-button
        >
      </div>

      <!-- Login component -->
      <transition enter-active-class="animate__animated animate__fadeInUp" >
        <login-component @toggle="toggleForms = !toggleForms" v-if="!toggleForms" />
      </transition>

      <!-- Register component -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <register-component @toggle="toggleForms = !toggleForms" v-if="toggleForms" />
      </transition>

      <div class="flex flex-row justify-end pr-24">
        <el-button @click="$router.push({ name: 'main-menu' })" class="text-primary animate__animated animate__infinite animate__bounce" type="text">
          <span class="mr-1 text-lg font-bold uppercase">Skip</span>
          <i class="el-icon-d-arrow-right"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
// Login and register components
import LoginComponent from "../components/components.login";
import RegisterComponent from "../components/components.register";

export default {
  data() {
    return {
      toggleForms: false,
    };
  },

  components: {
    LoginComponent,
    RegisterComponent,
  },
};
</script>

<style scoped>
</style>