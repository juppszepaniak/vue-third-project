<template>
  <navbar></navbar>

  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  methods: {
    /* async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    }, */
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
