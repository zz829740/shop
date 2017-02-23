<template>
	<div class="carts goods">
		<div class="cart-content">
			<div class="carts-list" v-for="(item ,index) in cart"> 
				<div class="c-con">
					<span class='iname'>{{item.cname}}</span>
					<span></span>

					<span class='val'>￥：{{item.cprice}} X {{item.count}}</span>
					<span></span>

					<span>
						<button class="check" :disables="!goods.length" @click="checkOut(item)">Check out
						</button>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		created() {
			// this.getCarts()
			this.$store.dispatch('getCarts')
		},

		computed: mapState(['cart', 'goods']),
		methods: mapActions(['getCarts', 'checkOut'])
	}
</script>


<style lang="sass" rel="stylesheet/scss">

.carts{
	
	width: 1300px;
	height: 700px;
	background-image: url(../../assets/aa.svg); //230
	background-size: 1300px 700px;
	position: relative;
	.cart-content{
		position: absolute;
		width: 90%;
		margin: 0 auto;
		top: 230px;
		box-sizing: border-box;
		padding-left: 400px;
		
	}
	.carts-list{
		height: 50px;
		line-height: 50px;
		overflow: hidden;
		.c-con{
			color: #2c2c2c;
			width: 90%;
			box-sizing: border-box;
			padding: 0 20px;
			margin: 0 auto;
			display: inline-grid;
			// grid-template-columns: 305px 30px 175px 50px 85px;
			grid-template-columns: 40% 2% 15% 2% 15%; 
			grid-template-rows: auto 10px auto;
			// .iname{
			// 	color: #d81e06;
			// }
			// .val{
			// 	font-weight: bolder;
			// 	color: #13227a;
			// }
			.check{
				width: 80px;
				height: 25px;
				border: none;
				background: #d81e06; //#2c2c2c
				color: white;
			}
			// span{
			// 	display: inline-block;
			// 	margin-right: 30px;
			// }
		}
		
	}
}

</style>