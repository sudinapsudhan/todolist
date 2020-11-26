function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
       var response = JSON.parse(this.responseText);
    
       var output="<table>";
       for(var i=0;i<response.length;i++){
       output+= "<tr><td><input  type=checkbox id=mycheck  name=check  onclick=return myfunction()>"+response[i].title +"</tr></td>";
        
    }
    document.getElementById("demo").innerHTML=output;
    }
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}