<template>
	<div v-if="user">
		<div class="user-info">
			<span>{{user.displayName}}</span>
			<button @click="logOut()">logOut</button>
		</div>
		<ul class="navbar">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/mapapp">Map</router-link></li>
		</ul>
		
	</div>
	<div v-else>
		<ul class="navbar">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/signin">SignIn</router-link></li>
			<li><router-link to="/register">Registation</router-link></li>
			<li><router-link to="/mapapp">Map</router-link></li>
		</ul>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	// data(){
	// 	return {
	// 		user:null
	// 	}
	// },
	methods:{
		...mapActions({
			logOut: 'user/loginOutAction'
		})
	},
	computed:{
		...mapGetters({
			user: 'user/GET_USER'
		})
	}
}
</script>

<style scoped>
	ul {
		padding: 0;
		list-style-type: none;
		
	}
	ul li {
		margin: 0 10px;
	}
	.navbar{
		display: flex;
		justify-content: right;
	}
</style>