import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  const urlParams = new URLSearchParams(search);
  const adventureId = urlParams.get("adventure");
  return adventureId;

  // Place holder for functionality to work in the Stubs

}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  let res=null;
  try{
    res=fetch(config.backendEndpoint + "/adventures/detail?adventure="+adventureId)
    .then(data => {
    return data.json();
    })
    .catch((err)=>null)
  }
  catch(error){
    res=null;
  }
  return res;

  // Place holder for functionality to work in the Stubs
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  console.log(adventure);
  let adventureName = document.getElementById("adventure-name");
  adventureName.textContent=adventure.name;
  let adventureSubtitle = document.getElementById("adventure-subtitle");
  adventureSubtitle.textContent=adventure.subtitle;
  let photoGallery=document.getElementById("photo-gallery");
  adventure.images.forEach((ref)=>{
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.alt=adventure.name;
    img.src=ref;
    img.className="activity-card-image";
    div.appendChild(img);
    photoGallery.appendChild(div);
  })
  let adventureContent=document.getElementById("adventure-content");
  adventureContent.textContent=adventure.content;
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let carouselSlide=document.getElementById('photo-gallery');
  carouselSlide.innerHTML = ""
  carouselSlide.className="carousel slide";
  carouselSlide.setAttribute("data-bs-ride","carousel");
  let carouselIndicators=document.createElement('div');
  carouselIndicators.className="carousel-indicators";
  let carouselInner=document.createElement('div');
  carouselInner.className="carousel-inner";
  images.forEach((ref, index)=>{
    let carouselItem=document.createElement('div');
    if (index == 0){
      carouselItem.className="carousel-item active";
      carouselIndicators.innerHTML+=`<button type="button" data-bs-target="#photo-gallery" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`
    }
    else{
      carouselItem.className="carousel-item";
      carouselIndicators.innerHTML+=`<button type="button" data-bs-target="#photo-gallery" data-bs-slide-to="${index}" aria-label="Slide ${index}"></button>`
    }
    let img=document.createElement('img');
    img.src=ref;
    img.className="activity-card-image";
    img.alt="";
    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  })
  // document.getElementsByClassName('carousel-inner')[0].firstChild.className = "carousel-item active";
  carouselSlide.appendChild(carouselIndicators);
  carouselSlide.appendChild(carouselInner);
  carouselSlide.innerHTML+=`<button class="carousel-control-prev" type="button" data-bs-target="#photo-gallery" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#photo-gallery" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>`
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
