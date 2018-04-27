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
    request.open('GET','https;//imad.hasura-app.io/counter');
};