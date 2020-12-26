<template>
  <v-facebook-login @login="onLogin" @logout="onLogout" app-id="225159979212918"></v-facebook-login>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  name: "LoginPage",
  components: {
    VFacebookLogin
  },
  methods: {
    onLogin() {
      alert("logged in")
    },
    onLogout() {
      alert("logged out")
    },
  }
}
</script>