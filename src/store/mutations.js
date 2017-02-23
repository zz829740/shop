export default {
	SET_GOODS: (state, goods) => {
		state.goods = goods
	},
	SET_GOOD: (state, good) => {
		state.good = good
	},
	UPDATE_GNAME: (state, gname) => {
		state.good.gname = gname
	},
	UPDATE_GPRICE: (state, gprice) => {
		state.good.gprice = gprice
	},
	UPDATE_INVENTORY: (state, inventory) => {
		state.good.inventory = inventory
	},
	UPDATE_IMAGE: (state, image) => {
		state.good.image = image
	},
	ADD_USER: (state, user) => {
		state.user = user
	},
	UPDATE_NAME: (state, name) => {
		state.user.name = name
	},
	UPDATE_PWD: (state, pwd) => {
		state.user.pwd = pwd
	},
	SET_USER: (state, user) => {
		sessionStorage.setItem('user', JSON.stringify(user))
		state.user = user
	},
	SET_CART: (state, cart) => {
		state.cart = cart
	},
	
	ADD_TO_CART: (state, cart) => {
		state.cart = cart
	},
	CHANGE_INVENTORY: (state, good) => {
		if(state.good.inventory<=0){
			state.good.inventory = 0
		}else{
			state.good.inventory--
		}
	},
	
	CHECKOUT: (state, cart) => {
		state.cart = cart
	}

}