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
      <span v-flex xs12 class="mb-2" id="designe"> photography</span>
  <span v-flex xs12 class="mb-2" id="designf"> photography</span>
<span id="dot1"></span>
<span id="dot2"></span>
<span id="dot3"></span>
<span id="dot4"></span>
<span v-flex xs12 class="mb-2" id="phototext"> photo-g</span>
  <span v-flex xs12 class="mb-2" id="phototexttt">a photograph is an image<br>created by light falling on<br>a photosensitive surface,<br>usually photographic film<br>or an electronic image sensor</span>
<div v-flex xs12 class="mb-2" id="first"></div>
<div v-flex xs12 class="mb-2" id="second"></div>
<span v-flex xs12 class="mb-2" id="lastass"> front-end developer</span>
<div v-flex xs12 class="mb-2" id="third"></div>
<div v-flex xs12 class="mb-2" id="fourth"></div>
  
</div>
            </v-container>
    </v-app>
</template>

<script>
export default {
      name: 'Londonpage',
}
</script>

<style>
#designe
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
#designf
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
#first
{
      height: 20vh;
  width: 15vh;
background-image: url('../assets/design/5.png');
background-size: cover;
  position: absolute;
  top: 15%;
  left: 68.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#second
{
      height: 20vh;
  width: 15vh;
background-image: url('../assets/design/6.png');
background-size: cover;
  position: absolute;
  top: 36%;
  left: 77.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
#third
{
      height: 20vh;
  width: 15vh;
background-image: url('../assets/design/7.png');
background-size: cover;
  position: absolute;
  top: 59%;
  left: 68.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
#fourth
{
      height: 20vh;
  width: 15vh;
background-image: url('../assets/design/8.png');
background-size: cover;
  position: absolute;
  top: 82%;
  left: 77.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>