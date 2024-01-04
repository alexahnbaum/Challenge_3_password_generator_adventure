# Challenge 3: Password Generator Adventure

## Creating my first password generator

After a week of learning Javascript in my part-time coding boot camp, I was given a challenge assignment of making a password generator work when given certain input/criteria.  I was given starter code in HTML, CSS, and Javascript.  The index.html file opened to a website that contained a header, an empty text box, and a button to produce a randomly generated password.  Because the HTML and CSS files contained the code to produce this website, I only needed to change the Javascript starter code.  This challenge was extremely exciting for me as it was my first time writing Javascript.  I utilized the Javascript techniques I learned in my boot camp, including writing variables, functions, logical comparisons, if/else statements, for loops, event listeners, math formulas, and using alert, confirm, and prompt windows.

**Table of contents**
- [Motivation](#item-one)
- [What are the problems identified?](#item-two)
- [What are the solutions?](#item-three)
- [What was learned?](#item-four)
- [Usage](#item-five)
- [Credits](#item-six)
- [License](#item-seven)

___

<a id="item-one"></a>
### MOTIVATION ###

My motivation for making the password generator work was to see if I could implement the Javascript skills learned in my coding boot camp in the correct way.  I needed the password generator to take in user input through prompt and confirm windows, as well as to produce a password that held certain criteria.  These were:

- User input: 
   - user input a password length of 8-128 characters
   - user selects to include types of characters in password
      - lowercase letters
      - uppercase letters
      - numbers
      - special characters (!@#$%^&*()-+~{}[]<>?) 
- Password criteria:
   - prompt windows to ask for user input
   - confirm windows to confirm yes/no answers from the user
   - a randomly generated password that included only the types of characters the user confirmed in their yes/no answers and was the specific length the user input

 <a id="item-two"></a>
### WHAT ARE THE PROBLEMS IDENTIFIED? ###

Upon opening the Javascript starter code and looking at the error in the console, the main problem I identified was that there was a function generatePassword() that was in the variable password, however this function was not written anywhere.  That is, the function generatePassword() was expressed, but it was not declared anywhere in the Javascript starter code.  Therefore, the main problem involved declaring the function and including code that addressed all of the criteria necessary to produce a random password.

While coding this function in Javascript, a few problems that took the majority of my time to address were:
- understanding what windows to use: prompt, confirm and alert windows
- using if/else statements correctly
- using math formulas to produce random values
- how to get and use return values
- how to use event listeners

<a id="item-three"></a>
### WHAT ARE THE SOLUTIONS? ###

Through starting on pseudo-coding, I was able to break down what I needed to do to overcome my problems identified.  I wrote out pseudo-code in my Javascript starter code based on the acceptance criteria listed in the Challenge #3 README file.  This was about 5 lines of pseudo-code.  This helped me understand the broken down tasks I needed to complete in order to overcome the problem presented in the  Javascript starter code.  I addressed the following problems and came up with these solutions:

- Solution to understanding what windows to use: prompt, confirm and alert windows: The week 3 mini-project README file included links to mdn web docs about different types of windows to use in Javascript.  After trial and error, I determined which windows to use for the different types of user questions I wanted to ask.  

- Solution to using if/else statements correctly:  I went back to the recorded class sessions and re-watched the class that included conditional statements.  I also looked at the instruction and student lessons in the week 3 modules (lessons 9 and 10) to review what was done in class.  After some trial and error, I felt I had a better understanding of how to use conditional statements.  However, because I needed to use math formulas, in my conditional statements, I looked at online articles regarding this.  This leads me into my next solution.

- Solution to using math formulas to produce random values: In the README file of the week 3 mini-project, there was an included link to a mdn web doc about different ways to use math.  I found information on using math.random to randomize content in variables.  I also needed to read online articles about using math.random to get a better understanding of how to use this feature in Javascript.  After spending some time on this, I spent then set out to try using it in my Javascript starter code.  After some trial and error, I was able to use math.random in a math formula successfully.

- Solution of how to get and use return values: I knew that I needed to get and use the user information that was being recorded from all of the window prompts, but I did not know how to do this.  After some research, I found out how to use a return in Javascript correctly.  This was the last line of code I wrote in the generatePassword function.  Once I did this, I felt I had solved the main issue with the starter Javascript code.

- Solution of how to use event listeners: When I was done writing code for the generatePassword function, I came across a problem I had created in which the code within the generatePassword function would run upon loading the page.  I only wanted the code to run when the generate password button was pushed.  I thought the problem lied within the event listener that contained the "click" property.  I therefore spent some time reading online articles on using event listeners.  I tried implementing what I read into my starter code to solve the problem.  I hit a dead end and decided to schedule a tutor session through my boot camp.

   During my boot camp tutor session, my tutor was able to help me understand my problem.  The problem with my code loading immediately was that I had written the writePassword function in global space so it was "firing" immediately upon my page loading.  The tutor and I spent some time discussing global vs. local scope, event listeners, and how I could solve my problem.  It turned out, the main issues was that I simply needed to delete the writePassword function that I accidentally wrote in global scope space.  Upon fixing this issue, my code ran correctly and only ran when I pushed the generate password button. 

<a id="item-four"></a>
### WHAT WAS LEARNED? ###

Some of my big takeaways in what I learned through this challenge were functions, conditional statements, using math formulas, scope and event listeners.  I learned that functions can include a large portion of code.  It took me several hours to write all the code necessary for this function to work correctly.  I spent a good amount of trial and error time writing conditional statements.  I would say that I needed to spend some time to really think about the conditional statements I wanted to write and this was my biggest thing learned.  It helped me to think about what I wanted to my if/else statements to be before I wrote them.  This was a arduous, but also fun, process that I look forward to continuing to do.  I learned a couple of useful math formulas that I know I will use again.  After my tutor session, I had a better grasp on scope and what is used within global scope vs. local scope within a function.  Finally, I spent a some time learning about event listeners over the course of this challenge.  I feel I had a good understanding of how they are used, where they are written, and how useful they can be within Javascript.

<a id="item-five"></a>
### USAGE ###

The GitHub repository containing the HTML and CSS code that I edited can be found at the following [link](https://github.com/alexahnbaum/AlexAhnBaum-portfolio)

<a id="item-six"></a>
### CREDITS ###

During the course of this challenge, I worked with a tutor from my boot camp.  The tutor's name is Meg Meyers.  Ms. Meyers met with me on a zoom video conference call to support me with the problems I faced with regards to scope and even listeners 

I reviewed old classroom recordings from my boot camp.

I read online articles at the following websites:
- [MDN Web Docs - window:alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

- [MDN Web Docs - window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

- [MDN Web Docs - window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

- [MDN Web Docs - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- [MDN Web Docs - Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- [Stack Overflow - Generate random string/characters in Javascript](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript)

- [W3Schools - Javascript While Loop](https://www.w3schools.com/js/js_loop_while.asp)

- [HubSpot - How to Use the JavaScript onClick Event: A Step-by-Step Guide](https://blog.hubspot.com/website/javascript-onclick-event)


<a id="item-seven"></a>
### LICENSE ###

MIT License

Copyright (c) 2023 alexahnbaum

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.