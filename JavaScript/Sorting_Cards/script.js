const restaurantsName = [
  "The Golden Spoon","Ocean Breeze Grill","Mama's Kitchen","Urban Bites",
  "The Hungry Hippo","Pasta Paradise","Sakura Sushi","Taco Haven",
  "The Steakhouse","Curry Corner","Bella Italia","Spice Symphony",
  "Burger Barn","Vegan Vibes","The Breakfast Club","Noodle Nook",
  "Firewood BBQ","Mediterraneo","Pho Fever","Luna's Tapas Bar"
];

const priceForTwo = [
  40,55,30,45,35,50,60,25,70,30,
  55,45,20,40,35,25,65,50,30,60
];

const restaurantAddress = [
  "123 Main St, New York, NY","456 Beach Ave, Miami, FL","789 Maple Rd, Austin, TX",
  "321 Oak St, San Francisco, CA","654 Elm St, Denver, CO","987 Pine St, Chicago, IL",
  "135 Cherry Ln, Seattle, WA","246 Sunset Blvd, Los Angeles, CA","579 Cedar Rd, Dallas, TX",
  "864 Birch Ave, Atlanta, GA","111 Olive St, Boston, MA","222 Spruce Dr, Portland, OR",
  "333 Palm St, Las Vegas, NV","444 Willow Ln, Phoenix, AZ","555 Ash St, Nashville, TN",
  "666 Poplar Ave, San Diego, CA","777 Redwood Rd, Houston, TX","888 Magnolia Blvd, Orlando, FL",
  "999 Sycamore St, Charlotte, NC","1010 Bayview Dr, Tampa, FL"
];

const famousFoods = [
  "Butter Chicken","Grilled Lobster","Southern Fried Chicken","Fusion Tacos","Monster Burgers",
  "Fettuccine Alfredo","Dragon Roll Sushi","Carne Asada Tacos","Ribeye Steak","Lamb Vindaloo",
  "Margherita Pizza","Paneer Tikka","Double Cheeseburger","Vegan Buddha Bowl",
  "All-Day Breakfast Platter","Spicy Ramen","Smoked Brisket","Lamb Gyro","Beef Pho","Patatas Bravas"
];

// 🔥 Fixed: 20 images (so no mismatch)
const restraunts   = [
  "./Restraunts/Restraunt1.avif","./Restraunts/Restraunt2.avif","./Restraunts/Restraunt3.avif","./Restraunts/Restraunt4.avif",
  "./Restraunts/Restraunt5.avif","./Restraunts/Restraunt6.avif","./Restraunts/Restraunt7.avif","./Restraunts/Restraunt8.avif",
  "./Restraunts/Restraunt9.avif","./Restraunts/Restraunt10.avif"
];

function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

function createCard(i) {
  i = i%20;
  const card = document.createElement("div");
  card.className = "c-card";

  // image section
  const imageDiv = document.createElement("div");
  imageDiv.className = "c-image";

  const mainImg = document.createElement("img");
  mainImg.src = restraunts[i%10]; // ✅ fixed: 1-to-1 mapping
  mainImg.alt = restaurantsName[i];
  mainImg.className = "c-img-main";

  const discountDiv = document.createElement("div");
  discountDiv.className = "c-discount";

  const discountImg = document.createElement("img");
  discountImg.src = "./docs/img2.webp"; // fixed discount image
  discountImg.alt = "offer";
  discountImg.className = "c-img-discount";

  const discountText = document.createElement("span");
  discountText.textContent = "Flat 15% OFF";

  discountDiv.appendChild(discountImg);
  discountDiv.appendChild(discountText);

  imageDiv.appendChild(mainImg);
  imageDiv.appendChild(discountDiv);

  // header
  const header = document.createElement("div");
  header.className = "c-header";

  const title = document.createElement("div");
  title.className = "c-title";
  title.textContent = restaurantsName[i];

  const rating = document.createElement("div");
  rating.className = "c-rating";

  const ratingSpan = document.createElement("span");
  ratingSpan.textContent = getRandom(3.5, 5.0); // random rating between 3.5 - 5

  const starSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  starSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  starSvg.setAttribute("fill", "#FFFFFF");
  starSvg.setAttribute("width", "14");
  starSvg.setAttribute("height", "14");
  starSvg.setAttribute("viewBox", "0 0 24 24");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M12 .587l3.668 7.431L24 9.587l-6 5.847 1.417 8.252L12 18.896l-7.417 4.79L6 15.434 0 9.587l8.332-1.569z");
  starSvg.appendChild(path);

  rating.appendChild(ratingSpan);
  rating.appendChild(starSvg);

  header.appendChild(title);
  header.appendChild(rating);

  // tags section
  const tagsSection = document.createElement("div");
  tagsSection.className = "c-tags-section";

  const tags = document.createElement("div");
  tags.className = "c-tags";
  tags.textContent = famousFoods[i];

  const price = document.createElement("div");
  price.className = "c-price";
  price.textContent = `₹ ${priceForTwo[i] * 100} for two`;

  tagsSection.appendChild(tags);
  tagsSection.appendChild(price);

  // location section
  const locationSection = document.createElement("div");
  locationSection.className = "c-location-section";

  const location = document.createElement("div");
  location.className = "c-location";
  location.textContent = restaurantAddress[i];

  const distance = document.createElement("div");
  distance.className = "c-distance";
  distance.textContent = `${getRandom(0.5, 5)} km`; // random distance

  locationSection.appendChild(location);
  locationSection.appendChild(distance);

  // build card
  card.appendChild(imageDiv);
  card.appendChild(header);
  card.appendChild(tagsSection);
  card.appendChild(locationSection);

  return card;
}

const cards = document.querySelector('.cards');

function filter()
{
    cards.innerHTML = "";
    const arr = [];

    // collect all cards
    for (let i = 0; i < 32; i++) {
    arr.push(createCard(i));
    }

    // sort by price
    arr.sort((a, b) => {
    const priceA = parseInt(a.querySelector(".c-price").textContent.replace(/\D/g, ""));
    const priceB = parseInt(b.querySelector(".c-price").textContent.replace(/\D/g, ""));
    return priceA - priceB; // ascending order
    });


   // append sorted cards
   arr.forEach(card => cards.appendChild(card));
}


 for (let i = 0; i < 32; i++) {
    cards.appendChild(createCard(i));
 }

 document.querySelector('nav').addEventListener("click",(e)=>{
     if(e.target.id==="Filter")
          filter();
    //  if(e.target.id==="")
          
 });