import Vue from 'vue'
import Router from 'vue-router'
import dialog from '@/frames/dialog/dialog'
import addressbook from '@/frames/addressbook/addressbook'
// import find from '@/frames/find/find'
// import me from '@/frames/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'dialog', component: dialog},
    {path: '/dialog', name: 'dialog', component: dialog},
    {path: '/addressbook', name: 'addressbook', component: addressbook}
    // {path: '/find', name: 'find', component: find},
    // {path: '/me', name: 'me', component: me}
  ]
})
