<template>
  <section class="articles">
    
    <table>
      <tbody>
      <tr>
        <th>标题</th>
       
        <th>内容</th>
        <th>删除</th>
        <th>查看</th>
      </tr>
      <tr v-for="(article,index) in articles">

        <td>
          {{article.title}}
        </td>
        <td>
          {{article.content}}
        </td>
        <td>
          <a class="delete" href="jvascript:void(0)" @click="deleteArticle(article._id)">删除</a>
        </td>
        <td>
          <router-link :to="{path:'/article', query:{id:article._id}}"
                        tag="span">查看</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  export default{

    created(){

      this.getArticles()
    },
    computed: mapState(['articles']),
    methods: mapActions(['getArticles'])
  }
</script>

