document.addEventListener("DOMContentLoaded", function(e){
    console.log(e)
});

function handleClickEvent(event){
    let element = document.getElementsByClassName("top-header-container")
    console.log(element[0].style.backgroundImage = 
        `linear-gradient(rgba(0,0,0,0.527), rgba(0,0,0,0.5)),
        url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80')`)
}

function showModal(){
    let containerElement = document.getElementsByClassName("container")

    let modalContainer =  document.createElement("div")


    let closeButton = document.createElement("button")
    closeButton.innerText = "X"
    closeButton.style.border = " 1px solid black"
    closeButton.style.outline = " unset"
    closeButton.style.borderRadius = "59%"
    closeButton.style.padding = "2% 3.5%"
    closeButton.style.backgroundColor = "white"
    closeButton.style.float = "right"
    closeButton.style.fontWeight = "bold"

    closeButton.addEventListener("click", function(e){
        modalContainer.style.display = "none"
    })

    modalContainer.className = "show_modal"
    containerElement[0].appendChild(modalContainer)

}

function handleInputChange(event){
    console.log(event)
}
