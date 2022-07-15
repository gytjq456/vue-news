<template>
	<header >
		<ul>
			<li>
				<router-link to="/news">News</router-link>
			</li>
			<li>
				<router-link to="/ask">Ask</router-link>
			</li>
			<li>
				<router-link to="/jobs">jobs</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
export default {

}
</script>
<style scoped>

	header {
		background: #42b883;
	}
	ul {
		display: flex;
		gap: 12px;
		padding:12px;
	}
	a {
		color:#fff;
		text-decoration: none;
	}
	a.router-link-exact-active {
		color:#35495a;
	}
</style>