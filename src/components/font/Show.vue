<template>
  <section class="goods">
    
    <table>
      <tbody>
      <tr>
        <th>商品名称</th>
       
        <th>商品单价</th>

        <th>商品库存</th>
        <!-- <th>图片</th> -->
        <th>删除</th>
        <th>查看</th>
      </tr>
      <tr v-for="(good,index) in goods">

        <td>
          {{good.gname}}
        </td>
        <td>
          {{good.gprice}}
        </td>

        <td>
          {{good.inventory}}
        </td>
       <!--  <td>
          {{good.image}}
        </td> -->
        <td>
          <a class="delete"  @click="deleteGood(good._id)">删除</a>
        </td>
        <td>
          <router-link :to="{path:'/good', query:{id:good._id}}"
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

      this.getGoods()
    },
    computed: mapState(['goods']),
    methods: mapActions(['getGoods', 'deleteGood'])
  }
</script>

