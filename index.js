 const pop_left =document.getElementById('pop_song_left')
 const pop_right =document.getElementById('pop_song_right')
const music =new Audio('audio/1.mp3')
 const songs=[
    {
        id:1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:`img/1.jpg`
    },
    {
        id:2,
        songName:`Were are you now <br>
        <div class="subtitle">Rana leon</div>`,
        poster:`img/2.jpg`
    },
    {
        id:3,
        songName:`Hold me Close<br>
        <div class="subtitle">Luis Raty</div>`,
        poster:`img/3.jpg`
    },
    {
        id:4,
        songName:`Like a ocean<br>
        <div class="subtitle">Janny khas</div>`,
        poster:`img/4.jpg`
    },
    {
        id:5,
        songName:`Agar tum saath ho<br>
        <div class="subtitle">Alka yagnik</div>`,
        poster:`img/5.jpg`
    },
    {
        id:6,
        songName:`Leja zarror ho to<br>
        <div class="subtitle">Jutin </div>`,
        poster:`img/6.jpg`
    },
    {
        id:7,
        songName:`Dilbar<br>
        <div class="subtitle">Neha</div>`,
        poster:`img/7.jpg`
    },
    {
        id:8,
        songName:`Bulave tuje yaare<br>
        <div class="subtitle">Akhil </div>`,
        poster:`img/8.jpg`
    },
    {
        id:9,
        songName:`Bulave tuje yaare<br>
        <div class="subtitle">Akhil </div>`,
        poster:`img/9.jpg`
    },
    {
        id:10,
        songName:`Lagdi lahoor di ha<br>
        <div class="subtitle"Guru Randawa</div>`,
        poster:`img/10.jpg`
    }
    
 ]

const search_result =document.getElementsByClassName('search_result')[0]
let search1 =document.getElementsByClassName('search')[0]
//  songs.forEach(element => {
    
//     const {id,songName,poster}=element;
//        const list=`<li class="songItem card"draggable="true">
//  	    <img src=${poster} alt="">
//  	   <h5> ${songName}</h5>
//  	    <i id="${id}" class="bi playListPlay fas fa-play"></i>
//  	</li>`
   
//      search_result.innerHTML+=list;  
//  })

 const menu_song =document.getElementsByClassName('menu_song')[0]
 
 songs.forEach(element=>{
     const {id,poster,songName}=element;
     
     const div1=` <li class="songItem" draggable="true"> 
     <img src="${poster}" alt="">
     ${songName}
     <i id="${id}" class="bi playListPlay fas fa-play"></i>
     </li>`
     
     menu_song.innerHTML+=div1;
    })
 
 

    const gettitle =document.getElementById('gettitle')
    gettitle.addEventListener('keyup', function(event) {
        const userInput = event.target.value;
        const result= songs.filter((e) =>e.songName.includes(userInput))
        
        search_result.innerHTML=''
       result.forEach(element => {
    
            const {id,songName,poster}=element;
               const list=`<li class="songItem card"draggable="true">
                 <img src=${poster} alt="">
                  ${songName} 
                 <i id="${id}" class="bi playListPlay fas fa-play"></i>
             </li>`
           
             search_result.innerHTML+=list;  

         })
        
      });



 
search1.addEventListener('click',()=>{
    search_result.classList.toggle('display')
})
 
let pop_song =document.getElementsByClassName('pop_song')[0];

 pop_right.addEventListener('click',()=>{
     pop_song.scrollLeft+=330;
     
 })
 pop_left.addEventListener('click',()=>{
     pop_song.scrollLeft-=330;
     
 })
// Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
//  e.getElementsByTagName('img')[0].src=songs[i].poster;
// e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
// })
 
Array.from(document.getElementsByClassName('songIt')).forEach((e,i)=>{
e.getElementsByTagName('img')[0].src=songs[i].poster;
e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})
 
const master_play =document.getElementById('master_play') 

master_play.addEventListener('click',(e)=>{
     if (music.paused||music.currentTime<=0) {
        music.play();

    master_play.classList.remove('fa-play')
    master_play.classList.add('fa-pause')

     }else{
        music.pause();
        master_play.classList.remove('fa-pause')
        master_play.classList.add('fa-play')
     }
})
const wave =document.getElementById('wave')

let index=0;
 let download_music =document.getElementById('download_music')

