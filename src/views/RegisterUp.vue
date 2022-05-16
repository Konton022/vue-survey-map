<template>
	<div>
		<form action="" @submit.prevent="">
		<h1>Registration</h1>

			<input type="text" class="text" v-model="name" placeholder="name"/>
			<input type="email" class="email" v-model="email" placeholder="email"/>
			<input type="password" class="password" v-model="password" placeholder="password"/>
			<button class="submit">Register me</button>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			name: null,
			email: null,
			password: null,
		}
	},
	methods: {
		
	}
}
</script>
<style scoped>

	form{
		width: 70%;
		margin: 50px auto;
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
		border-bottom: 1px solid black;
		margin-bottom: 10px;
	}
	input:focus{
		border-bottom: 1px solid blue;
	}
	button {
		margin-top: 40px;
		border: none;
		border-radius: 2px;
		color: blue;
	}

	
</style>