"use srict"

window.onload = function() {
   // Array of quiz questions
   var catquiz = {
     title: "Which of my cats are you?",

     questions: [{
       catq: "What is your natural state?",

         options: [
           {
            text: "Cool",
            value: "1"
         },
         {
           text: "Tense",
           value: "4"
         },
         {
           text: "Flirty",
           value: "2"
         },
         {
           text: "Terrified",
           value: "3"
         }
       ]
   },

     {
       catq: "What is your favourite activity?",

         options: [{
           text: "Scratching",
           value: "4"
         },
         {
           text: "Eating",
           value: "3"
         },
         {
           text: "Talking",
           value: "1"
         },
         {
           text: "Attempting to spray",
           value: "2"
         }
       ]
   },

     {
       catq: "There's a party going on - where are you?",

         options: [{
           text: "In the heart of the action",
           value: "1"
         },
         {
           text: "Strutting my stuff",
           value: "2"
         },
         {
           text: "Hiding under the bed",
           value: "4"
         },
         {
           text: "In the corner, scratching",
           value: "3"
         },
       ]
     },

     {
       catq: "How do you feel about food?",

         options: [{
           text: "OMG it's the best",
           value: "3"
         },
         {
           text: "Meh, it's okay - I'll probably eat a little and leave the rest",
           value: "2"
         },
         {
           text: "I eat as though every meal is my last",
           value: "4"
         },
         {
           text: "I prefer talking about food to eating it",
           value: "1"
         },
       ]
     },

     {
       catq: "If you weren't a cat you would be a...",

         options: [{
           text: "Rabbit",
           value: "3"
         },
         {
           text: "Dog",
           value: "1"
         },
         {
           text: "Squirrel monkey",
           value: "2"
         },
         {
           text: "Pig",
           value: "4"
         },
       ]
     },

     {
       catq: "Someone tries to buy you a present - how do you react?",

         options: [{
           text: "Of course. Everyone loves me. Why wouldn't they buy me a present?",
           value: "2"
         },
         {
           text: "It's a trap. This person is trying to lull me into a false sense of security before harming me",
           value: "3"
         },
         {
           text: "I love a gifty",
           value: "1"
         },
         {
           text: "I'll be running away now",
           value: "4"
         },
       ]
     },

     {
       catq: "Where do you prefer to sleep?",

         options: [{
           text: "In the middle of the bed",
           value: "2"
         },
         {
           text: "In a sunbeam",
           value: "1"
         },
         {
           text: "I sleep standing up",
           value: "3"
         },
         {
           text: "In the most uncomfortable and heavily camouflaged space I can find",
           value: "4"
         },
       ]
     },

     {
       catq: "A new piece of furniture arrives in your front room - what do you do?",

         options: [{
           text: "I investigate",
           value: "2"
         },
         {
           text: "I am cautious, but still a little curious",
           value: "3"
         },
         {
           text: "It could be a trap. I'll watch how this plays out from a safe distance",
           value: "4"
         },
         {
           text: "I try to spray it",
           value: "1"
         },
       ]
     },

     {
       catq: "How do you feel about loud noises?",

         options: [{
           text: "Loud noises are the worst! I'm out of here",
           value: "1"
         },
         {
           text: "Meh. I guess I don't like them, but I can cope",
           value: "4"
         },
       ]
     },

     {
       catq: "A stranger wants to be your friend. How easy will they find this?",

         options: [{
           text: "I give my love freely to anyone. I am a total feline floozy",
           value: "1"
         },
         {
           text: "You have to work hard for my love, but it's very rewarding once you have it",
           value: "4"
         },
       ]
     },

     {
       catq: "How are you most likely to react when you're being affectionate?",

         options: [{
           text: "I pad and make a pleasing noise",
           value: "4"
         },
         {
           text: "I dribble on myself",
           value: "1"
         },
       ]
     },

    {
      catq: "What is your overall take on life?",

        options: [{
          text: "Life is a wild ride, but I take it all in my stride",
          value: "1"
        },
        {
          text: "Life is a series of potential traps and terrors. I just can't even handle it right now",
          value: "4"
        },
      ]
    },
   ]
  };

  var app = new Vue({
      el: '#feline',
      data: {
        whiskers: catquiz,
        spotIndex: 0,
        paws: Array(),
        emptyPaw: '',
        message: '',
        mode: 0,
        yourCat: ''
      },
      methods: {
        // Forward and back functions
        jumpFwd: function() {
          // Has the question been answered?
          if(this.paws.length == this.spotIndex) {
            this.message = "Please choose an answer...";
          }
          else {
            this.message = "";
            this.spotIndex++;
            console.log("Answers: " + this.paws);
          }
        },
        slinkBack: function() {
          this.message = "";
          this.spotIndex--;
        },
      },
      computed: {
        // Find the mode
        commonHousehold: function() {
          catCount = 0;
          catMode = 0;
            for(i=0; i<this.paws.length; i++) {
              tempEl = this.paws[i];
              tempCt = 0;
              for(j=0; j<this.paws.length; j++)
                if(this.paws[j] == tempEl)
                  tempCt++;
                if(tempCt>catCount) {
                  catMode = tempEl;
                  catCount = tempCt;
                }
            }
            this.mode = catMode;
            if(this.mode == 1|| this.mode == 2) {
              this.yourCat = 'kip';
            }
            else {
              this.yourCat = 'peg';
            }
        }
      },
  })
};
