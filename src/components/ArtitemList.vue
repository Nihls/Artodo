<template>
<div>
  <div class="fond"></div>  
  <div v-for='i in getNbRows' class="row" >
    <span v-for='j in [1, 2, 3, 4]'>
      <div v-for='(item, index) in tabArtItem' v-if='isNotEmpty(index, i, j)' class="columns small-3" :class="[{ locked : item.locked }]">
	<div class="talent" @click="incrementCounter(item)">>
	  <img :src='tabArtItem[index].iconLink' class="fullBackImg" >
	  <div v-if="!item.locked" class="counter">{{item.nbEffectue}}</div>
	  <div v-else="item.locked" class="counter"><img alt="" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/unlocked-32.png"/></div>
	  <h4>{{item.title}}</h4>
	</div>
      </div>
      <div v-if='emptyColumn(j)'class="columns small-3">&nbsp;</div>
    </span>
  </div>
  
  
  <!-- Achievements -->
  <div class='fixe'>
    <div class="achievement-container" :class="{active : unlockEvent}" >
      <div class="achievement">
	<div class="ball one" :class="{active : unlockEvent}"> </div>
	<div class="ball two" :class="{active : unlockEvent}"></div>
	<div class="ball three" :class="{active : unlockEvent}">
	  <div class="achievement-message">
            <p class="message">{{ messageUnlocked }}</p>
            <p class="message">{{ messageExtra }}</p> 
	  </div>
	</div>
	<div class="ball four" :class="{active : unlockEvent}">
	  <i class="fa fa-trophy">
            <img src='../assets/img/general/trophy.png' alt="">

	  </i>
	</div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
//import Achievement from './Achievement'

var audioUnlock = new Audio(require('../assets/mp3/unlock.mp3'));
var audioSuccess = new Audio(require('../assets/mp3/succes.mp3'));

export default {
    name: 'ArtitemList',
    components :
    {
	//Achievement
    },
    props: {
	value: {type: Array, default () { return [] }}
    },
    data () {
	return {
	    tabArtItem: this.value,
	    talentPoints: 0,
	    
	    elementPutted: false,
	    counter: 0,

	    unlockEvent: false,
	    messageUnlocked: "",
	    messageExtra: ""
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
	unlockEventHandler: function(i)
	{
	    this.messageUnlocked = this.tabArtItem[i].title + " débloqué"
	    this.messageExtra = "X points de récompense aquis"
	    this.unlockEvent = true
	    this.tabArtItem[i].locked = false
	    audioUnlock.play();

	    setTimeout(function(){
		console.log("called timeout")
                this.unlockEvent = false;
            }.bind(this), 3000);
	},
	incrementCounter: function (talent) {
	    if(!talent.locked)
	    {
		audioSuccess.play();
		this.counter += 1
		this.$emit('increment')

		talent.nbEffectue += 1

		this.talentPoints += talent.gainTalentPoint

		var i
		for (i in this.tabArtItem)
		{
		    if(this.tabArtItem[i].locked)
		    {
			if(this.talentPoints >= this.tabArtItem[i].talenPointNeededToUnlock) {
			    this.unlockEventHandler(i);
			}
		    }
		}
	    }
	}
    },
    computed: {
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

$accent_color_ligth: lighten(#D3505A, 5%);
$accent_color: lighten(#D3505A, 20%);
$background_color: #F7D582;

.row
{
    width:100vw !important;
    height: 25vh !important;
}
.locked
{
    opacity: 0.2;
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
	width: 36px;
	height: 36px;
	right: -1px;
	bottom: -1px;
	
	border: 2px solid $background_color;
	border-radius: 50%;
	
	text-align: center;
	color: black;
	background: #EFEFEF;
	opacity: 0.8;
	line-height: 30px;
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
    background: #E6DADA;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #274046, #E6DADA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #274046, #E6DADA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    position: fixed;
    width:100vw;
    height:100vh;
}




/***
 *       #                                                                    
 *      # #    ####  #    # # ###### #    # ###### #    # ###### #    # ##### 
 *     #   #  #    # #    # # #      #    # #      ##  ## #      ##   #   #   
 *    #     # #      ###### # #####  #    # #####  # ## # #####  # #  #   #   
 *    ####### #      #    # # #      #    # #      #    # #      #  # #   #   
 *    #     # #    # #    # # #       #  #  #      #    # #      #   ##   #   
 *    #     #  ####  #    # # ######   ##   ###### #    # ###### #    #   #   
 */


.fixe
{
    position:fixed;
    height: 15vh;
    width:100vw;
    bottom:8vh;
    left:0;
}

.achievement-container {
    transition: width 0.5s 1s cubic-bezier(0.23, 1, 0.32, 1);
    margin: 0 auto;
    width: 50px;
    padding: 20px 0;
    overflow: hidden;
}
.achievement-container.active {
    width: 300px;
}
.achievement-container.active .achievement-message {
    width: 300px;
}
.achievement-container.active .message {
    opacity: 1;
}
.achievement-container.active .message:first-child {
    margin-top: -50px;
}
.achievement {
    height: 50px;
}
.ball {
    transition: all 0.2s ease;
    position: absolute;
    z-index: 10;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    transform: scale(0) translateZ(0);
    text-align: center;
}
.ball.one,
.ball.three {
    background: $accent_color_ligth;
}
.ball.two,
.ball.four {
    background: $accent_color;
}
.ball.one,
.ball.two,
.ball.three,
.ball.four {
    transition-delay: 2s;
}
.ball.active {
    transform: scale(1) translateZ(0);
}
.ball.active.two {
    transition-delay: 0.1s;
}
.ball.active.three {
    transition-delay: 0.2s;
}
.ball.active.four {
    transition-delay: 0.3s;
}
.fa-trophy {
    transform: all 0.5s 2s ease;
    line-height: 50px;
    font-size: 28px;
    color: #FFFFFF;

    img
    {
	position:absolute;
	top:2px;
	left:2px;
	height:45px;
	width:auto;
    }
}
.achievement-message {
    box-sizing: border-box;
    transition: all 0.5s 1s cubic-bezier(0.23, 1, 0.32, 1);
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: $background_color;
    color: #FFFFFF;
    overflow: hidden;
    
}
.achievement-message .message {
    transition: margin-top 0.5s 2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.2s 1s ease;
    margin-top: 0;
    opacity: 0;
    line-height: 50px;
    //font-size: 14px;
    font-size: 16px;
    padding-left: 55px;
    overflow: hidden;
    max-width: 260px;
    text-overflow: ellipsis;
    white-space: nowrap;
    
}


</style>
