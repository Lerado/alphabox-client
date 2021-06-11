<template>
  <el-form
    ref="registerForm"
    label-position="top"
    :model="registerElements"
    :rules="registerRules"
  >
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
        <el-form-item prop="username" class="block w-2/5 mx-auto mt-5 mb-0">
          <label class="text-sm text-white" for="username">Username</label>
          <el-input
            v-model="registerElements.username"
            type="text"
            class="w-full"
            prefix-icon="el-icon-user-solid"
            placeholder="Enter your username"
            clearable
            autofocus
          />
        </el-form-item>
        <el-form-item prop="email" class="block w-2/5 mx-auto my-2">
          <label class="text-sm text-white" for="email">Email</label>
          <el-input
            v-model="registerElements.email"
            type="email"
            class="w-full"
            prefix-icon="el-icon-s-promotion"
            placeholder="Valid email address"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password" class="block w-2/5 mx-auto my-2">
          <label class="text-sm text-white" for="password">Password</label>
          <el-input
            v-model="registerElements.password"
            type="password"
            class="w-full"
            prefix-icon="el-icon-key"
            :show-password="true"
            placeholder="Password"
            clearable
          />
        </el-form-item>
        <el-form-item
          prop="password_confirmation"
          class="block w-2/5 mx-auto my-2"
        >
          <label class="text-sm text-white" for="password_confirmation"
            >Password confirmation</label
          >
          <el-input
            v-model="registerElements.password_confirmation"
            type="password"
            class="w-full"
            prefix-icon="el-icon-key"
            :show-password="true"
            placeholder="Repeat your password"
            clearable
          />
        </el-form-item>
      </div>
      <div class="flex flex-row justify-center mt-5 align-middle">
        <el-button
          @click="submitForm('registerForm')"
          :loading="btnLoading"
          size="medium"
          class="text-lg text-white uppercase bg-primary"
          >Sign up</el-button
        >
      </div>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "RegisterComponent",

  data() {
    return {
      registerElements: {
        username: "",
        password: "",
        email: "",
        password_confirmation: "",
      },

      registerRules: {
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
        email: [
          {
            required: true,
            message: "Please fill in your email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Email must be a valid email address",
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
        password_confirmation: [
          {
            equal: "password",
            message: "Password confirmation must match the password.",
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
      // Validate and send request to the server if successful
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return; // Does nothing if form is not valid

        try {
          this.toggleLoading();
          // Attempt registering with no commit action after it
          await this.$store.dispatch(
            "users/attemptRegister",
            this.registerElements,
            false
          );
          this.$message({
            showClose: true,
            message: "Successful sign up",
            type: "success",
          });
          // Redirect to login form
          this.$emit("toggle");
        } catch (error) {
          this.$message({
            showClose: true,
            message: error.message,
            type: "error",
          });
        } finally {
          this.toggleLoading(false); // Button loading stop
        }
      });
    },
  },
};
</script>

<style scoped>
</style>