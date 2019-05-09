<template>
<v-app>
<!--
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VueJS Stuff</span>
      
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="font-weight-light">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </span>
      <v-spacer></v-spacer>
      <h4>Hey! I'm over here</h4>
    </v-toolbar>
-->
<transition name="fade">
    <v-content>
      <router-view/>
    </v-content>
    </transition >
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
 data: {
    show: true
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>