/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/***
 Global variables have been assigned that will store DOM elements needed to be referenced and/or
 manipulated throughout the document. 
 ***/

const studentList = document.querySelectorAll('.student-item');
let itemsPerPage = 10;

console.log = (studentList)

  
// A `showPage` function has been created that will hide all of the list items  besides the neededn to be shown.

const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

      for(let i = 0; i <list.length; i++) {
         if (i >= startIndex && i < endIndex) {
            list[i].style.display ="block";
      }  else {
            list[i].style.display ="none";
      }
      
    }
      
   } 
        
/*** 
   An `appendPageLinks function` was created that generates, appends, and adds 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
    let maxPages = Math.ceil(list.length/itemsPerPage);

    const div = document.createElement("div");
      div.className = 'pagination';
      document.querySelector('.page').appendChild(div);

    const ul = document.createElement('ul');
      div.appendChild(ul);

    for (let i = 1; i <= maxPages; i++) {
      let li = document.createElement ('li');
      let a = document.createElement ('a');
      a.href = '#';
      a.textContent = i;

      if (i == 1) {
        a.className = 'active';
      }
      ul.appendChild (li);
      li.appendChild (a);
    }

    ul.addEventListener ('click', (event) => {
        const links = event.target;
        let number = event.target.textContent;
        
        showPage (studentList, number);
      
        let allLinks = document.querySelectorAll ('a');
          for (let x = 0; x < allLinks.length; x++) {
              allLinks[x].className ='none';
          }
          links.className = 'active';
    });
}

showPage(studentList, 1);
appendPageLinks(studentList);

// FIN 