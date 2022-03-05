
var valider=false;
var validerID=false;
var validerCGU=false;
var validerMDP=false;
var validerMDPVerif=false;
var validerAge=false;
var validerInfo= false;



window.addEventListener('load', function(){
    fVerif();
    
});

function validation(){
    var button =document.getElementById("button")
    if (validerID && validerCGU && validerMDP && validerMDPVerif && validerAge && validerInfo){
        valider = true;
    } else valider = false;
    if (button){
        if (valider===true){
            button.disabled=false;
        }else {
            button.disabled=true;
    }}
}



function  fVerif(idInput){
    var prenom = document.getElementById('prenom');
    var nom = document.getElementById('nom');
    if((nom) && (prenom)) {
        validerInfo=true;
        validation();
    }else{
        validerInfo=false;
        validation();
    }
    identifiant = document.getElementById('identifiant');
    if (identifiant)
        identifiant.addEventListener('input', function(){
            check_id();
            validation();
        });
    var CGU = document.getElementById('CGU');
    if (CGU){
        CGU.addEventListener('input',function(){
            
            if (CGU.checked){
                validerCGU=true;
                validation();
            }else{
                validerCGU=false;
            }
        })
    }
    var mdp = document.getElementById('motdepasse');
    if (mdp)
        mdp.addEventListener('input', function(event){
            check_mdp();
            validation();
        });
    var mdpverif= document.getElementById('mdpverif');
    if (mdpverif && mdp)
        mdpverif.addEventListener('input', function(event){
            check_mdpverif(mdp);
            validation();
        });
    var age = document.getElementById('age');
    if (age)
        age.addEventListener('input', function(event){
            check_age();
            validation();
        });
    

}







function check_id(){
    let nonlettre=/[^a-zA-Z]/
    var nonvalider= document.getElementById("idverif")
    
    if (nonlettre.test(identifiant.value)){
        validerID= false;
        nonvalider.innerHTML='il ne doit y avoir que des lettres dans votre id';

    } else if (identifiant.value.length>12){
        validerID= false;
        nonvalider.innerHTML="votre identifiant doit faire moins de 12 lettres";
    }
    else {
        validerID = true ;
        nonvalider.innerHTML=' ';
    };
}

function check_age(){
    var nonvalider=document.getElementById("ageverif");
    if (age.value>=18){
        validerAge=true;
        nonvalider.innerHTML=" ";
    }else {
        validerAge=false;
        
        nonvalider.innerHTML="vous devez avoir plus de 18 ans";
    } 
}


function check_mdp(){
    var compte=0;
    var nonvalider= document.getElementById("mdp");
    let majuscule = /[A-Z]/;
    let minuscule= /[a-z]/;
    let nombre = /[0-9]/;
    let special = /[^a-zA-Z0-9]/;
    var mdp= document.getElementById("motdepasse");
    if (mdp){
    if (majuscule.test(mdp.value))
        compte+=20;
      
    if (minuscule.test(mdp.value)){
        compte+=20;
    }   
    if (nombre.test(mdp.value))
        compte+=20;
          
    if (special.test(mdp.value))
        compte+=20;
          
    if (mdp.value.length>=8)
        compte+=20;
          
    nonvalider.innerHTML="sécurité "+compte+"% (doit être 100%)";
    if (compte=100){
        validerMDP=true;
    }else {
        validerMDP=false;
    }}
    
}

function check_mdpverif(mdp){
    var nonvalider = document.getElementById("doublemdp");
    if (mdp.value===mdpverif.value){
        validerMDPVerif=true;
        nonvalider.innerHTML="";
    } else {
        validerMDPVerif=false;
        nonvalider.innerHTML="les deux mots de passes doivent être identiques";
        console.log(mdp.value);
        console.log(mdpverif.value);
    }
}