Array.from(document.getElementsByClassName('songItem')).forEach((e)=>{
  e.addEventListener('click',function(){
    const divInnerHTML = e.innerHTML;
    const idRegex = /id="([^"]+)"/;  
    const matches = divInnerHTML.match(idRegex);
    if (matches && matches.length > 1) {
        index= matches[1];
        music.src=`audio/${index}.mp3`;
        const poster_master_play =document.getElementById('poster_master_play');
        poster_master_play.src=`img/${index}.jpg`
        const titlecontent =document.getElementById('titlecontent')
        titlecontent.innerHTML= songs[index-1].songName
        music.play();
        master_play.classList.remove('fa-play')
        master_play.classList.add('fa-pause')
        removeclass(); 
        this.classList.add('select')
        download_music.href=`/audio/${index}.mp3`;
        download_music.setAttribute('download',songName)
 
    } else {
      console.log('No ID found in the innerHTML.');
    }
      
  })
})

function removeclass() {
    Array.from(document.getElementsByClassName('songItem')).forEach((e)=>{
e.classList.remove('select')
    })}


    const currentStart =document.getElementById('currentStart')
    const currentEnd =document.getElementById('currentEnd')

    music.addEventListener('timeupdate',()=>{
let musicC=music.currentTime;
 let music_d=music.duration;

 let min1=Math.floor(music_d/60);
 let sec1=Math.floor(music_d%60);
if(sec1<10){
    sec1=`0${sec1}`
}
 currentEnd.innerText=`${min1}:${sec1}`

let min2=Math.floor(musicC/60);
let sec2=Math.floor(musicC%60);
currentStart.innerText=`${min2}:${sec2}`
let seek =document.getElementById('seek')

let bar2 =document.getElementById('bar2')

let dot =document.getElementById('dot')

let progressBar=parseInt((musicC/music_d)*100);
seek.value=progressBar;
 let value=seek.value;
 bar2.style.width=`${value}%`
 dot.style.left=`${value}%`


 seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music_d/100;
 })
    })

let vol_dot =document.getElementById('vol_dot')
let vol_bar =document.getElementsByClassName('vol_bar')
let vol =document.getElementById('vol')
let vol_icon =document.getElementById('vol_icon')

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }else if(vol.value>0 &&vol.value<50){
          vol_icon.classList.remove('fa-volume-xmark');
          vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
    }
     else {
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume-high');
    }
    let m=vol.value;
    vol_dot.style.width=`${m}%`
    music.volume=m/100;
})
let farotate180 =document.getElementsByClassName('fa-rotate-180')[0];
const right =document.getElementById('right')

farotate180.addEventListener('click',function(){
    index-=1;
    if(index<=0){
        index=songs.length
    }
    music.src=`audio/${index}.mp3`;
      const poster_master_play =document.getElementById('poster_master_play');
      poster_master_play.src=`img/${index}.jpg`
       const titlecontent =document.getElementById('titlecontent')
       titlecontent.innerHTML= songs[index-1].songName
       music.play();
       master_play.classList.remove('fa-play')
       master_play.classList.add('fa-pause')
       removeclass(); 
      this.classList.add('select')
})
right.addEventListener('click',function(){
    index+=1;
    if(index>=songs.length){
        index=1
    }
    music.src=`audio/${index}.mp3`;
      const poster_master_play =document.getElementById('poster_master_play');
      poster_master_play.src=`img/${index}.jpg`
       const titlecontent =document.getElementById('titlecontent')
       titlecontent.innerHTML= songs[index-1].songName
       music.play();
       master_play.classList.remove('fa-play')
       master_play.classList.add('fa-pause')
       removeclass(); 
      this.classList.add('select')
})

// const shuffle =document.getElementsByClassName('shuffle')[0]
// shuffle.addEventListener('click',()=>{
//     let a=shuffle.innerHTML;
//     switch (a) {
//         case "next":
//             shuffle.classList.remove('fa-music')
//             shuffle.classList.remove('fa-shuffle')
//             shuffle.classList.add('fa-repeat')
//             shuffle.innerHTML='repeat'
//             break;
//         case "repeat":
//             shuffle.classList.remove('fa-music')
//             shuffle.classList.add('fa-shuffle')
//             shuffle.classList.remove('fa-repeat')
//             shuffle.innerHTML='random'
//             break;
//         case "random":
//             shuffle.classList.add('fa-music')
//             shuffle.classList.remove('fa-shuffle')
//             shuffle.classList.remove('fa-repeat')
//             shuffle.innerHTML='next'
//             break;
    
//         default:
//             break;
//     }
// })
