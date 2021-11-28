const quotes = [
  {
    quote : "때론 기회를 놓치는 것이 기회일 수 있다.",
  },
  {
    quote : "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
  },
  {
    quote : '"지금이 최악"이라고 말할 힘이 있다면 아직은 최악이 아니다.',
  },
  {
    quote : "긴 인생은 충분히 좋지 않을 수도 있다. 그러나 좋은 인생은 충분히 길다.",
  },
  {
    quote : "사람들에게 시간은 공평하게 주어지지만 시간의 질이 똑같진 않다.",
  },
  {
    quote : "문제를 피하는 순간 그 문제는 너의 트라우마로 남을 것이다.",
  },
  {
    quote : "상대의 인생을 다 안다는 듯이 말하지 마라. 인생은 보기보다 깊다.",
  },
  {
    quote : "Dead is a moment.",
  },
  {
    quote : "No pain no gain.",
  },
  {
    quote : "Today never return again tomorrow.",
  },
]

const quoteEl = document.querySelector('#jsQuote span');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteEl.innerText = `Today's quote : ${todayQuote.quote}`;