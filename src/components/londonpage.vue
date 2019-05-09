<template>
<v-app style="
    background: #fffffff;">
    <v-container v-flex xs12 class="mb-2">
    <v-card id="black" ></v-card>
    <v-card id="grey" ></v-card>

<div class="page" ref="london">
<router-link to="/"><button class="blackwithopacityy">
  <div class="xd">
    
<marquee behavior="scroll"  direction="right"> home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home
  </marquee>
   
  </div>
    <div class="xda">
    
<marquee behavior="scroll"  direction="right"> home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home
  </marquee>
   
  </div>
  </button></router-link>
<router-link to="/design"><button><span id="designtext"> design</span></button></router-link>
<router-link to="/aboutme"><button><span id="abouttext"> about me</span></button></router-link>
<router-link to="/projects"><button><span id="projectstext"> projects</span></button></router-link>
<router-link to="/photography"><button><span id="phototext"> photo-g</span></button></router-link>

<div id="page">
</div>
       <span v-flex xs12 class="mb-2" id="crossedline"></span>
         <span v-flex xs12 class="mb-2" id="firstline"></span>
  <span v-flex xs12 class="mb-2" id="secondline"></span>
  <span v-flex xs12 class="mb-2" id="whiteline"></span>
  <span v-flex xs12 class="mb-2" id="fourthline"></span>
  <span v-flex xs12 class="mb-2" id="fifthline"></span>
    <span v-flex xs12 class="mb-2" id="portfolio"> portfolio</span>
      <span v-flex xs12 class="mb-2" id="port"> portfolio</span>
  <span v-flex xs12 class="mb-2" id="port1"> folio</span>
  <span v-flex xs12 class="mb-2" id="portas"> portfolio</span>
  <span v-flex xs12 class="mb-2" id="portas1"> folio</span>
  <span v-flex xs12 class="mb-2" id="designtexttt">is the intentional creation of <br>a plan or specification for the<br>construction of an object or<br>system or for the implementation<br>of an activity or process.</span>
  <span v-flex xs12 class="mb-2" id="abouttexttt">in the word's everyday usage, <br>is a social role or a character <br>played by an actor. The word<br>is derived from Latin, where it<br>originally referred to a theatrical<br>mask.</span>
  <span v-flex xs12 class="mb-2" id="projecttexttt">contemporary business and <br>science treat as a project any<br>undertaking, carried out <br>individually or collaboratively<br>and possibly involving research<br>or design</span>
  <span v-flex xs12 class="mb-2" id="phototexttt">a photograph is an image<br>created by light falling on<br>a photosensitive surface,<br>usually photographic film<br>or an electronic image sensor</span>

<span id="dot1"></span>
<span id="dot2"></span>
<span id="dot3"></span>
<span id="dot4"></span>
<span v-flex xs12 class="mb-2" id="lastass"> front-end developer</span>
</div>
            </v-container>
    </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
      name: 'design',
      name: 'aboutme',
}
</script>

<style>
@font-face {
  font-family: "MYRIADPRO-REGULAR";
  src: url("file:///C:/Users/nedas/Downloads/New%20folder%20(2)/MYRIADPRO-REGULAR.OTF");
  
}

.xd {
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
.xda {
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
.blackwithopacityy
{
  width: 16.2vh;
  height: 156vh;
  background-color: #00000028;
  position: relative;
  margin: 0;
    position: absolute;
    top: 21.9%;
    left: 96%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    
}
.blackwithopacityy:hover
{
  opacity: 0.8;
  color: #000000;
}
#dot1
{
  height: 2vh;
  width: 2vh;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 26.6%;
  top: 14.3%;
}
#dot2
{
  height: 2vh;
  width: 2vh;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 26.6%;
  top: 36.3%;
}
#dot3
{
  height: 2vh;
  width: 2vh;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 26.6%;
  top: 58.3%;
}
#dot4
{
  height: 2vh;
  width: 2vh;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 26.6%;
  top: 80.3%;
}
 #port{
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
    #port1{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 28.2%;
    left: 16%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
  }
    #portas{
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
      #portas1{
    font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 30.2%;
    left: 13%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
        letter-spacing: -0.01vh;
    font-weight: bold;
      transform-origin: 0 0;
  transform: rotate(90deg);
            z-index: 100;
  }
#grey {
  width: 16.2vh;
  height: 156vh;
  background-color: #000000;
  position: relative;
  margin: 0;
    position: absolute;
    top: 21.9%;
    left:  29%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    }
  #designtext
  {
        font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 15.4%;
    left: 33.3%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
   #abouttext
  {
        font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 37.4%;
    left: 35%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
      #abouttext:hover {
  background-color: #000000;
  color: #ffffff;
  }
   #projectstext
  {
        font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 59.4%;
    left: 35%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
    #projectstext:hover {
  background-color: #000000;
  color: #ffffff;
  }
   #phototext
  {
        font-size: 4vh;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 81.4%;
    left: 34.5%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
    #phototext:hover {
  background-color: #000000;
  color: #ffffff;
  }
  #designtext:hover {
  background-color: #000000;
  color: #ffffff;
  }
  #designtexttt
  {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              font-size: 2vh;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 24.4%;
    left: 36.8%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
    #abouttexttt
  {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              font-size: 2vh;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 47.4%;
    left: 36.8%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }

  #projecttexttt
  {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              font-size: 2vh;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 68.4%;
    left: 36.8%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
  
  #phototexttt{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              font-size: 2vh;
    color: #000000;
    position: relative;
    margin: 0;
    position: absolute;
    top: 90.4%;
    left: 36.5%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    letter-spacing: -0.04vh;
    z-index: 100;
  }
</style>