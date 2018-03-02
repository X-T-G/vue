<template>
	<section class="find">
		<head-top logo-part="true" search-part="true" add="true"></head-top>
		<find-me></find-me>
		<foot-guide></foot-guide>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>	
</template>

<script>
	import headTop from '../../components/header/header'
	import footGuide from '../../components/footer/footer'
	import findMe from '../../components/findMe/findme'
	export default {
		name: 'find',
		data () {
			return {
				msg: ''
			}
		},
		components:{
			headTop,
			findMe,
			footGuide
		},
	}
</script>
<style lang="scss" scoped>
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}
</style>