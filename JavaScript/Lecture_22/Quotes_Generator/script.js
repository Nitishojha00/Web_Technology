function solve()
{
    const quotes = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "Success is not for the lazy.",
  "Work while they sleep. Learn while they party. Live like they dream.",
  "Your limitation—it’s only your imagination.",
  "Push harder than yesterday if you want a different tomorrow.",
  "Failure is the opportunity to begin again more intelligently.",
  "Opportunities don't happen, you create them.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];
    let idx = Math.floor(Math.random()*quotes.length);
    const element = document.getElementById('box');
    element.style.fontSize = '30px';
    element.style.padding = '30px';
    element.style.fontWeight = 'bolder';
    console.log(element);
    element.innerHTML = quotes[idx];
}





const e = document.getElementById("button")
e.addEventListener('click',()=>
{
    solve();
})