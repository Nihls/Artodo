<template>
<div>
  <div class="fond"></div>  
  <div v-for='i in getNbRows' class="row" >
    <span v-for='j in [1, 2, 3, 4]'>
      <div v-for='(talent, index) in tabArtItem' v-if='isNotEmpty(index, i, j)' class="columns small-3">
	<div class="talent" v-on:click="incrementCounter">>
	  <img class="fullBackImg" src="../assets/natmo.png" alt="">
	  <div class="counter">1</div>
	  <h4>{{talent.title}}</h4>
	</div>
      </div>
      <div v-if='emptyColumn(j)'class="columns small-3">&nbsp;</div>
    </span>
  </div>
</div>
</template>

<script>
export default {
    name: 'ArtitemList',
    props: {
	value: {type: Array, default () { return [] }}
    },
    data () {
	return {
	    tabArtItem: this.value,
	    talentPoints: 0,
	    arrayOfLength : [],
	    elementPutted : false,
	    counter : 0
	}
    },
    methods: {
	updateInfos (event) {
	    this.talentPoints += 15
	},
	
	isNotEmpty : function (index, row, column) {
	    var rowOk = this.tabArtItem[index].row === row
	    var columnOk = this.tabArtItem[index].column === column

	    if( rowOk && columnOk )
		this.elementPutted = true
	    
	    return rowOk && columnOk
	},
	emptyColumn : function(j)
	{
	    var empty = (j in [1, 2, 3, 4]) && !this.elementPutted
	    this.elementPutted = false
	    
	    return empty
	},
	incrementCounter: function () {
	    console.log("called")
	    this.counter += 10
	    this.$emit('increment')
	}
    },
    computed: {
	getArraySize : function()
	{
	    var i
	    
	    for (i = 0; i < this.tabArtItem.length; i++) { 
		this.arrayOfLength.push(i)
	    }
	},
	getNbRows : function()
	{
	    return this.tabArtItem[this.tabArtItem.length-1].row
	}
    }
}
	/*
    methods: {
	updateList (array) {
	    talentPoint = talentPoint + 1
	    //this.$emit('input', this.tabArtItem);
	}
	
    }*/

</script>

<style lang="scss" scoped>

.row
{
    width:100vw !important;
    height: 25vh !important;
}
.talent
{
    width: 80px;
    height: 80px;
    border: 1px solid black;
    
    position: relative;
    display: inline-block;
    
    display: block;
    margin: 15px auto;
    margin-bottom: 35px;
    
    background:black;
    background-size: cover;
    
    border-radius: 5px;
    
    .fullBackImg
    {
	position:absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top:0;
    }
    
    .counter
    {
	position: absolute;
	width: 30px;
	height: 30px;
	right: 0;
	bottom: 0;
	border: 2px solid black;
	border-radius: 5px 10px;
	text-align: center;
	color: black;
	background: #EFEFEF;
	opacity: 0.5;
    }
    h4
    {
	position:absolute;
	width:100%;
	font-size: 0.6em;
	top:80px;
    }

}

.fond
{
    background-image: url(../assets/fond.jpg);
    background-size: cover;
    filter: blur(2px);
    position: fixed;
    width:100vw;
    height:100vh;
}

.locked
{
  opacity: 0.3;
  //background: blue;
}

</style>
