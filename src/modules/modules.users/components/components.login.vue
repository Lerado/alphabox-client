<template>
  <el-form
    ref="loginForm"
    label-position="top"
    :model="loginElements"
    :rules="loginRules"
  >
    <div class="flex flex-row justify-center align-middle">
      <div class="flex flex-col justify-center w-1/3">
        <h1 class="text-2xl font-bold text-center text-white">
          Log into AlphaBox
        </h1>
        <p class="text-sm text-center text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          dolorum, qui ?
        </p>
      </div>
    </div>
    <div class="flex flex-row justify-center my-2 align-middle">
      <el-avatar :src="require('@/assets/avatar/avatar-1.png')" :size="140" />
    </div>
    <div class="flex flex-row justify-center align-middle">
      <el-avatar
        class="mr-8"
        :src="require('@/assets/stickers/google.png')"
        :size="'small'"
      />
      <el-avatar
        class="mr-8"
        :src="require('@/assets/stickers/facebook.png')"
        :size="'small'"
      />
      <el-avatar
        :src="require('@/assets/stickers/instagram.png')"
        :size="'small'"
      />
    </div>
    <div class="flex flex-col justify-center align-middle">
      <el-form-item prop="username" class="block w-2/5 mx-auto mt-5 mb-0">
        <label class="text-sm text-white" for="username">Pseudo</label>
        <el-input
          v-model="loginElements.username"
          type="text"
          class="w-full"
          prefix-icon="el-icon-user-solid"
          placeholder="Enter your username"
          clearable
          autofocus
        />
      </el-form-item>
      <el-form-item prop="password" class="block w-2/5 mx-auto my-2">
        <label class="text-sm text-white" for="password">Password</label>
        <el-input
          v-model="loginElements.password"
          @keypress.enter="submitForm('loginForm')"
          type="password"
          class="w-full"
          prefix-icon="el-icon-key"
          :show-password="true"
          placeholder="Password"
          clearable
        />
      </el-form-item>
    </div>
    <div class="flex flex-row justify-center text-white align-middle">
      <div class="flex justify-between w-2/5">
        <el-form-item prop="remember_me">
          <el-checkbox v-model="loginElements.remember_me"
            ><span class="text-sm text-white">Remember me</span></el-checkbox
          >
        </el-form-item>
        <div class="flex flex-col pt-2 align-middle">
          <router-link class="text-sm" to="">
            Forgot password <span class="font-semibold text-primary">?</span>
          </router-link>
        </div>
      </div>
    </div>
    <el-form-item class="flex flex-row justify-center mt-5 align-middle">
      <el-button
        @click="submitForm('loginForm')"
        size="medium"
        :loading="btnLoading"
        class="text-lg text-white uppercase bg-primary"
        >Sign in</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "LoginComponent",

  data() {
    return {
      loginElements: {
        username: "",
        password: "",
        remember_me: false,
      },
      loginRules: {
        username: [
          {
            required: true,
            message: "Please fill in your username",
            trigger: "blur",
          },
          {
            min: 4,
            max: 20,
            message: "Username must be between 4 and 20 characters",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in your password",
            trigger: "blur",
          },
          {
            min: 8,
            message: "Password must be minimum 8 characters",
            trigger: "blur",
          },
        ],
      },

      // Button loading
      btnLoading: false,
    };
  },

  methods: {
    toggleLoading(value = true) {
      this.btnLoading = value;
    },

    submitForm(formName) {
      // Validate form and send request to the server if success
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return; // Does nothing if the form is invalid
        this.toggleLoading();
        
        try {
          // Attempt login action with commit execution
          await this.$store.dispatch(
            "users/attemptLogin",
            this.loginElements,
            true // Commit the response
          );
          this.$message({
            showClose: true,
            message: "Successful login",
            type: "success",
          });
          // Redirect to main-menu page
          this.$router.push({ name: "main-menu" });
        } catch (error) {
          this.$message({
            showClose: true,
            message: error.message,
            type: "error",
          });
        } finally {
          this.toggleLoading(false);
        }
      });
    },
  },
};
</script>

<style scoped>
</style>