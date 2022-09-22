<script>
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'Home-page',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserCard,
  },
  data() {
    return {
      users: [],
      time: new Date(),
    }
  },
  async created() {
    const usersRequest = await axios.get('http://localhost:4444/api/users')
    this.users = usersRequest.data
  },
}
</script>
<template lang="pug">
.home 
p The time is: {{ time.toDateString() }}
UserCard(v-for="user in users" :user="user")
</template>
