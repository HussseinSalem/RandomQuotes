const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is never too late to be what you might have been. - George Eliot",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
    "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It always seems impossible until it is done. - Nelson Mandela",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "It is never too late to be what you might have been. - George Eliot",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
  ];
  
function generateQuote() {  
var quotesDiv = document.getElementById("quotes");
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quotesDiv.innerText = randomQuote

}

document.getElementById("button").addEventListener("click", generateQuote);








  