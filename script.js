function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")

    // substitur a imagem
    if(html.classList.contains("light")) {
        // se tiver light mode, adicionar a imgaem light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // set tiver sem light mode, manter a foto normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}
