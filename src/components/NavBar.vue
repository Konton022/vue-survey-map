<template>
	<ul class="navbar">
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/signin">SignIn</router-link></li>
		<li><router-link to="/register">Registation</router-link></li>
		<li><router-link to="/mapapp">Map</router-link></li>
	</ul>
</template>
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