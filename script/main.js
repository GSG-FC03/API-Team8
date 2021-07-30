const m = document.getElementById("image")
for(let i=0; i<=10; i++){
const image =document.createElement("img")
image.classList.add("dog-imag")
m.appendChild(image)
fetch('https://dog.ceo/api/breeds/image/random')
.then (Response => Response.json())
.then(res => image.src = res.message)
.catch(Error => console.log( 'rejected',Error))

}