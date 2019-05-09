<template>
<v-app style="
    background: #ffffff;">
<v-container v-flex xs12 class="mb-2">
    <v-card id="black" ></v-card>
  <button id="blackwithopacity"></button>
  <div>

<div class="page" ref="london">
<router-link to="londonpage"><button class="blackwithopacityy">
  <div class="xdaa">
    
<marquee behavior="scroll"  direction="right"> port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port 
  </marquee>
   
  </div>
    <div class="xdaaa">
    
<marquee behavior="scroll"  direction="right"> folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio  </marquee>
   
  </div>
  </button></router-link>
<router-view></router-view>

</div >

<div id="page">
</div>
  <span v-flex xs12 class="mb-2" id="developer"> developer </span>
  <span v-flex xs12 class="mb-2" id="L"> L </span>
  <span v-flex xs12 class="mb-2" id="aa"> 98 </span>
  <span v-flex xs12 class="mb-2" id="firstline"></span>
  <span v-flex xs12 class="mb-2" id="secondline"></span>
  <span v-flex xs12 class="mb-2" id="whiteline"></span>
  <span v-flex xs12 class="mb-2" id="fourthline"></span>
  <span v-flex xs12 class="mb-2" id="fifthline"></span>
  <span v-flex xs12 class="mb-2" id="text"> front-end developer</span>
  <span v-flex xs12 class="mb-2" id="text2"> end</span>
  <span v-flex xs12 class="mb-2" id="textas"> front-end developer</span>
  <span v-flex xs12 class="mb-2" id="textas2"> end</span>
  <span v-flex xs12 class="mb-2" id="portfolio"> portfolio</span>
  <span v-flex xs12 class="mb-2" id="description" >21 CENTUARY DESIGN IS NOT <br> ONLY ABOUT FOLLOWING THE <br> RULES IT’S ALSO ABOUT </span>
  <span v-flex xs12 class="mb-2" id="description2"> BREAKING THEM</span> 
  <span v-flex xs12 class="mb-2" id="boxfordesc"></span>  
  <span class="dot"></span>
   <span v-flex xs12 class="mb-2" id="dotedline"></span>
   <span v-flex xs12 class="mb-2" id="dotedline2"></span>
   <span v-flex xs12 class="mb-2" id="crossedline"></span>
   <span v-flex xs12 class="mb-2" id="proc7">7% opacity</span>
   <span v-flex xs12 class="mb-2" id="proc5">5% opacity</span>
   <span v-flex xs12 class="mb-2" id="lastass"> front-end developer</span>
    </div>
            </v-container>
        </v-app>
</template>

<script>
import londonpage from '@/components/londonpage.vue'

export default {
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.xdaa {
  text-transform: uppercase;
  color: #000000;
    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */
     transform: rotate(90deg);
     position: absolute;
     top: 66%;
     left: -300%;
     z-index: 1000;
     width:620%;
     word-spacing: 200px;
     font-size: 3vh;
     opacity: 1;

}
.xdaaa {
  text-transform: uppercase;
  color: #000000;
    -ms-transform: rotate(270deg); /* IE 9 */
    -webkit-transform: rotate(270deg); /* Safari */
     transform: rotate(270deg);
     position: absolute;
     top: 66%;
     left: -220%;
     z-index: 1000;
     width:620%;
     word-spacing: 200px;
     font-size: 3vh;
     opacity: 1;

}

::-webkit-scrollbar { 
    display: none; 
}
#page {
        
height: 95vh;

}
/*    <button @click="goto('porto')">Go to porto</button> */
@font-face {
  font-family: "Merel Bold";
  src: url("file:///C:/Users/nedas/Downloads/Merel%20Bold.otf");
}
/* --------------  1.LETTERS, TEXT, NUMBERS -------------------*/
      /* -------------- 1.BIG BOXES -------------------*/
#black {
  width: 15vh;
  height: 156vh;
  background-color: #000000;
  position: relative;
  margin: 0;
    position: absolute;
    top: 21.9%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    }
