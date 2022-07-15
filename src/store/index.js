import Vue from 'vue'
import Vuex from 'vuex'
import { getNewsList, getAskList, getJobList } from '../api/index.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		news: [],
		ask: [],
		jobs: []
	},
	mutations: {
		SET_NEWS(state, news) {
			state.news = news
		},
		SET_ASK(state, ask) {
			state.ask = ask
		},
		SET_JOPBS(state, jobs) {
			state.jobs = jobs
		}
	},
	actions: {
		FETCH_NEWS({ commit }) {
			getNewsList()
				.then(({ data }) => {
					commit('SET_NEWS', data)
				})
				.catch(error => console.log(error))
		},
		FETCH_ASK({ commit }) {
			getAskList()
				.then(({ data }) => {
					commit('SET_ASK', data);
				})
				.catch(error => {
					console.log(error);
				})
		},
		FETCH_JOBS({ commit }) {
			getJobList()
				.then(({ data }) => {
					commit('SET_JOPBS', data)
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
})