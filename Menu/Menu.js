let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.
  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
  
*/
let menu = createMenu(menuItems);
console.log(menu);
let body = document.querySelector('body');
body.appendChild(menu);


function createMenu(itemArray){
  //set up new elements
  const menuDiv = document.createElement('div');
  const ul = document.createElement('ul');

  //add class list
  menuDiv.classList.add('menu');
  //append item
  itemArray.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  });

  menuDiv.appendChild(ul);

  let button = document.querySelector('.menu-button');
  button.addEventListener('click', event=>{
    menuDiv.classList.toggle('menu--open');
  })

  return menuDiv;
}

