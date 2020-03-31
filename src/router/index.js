import Vue from 'vue'
import VueRouter from 'vue-router'
import Newest from '../views/Newest.vue'
import Hottest from '../views/Hottest.vue'
import NewPost from '../views/NewPost.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'newest',
		component: Newest
	},
	{
		path: '/hottest',
		name: 'Hottest',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/Hottest.vue')
		component: Hottest
	},
	{
		path: '/newpost',
		name: 'newpost',
		component: NewPost
	}

]

const router = new VueRouter({
  routes
})

export default router
