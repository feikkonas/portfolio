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
  <span v-flex xs12 class="mb-2" id="lastass"> front-end developer</span>
  <span v-flex xs12 class="mb-2" id="whiteline"></span>
  <span v-flex xs12 class="mb-2" id="fourthline"></span>
  <span v-flex xs12 class="mb-2" id="fifthline"></span>
    <span v-flex xs12 class="mb-2" id="portfolio"> portfolio</span>
      <span v-flex xs12 class="mb-2" id="designc"> projects</span>
  <span v-flex xs12 class="mb-2" id="designd"> projects</span>
<span id="dot1"></span>
<span id="dot2"></span>
<span id="dot3"></span>
<span id="dot4"></span>
  <span v-flex xs12 class="mb-2" id="projectstext"> projects</span>
  <span v-flex xs12 class="mb-2" id="projecttexttt">contemporary business and <br>science treat as a project any<br>undertaking, carried out <br>individually or collaboratively<br>and possibly involving research<br>or design</span>
    
</div>
<v-flex id="wow" xs6 order-lg2>
           <v-card tile flat style="background: #ffffff">
        <v-card tile flat style="background: #ffffff">
          <v-card-text>
  <h1 class="text-uppercase" id="devel-title">"Astroworld" <br> final project

    </h1>
     <!-- expand btn -->
 <div class="text-xs-center">
    <v-layout justify-space-around>
      <v-btn id="expand"
      flat 
      tile
       style="background: #999999"
        @click="expand = !expand"
      >➝</v-btn>
    </v-layout>

    <v-expand-transition>
      <div v-show="expand">
       <hr id="ver-line">
             <h1 class="text-uppercase" id="port-title">
       Astroworld is our team last project of first semester. <br>
      We were working on this project for a month <br>

             </h1>
          <div v-flex xs12 class="mb-2" id="athirdr"></div>
       
      </div>
    </v-expand-transition>
  </div>
     
          </v-card-text>
        </v-card>
           </v-card>
      </v-flex>
      
            </v-container>
    </v-app>
</template>

<script>
export default {
      name: 'Londonpage',
      data: () => ({
      expand: false
    })
}
</script>

<style>
#athirdr
{
    height: 28vh;
  width: 48vh;
background-image: url(../assets/design/3.png);
background-size: cover;
  position: absolute;
  top: 168.5%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
h1
{
   font-size: 3vh;
   text-align: center;
}
#port-title
{
  font-size: 1.8vh;
}
#wow
{
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 25.2%;
    left: 73%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
}
#wow2
{
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 75.2%;
    left: 73%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
}
#designc
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
#designd
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
</style>