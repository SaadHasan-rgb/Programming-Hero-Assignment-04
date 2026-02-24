1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById grabs one element by it's id. getElementByClassName grabs element by it's class name. And querySelector gets the first element that matches CSS selector and querySelectorAll gets all the elements that matches CSS selectors.

2. How do you create and insert a new element into the DOM?

Answer: At frist, I will create an element with document.createElement() . Then I will add text, classes or attributes. After that I will pick a parent element and insert my new element using append() or appendChild().

3. What is Event Bubbling? And how does it work?

Answer: Event bubbling is when an event on an element also triggers the same event on its parent elements, going up to the DOM. When an event like click happens on an element, it first runs on that element then the event moves up to the DOM triggering the same event on its parent elements this is how it works.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is when a parent element listens for events on its children instead of adding separate listeners to each child. It’s useful because it reduces listeners, works for new elements and improves performance.

5. What is the difference between preventDefault() and stopPropagation()?

Answer: preventDefault() stops the browser’s default action for an event. As like following a link. stopPropagation() stops the event from bubbling up to it's parent elements.