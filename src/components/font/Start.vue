<template>
<div class="register">
      <button @click="showReg">注册</button>
      <!-- use the modal component, pass in the prop -->
     <!--  <modal v-if="showModalr" @close="showModalr = false"> -->
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <!-- <h3 slot="header">custom header</h3> -->
      <!-- </modal> -->

      <button @click="showLog">登录</button>
      <login v-if="showModall" @close="showModall = false">
      	
      </login>
</div>	
</template>

<script>

import Register from './Register.vue'
import Login from './Login.vue'
export default{
	data(){
		return {
			showModalr: false,
			showModall: false
		}
	},
  methods:{
    showReg(){
      showModalr = true;
      showModall = false;
    },
    showLog(){
      showModalr = false;
      showModall = true;
    }
  },
	components: {'modal': Register, 'login': Login}


}

</script>


