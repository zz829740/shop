<template>
	<div class="order">
		<p class="title">订单页</p>
		
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		created() {
			this.getGoods()
		},

		computed: mapState(['goods']),
		methods: mapActions(['getGoods', 'addToCart'])
	}
</script>