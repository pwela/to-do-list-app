  
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


   




    
    
    
    
    
    
    
    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
    
    
    
    
    
    
    
    
      /*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */
    
    
    
    
    
    
    
    
    
    
    