#blackwithopacity {
  width: 16.2vh;
  height: 156vh;
   background-color: #ffffff;
  position: relative;
  margin: 0;
    position: absolute;
    top: 21.9%;
    left: 96%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    }
    .blackwithopacity:hover
{
  opacity: 0.8;
  color: #000000;
}
    /* -------------- 2.TEXT -------------------*/
#developer{
    font-size: 20vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 51%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    font-weight: bold;
    letter-spacing: 2.3vh;
  }
#L{
    font-size: 20vh;
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 51%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: 2.5vh;
        /*opacity: 0.1;*/
  }
  #text{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 18%;
    left: 16%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
          opacity: 0.1;
          z-index: 100;
  }
    #text2{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 31.5%;
    left: 16%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
  }
    #textas{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 20%;
    left: 13%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
          opacity: 0.1;
                    z-index: 100;
  }
      #textas2{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 33.5%;
    left: 13%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
  }
      #proc7{
    font-size: 1.5vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 18.5%;
    left: 13.8%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
  }
        #proc5{
    font-size: 1.5vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 20.3%;
    left: 10.8%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
  }
    #portfolio{
    font-size: 4vh;
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    margin: 0;
    position: absolute;
    top: 99%;
    left: 51.6%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(270deg);
  }
  #description
  {
        font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 74%;
    left: 17.1%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 99;
  }
br {
            display: block; /* makes it have a width */
            content: ""; /* clears default height */
            margin-top: -8px; /* change this to whatever height you want it */
}
  #description2
  {
        font-size: 4vh;
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    margin: 0;
    position: absolute;
    top: 84.4%;
    left: 11.2%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
  #boxfordesc
  {
     width: 33vh;
  height: 5vh;
  background-color: #000000;
  position: relative;
  margin: 0;
    position: absolute;
    top: 84.4%;
    left: 11.7%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    }
    /* -------------- 3.NUMBERS/CENTIMETRS -------------------*/
  #aa{
    font-size: 5vh;
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    margin: 0;
    position: absolute;
    top: 22%;
    left: 53%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
    /* -------------- 4.LINES -------------------*/
  #firstline
  {
  border-left: 0.25vh solid #000000;
  height: 100vh;
  position: absolute;
  left: 6%;
  top: 0;
  }
  #secondline
  {
  border-left: 0.25vh solid #000000;
  height: 100vh;
  position: absolute;
  left: 27%;
  top: 0;
  }
  #whiteline
  {
  border-left: 0.25vh solid #ffffff;
  height: 100vh;
  position: absolute;
  left: 47.5%;
  top: 0;
  }
  #fourthline
  {
  border-left: 0.25vh solid #000000;
  height: 100vh;
  position: absolute;
  left: 73%;
  top: 0;
  }
  #fifthline
  {
  border-left: 0.25vh solid #000000;
  height: 100vh;
  position: absolute;
  left: 92%;
  top: 0;
  }
  .dot
  {
      height: 40vh;
  width: 40vh;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin: 0;
    position: absolute;
    top: 76.9%;
    left: 12%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
    .dot:before {
    position: absolute;
    content: '';
    height: calc(100% + 10px); 
    width: calc(100% + 10px); 
        border: 0.3vh dashed #000000;
    top: -13px;
    left: -13px;
    border-radius: inherit;
  }
    .dot:before {
    animation: spin 25s linear infinite;
  }
  @keyframes spin { 
    100% { 
      transform: rotateZ(360deg); 
    }
  }
  #dotedline
  {
  border-top: 0.20vh dashed #000000;
  width: 41.8vh;
  position: absolute;
  top: 25%;
  left: 6%;
  }
    #dotedline2
  {
  border-top: 0.20vh dashed #000000;
  width: 38vh;
  position: absolute;
  top: 64%;
  left: 27%;
  }
      #crossedline
  {
  border-left: 0.25vh solid #000000;
  height: 222vh;
  position: absolute;
  left: 49.8%;
  top: -60.8%;
  transform: rotate(116.5deg)
  }
    #lastass{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 99%;
    left: 97.5%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(270deg);
          opacity: 0.05;
          z-index: 100;
  }
</style>

