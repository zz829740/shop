<template>
  <div class="order">
    <p class="title">订单页</p>
    <div class="order-list" v-for="(item,index) in order">

      <span>{{ item.oname }}</span>
      <span>{{ item.oprice }}</span>
      <span>{{ item.ocount }}</span>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    created() {
      this.$store.dispatch('getOrder')
    },

    computed: mapState(['order']),
    methods: mapActions(['getOrder'])
  }
</script>
