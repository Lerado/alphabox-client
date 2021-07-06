<template>
<div class="main bg-gradient-to-r from-font1 to-blue_box11 space-y-4 space-x-12">
<br>
<div class="title animate-bounce">
<p class="tracking-widest text-white text-center font-extrabold font-montserrat text-basic ">DASHBOARD</p></div>
<span class="color w-30 h-40 absolute items-left inset-y-5 right-5 space-y-3">
    <el-button class="bg-gradient-to-r from-blue_box1 to-blue_box11 w-10 h-8 hover:opacity-75 border border-white rounded shadow transform hover:scale-110 motion-reduce:transform-none">
  </el-button>
    <br>
    <br>
    <el-button class="bg-gradient-to-r from-indigo_box2 to-indigo_box21 w-10 h-8 hover:opacity-75 border border-white rounded shadow transform hover:scale-110 motion-reduce:transform-none">
  </el-button>
    <br>
    <br>
    <el-button class="bg-gradient-to-r from-orange_box3 to-orange_box31 w-10 h-8 hover:from-orange_box3 hover:to-orange_box31 hover:opacity-75 border border-white rounded shadow transform hover:scale-110 motion-reduce:transform-none">
  </el-button>
     <br>
    <br>
    <el-button class="bg-gradient-to-r from-green_box4 to-green_box41 w-10 h-8 hover:opacity-75 border border-white rounded shadow transform hover:scale-110 motion-reduce:transform-none">
  </el-button>
     <br>
    <br>
    <el-button class="bg-gradient-to-r from-gray_box5 to-gray_box51 w-10 h-8 border hover:opacity-75 border-white rounded shadow transform hover:scale-110 motion-reduce:transform-none">
  </el-button>
    </span>
    <div class=" flex flex-row mx-auto bg-white rounded-xl shadow-md"
    style="width:80%;height:35rem">
  <div class="md:flex space-x-3">
    <div class="flex flex-col h-50  md:w-full bg-user_font rounded-l-xl justify-items-center items-center align-center space-y-6"
    style="width:8rem">
    <p></p>
    <el-avatar
        class="cursor-pointer transform hover:scale-110 motion-reduce:transform-none"
        :src="require('@/assets/avatar/avatar-user.png')"
        :size="'small'"
      />
      
      <el-avatar
        class="cursor-pointer material-icons text-white bg-user_font transform hover:scale-110 motion-reduce:transform-none"
        :src="require('@/assets/avatar/home.svg')"
        :size="'small'"
      />
      <el-avatar
        class="cursor-pointer material-icons bg-user_font transform hover:scale-110 motion-reduce:transform-none"
        :src="require('@/assets/avatar/time.svg')"
        :size="'small'"
        />
      <button  class="cursor-pointer text-orange font-montserrat font-extrabold bg-white w-24 hover:opacity-75 rounded transform hover:scale-110 motion-reduce:transform-none">Partager</button>
      <button class="cursor-pointer bg-user_font text-white font-base font-montserrat font-extrabold transform hover:scale-110 motion-reduce:transform-none hover:opacity-75">
      <i class="el-icon-d-arrow-left text-red-700 hover:opacity-75"></i>
      Sortir
      </button>
      
      
      
    </div>
    <div class=" bg-white rounded-r-xl "
    style="width:60.3rem">
      <br>
      <nav class="flex flex-row  rounded-r-xl flex-wrap bg-white p-6">
  <div class="inline text-sm text-black font-montserrat font-semibold">Hello,</div>
      <a class="inline text-sm font-montserrat cursor-pointer hover:opacity-75" href="">Mozart le Phoenix!!!</a>
      <i class="material-icons align-right text-font1 cursor-pointer animate-pulse"
      style="padding-left:680px;font-size:30px">notifications</i>
      
      
