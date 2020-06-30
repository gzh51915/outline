<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}} 树，先生</text>
		</view>
		<h1>uni-app测试</h1>
		<button @click="sayHi">hi</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			sayHi(){
				this.title = 'Hi'
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	h1{color:$uni-color-error;text-decoration: underline;}
</style>
