import App from '../APP'
 
const dialog = r => require.ensure([], () => r(require('../frames/dialog/dialog')), 'dialog')
const addressbook = r => require.ensure([], () => r(require('../frames/addressbook/addressbook')), 'addressbook')
const find = r => require.ensure([], () => r(require('../frames/find/find')), 'find')
const me = r => require.ensure([], () => r(require('../frames/me/me')), 'me')
// const singlechat = r => require.ensure([], () => r(require('../frames/conversation/singlechat')), 'singlechat')
// const groupchat = r => require.ensure([], () => r(require('../frames/conversation/groupchat')), 'groupchat')
// const chatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/chatmessage')), 'chatmessage')
// const groupchatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/groupchatmessage')), 'groupchatmessage')

export default[{
	path:'/',
	component:App,
	children: [
		{path: '', redirect: '/dialog'},   //地址为空时跳转dialogue页面
		{path: '/dialog', component: dialog, },//对话列表页
		{path: '/addressbook', component: addressbook, },//对话列表页
		{path: '/find', component: find, },//对话列表页
		{path: '/me', component: me, },//对话列表页
		// {
		// 	path: '/singlechat',
		// 	component: singlechat,
		// 	children:[
		// 		{
		// 			path: '/singlechat/chatmessage',
		// 			component: chatmessage,
		// 		}
		// 	]
	]
}]