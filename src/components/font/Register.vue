<template>
	
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						
						<div class="modal-header">
							<!-- <slot name="header">
								default header
							</slot> -->
							注册
						</div>

						<div class="modal-body">
							<!-- <slot name="body">
								default body
							</slot> -->
							<input class="tanc name" placeholder="用户名" v-model="name"><br>
							<input class="tanc pwd" placeholder="密码" v-model="pwd">
						</div>

						<div class="modal-footer">
							<slot name="footer">
								
								<button class="init-btn re register" @click="register">
									Save
								</button>
								<button class="init-btn re cancel" @click="$emit('close')">
									Cancel
								</button>
							</slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
		
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default{
	methods: {
		register(){
			this.addUser()
				.catch(err => console.log(err))
		},
		...mapActions(['addUser']),
		...mapMutations(['ADD_USER'])
	},

	computed: {
		name: {
			get(){
				return this.$store.state.user.name
			},
			set(value){
				this.$store.commit('UPDATE_NAME', value)
			}
		},

		pwd: {
			get(){
				return this.$store.state.user.pwd
			},
			set(value){
				this.$store.commit('UPDATE_PWD', value)
			}
		}
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
		.init-btn{
			background: #2c2c2c;
			width: 80px;
			height: 30px;
			color: white;
			border: none;
			
		}
		.cancel{
			
			right: 30px;
			
		}
		.register{
			right: 130px;
		}
		.re{
			position: absolute;
			
			bottom: 20px;
		}
	}
}
</style>
