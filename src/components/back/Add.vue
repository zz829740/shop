<template>

  <section class="goods">


    <input class="gname" placeholder="商品名称" v-model="gname">
    <input class="gprice" placeholder="商品单价" v-model="gprice">
    <input class="inventory" placeholder="商品数量" v-model="inventory">
    <input class="image" placeholder="商品图片" v-model="image">
    <button class="save" @click="save">保存</button>


  </section>
</template>
<script>
  import {mapActions, mapMutations} from 'vuex'
  export default{

    data(){
      return {
        gname: '',
        gprice: '',
        inventory: '',
        image: ''
      }
    },
    methods: {
      save(){
        this.saveGood()
          .catch(err => console.log(err))
 
      },
      ...mapActions(['saveGood']),
      ...mapMutations(['SET_GOOD'])  
           
    },
    computed: {
      gname: {
        get(){
          return this.$store.state.good.gname
        },
        set(value){
          this.$store.commit('UPDATE_GNAME', value)
        }
      },
      gprice: {
        get(){
          return this.$store.state.good.gprice
        },
        set(value){
          return this.$store.commit('UPDATE_GPRICE', value)
        }
      },
      inventory: {
        get(){
          return this.$store.state.good.inventory
        },
        set(value){
          return this.$store.commit('UPDATE_INVENTORY', value)
        }
      },
      image: {
        get(){
          return this.$store.state.good.image
        },
        set(value){
          return this.$store.commit('UPDATE_IMAGE', value)
        }
      }
    }
  }
</script>

