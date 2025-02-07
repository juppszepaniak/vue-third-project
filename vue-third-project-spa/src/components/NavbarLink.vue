<template>
  <li>
    <a
      class="nav-link"
      :class="activeClasses"
      aria-current="page"
      :href="page.link.url"
      :title="`Dieser Link führt dich auf die ${page.link.text} page`"
      @click.prevent="$bus.$emit('navbarLinkActived', index)"
      >{{ page.link.text }}</a
    >
  </li>
</template>

<script>
export default {
  props: ["page", "index", "isActive"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
  text-underline-offset: 0.5rem;
}
</style>
