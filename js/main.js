alert(4);
$(document).ready(function(){
  console.log(1);
  $.get('https://jsonplaceholder.typicode.com/todos/1', data, function() {
     console.log(data);
  });
});
