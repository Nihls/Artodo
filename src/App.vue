<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
//Objets
export default {
    name: 'App',
    data () {
	return {	    
	    total: 0
	}
    },
    mounted () {
	
	// GET /someUrl
	this.$http.get('http://jsonplaceholder.typicode.com/users').then(response => {
	    // success callback
	    console.log("succes");
	    this.natureMorte = response.data
	}, response => {
	    // error callback
	    console.log("erreur");
	});
    }
}
</script>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/css/foundation.min.css';
#app {
    text-align: center;
}
</style>
