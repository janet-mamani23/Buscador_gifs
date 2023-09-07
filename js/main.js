const Apikey ="AIzaSyBPoinXGVoZQGPhYRfXBWPl8nm4qJvp3No";
const termino = document.querySelector(".termino_a_buscar");
const buscador = document.querySelector(".buscador");
const resultados = document.querySelector(".resultados");

buscador.addEventListener("click",()=> {
    const url = `https://tenor.googleapis.com/v2/search?q=${termino.value}&key=${Apikey}&client_key=my_test_app&limit=9`
    const peticion = fetch(url);
    peticion
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            response.results.forEach(element => {
                const urlimg =element.media_formats.gif.url;
                const img = document.createElement("img");
                const div = document.createElement("div");
                div.className = "gif-card";
                img.src = urlimg
                resultados.appendChild(div);
                div.appendChild(img);
                
            });
        })
    resultados.innerHTML= "";
})
