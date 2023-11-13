function getApi() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        // get all elements we need
        let container = document.querySelector(".container");
        let imageEl = document.createElement("img");
        let imgbox = document.createElement("div");
        let paraghraph = document.createElement("p");
        imgbox.appendChild(paraghraph);
        imgbox.appendChild(imageEl);
        container.appendChild(imgbox);
        console.log(imgbox);
        // add class name
        imgbox.classList.add("img-box");
        // display imges and names
        paraghraph.innerText = `${data.results[i].name}`;
        imageEl.src = `${data.results[i].image}`;
      }
    });
}
// calling function
getApi();
