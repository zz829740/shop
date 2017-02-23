<template>
	<div class="home">
		<p>首页</p>
		<p>{{user.name}}</p>
		<router-link to="/signout">退出</router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: mapState({user: state => state.user })
}
</script>