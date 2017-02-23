<template>

  <section class="articles">
    <!-- <router-link :to="{name:'editor'}"
                 tag="button">新增文章
    </router-link> -->

    <input class="title" placeholder="商品名称" v-model="g_name">
    <input class="content" placeholder="商品价格" v-model="g_price">
    <button class="save" @click="save">保存</button>
<!--       <tr v-for="(article,index) in articles">
        <router-link :to="{name:'article',query:{id:article._id}}"
                     tag="td">
          {{article.title}}
        </router-link>
        <td>
          {{article.date | toDate}}
        </td>
        <td>
          <router-link class="fa fa-pencil-square-o"
                       :to="{name:'editor',query:{id:article._id}}"
                       tag="i">
          </router-link>
          <i class="fa fa-trash"
             @click="deleteArticle(article._id)">
          </i>
        </td>
      </tr> -->

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
    // computed: {
    //   title: {
    //     get(){
    //       return this.$store.state.article.title
    //     },
    //     set(value){
    //       this.$store.commit('UPDATE_TITLE', value)
    //     }
    //   },
    //   content: {
    //     get(){
    //       return this.$store.state.article.content
    //     },
    //     set(value){
    //       this.$store.commit('UPDATE_CONTENT', value)
    //     }
    //   }
      
    // }
  }
</script>

