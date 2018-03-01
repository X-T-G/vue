<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
  body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
		padding: 0;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		color: #666;
		box-sizing: border-box;
		font-weight: lighter;
		font-family: Arial,'Hiragino Sans GB',Microsoft Yahei,Helvetica Neue,Helvetica,sans-serif !important;
		-webkit-tap-highlight-color:transparent;
		-webkit-font-smoothing: antialiased;
		&:focus {
			outline: none;
		}
	}

	input[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {
		-webkit-appearance: none;
	}

	textarea { -webkit-appearance: none;}   

	html,body{
		height: 100%;
		width: 100%;
		background-color: #ebebeb;
	}


	.clear:after{
		content: '';
		display: block;
		clear: both;
	}

	.clear{
		zoom:1;
	}

	.back_img{
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.margin{
		margin: 0 auto;
	}

	.left{
		float: left;
	}

	.right{
		float: right;
	}

	.hide{
		display: none;
	}

	.show{
		display: block;
	}

	.ellipsis{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.scroll{
	overflow-y:auto; 
	-webkit-overflow-scrolling:touch;
	}
</style>

<script>
export default {
  name: 'App'
}
</script>
