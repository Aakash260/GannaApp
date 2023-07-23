 const pop_left =document.getElementById('pop_song_left')
 const pop_right =document.getElementById('pop_song_right')

let pop_song =document.getElementsByClassName('pop_song')[0];

 pop_right.addEventListener('click',()=>{
     pop_song.scrollLeft+=330;
     
 })
 pop_left.addEventListener('click',()=>{
     pop_song.scrollLeft-=330;
     
 })

 