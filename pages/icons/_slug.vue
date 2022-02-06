<template>
  <article>
    <h1>{{icon.title}}</h1>
    <svg v-html="icon.code"></svg>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const icon = await $content('svg-icons', params.slug).fetch()
    const [prev, next] = await $content('svg-icons')
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      icon,
      prev,
      next
    }
  }

}
</script>
<style>
</style>
