<template>
<v-app style="
    background: #fffffff;">
    <v-container v-flex xs12 class="mb-2">
    <v-card id="black" ></v-card>
    <v-card id="grey" ></v-card>
    <v-card id="grey2" ></v-card>
  <div>

<div class="page">
<router-link to="londonpage"><button class="blackwithopacityy">
  <div class="xdaa">
    
<marquee behavior="scroll"  direction="right"> port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port port 
  </marquee>
   
  </div>
    <div class="xdaaa">
    
<marquee behavior="scroll"  direction="right"> folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio folio  </marquee>
   
  </div>
  </button></router-link>
</div >

<div id="page">
</div>
       <span v-flex xs12 class="mb-2" id="crossedline"></span>
         <span v-flex xs12 class="mb-2" id="firstline"></span>
  <span v-flex xs12 class="mb-2" id="secondline"></span>
  <span v-flex xs12 class="mb-2" id="whiteline"></span>
  <span v-flex xs12 class="mb-2" id="fourthline"></span>
  <span v-flex xs12 class="mb-2" id="fifthline"></span>
    <span v-flex xs12 class="mb-2" id="portfolio"> portfolio</span>
      <span v-flex xs12 class="mb-2" id="design1"> design</span>
  <span v-flex xs12 class="mb-2" id="design2"> design</span>
  <span v-flex xs12 class="mb-2" id="designtext"> design</span>
  <span v-flex xs12 class="mb-2" id="designtexttt">is the intentional creation of <br>a plan or specification for the<br>construction of an object or<br>system or for the implementation<br>of an activity or process.</span>
  <div v-flex xs12 class="mb-2" id="afirst"></div>
  <div v-flex xs12 class="mb-2" id="asecond"></div>
  <div v-flex xs12 class="mb-2" id="athird"></div>
  <span v-flex xs12 class="mb-2" id="lastass"> front-end developer</span>
<span id="dot1"></span>
<span id="dot2"></span>
<span id="dot3"></span>
<span id="dot4"></span>
</div>
            </v-container>
    </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
      name: 'design',
}
</script>

<style>
#blackwithopacitys
{
    width: 16.2vh;
  height: 156vh;
  background-color: #000000;
  position: relative;
  margin: 0;
    position: absolute;
    top: 21.9%;
    left: 96%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
}
    #design1{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 26.2%;
    left: 16%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
  }
        #design2{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 28.2%;
    left: 13%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
            opacity: 0.1;
  }
  #afirst
{
  height: 70vh;
  width: 50vh;
background-image: url(../assets/design/1.png);
background-size: cover;
  position: absolute;
  top: 20%;
  left: 72.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
  #asecond
{
  height: 34vh;
  width: 50vh;
background-image: url(../assets/design/2.png);
background-size: cover;
  position: absolute;
  top: 50%;
  left: 73%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
  #athird
{
  height: 28vh;
  width: 48vh;
background-image: url(../assets/design/3.png);
background-size: cover;
  position: absolute;
  top: 80%;
  left: 73%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
#grey2 {
  width: 55.2vh;
  height: 156vh;
  background-color: #000000;
  position: relative;
  margin: 0;
    position: absolute;
    top: 21.9%;
    left:  73%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    }
</style>