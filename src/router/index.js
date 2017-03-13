import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Add  from '../components/back/Add.vue'
import Show  from '../components/font/Show.vue'
import Good  from '../components/font/Good.vue'

import Register from '../components/font/Register.vue'
import Login from '../components/font/Login.vue'
import Home from '../components/font/Home.vue'
import Goods from '../components/font/Goods.vue'
import Cart from '../components/font/Cart.vue'
import Order from '../components/font/Order.vue'

export default new Router({
	mode: 'history',
	routes: [
		//	后台
		{path: '/admin', component: Add},
		{path: '/show', component: Show},
		{path: '/good', name: 'good', component: Good},
		//  前台
		{path: '/order', name: 'order', component: Order},
		{path: '/cart', name: 'cart', component: Cart},

		{path: '/log', component: Login},
		{path: '/reg', component: Register},
		{path: '/home', component: Home},
		{path: '/goods', component: Goods}
	]
})
