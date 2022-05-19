<template>
		<div>
		<form action="" @submit.prevent="submitData()">
		<h2>Sign In</h2>
			<input type="email" class="email" v-model="email" placeholder="email"/>
			<input type="password" class="password" v-model="password" placeholder="password"/>
			<button class="submit">sign me</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data(){
		return {
			email: null,
			password: null,
			error: null
		}
	},
	methods:{
		...mapActions({
			signInUser: 'user/signInUserAction'
		}),
		async submitData(){
			try {
				if(this.email && this.password){
					await this.signInUser(this.userData);
					this.resetUserData();
					this.$router.push('/mapapp')
				}
			} catch (err) {
				this.error = err.message
			}
			
		},
		resetUserData(){
			this.email = null;
			this.password = null;
		}
	},
	computed: {
		userData(){
			return {
				email: this.email,
				password: this.password
			}
		}
	}
}
</script>
<style scoped>
	form{
		width: 40rem;
		margin: 10rem auto;
		box-shadow: 0 0 5px grey;
		padding: 3rem;
		border-radius: 5px;
	}
	input, button{
		box-sizing: border-box;
		font: inherit;
		line-height: inherit;
		display: block;
		width: 100%;
	}
	input {
		outline: none;
		border: none;
		border-bottom: 1px solid rgb(223, 220, 220);
		margin-bottom: 10px;
	}
	input:focus{
		border-bottom: 1px solid blue;
	}
	button {
		
		margin-top: 40px;
		border: none;
		padding: 0.6rem;
		border-radius: 5px;
		color: whitesmoke;
		background-color: rgb(61, 85, 226);
	}
</style>