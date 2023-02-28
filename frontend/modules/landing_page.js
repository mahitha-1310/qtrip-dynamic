import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description

  let cities = await fetchCities();
  
  // Updates the DOM with the cities
  cities.forEach((key) => {

    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  let res=null;
  try{
    res=fetch(config.backendEndpoint + "/cities")
    .then(data => {
    return data.json();
    })
    .catch((err)=>null)
  }
  catch(error){
    res=null;
  }
  return res;
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  // 
  
  let parent = document.getElementById("data");
  let child = document.createElement("div");
  child.className = "col-6 col-md-4 col-lg-3 mb-5";
  child.innerHTML = 
  `<a href = "./pages/adventures/?city=${id}" id = ${id}>  
    <div class = "tile">  
      <div class = "tile-text text-center">  
        <h5>${city}</h5>  
        <p>${description}</p>  
      </div>  
      <img src = ${image}>  
    </div> 
  </a>`;
  parent.appendChild(child);

}

export { init, fetchCities, addCityToDOM };
