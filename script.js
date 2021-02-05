let botones = document.querySelectorAll('.botones .col-md-3, .botones .col-md-4')
let mostrar = document.getElementById('mostrar')
let resolverBtn = document.querySelector('.resolver')
var resuelto = false;

botones.forEach( boton => {
    boton.addEventListener('click', agregarCaracter)
    boton.classList.add('user-select-none')
})
resolverBtn.addEventListener('click', resolver)
resolverBtn.classList.add('user-select-none')

function agregarCaracter(e){
    if(e.srcElement.textContent==='AC'){
        //limpiamos
        mostrar.textContent = ''
    }else{
        //armamos la operacion
        if(resuelto && (!isNaN(e.srcElement.textContent))){
            mostrar.textContent = ''
        }
        resuelto = false;
        mostrar.textContent += e.srcElement.textContent
    }
    
}

function resolver(e){ 
    mostrar.textContent = eval(mostrar.textContent)
    resuelto = true;
}