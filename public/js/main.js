DatosMenu()

  function DatosMenu(){
    var ObjMenu = document.getElementById("menu");
    var ajax;

    if(window.XMLHttpRequest){
      ajax = new XMLHttpRequest();
    }else{
      ajax = new ActiveXobject("Microsoft.XMLHTTP");
    }

    ajax.open("GET", "../data/nav.json", true);
    ajax.setRequestHeader("Content-type", "application/json", true);

    ajax.onreadystatechange = function(){
      if (ajax.readyState == 4 && ajax.status == 200) {
        var data = JSON.parse(ajax.responseText);
        ObjMenu.innerHTML = "";

        ShowMenu(ObjMenu,data);
        
      }
    };
    ajax.send();
    
  }

 


function ShowMenu(ObjMenu,data){

    if( typeof(data.items) !== 'undefined' ){

        for(var i in data.items){

            var NodeLi = document.createElement("li");           
            var NodeLink = document.createElement("a");            
            var InfoNodo = document.createTextNode(data.items[i].label);

            NodeLink.setAttribute("href", data.items[i].url);            
            NodeLink.appendChild(InfoNodo);
            NodeLi.appendChild(NodeLink);

            if(typeof(data.items[i].items) !== 'undefined') NodeLink.setAttribute("class", "but_principal");
            else NodeLink.setAttribute("class", "but_secundario");

            if( typeof(data.items[i].items) !== 'undefined'){
                if(data.items[i].items.length>0){
                    
                    NodeLink.setAttribute("class", "nav_desplegable"); 
                    NodeLink.setAttribute("onmouseover", "ShowSubMenu(event, this)"); 
                    //NodeLink.setAttribute("onmouseout", "ShowSubMenu(event, this)"); 
                    var NodeUl = document.createElement("ul");
                    NodeUl.setAttribute("class", "item_desplegable");
                    ShowMenu(NodeUl, data.items[i]);
                    NodeLi.appendChild( NodeUl);
                }                
            }

            ObjMenu.appendChild(NodeLi);
        }
    }
}
 
function ShowSubMenu(event, obj){
    event.preventDefault();
    var SubMenu = obj.nextSibling;
    var AllSubMenu = document.getElementsByClassName("item_desplegable");
    
    

    if( SubMenu.style.display == "flex"){
        SubMenu.style.display = "none";
        
    }else{
        
        for(var i in AllSubMenu) AllSubMenu.item(i).style.display = "none";
        SubMenu.style.display = "flex";
        
    }

}

  

/*


 call(ObjMenu,data);

 for(var i=0 ; i< data.items.length; i++){            
            var NodeLi = document.createElement("li");           
            var NodeLink = document.createElement("a");
            NodeLink.setAttribute("href", data.items[i].url);
            if(data.items[i].items.length != 0) NodeLink.setAttribute("class", "nav_desplegable");
            var InfoNodo = document.createTextNode(data.items[i].label);
            NodeLink.appendChild(InfoNodo);

            if(data.items[i].items.length != 0){

                var NodeUl = document.createElement("ul");
                for(var j = 0; j< data.items[i].items.length; j++){

                    var NodeLiSon = document.createElement("li");
                    var NodeLinkSon = document.createElement("a");
                    NodeLinkSon.setAttribute("href", data.items[i].items[j].url);
                    var InfoNodo2 = document.createTextNode(data.items[i].items[j].label);
                    NodeLinkSon.appendChild(InfoNodo2);
                    NodeLiSon.appendChild(NodeLinkSon);
                    NodeUl.appendChild(NodeLiSon);
                    
                }
                NodeLi.appendChild(NodeLink);
                ObjMenu.appendChild(NodeLi);
                NodeLi.appendChild( NodeUl);
                ObjMenu.appendChild(NodeLi);

            }else{
                NodeLi.appendChild(NodeLink);
                ObjMenu.appendChild(NodeLi);
            }            
        }





  $.each(data, function(i,item){
    var obj = i+1;
    $(".table-content").append('<tr id="iden-'+item.id_ubi+'"><td>'+obj+'</td>'+
                               '<td>'+item.id_ubi+'</td>'+
                               '<td class="nombre-ubi">'+item.nombre_ubi+'</td>'+
                               '<td><button type="button" onClick="cambiar('+item.id_ubi+')" class="btn btn-primary glyphicon glyphicon-pencil"></button></td>'+
                               '<td><button type="button" onClick="ver('+item.id_ubi+')" class="btn btn-warning glyphicon glyphicon-eye-open" data-toggle="modal" data-target="#myModal"></button></td>'+
                               '<td><button type="button" onClick="borrar('+item.id_ubi+')" class="btn btn-danger glyphicon glyphicon-remove"></button></td></tr>'
        );
});

*/