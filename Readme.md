# The questions are answered below:

## Answer to the question no 1:

- ### getElementById():

  The element is selected according to the specified ID, if there are multiple IDs with the same name, the first element is displayed.

- ### getElementByClass():

  This allows to select multiple elements by class name. It returns an HTML Collection, which looks like an array.

- ### querySelector():

  Through this, We can select an element by any of the ID, Class, or Tag name. No matter which is selected, only the first element will be given according to the ID, CLass, and Tag Name.

- ### querySelectorAll():
  Through this, we get the matching elements of the CSS Selector in the form of a node, which is like an Array.

## Answer to the question no 2:

We create HTML element with document.createElement() and then add Content to an Element using .innerText , .innerHTML . To set Attribute we use .setAttribute("", "") . To insert DOM we add appendChild() at the end and prepend() at the beginning.

Example:

<script>
    const newPara = document.createElement("p");
    nawPara.textContent = "This is a new paragraph.";
    nawPara.className = "highlight";
    nawPara.setAttribute("id", "para1");
    document.getElementById("container").appendChild(nawPara);
  </script>

## Answer to the question no 3:

Event Bubbling is an event processing. For example, when a click occurs, it starts from the element where it first occurs, and then it goes up step by step from the parent to the root document.

How it works:

- When an event occurs on a child element, the event first goes to that element.
- It then propagates upwards along the DOM Tree.
- To stop this, stopPropagation() is not used.

## Answer to the question no 4:

Using event delegation, we attach an event listener to the parent element and can also handle events on child elements through event bubbling.

Necessity:

- Simplify and shorten code
- Performance increase
- Handaling dynamic content

## Answer to the question no 5:

#### preventDeafault():

It stops the default work. For example, we see its work in the case of forms. That is, preventDefault() is used to stop the default work.

#### stopPropagation()

Stops event bubbling.
