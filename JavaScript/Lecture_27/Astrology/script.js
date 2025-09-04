// Names -> 12 size
const zodiacNames = [
  "Capricorn","Aquarius","Pisces","Aries","Taurus",
  "Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
];

// Symbols -> 2 size
const zodiacSymbols = [
  "♑","♒","♓","♈","♉",
  "♊","♋","♌","♍","♎","♏","♐"
];

// Elements  -> 12 sizes
const zodiacElements = [
  "Earth","Air","Water","Fire","Earth",
  "Air","Water","Fire","Earth","Air","Water","Fire"
];

// Modalities -> 12 sizes
const zodiacModalities = [
  "Cardinal","Fixed","Mutable","Cardinal","Fixed",
  "Mutable","Cardinal","Fixed","Mutable","Cardinal","Fixed","Mutable"
];

// Planets -> 12 sizes
const zodiacPlanets = [
  "Saturn","Uranus","Neptune","Mars","Venus",
  "Mercury","Moon","Sun","Mercury","Venus","Pluto","Jupiter"
];

// Traits-> 12 sizes
const zodiacTraits = [
  "Disciplined, practical, responsible",
  "Independent, innovative, humanitarian",
  "Empathetic, imaginative, sensitive",
  "Bold, energetic, assertive",
  "Steady, sensual, patient",
  "Curious, adaptable, communicative",
  "Nurturing, protective, emotional",
  "Confident, generous, theatrical",
  "Analytical, practical, detail-oriented",
  "Diplomatic, charming, balanced",
  "Intense, resourceful, secretive",
  "Adventurous, optimistic, philosophical"
];

// Love  -> 12 sizes
const zodiacLove = [
  "Loyal and cautious in love",
  "Values freedom and friendship",
  "Romantic and intuitive",
  "Passionate and direct",
  "Romantic and faithful",
  "Flirty and social",
  "Deeply caring and home-oriented",
  "Warm and dramatic",
  "Supportive and modest",
  "Seeks harmony and partnership",
  "Passionate and loyal",
  "Free-spirited and honest"
];

// Career -> 12 sizes
const zodiacCareers = [
  "Leadership, finance, management",
  "Tech, science, activism",
  "Arts, healing, creative fields",
  "Entrepreneurship, sports, leadership",
  "Finance, arts, design",
  "Media, communication, sales",
  "Care, hospitality, counseling",
  "Entertainment, leadership, creative",
  "Health, editing, tech",
  "Law, design, diplomacy",
  "Research, psychology, investigation",
  "Travel, education, publishing"
];

// Lucky Numbers -> 12 sizes
const zodiacLuckyNumbers = [
  [4,8],[4,7],[3,7],[1,9],[2,6],
  [5,7],[2,7],[1,3],[5,8],[6,9],
  [8,11],[3,9]
];

// Colors -> 12 sizes
const zodiacColors = [
  "Brown / Black","Electric blue","Sea green","Red","Green / Pink",
  "Yellow","Silver / White","Gold / Orange","Navy / Beige","Pastel blue / Pink",
  "Maroon / Black","Purple / Blue"
];

//pehele sbko pakad leta hu

const btn = document.getElementById('submitBtn');
let zodiacSym       = document.getElementById("zodiacSym");
let zodiacEle       = document.getElementById("zodiacEle");
let zodiacMod       = document.getElementById("zodiacMod");
let zodiacTrait     = document.getElementById("zodiacTrait");
let zodiacL         = document.getElementById("zodiacL");
let zodiacNam       = document.getElementById("zodiacNam");
let zodiacCar       = document.getElementById("zodiacCar");
let zodiacLuckyNum  = document.getElementById("zodiacLuckyNum");
let res = document.querySelector('.result');
// okay icon ko select krliya ab icon to month ke hisab se hi dunga

btn.addEventListener('click',(e)=>{

     let firstName = document.getElementById('fname').value.length;
     let lName = document.getElementById('lname').value.length;
     let dob = new Date(document.getElementById('dob').value);
     let month = dob.getMonth();
     let day = dob.getDate();
     let year = dob.getFullYear();
     zodiacNam.textContent = zodiacNames[month];
     zodiacSym.textContent = zodiacSymbols[months];
     zodiacMod.textContent = zodiacModalities[month];
     zodiacEle.textContent = zodiacElements[month];
     zodiacTrait.textContent = zodiacTraits[month];
     zodiacL.textContent = zodiacLove[month];
     zodiacCar.textContent = zodiacCareers[month];
     zodiacLuckyNum.textContent = zodiacLuckyNumbers[month];
     res.style.removeProperty("display");
});