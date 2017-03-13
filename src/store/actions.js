import Vue from 'vue'


export default {
	find: (arr, attr, val) => {
		for(let i=0;i<arr.length;i++){
			if(arr[i][attr] == val){
				return arr[i]
			}
		}
		return false
	},
	addToCart: ({commit, state, dispatch}, good) => {
		const gid = good._id
		var gname = good.gname
		var gprice  = good.gprice
		var tar = good

		return Vue.http.post('/api/addToCart', {gid})
			.then(good => {
				if(tar.inventory<=0){
					tar.inventory = 0
				}else{
					tar.inventory--
				}

				// commit('CHANGE_INVENTORY')

			})

			.then(cart => {
				const record = find(state.cart, 'cname', gname)
				//state.cart.find((item) => item.cname=gname)
				if(!record){

					state.cart.push({
						'cname': gname,
						'cprice':gprice,
						'count':1
					})
					commit('ADD_TO_CART', state.cart)
				}else{
					++record.count
				}
			})
			.then(() => dispatch('getGoods'))
			.then(() => console.log('成功'))
			.catch((err) => {
				console.log(err)
			})
	},
	toggleItem ({state}, item) {
		function chazhao(arr, attr, val){
			for(let i=0;i<arr.length;i++){
				if(arr[i][attr] == val){
					return i;
				}
			}
			return false
		}

		let index = chazhao(state.cart, 'cname', item.cname)
		if(state.cart[index].done == undefined){
			Vue.set(state.cart[index],'done',true)

		}else{
			state.cart[index].done = !state.cart[index].done
		}


	},

	checkOut: ({state}) => {
		var order = state.cart.filter(item => item.done)
		function chazhao(arr, attr, val){
			for(let i=0;i<arr.length;i++){
				if(arr[i][attr] == val){
					return arr[i]
				}
			}
			return false
		}
		order.map((every)=>{
			chazhao(state.cart, 'cname', every.cname).count--;
		})
		return Vue.http.post('/api/checkOut', order)

			.then(() => dispatch('getOrder'))

	},
	// checkOut: ({commit, state, dispatch}, item) => {
	// 	// const cid = item._id

	// 	function chazhao(arr, attr, val){
	// 		for(let i=0;i<arr.length;i++){
	// 			if(arr[i][attr] == val){
	// 				return arr[i]
	// 			}
	// 		}
	// 		return false
	// 	}
	// 	chazhao(state.cart, 'cname', item.cname).count--;
	// 	return Vue.http.post('/api/checkOut', {item})

	// 		.then(() => dispatch('getCarts'))
	// },

	getCarts: ({commit}) => {
		return Vue.http.get('/api/getCarts')
				.then(response => response.json())
				.then(cart => {
					commit('SET_CART', cart)
				})
	},

	getOrder: ({commit}) => {
		return Vue.http.get('/api/getOrder')
				.then(response => response.json())
				.then(order => {
					commit('SET_ORDER', order)
				})
	},

	getGoods: ({commit,state}) => {

		return Vue.http.get('/api/getGoods')

			.then(response => response.json())

			.then(goods => {
				console.log(goods)

				commit('SET_GOODS', goods)
			})
	},

	saveGood ({state, commit}) {
		return Vue.http.post('/api/saveGood', state.good)
			.then(
				() => console.log('成功'),
				() => console.log('失败')
			)
	},

	addUser ({state, commit}) {
		return Vue.http.post('/api/addUser', state.user)
			.then(
				() => console.log('成功了'),
				() => console.log('失败了')
			)
	},

	deleteGood ({state, dispatch}, id) {
		return Vue.http.post('/api/deleteGood', {id})
		.then(() => dispatch('getGoods'))
		.then(() => console.log('成功'))
		.catch(() => {
		})
	},

	getGood ({commit}, id) {
		return Vue.http.get('/api/getGood', {params: {id}})
			.then(response => {
				commit('SET_GOOD', response.data)
			})
			.then(console.log('成功'))
	},

	login ({commit}) {
		return Vue.http.post('/api/login')
				.then(response => {
					if(response.data.state === 1) {
						commit('SET_USER')
					}else{
						return Promise.reject(response.data.msg)
					}
				})
	}
}
