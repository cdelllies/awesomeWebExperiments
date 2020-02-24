
let i = 0
function coucou(){
    switch (i) {
      case 0:
        document.querySelector("#firstScreen").classList.add("hidden")
        document.querySelector("#progressScreen").classList.remove("hidden")
        download();
        break;
      case 1:

        break;
    }

    i++
}

const download = () => { 
  let completed = 0
  setInterval(() => {
    completed++
    if(completed!=500){
      document.querySelector('#file').setAttribute('value', completed)
    }
  }, 50) 
}