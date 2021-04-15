//get the elements 
let elems={
    bar,  form,   next,prev ,sidebar,note ,close  
}={
    bar:document.querySelector('.fa-bars'),
    form:document.getElementsByTagName('form')[0],
    next:document.querySelector('.next'),
    prev:document.querySelector('.prev'),
    sidebar:document.querySelector('.sidebar'),
    note:document.querySelector('.text-note'),
    close:document.querySelector('.close')
}

//lets handle the form input 
form.onsubmit=e=> e.preventDefault()
//open the sidebar 
    bar.onclick= e =>{
        sidebar.style.display='block'
}
let contents={
    first:'jerico bolt Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid',
    second:'other  bolt Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid',
    
}
let backward={
    first:'change bolt Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid',
    second:'last   bolt Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid',
    
}
//the next action button 
next.onclick=e=>{
for(i in contents){
    note.innerHTML=Object.values(contents)
}
    
    
}
close.onclick=()=>{
    sidebar.style.display='none'
}
prev.onclick=e=>{
    for(i in backward) {
        note.innerHTML=Object.values(backward)
    }
}