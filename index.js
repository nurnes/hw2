const myForm = document.querySelector('form#myForm')

function addDino(ev){
    ev.preventDefault()
    const form = ev.target
    const ul = document.querySelector('ul')
    const dino = document.createElement('li')
    const dinoDiv = document.createElement('div')
    const text = document.createElement('span')
    const fav = document.createElement('button')
    fav.addEventListener("click", favorite);
    //fav.setAttribute("class", "inline")
    fav.textContent = "fav"
    text.textContent = form.dinoIn.value
    dino.appendChild(dinoDiv)
    dinoDiv.appendChild(text)
    dinoDiv.appendChild(fav)
    //document.querySelector('ul').appendChild(dino)
    document.querySelector('ul').insertBefore(dino, ul.childNodes[0])
    
}

function favorite(ev){
    const dinoDiv = ev.target.parentElement.childNodes
    dinoDiv[0].setAttribute("class", "wow")
}


myForm.addEventListener('submit', addDino)
