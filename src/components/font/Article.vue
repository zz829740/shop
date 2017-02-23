<template>

	<div class="article">
		<div class="title">{{article.title}}</div>
		<div class="content">{{article.content}}</div>
	</div>
</template>

<script>
import {mapState}  from 'vuex'

export default{
	created(){
		this.fetchData()
	},
	methods: {
		fetchData(){
			this.$store.dispatch('getArticle', this.$route.query.id)
		}
	},
	computed: mapState({
		article: state => {
			return state.article
		}
	}),

	watch: {
		'$route': ['fetchData']
	}
}	

</script>
