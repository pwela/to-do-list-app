  
   function  newItemjQuery(){

    // jQuery
    //1. Adding a new item to the list
     let li = $('<li></li>');
     let inputValue = $('#input').val();
     let text = document.createTextNode(inputValue);
     li.append(text);

     if(inputValue==='') { 
        alert('you must write something!');
     } else {
    
        let list = $('#list');
        list.append(li);
     }

     //2. Crossing out
     function crossOut(){
        li.toggleClass('strike');
     }

     li.on("dblclick", crossOut);

     // 3i Addindg delete button
     //let crossOutButton = document.createElement("crossOutButton");
     let crossOutButton = $('<crossOutButton></crossOutButton>');
     crossOutButton.append(document.createTextNode('X'));
     li.append(crossOutButton);
     

    crossOutButton.on("click", deleteListItem);

     //3ii deleting item
    function deleteListItem() {
        li.addClass('delete')
    }
    
    // 4. reordering items
    $('#list').sortable();

     }
