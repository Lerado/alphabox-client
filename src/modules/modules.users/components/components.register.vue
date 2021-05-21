<template>
  <div>
    <div class="flex flex-row justify-center align-middle">
      <div class="flex flex-col justify-center w-1/3">
        <h1 class="text-2xl font-bold text-center text-white">
          Sign up to AlphaBox
        </h1>
        <p class="text-sm text-center text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          dolorum, qui ?
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center align-middle">
      <div class="block w-2/5 mx-auto mt-5">
        <label class="text-sm text-white" for="username">Pseudo</label>
        <el-input
          type="text"
          class="w-full"
          prefix-icon="el-icon-user-solid"
          :minLength="6"
          :maxLength="20"
          :show-word-limit="true"
          placeholder="Enter your username"
          name="username"
          clearable
          autofocus
        />
      </div>
      <div class="block w-2/5 mx-auto mt-5">
        <label class="text-sm text-white" for="username">Email</label>
        <el-input
          type="email"
          class="w-full"
          prefix-icon="el-icon-s-promotion"
          placeholder="Valid email address"
          name="username"
          clearable
        />
      </div>
      <div class="block w-2/5 mx-auto my-2">
        <label class="text-sm text-white" for="password">Password</label>
        <el-input
          type="password"
          class="w-full"
          prefix-icon="el-icon-key"
          :show-password="true"
          placeholder="Password"
          name="password"
          clearable
        />
      </div>
      <div class="block w-2/5 mx-auto my-2">
        <label class="text-sm text-white" for="password">Password confirmation</label>
        <el-input
          type="password"
          class="w-full"
          prefix-icon="el-icon-key"
          :show-password="true"
          placeholder="Repeat your password"
          name="password-confirmation"
          clearable
        />
      </div>
    </div>
    <div class="flex flex-row justify-center mt-5 align-middle">
      <el-button class="w-1/6 text-lg text-white uppercase bg-primary"
        >Sign up</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
    name: "RegisterComponent"
};
</script>

<style scoped>
</style>