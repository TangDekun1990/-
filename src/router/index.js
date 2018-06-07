import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/main'
import Login from '@/views/login'
import Test from '@/views/test'
import Test2 from '@/views/test/test2'
import Test3 from '@/views/test/test3'
import Test4 from '@/views/test/test4'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
			children: [
				{ path: '/test', name: 'Test', component: Test },
				{ path: '/test2', name: 'Test2', component: Test2 },
				{ path: '/test3', name: 'Test3', component: Test3 },
				{ path: '/test4', name: 'Test4', component: Test4 },
			]
    },
		{
			path: '/login',
			name: 'Login',
			component: Login
		}
  ]
})
