<template>
<v-app style="
    background: #fffffff;">
    <v-container v-flex xs12 class="mb-2">
    <v-card id="black" ></v-card>
    <v-card id="grey" ></v-card>
    <v-card id="grey2" ></v-card>
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
      <span v-flex xs12 class="mb-2" id="designa"> about me</span>
      <span v-flex xs12 class="mb-2" id="lastass"> front-end developer</span>
  <span v-flex xs12 class="mb-2" id="designb"> about me</span>
<span id="dot1"></span>
<span id="dot2"></span>
<span id="dot3"></span>
<span id="dot4"></span>
  <span v-flex xs12 class="mb-2" id="abouttexttt">I'm Lithuanian currently studying <br> in Business Southwest academy. <br>I'm looking forward to get bachalour<br>and then start working in company,<br>more about me you can<br>find in my CV</span>
<span v-flex xs12 class="mb-2" id="abouttext">about me</span>
<div v-flex xs12 class="mb-2" id="photoos"></div>
  <span v-flex xs12 class="mb-2" id="photoostext">Nedas Ratkevicius<br>Student of EASV academy<br>front end developer</span>
  <v-btn dark id="boxas"><a href ="https://drive.google.com/open?id=1P-Fmp1VmXlvxOHZ0lR_gXqefxyEMooZ7" style="text-decoration:none; color: #ffffff;" id="cv" target="_blank">CV</a></v-btn>

 
  
</div>
            </v-container>
    </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
      name: 'Londonpage',
}
</script>

<style>
#boxas
{
  position: absolute;
    top: 76.2%;
    left: 72.5%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
      text-decoration: none;
  display: inline-block;
}
#designa
{
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
#designb
{
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
#photoos
{
      height: 50vh;
  width: 35vh;
background-image: url('../assets/design/4.png');
background-size: cover;
  position: absolute;
  top: 40%;
  left: 72.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
#photoos:hover
{
  opacity: 0.9;
  background-color: #000000;
}
#photoostext
{
  text-align: center;
          font-size: 2vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 70.4%;
    left: 73.3%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
}
      #photoostext:hover {
  background-color: #000000;
  color: #ffffff;
  }
</style>