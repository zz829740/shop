<template>
	
		<transition name="login">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						
						<div class="modal-header">
							<!-- <slot name="header">
								default header
							</slot> -->
							登录
						</div>

						<div class="modal-body">
							<!-- <slot name="body">
								default body
							</slot> -->
							<input class="name" type="text" placeholder="用户名" v-model.trim="name"><br>
							<input class="pwd" type="password" placeholder="密码" v-model.trim="pwd">
						</div>

						<div class="modal-footer">
							<slot name="footer">
								
								<button class="login" @click="dologin">
									确认
								</button>
								<button class="modal-default-button" @click="$emit('close')">
									取消
								</button>
							</slot>
						</div>

						<div class="info">{{info}}</div>
					</div>
				</div>
			</div>
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
			// if(!this.name.length) return this.info="请输入正确的用户名"
			// if(!this.pwd.length) return this.info="请输入正确的密码"
			
			this.login({name: this.name, pwd: this.pwd})
				.then(() => {
					this.$route.push({path: '/home'}) 
				})
				.catch(msg => this.info = msg)
		},

		clearInfo(){
			this.info = ''
		},
		...mapActions(['login']),
		...mapMutations(['SET_USER'])
	}

	// watch: {
	// 	name: 'clearInfo',
	// 	pwd: 'clearInfo'
	// }
}

</script>


