
 let quotes = [
  "Jim is gone. He's gone. I miss him so much. Ooooh I cry myself to sleep, Jim! False. I do not miss him.",
  "Would I ever leave this company? Look, I’m all about loyalty. In fact, I feel like part of what I’m being paid for here is my loyalty. But if there were somewhere else that valued loyalty more highly… I’m going wherever they value loyalty the most.",
  "I am fast. To give you a reference point I am somewhere between a snake and a mongoose… And a panther.",
  "Security in this office park is a joke. Last year I came to work with my spud-gun in a duffel bag. I sat at my desk all day with a rifle that shoots potatoes at 60 pounds per square inch. Can you imagine if I was deranged?",
  "I grew up on a farm. I have seen animals having sex in every position imaginable. Goat on chicken. Chicken on goat. Couple of chickens doing a goat, couple of pigs watching.",
  "Through concentration, I can raise and lower my cholesterol at will.",
  "Right now, this is just a job. If I advance any higher in this company, then this would be my career. And, well, if this were my career? I'd have to throw myself in front of a train.",
  "Am I going to tell them? No, I am not going to tell them. I don't see the point of that. As a doctor, you would not tell a patient if they had cancer.",
  "Wikipedia Is The Best Thing Ever. Anyone In The World Can Write Anything They Want About Any Subject, So You Know You Are Getting The Best Possible Information.",
  "Saddle Shoes With Denim? I Will Literally Call Protective Services.",
  "Hate To See You Leave But Love To Watch You Go. ‘Cause Of Your Butt.",
  "I Wonder What People Like About Me? Probably My Jugs.",
  "Right Now This Is Just A Job. If I Advance Any Higher In This Company, Then This Would Be My Career. And Well, If This Were My Career I’d Have To Throw Myself In Front Of A Train.",
  "Bears. Beets. Battlestar Galactica.",
  "Through Concentration, I Can Raise And Lower My Cholesterol At Will.",
  "I Love Inside Jokes. Love To Be A Part Of One Someday.",
  "I Wish There Was A Way To Know You’re In The Good Old Days, Before You’ve Actually Left Them.",
  "Sometimes I’ll Start A Sentence And I Don’t Even Know Where It’s Going. I Just Hope I Find It Along The Way.",
  "How Would I Describe Myself? Three Words. Hard-working. Alpha Male. Jackhammer. Merciless. Insatiable.",
  "It’s Never Too Early For Ice-Cream, Jim.",
  "Why Are All These People Here? There Are Too Many People On This Earth. We Need A New Plague.",
  "Andy Bernard Does Not Lose Contests. He Wins Them… Or He Quits Them Because They Are Unfair.",
  "You Couldn’t Handle My Undivided Attention.",
  "That’s What She Said!",
  "Welcome to the Hotel Hell. Check-in time in now, check-out time is never.",
  "I'm the owner.. the co-owner. With Satan!",
  "I'm not gaining anything from this seminar. I'm a professional woman. The head of accounting. I'm in the healthiest relationship of my life. I just think it's insulting that Jan thinks we need this. And, apparently, judging from her outfit, Jan aspires to be a whore.",
  "Poop is raining from the ceilings. Poop!",
  "Stanley yelled at me today. That was one of the most frightening experiences of my life.",
  "Yes, it is true. I, Michael Scott, am signing up with an online dating service. Thousands of people have done it, and I am going to do it. I need a username. And... I have a great one [types]. Little kid lover. That way, people will know exactly where my priorities are at.",
  "It's not that children make me uncomfortable, it's just that, why be a dad when you can be a fun uncle? I've never heard of anyone rebelling against their fun uncle.",
  "The Japanese camp guards of World War II always chose one man to kill whenever a batch of new prisoners arrived. I always wondered how they chose the man who was to die. I think I would have been good at choosing the person.",
    "Close your eyes. Picture a convict. What's he wearing? Nothing special, baseball cap on backwards, baggy pants... he says something ordinary like... 'yo, thats shizzle.' Okay. Now slowly open your eyes again. Who are you picturing? A black man? Wrong. That was a white woman. Surprised? Well, shame on you."
]

function newQuote() {
let randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
