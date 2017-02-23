<template>

	<div class="good">
		<p class="gname">{{good.gname}}</p>
		<p class="gprice">{{good.gprice}}</p>
		<p class="gprice">{{good.inventory}}</p>
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
			this.$store.dispatch('getGood', this.$route.query.id)
		}
	},
	computed: mapState({
		good: state => {
			return state.good
		}
	}),

	watch: {
		'$route': ['fetchData']
	}
}	

</script>
