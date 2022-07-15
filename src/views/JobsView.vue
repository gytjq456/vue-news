<template>
	<div>
		<div v-for="item in this.$store.state.jobs" :key="item.id">{{ item.title }}</div>
	</div>
</template>

<script>

// import { mapState } from 'vuex';
export default {
	created() {
		this.$store.dispatch('FETCH_JOBS');
	}
}

</script>

<style>
</style>