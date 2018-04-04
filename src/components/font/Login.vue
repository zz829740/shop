<template>
	
		<transition name="login">
			<div class="log-form" @keyup.enter="dologin">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						
						<div class="modal-header">
							
						</div>

						<div class="modal-body">
							<!-- <slot name="body">
								default body
							</slot> -->
							<input class="tanc name" type="text" placeholder="用户名" v-model.trim="name"><br>
							<input class="tanc pwd" type="password" placeholder="密码" v-model.trim="pwd">
						</div>

						<div class="modal-footer">
							<slot name="footer">
								
								<button class="login" @click="dologin()">
									Login
								</button>
							</slot>
						</div>

						<div class="info">{{info}}</div>
					</div>
				</div>
			</div></div>
		</transition>
		
</template>

<script>

import {mapActions, mapMutations} from 'vuex'
export default {
	data(){
		return {
			name: '',
			pwd: '',
			info: ''
		}
	},
	methods: {
		dologin(){
			
			this.login({name: this.name, pwd: this.pwd})
				.then(() => {
					this.$route.push({path: '/home'}) 
				})
				.catch(msg => this.info = msg)
		},

		clearInfo(){
			this.info = ''
		},
		...mapActions(['login'])
	}

}

</script>


<style lang="sass" rel="stylesheet/scss">

.modal-wrapper{
	  position: fixed;
	  left: 50%;
	  top: 50%;
	  transform: translate(-50%, -50%);
	.modal-container{

		width: 450px;
		height: 270px;
		box-sizing: border-box;
		border: 10px solid #2c2c2c;
		padding: 20px 10px 0;
		position: relative;
		
		.tanc{
			width: 300px;
			height: 30px;
			border: 5px solid #333;
			margin: 20px auto;
			padding-left: 20px;
		}
		.login{
			background: #2c2c2c;
			width: 80px;
			height: 30px;
			color: white;
			border: none;
			position: absolute;
			right: 50px;
			bottom: 20px;
			// transform: translateX(270px);
		}
	}
}
</style>



