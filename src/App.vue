<template>
	<div id="app">
		<tool-bar></tool-bar>
		<router-view></router-view>
	</div>
</template>

<script>
import ToolBar from './components/Toolbar.vue'
export default {
	components: {
		ToolBar
	}
}
</script>

<style>
ul,
li {
	list-style: none;
}
* {
	margin:0;
	padding:0;
}
</style>
