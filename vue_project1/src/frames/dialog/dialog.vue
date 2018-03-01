<template>
  <section class="dialogue">
		<!-- 头部 -->
		<head-top logo-part="true" search-part="true" add="true"></head-top>
		<div class="dialogue_con">
			<!-- 电脑登录 -->
			<section class="computer">
				<router-link to='/computer' class="computer_link">
					<section class="computer_icon">
						<svg>
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#computer"></use>
						</svg>
					</section>
					<section class="computer_text">Windows 微信已登录<span v-if="mute">， 手机通知已关闭</span></section>
				</router-link>
			</section>
			<!-- 对话列表 -->
			<section class="conversation">
				<ul>
					<router-link to="/singlechat" tag="li" v-for="item in dialogueList" @click.native="refreshInfor(item)">
						<div class="imgwipe">
							<!-- <i class="redicon_num">
							1
							</i> -->
							<i class="redicon"></i>
							<div class="imgstyle">
								<img :src="item.headurl" alt="">
							</div>
						</div>
						<div class="infordetail">
							<div class="infordetail_top clear">
								<span class="left ellipsis">{{item.remarks ? item.remarks : item.petname}}</span>
								<span class="right">12:07</span>
							</div>
							<div class="infordetail_bot ellipsis">
								{{item.newmeassage}}
							</div>
						</div> 
					</router-link>
				</ul>
			</section>
			<!-- 群聊 -->
			<section class="conversation">
				<ul>
					<router-link to="/groupchat" tag="li">
						<div class="imgwipe">
							<!-- <i class="redicon_num">1</i> -->
							<i class="redicon"></i>
							<div class="imgstyle imgstyletwo">
								<img :src="item.avatar" alt="" v-for="item in groupHead">
							</div>
						</div>
						<div class="infordetail">
							<div class="infordetail_top clear">
								<span class="left ellipsis">群聊</span>
								<span class="right">12:07</span>
							</div>
							<div class="infordetail_bot ellipsis">
								地点
							</div>
						</div>
					</router-link>
				</ul>
			</section>
		</div>
		<!-- 输入用户名弹窗 -->
		<section class="consumer" :class="{consumeradd : consumer}" v-if="consumerthing">
			<div class="consumerbg"></div>
			<div class="consumercon">
				<section class="login">
					<div class="useid" :class="{'useid_border' : borderColor}">
						<div class="mark">帐号</div>
						<div class="input_mark"><input type="text" placeholder="微信号(随便输入)" v-model="inputaccounts" @input="inpuMark" @click="accountsMark" /></div>
						<div class="svg_close" v-if="accounts" @click="clearMark">
							<svg fill="#c3c3c3">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use>
							</svg>
						</div>
					</div>
					<div class="login_botton" @click="loginSuccess"> 
						登 录
					</div>
				</section>
			</div>
		</section>
		<!-- 底部导航 -->
		<foot-guide></foot-guide>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>
</template>
<script>
	import headTop from '../../components/header/header'
	import footGuide from '../../components/footer/footer'
	export default {
	name: 'carousel',
	data () {
		return {
		msg: 'Welcome to Your Vue.js App'
		}
	},
	components:{
		headTop,
		footGuide
	},
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}
	@keyframes fadeOut {
	  from {
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	  }
	}
	.consumer{
		position: fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
		z-index:100;
		.consumerbg{
			position: fixed;
			width:100%;
			height:100%;
			top:0;
			background:#000;
			opacity: .5;
		}
		.consumercon{
			.login{
				background:#fff;
				border-radius:5px;
				padding: 1rem;
				width:12.3786666667rem;
				margin:0 auto;
				.useid{
					width:100%;
					border-bottom:1px solid #d4d4d4;
					align-items:center;
					.mark{
						letter-spacing:0.5546666667rem;
						line-height:2.0266666667rem;
						padding-left:0.4266666667rem;
					}
					.input_mark{
						margin-right:0.34rem;
						margin-left:.5rem;
						input{
							display:inline-block;
							width:5.1rem;
							line-height:2rem;
						}
					}
					.svg_close{
						svg{
							display:block;
						}
					}
				}
				.useid_border{
					border-color:#45c01a;
				}
				.login_botton{
					margin-top:1.536rem;
					text-align:center;
					background:#1aad19;
					border:1px solid #179e16;
					border-radius:5px;
					line-height:1.6rem;
				}
			}
			
		}
	}
	.consumeradd{
		animation:fadeOut .4s 1 linear both;
	}
	.computer_link{display: flex;-webkit-box-pack: start;justify-content: flex-start;}
	.dialogue{
		width:100%;
		background:#fff;
		.dialogue_con{
			padding-top:2.06933rem;
			-webkit-overflow-scrolling: touch; 
			.computer{
				background:#f5f5f5;
				border-bottom:1px solid #e0e0e0;
				.computer_link{
					.computer_icon{
						margin-left:1.0666666667rem;
						margin-right:0.96rem;
						width: 1.29333rem;
						height: 1.96267rem;
						display: flex;
						-webkit-box-align: center;
						align-items: center;
						svg{
							width: 100%;
    						height: 1rem;
						}
					}
					.computer_text{
						line-height:1.9626666667rem;
						font-size: 0.55467rem;
    					color: #474747;
						span{
							display:inline-block;
						}
					}
				}
			}
			.conversation{
				width:100%;
				ul{
					width:100%;
					li{
						padding:0.3413333333rem 0.5973333333rem;
						box-sizing:border-box;
						border-bottom:1px solid #e0e0e0;
						.imgwipe{
							position: relative;
							margin-right:0.512rem;
							.redicon_num{
								position: absolute;
								right:-0.4rem;
								top:-0.3rem;
								line-height:0.8806666667rem;
								padding:0 4px;
								text-align:center;
							}
							.redicon{
								position: absolute;
								right:-0.21rem;
								top:-0.21rem;
								border-radius:50%;
							}
							.imgstyle{
								display: flex;
								justify-content: center;
								flex-flow:row wrap;
								align-items: flex-start;
								align-content: flex-start;
								overflow: hidden;
								background: #dddbdb;
								img{
									width: 10%;
									height: auto;
									border: 0;
									flex-grow:2;
								}
							}
							.imgstyletwo{
								img{
									width: 50%;
									height:50%;
									flex-grow:0;
								}
							}
						}
						.infordetail{
							width:11.5626666667rem;
							padding-top:0.2133333333rem;
							.infordetail_top{
								width:100%;
								padding-bottom:0.2133333333rem;
								span:nth-of-type(1){
									width:8.7466666667rem;
								}
								span:nth-of-type(2){
								}
							}
							.infordetail_bot{
								width:9.5573333333rem;
							}

						}
						
					}
				}
			}
		}
		
	}
</style>
