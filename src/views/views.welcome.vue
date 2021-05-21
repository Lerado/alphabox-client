<template>
  <div
    class="flex justify-center w-full min-h-screen align-bottom bg-opacity-75 bg-center bg-cover"
    :style="`background-image: url(${require('@/assets/backgrounds/welcome-bg.png')})`"
  >
    <div class="flex flex-col justify-center h-full align-bottom" style="padding-top: 30%">
      <div class="flex justify-center">
        <img
          width="100"
          height="100"
          id="logo"
          class="xs:hidden"
          src="@/assets/logo.png"
          alt=""
        />
      </div>
      <div class="flex justify-center mt-4">
        <router-link to="login">
          <button
            class="font-bold border-2 border-pink-200 border-solid bg-primary animate-pulse rounded-3xl"
            id="playNowBtn"
          >
            PLAY
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#playNowBtn {
  font-size: 2rem;
  padding: 0rem 5rem;
  color: white;
  font-family: VT323;
}

#logo {
}
</style>