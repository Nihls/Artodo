import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageArtitemList from '@/components/PageArtitemList'

Vue.use(Router)

export default new Router({
    routes: [
	{
	    /*
	    path: '/',
	    name: 'HelloWorld',
	    component: HelloWorld
	    */
	    path: '/',
	    name: 'PageArtitemList',
	    component: PageArtitemList
	},
        {
	    path: '/itemList/:type',
	    name: 'PageArtitemList',
	    component: PageArtitemList
	}

    ]
})