</nav>
<br>
<div class="grid grid-cols-3 gap-4 ">
  <div class=" rounded shadow-xl h-64"
  style="height:12rem;background-color:#5959A7">
  <span class="ml-6  space-x-2">
  <i class="material-icons text-white inline-block my-3"
  style="font-size:10px">circle</i>
  <p class="text-base font-semibold cursor-pointer font-montserrat text-white hover:opacity-75 inline">Victoire</p>
  </span>
  <div class="ml-6">
  <p class=" font-semibold font-montserrat text-white hover:opacity-75 inline"
  style="font-size:29px">2500
  </p>
  <p class="font-light text-sm font-montserrat text-white inline">points</p>
  </div>
  <div class="ml-6">
  <p class="cursor-pointer font-montserrat text-white text-sm font-light hover:opacity-75 inline"
  style="">Nombre de mots appris:
  </p>
  <p class="font-light text-sm font-montserrat text-white inline">1000 mots</p><br>
  <p class="cursor-pointer font-montserrat text-white text-sm font-light inline hover:opacity-75"
  style="">Nombre de parties gagnées:
  </p>
  <p class="font-light text-sm font-montserrat text-white inline">1000 parties</p>
  </div>
  
  
  </div>
  <div class="bg-shadow_grid rounded shadow-xl"
  style="height:12rem">
  <span class="ml-6  space-x-2">
  <i class="material-icons text-black inline-block my-3"
  style="font-size:10px">circle</i>
  <p class="text-basecursor-pointer font-black  font-montserrat text-black hover:opacity-75 inline">Evolution</p>
  </span>
  <div
            class="flex flex-row mb-2 justify-center h-full align-middle bg-center bg-no-repeat bg-contain transform hover:scale-110 motion-reduce:transform-none hover:opacity-75"
            
          >
            <img width="290" class="object-contain object-center " src="@/assets/backgrounds/courbe-bg.png" alt="">
          </div>
  </div>
  

  <div class="bg-shadow_grid grid row-span-2  rounded shadow-xl  mr-5"
  style="height:35px">
  <nav class="flex justify-between bg-shadow_grid w-auto flex-wrap bg-white p-6"
  style="height:18px">
  <span class="ml-6 space-x-2 ">
  <i class="material-icons text-black inline-block my-3"
  style="font-size:10px">circle</i>
  <p class="text-base cursor-pointer font-black font-montserrat text-black hover:opacity-75 inline ">Niveau de Jeu </p>
  </span>
    <div class="mr-1  space-x-2 inline">
    <i class="material-icons text-font1 inline-block my-3"
  style="font-size:10px">circle</i>
    <i class="material-icons text-gray-400 inline-block my-3"
  style="font-size:10px">circle</i>
      <i class="material-icons text-gray-400 inline-block my-3"
  style="font-size:10px">circle</i>
  <i class="material-icons text-gray-400 inline-block my-3"
  style="font-size:10px">circle</i>
    </div>
</nav>

<div class="justify-between grid grid-flow-row grid-rows-6 grid-cols-3 gap-4 bg-shadow_grid shadow-xl mt-6">
<div class=" level rounded bg-font1 w-24 font-montserrat font-base text-white font-semibold cursor-pointer transform hover:scale-110 motion-reduce:transform-none">
<p class="ml-2">Intro</p>
<i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>
  <i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>

  </div>
<div class=" level rounded bg-font1 font-montserrat font-base text-white font-semibold transform hover:scale-110 motion-reduce:transform-none  cursor-pointer ">
<p class="ml-2">01</p>
<i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>
  <i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>
  <i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>
  <i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>

  </div>
<div class=" level rounded bg-font1 font-montserrat font-base text-white font-semibold  cursor-pointer transform hover:scale-110 motion-reduce:transform-none">
<p class="ml-2">02</p>
<i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>
  <i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>
  <i class="material-icons"
  style="font-size:10px;color:#F57F20">star</i>

  </div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
<div class="bg-font1 rounded cursor-pointer disabled:opacity-70">
<i class="material-icons mt-1 mb-1 ml-6"
  style="font-size:30px;color:#A7A9AC">lock</i></div>
