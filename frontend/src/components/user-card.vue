<script>
export default {
  name: 'UserCard',
  props: ['user'],
}
</script>

<template lang="pug">
.box
  h2 {{user.name}} ({{user.email}}) 
  p {{user.plans}}
</template>

<style scoped>
.box {
  padding: 1.5rem;
  border: 1px solid rgba(247, 248, 167, 0.986);
  background: rgba(254, 255, 183, 0.986);
  border-radius: 0.8rem;
}
</style>
