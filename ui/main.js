let button=document.getElementById('counter');
button.onclick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
                let count=request.responseText;
                let span=document.getElementById('count');
                span.innerHTML=count;
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://sugapriyam21.imad.hasura-app.io/counter');
    request.send(null);
};

//submit name
let nameInput=document.getElementById('name');
let name=nameInput.value;
let submit=document.getElementById('submit_btn');
submit.onclick=function(){
  //Make a request to the server and send the name
  //Capture a list of names and render it as a list
  let names=[name1,name2,name3];
  let list="";
  names.forEach(function(name){
      list+="<li>"+name+"</li>";
  });
  let ul=document.getElementById('namelist');
  ul.innerHTML=list;
};
