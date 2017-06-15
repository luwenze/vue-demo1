<template>
	<div id="tmpl">
		<!-- 1.0轮播图 -->
		<mt-swipe :auto="2000">
  			<!-- <mt-swipe-item>1</mt-swipe-item> -->
  			<mt-swipe-item v-for="item in lunbo">
  				<img v-bind:src="item.img">
  			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				lunbo: [
        		{
            		
        		},
        		{
           	 		
        		},
        		{
            		
        		}
    			]
			}
    		
		}
	}
</script>
<style scoped>
	.mint-swipe{
		height: 160px;
	}
	.mint-swipe-item{
		background-color: red;
		width: 100%;
		height: 160px;
	}
	.mint-swipe-item img{
		width: 100%;
	}
</style>