</div>
 
  
  </div>

  <div class="col-span-2 bg-white shadow-xl border-2 border-gray-300  rounded"
  
  style="height:12rem">
  <nav class="flex  justify-between border-b-2 border-gray-300 w-auto flex-wrap bg-white p-6">
  <span class="ml-6 space-x-2 ">
  <i class="material-icons inline-block my-3"
  style="font-size:10px;color:#5959A7">circle</i>
  <p class="text-base cursor-pointer font-black font-montserrat text-black hover:opacity-75 inline ">Découvre tes résultats</p>
  </span>
    <div class="mr-1 mt-1 space-x-2">
    <a href="#" class="cursor-pointer hover:opacity-75 text-black font-medium font-montserrat"
    style="font-size:0.75rem">Nouveaux mots</a>
    <a href="#" class="cursor-pointer hover:opacity-75 text-black font-medium font-montserrat"
    style="font-size:0.75rem">Mots dans phrase</a>
      <a href="#" class="cursor-pointer hover:opacity-75 text-black font-medium font-montserrat"
      style="font-size:0.75rem">Signification des mots</a>
  </div>
</nav>
<div class="overflow-y-scroll mt-1  mr-1 w-full"
  style="height:144px"></div>
  </div>
  
  <div class="col-span-2 h-32 shadow bg-white rounded border-2 space-x-10 border-gray-200"
  style="height:60px">
  <input class="placeholder-gray-900 cursor-pointer hover:opacity-75 border-gray-900 font-montserrat font-medium mt-4 ml-10 bg-shadow_grid placeholder-opacity-75 align-center justify-center" placeholder="Ecrivez le mot ou la phrase à traduire"
  style="width:24rem;font-size:1rem">
  <button class=" cursor-pointer hover:opacity-75 bg-font1 text-white font-montserrat font-semibold rounded-full"
  style="font-size:0.75rem;width:100px">Traduire</button>
  </div>
  
  <div class="bg-white rounded shadow-xl space-y-0 mr-5">
  <p class="font-montserrat cursor-pointer hover:opacity-75 ml-3 font-black"
  style="font-size:15px;
  color:#5959A7">Langue en cours d'apprentissage</p>
  <div class="grid grid-cols-3 space-x-2 mr-2 ">
  <div class="cursor-pointer hover:opacity-75 bg-shadow_grid font-montserrat ml-2 space-y-0"
  style="height:35px;
  color:#5959A7">
  <p class="ml-5 text-font1"
  style="font-size:13px">Anglais</p>
  <p class="ml-1 "
  style="font-size:10px;color:#5959A7">Niveau
  <i class="material-icons inline ml-4"
  style="font-size:6px;color:#5959A7">circle</i>
  <i class="material-icons text-gray-400 inline "
  style="font-size:6px">circle</i>
  <i class="material-icons text-gray-400 inline "
  style="font-size:6px">circle</i>
  <i class="material-icons text-gray-400 inline"
  style="font-size:6px">circle</i>
  </p>
  </div>
  <div class="cursor-pointer hover:opacity-75 bg-shadow_grid font-montserrat"
  style="height:32px">
  <p class="ml-3 text-font1"
  style="font-size:13px">Espagnol</p>
  <p class="ml-1 text-font1"
  style="font-size:10px">Niveau
  <i class="material-icons text-font1 inline ml-4"
  style="font-size:6px;color:#5959A7">circle</i>
  <i class="material-icons text-gray-400 inline "
  style="font-size:6px">circle</i>
  <i class="material-icons text-gray-400 inline "
  style="font-size:6px">circle</i>
  <i class="material-icons text-gray-400 inline"
  style="font-size:6px">circle</i>
  </p>
  
  </div>
  <div class="cursor-pointer hover:opacity-75 bg-shadow_grid mr-2 font-montserrat"
  style="height:32px">
  <p class="ml-3 text-font1"
  style="font-size:13px">Allemand</p>
  <p class="ml-1 text-font1"
  style="font-size:10px">Niveau
  <i class="material-icons  inline ml-4"
  style="font-size:6px;color:#5959A7">circle</i>
  <i class="material-icons text-gray-400 inline "
  style="font-size:6px">circle</i>
  <i class="material-icons text-gray-400 inline "
  style="font-size:6px">circle</i>
  <i class="material-icons text-gray-400 inline"
  style="font-size:6px">circle</i>
  </p>
  </div>
  </div>
  </div>
  
</div>
      
      
      
    </div>
  </div>
</div>
    
    
    
  
</div>


    
    
   

</template>
<script>
export default {
    name:"icon",
}
</script>
<style>
.main{
height:41.09rem;
background-color:'#5959A7';


};
.level{
background-color:#5959A7;
};
.title{
animation: bounce 1s infinite;
};




</style>
