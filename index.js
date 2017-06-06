const myForm = document.querySelector('form#myForm')

function addDino(ev){
    ev.preventDefault()
    const form = ev.target
    const ul = document.querySelector('ul')
    const dino = document.createElement('li')
    const text = document.createElement('span')
    const fav = document.createElement('button')
    const del = document.createElement('button')
    fav.addEventListener("click", favorite);
    fav.textContent = "fav"
    del.addEventListener("click", delist)
    del.textContent = "del"
    text.textContent = form.dinoIn.value
    dino.appendChild(text)
    dino.appendChild(fav)
    dino.appendChild(del)
    document.querySelector('ul').insertBefore(dino, ul.childNodes[2])
    
}

function favorite(ev){
    const dino = ev.target.parentElement.childNodes
    dino[0].setAttribute("class", "wow")
}

function delist(ev){
    ev.target.parentElement.parentElement.removeChild(ev.target.parentElement.parentElement.childNodes[0])
}


myForm.addEventListener('submit', addDino)
