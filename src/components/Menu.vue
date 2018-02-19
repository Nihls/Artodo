<template>
<div>
  <div class="row">
    <div id="timer" @click="buttonHandler('timer')" :class="{ active: isItActive('timer') }" class="columns small-4 medium-4 large-4">
      <img alt="" src="https://cdn1.iconfinder.com/data/icons/anchor/128/speedometer.png"/>
    </div>
    <div id="todo" @click="buttonHandler('todo')" :class="{ active: isItActive('todo') }" class="columns small-4 medium-4 large-4">
      <img alt="" src="https://cdn1.iconfinder.com/data/icons/anchor/128/brush-pencil.png"/>
    </div>
    <div id="rewards"  @click="buttonHandler('rewards')" :class="{ active: isItActive('rewards') }" class="columns small-4 medium-4 large-4">
      <img alt="" src="https://cdn1.iconfinder.com/data/icons/anchor/128/trophy.png"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Menu',
    data ()
    {
	return {
	    isActive: "todo"
	}
    },
    computed :
    {
    },
    methods :
    {
	buttonHandler : function( menuItem )
	{
	    console.log("called")
	    this.isActive = menuItem
	},
	isItActive : function( menuItem )
	{
	    if ( this.isActive === menuItem )
		return true
	    else
		return false
	}

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

.row
{
    position:fixed;
    width:100vw !important;
    height: 10vh !important;
    bottom:0vh;
    //overflow: hidden;
}
.columns
{
    box-sizing: border-box;
    height:150%;
    
    img
    {
	margin-top: 0px;
	height: 80px;
    }
}
#timer
{
    background:#505A73;
}

#todo
{
    background:#5AC7AE;
}

#rewards
{
    background:#D3505A;
}

.active
{
    margin-top:-5% !important;
    box-shadow: 0px 10px 40px #F73C50;
    z-index: 50;
}

</style>
