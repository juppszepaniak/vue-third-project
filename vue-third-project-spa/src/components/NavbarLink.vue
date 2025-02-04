<template>
  <a
    class="nav-link"
    :class="activeClasses"
    aria-current="page"
    :href="page.link.url"
    :title="`Dieser Link führt dich auf die ${page.link.text}-Page`"
    >{{ page.link.text }}</a
  >
</template>

<script>
export default {
  props: ["page", "isActive"],
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
