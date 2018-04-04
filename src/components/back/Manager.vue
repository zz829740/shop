<template>

  <section class="articles">

    <input class="title" placeholder="商品名称" v-model="g_name">
    <input class="content" placeholder="商品价格" v-model="g_price">
    <button class="save" @click="save">保存</button>


  </section>
</template>
<script>
  import {mapActions, mapMutations} from 'vuex'
  export default{

    data(){
      return {
        g_name: '',
        g_price: ''
      }
    },
    methods: {
      save(){
        this.saveArticle()
          .catch(err => console.log(err))
 
      },
      ...mapActions(['saveArticle']),
      ...mapMutations(['SET_ARTICLE'])  
           
    },
    computed: {
      title: {
        get(){
          return this.$store.state.article.title
        },
        set(value){
          this.$store.commit('UPDATE_TITLE', value)
        }
      },
      content: {
        get(){
          return this.$store.state.article.content
        },
        set(value){
          return this.$store.commit('UPDATE_CONTENT', value)
        }
      }
    }

  }
</script>

