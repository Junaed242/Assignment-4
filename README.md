 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 Answer: Below shows the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll.

 getElementById: Finds one specific element by its unique ID.

 getElementsByClassName: Finds all elements with a certain class.

 querySelector: Uses CSS selectors to find the first match.

 querySelectorAll: Uses CSS selectors to find all matches.

2. How do you create and insert a new element into the DOM?
Answer: first i will create the element using document.createElement() and then insert it into a specific location in the existing DOM structure using method like appendChild(), append, insertAdjacentHTML().

3.  What is Event Bubbling? And how does it work?

Answer: Event Bubbling means the order in which event handlers are executed when one element is nested inside another. When an event like click happens on an element, it first runs the handlers on that specific element, then moves to its parent then further up the tree and to the document object.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is a design pattern in JavaScript for handling events efficiently. It means adding single event listener to a parent element rather than attaching listeners to each of its child elements.

its useful because it makes the code cleaner, optimizes performance, better handling.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: event.preventDefault() stops the browser's default action for an event. stopPropagation() prevents the event from bubbling up the DOM tree.
