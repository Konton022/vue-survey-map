<template>
	<div>
		<form action="" @submit.prevent="submitData()">
		<h2>Registration</h2>

			<input type="text" class="text" v-model="name" placeholder="name"/>
			<input type="email" class="email" v-model="email" placeholder="email"/>
			<input type="password" class="password" v-model="password" placeholder="password"/>
			<button class="submit">Register me</button>
		</form>
	</div>
</template>
<script>
import {mapActions} from "vuex"
export default {
	data() {
		return {
			name: null,
			email: null,
			password: null,
			error:null
		}
	},
	methods: {
		...mapActions({
			registerUser: 'user/registerUserAction'
		}),
		async submitData(){
			try {
				if(this.name && this.email && this.password){
					await this.registerUser(this.userData);
					this.resetUserInput()
					this.$router.push('/mapapp')
					
				}
				
			} catch (err) {
				this.error = err.message
			}
		},
		resetUserInput(){
			this.name = null;
			this.email = null;
			this.password = null;
		}
	},
	computed: {
		userData(){
			return {
				name: this.name,
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
		background-color: grey;
	}

	
</style>