/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
function toggleHighlight() {
  var element = document.getElementById("toggle-highlight");
  element.classList.toggle("highlight");
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  let data = ["apple", "banana", "orange"];
  
      let list = document.getElementById("myList");
  
      data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });
}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  var texto = textarea.value;
  var long = texto.length;
  if (long > 140) {
    textarea.setAttribute('aria-invalid', true);
  } 
  else{
    textarea.setAttribute('aria-invalid', false);
  }
  console.log(long)
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons(number) {
  // your code here
  var text=document.getElementById(number);
  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden");
    
  } else {
    text.classList.add("hidden");
  }
}

