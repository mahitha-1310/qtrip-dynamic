
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  const urlParams = new URLSearchParams(search);
  const city = urlParams.get("city");
  return city;
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  let res=null;
  try{
    res=fetch(config.backendEndpoint + "/adventures?city="+city)
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

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  adventures.forEach((key) =>{
  let parent = document.getElementById("data");
  
    
    let child = document.createElement("div");
    child.className = "col-6 col-md-4 col-lg-3 mb-5";
    child.innerHTML = 
    `<a href = "./detail/?adventure=${key.id}" id = ${key.id}>  
    
      <div class="position-relative">
      <div class="category-banner">${key.category}</div>

      <div class = "card activity-card mx-3">
        <img src = ${key.image}> 
        <div class="card-body w-100">
        <div class="w-100 d-flex justify-content-between">  
          <h6>${key.name}</h6>  
          <p>₹${key.costPerHead}</p>  
        </div>
        <div class="card-text d-flex justify-content-between">  
          <h6>Duration</h6>  
          <p>${key.duration} Hours</p>  
        </div>
      </div>
      </div>
      </div> 
       
    </a>`;
    parent.appendChild(child);
})
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  let arr=[];
  list.forEach((prop)=>{
    if(prop.duration>=low && prop.duration<=high){
      arr.push(prop);
    }
  })
  return arr;
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
  let arr=[];
  // console.log(list)
  list.forEach((prop) =>{
    if(categoryList.includes(prop.category)){
      arr.push(prop);
    }
  })

  return arr;
  
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  if(filters.category!=''){
    list=filterByCategory(list,filters.category);
    // console.log(list)
  }
  if(filters.duration!=''){
    let duration=filters.duration.split("-");
    console.log(list)
    list=filterByDuration(list,Number(duration[0]),Number(duration[1]));
  }
 

  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters 
  const saveFilter=JSON.stringify(filters);
  localStorage.setItem('filters',saveFilter);

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  const localFilter=JSON.parse(localStorage.getItem('filters'));

  // Place holder for functionality to work in the Stubs
  return localFilter;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

// let filterSet =new Set();
filters.category.forEach((prop)=>{
  let parent=document.getElementById('category-list');
  let child=document.createElement('div');
  child.textContent=prop;
  child.className="category-filter";
  parent.appendChild(child);
});

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
