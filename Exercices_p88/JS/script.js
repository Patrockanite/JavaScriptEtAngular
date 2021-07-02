// Pour attendre le fin du chargement du document
document.addEventListener('DOMContentLoaded',function(event){
    

    let contenu = document.getElementById("main-content");
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = document.createElement('p');

    para1.innerHTML=maxDe2Nombres(3,21);
    para2.innerHTML=maxDe2Nombres(12,6);
    para3.innerHTML=maxDe2Nombres(36,36);

    

    function maxDe2Nombres(a,b){
        if(a && b){
            if (a>b){
                return(a + " est supérieur à " + b + "<br>"); //ne pas utiliser document.write() qui écrase ce qui est déjà sur le document !!!
            }
            else{
                return(b>a ? b + " est supérieur à " + a + "<br>" : a + " et " + b + " sont égaux<br>");
            }
        }
        else{
            alert("Vous n'avez pas entré les nombres correctement");
        }
    }
    
    contenu.appendChild(para1);
    contenu.appendChild(para2);
    contenu.appendChild(para3);

});
