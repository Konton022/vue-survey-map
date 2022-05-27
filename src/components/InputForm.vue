<template>
    <form >
        <select>
            <option disabled>provider name</option>
            <option value="RTK">RTK</option>
            <option value="INSYS">INSYS</option>
        </select>
        <input type="text" placeholder="address">
        <input type="number" name="" id="" placeholder="cost-onсe">
        <input type="number" placeholder="cost-monthly">
        <input type="text" placeholder="customer-name">
        <input type="date">
        <input type="text" placeholder="description">
        
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            providerName : null,
            address : null,
            costOnсe  : null,
            costMonthly  : null,
            customerName  : null,
            description  : null,
            date : null
        }
    }
}
</script>
<style scoped>
    form{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.5rem;
        align-items: baseline;
		margin: 1rem auto;
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

</style>