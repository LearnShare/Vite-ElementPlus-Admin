<template>
  <div class="page-signin">
    <h1 class="title">Sign in</h1>
    <div class="guide">
      <span>New to Admin?&nbsp;</span>
      <router-link
          to="/signup">Sign up</router-link>
    </div>
    <div class="form">
      <div class="row">
        <el-input
            v-model="form.email"
            placeholder="Email" />
      </div>
      <div class="row">
        <el-input
            v-model="form.password"
            placeholder="Password"
            type="password" />
      </div>
      <div class="actions">
        <el-button
            type="primary">Continue</el-button>
      </div>
    </div>
  </div>
</template>

<script
    setup
    lang="ts">
import {
  ref,
} from 'vue';

const form = ref({
  email: '',
  password: '',
});
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
