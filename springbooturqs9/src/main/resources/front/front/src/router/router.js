import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import cheweifenleiList from '../pages/cheweifenlei/list'
import cheweifenleiDetail from '../pages/cheweifenlei/detail'
import cheweifenleiAdd from '../pages/cheweifenlei/add'
import cheweixinxiList from '../pages/cheweixinxi/list'
import cheweixinxiDetail from '../pages/cheweixinxi/detail'
import cheweixinxiAdd from '../pages/cheweixinxi/add'
import chezijinchangList from '../pages/chezijinchang/list'
import chezijinchangDetail from '../pages/chezijinchang/detail'
import chezijinchangAdd from '../pages/chezijinchang/add'
import chezilichangList from '../pages/chezilichang/list'
import chezilichangDetail from '../pages/chezilichang/detail'
import chezilichangAdd from '../pages/chezilichang/add'
import weiguichufaList from '../pages/weiguichufa/list'
import weiguichufaDetail from '../pages/weiguichufa/detail'
import weiguichufaAdd from '../pages/weiguichufa/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'cheweifenlei',
					component: cheweifenleiList
				},
				{
					path: 'cheweifenleiDetail',
					component: cheweifenleiDetail
				},
				{
					path: 'cheweifenleiAdd',
					component: cheweifenleiAdd
				},
				{
					path: 'cheweixinxi',
					component: cheweixinxiList
				},
				{
					path: 'cheweixinxiDetail',
					component: cheweixinxiDetail
				},
				{
					path: 'cheweixinxiAdd',
					component: cheweixinxiAdd
				},
				{
					path: 'chezijinchang',
					component: chezijinchangList
				},
				{
					path: 'chezijinchangDetail',
					component: chezijinchangDetail
				},
				{
					path: 'chezijinchangAdd',
					component: chezijinchangAdd
				},
				{
					path: 'chezilichang',
					component: chezilichangList
				},
				{
					path: 'chezilichangDetail',
					component: chezilichangDetail
				},
				{
					path: 'chezilichangAdd',
					component: chezilichangAdd
				},
				{
					path: 'weiguichufa',
					component: weiguichufaList
				},
				{
					path: 'weiguichufaDetail',
					component: weiguichufaDetail
				},
				{
					path: 'weiguichufaAdd',
					component: weiguichufaAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
