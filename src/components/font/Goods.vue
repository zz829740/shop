<template>

	<div class="goods">
		<div class="header">
			<span class="sg">Luxury Shop</span>

			<button class="gocart"></button>
		</div>
		
		<!-- <img src="../../assets/img/dior-lip.jpg" > -->
		<div class="list">
			<div class="goods-list" v-for="(good ,index) in goods"> 
				<div class="good">
					<div class="b-con">
						<p class="gname">{{ good.gname }}</p>
						<img :src="good.image">
						<p class="price">Price (￥)： {{ good.gprice }} </p>
						<p class="stock">Stock： {{ good.inventory }} </p>
					</div>
					<div class="b-ope">
						<button class="op add" @click="addToCart(good)">
							Add to cart
						</button>
						<button class="op like">I like it</button>
					</div>
				</div>
			</div>
		</div>

		<div class="footer">Copyright (c) By Jane Wu</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		created() {
			// this.getGoods()
			this.$store.dispatch('getGoods')
		},

		computed: mapState(['goods']),
		methods: mapActions(['getGoods', 'addToCart'])
	}
</script>

<style lang="sass" rel="stylesheet/scss">
body{
	margin: 0;
	padding: 0;
}
.header{
	width: 100%;
	height: 80px;
	background: #24292e;
	position: fixed;
	z-index: 3;
	margin-bottom: 100px;
	
	text-align: center;
	font-size: 25px;
	line-height: 80px;
	color: white;
}
.goods{
	width: 100%;
	height: 1600px;
	position: relative;
	margin: 0 auto;
	.footer{
		height: 40px;
		background: #24292e;
		width: 100%;
		text-align: center; 
		line-height: 40px;
		color: white;
	}
	.list{
		padding-top: 100px;
	}
	.goods-list{
		width: 500px;
		height: 570px;
		overflow: hidden;
		
		position: relative;
		margin: 0 auto;
		.good{
			background: #f9f9f9;
			width: 520px;
			height: 500px;
			margin: 10px auto;
			padding: 10px;
			padding-bottom: 20px;
			padding-left: 80px;
			.b-con img{
				width: 300px;
				height: 300px;
			}
			.b-con{
				.price,.stock{
					color: #a9a9a9;
					font-weight: bolder;
					transition: .8s;
				}
				.gname{
					font-size: 20px;
					color: #333;
				}
				.price:hover{
					color: #8a8a8a;
				}
				.stock:hover{
					color: #8a8a8a;
				}
				
			}	
			.op{
				width: 100px;
				height: 30px;
				margin-right: 20px;
				border: none;
				color: #333;
			}
			.like{
				background: #f3e9e8;
			}
			.add{
				background: #d8d8d8;
			}		
		}

	}
}

</style>