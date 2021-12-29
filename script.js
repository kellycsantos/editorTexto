let campoTexto = document.getElementsByTagName('textarea')[0]
let btnAa = document.getElementsByTagName('button')[0].addEventListener('click',textTransform)
let btnB = document.getElementsByTagName('button')[1].addEventListener('click',textWeigth)
let btnI = document.getElementsByTagName('button')[2].addEventListener('click',textItalic)
let btnU = document.getElementsByTagName('button')[3].addEventListener('click',textUnderline)
let btnS = document.getElementsByTagName('button')[4].addEventListener('click',textThrough)
let btnfonteSize = document.getElementById('fonteSize').addEventListener('change',fonteSize)
// campoTexto.addEventListener('keypress',contagem)

// function contagem(){
//     console.log(campoTexto.value.length+1 )
// }




function textTransform(){
    if(campoTexto.style.textTransform != 'uppercase' ){
        campoTexto.style.textTransform='uppercase'
    }else{
        campoTexto.style.textTransform='lowercase'
    }
}

function textWeigth(){
    if(campoTexto.style.fontWeight != '900'){
        campoTexto.style.fontWeight='900'
    }else{
        campoTexto.style.fontWeight='400'
    }
}

function textItalic(){
    if(campoTexto.style.fontStyle != 'italic'){
        campoTexto.style.fontStyle='italic'
    }else{
        campoTexto.style.fontStyle='normal'
    }
}

function textUnderline(){
    if(campoTexto.style.textDecoration != 'underline'){
        campoTexto.style.textDecoration='underline'
    }else{
        campoTexto.style.textDecoration='none'
    }
}

function textThrough(){
    if(campoTexto.style.textDecoration != 'line-through'){
        campoTexto.style.textDecoration='line-through'
    }else{
        campoTexto.style.textDecoration='none'
    }
}


let cor = document.getElementById('cor').addEventListener('change',escolha)


function escolha(){
    console.log(document.getElementById('cor').value)
    campoTexto.style.color= document.getElementById('cor').value
}

function fonteSize(){
   let tamanhoTexto = Number(document.getElementById('fonteSize').value)
   campoTexto.style.fontSize= tamanhoTexto+"px"
   console.log(tamanhoTexto)
}

let botoesnav = document.querySelector('.menu').addEventListener('click',estado)

