<template>
<div class="fixe" >
  <div class="achievement-container" :class="[{ active : this.value }]">
    <div class="achievement">
      <div class="ball one"> </div>
      <div class="ball two"></div>
      <div class="ball three">
	<div class="achievement-message">
          <p class="message">Achievement Unlocked</p>
          <p class="message">Xbox Alert Completed</p> 
	</div>
      </div>
      <div class="ball four">
	<i class="fa fa-trophy"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Achievement',
    props: {
	value : Boolean
    },	
    data () {
	return {
	    //unlock: this.valunlock
	}
    },
    watch: { 
	value(val, oldVal) {
	    console.log('new: %s, old: %s', val, oldVal)
	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.fixe
{
    position:absolute;
    height: 15vh;
    width:100vw;
    background:blue;
}
.achievement-container {
    transition: width 0.5s 1s cubic-bezier(0.23, 1, 0.32, 1);
    margin: 0 auto;
    width: 50px;
    padding: 20px 0;
    overflow: hidden;
}
.achievement-container.active {
    width: 250px;
}
.achievement-container.active .achievement-message {
    width: 250px;
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
    background: #2196F3;
}
.ball.two,
.ball.four {
    background: #1976D2;
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
}
.achievement-message {
    box-sizing: border-box;
    transition: all 0.5s 1s cubic-bezier(0.23, 1, 0.32, 1);
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #2196F3;
    color: #FFFFFF;
    overflow: hidden;
}
.achievement-message .message {
    transition: margin-top 0.5s 2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.2s 1s ease;
    margin-top: 0;
    opacity: 0;
    line-height: 50px;
    font-size: 14px;
    padding-left: 55px;
    overflow: hidden;
  max-width: 180px;
  text-overflow: ellipsis;
  white-space: nowrap;
}



</style>
