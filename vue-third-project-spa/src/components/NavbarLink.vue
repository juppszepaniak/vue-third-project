<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link"
      active-class="active"
      aria-current="page"
      :title="`Dieser Link führt dich auf die ${page.link.text} page`"
      >{{ page.link.text }}</router-link
    >
  </li>
</template>

<script>
export default {
  props: ["page", "index"],
};
</script>