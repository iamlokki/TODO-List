//  multiple section using checkbox by adding id's in an aray 

var toggleArray = [];

function toggleFunction(id){
    if(!toggleArray.includes(id)){
        toggleArray.push(id);
        console.log(toggleArray);
    }
    else{
        toggleArray = toggleArray.filter(ele=>ele!==id);
        console.log(toggleArray);
    }
    
};

// setting up delteing content query url

function deleteFunction(){
    let url="delete-todo/?length=" + toggleArray.length;
    for(let i=0; i<toggleArray.length; i++){
        url = url + "&"+ i + "=" + toggleArray.i;
    }
    console.log(url);
    location.replace(url);
}

// changeing category color 

var category = document.getElementsByClassName("category-text").innertext;
console.log(category);

for(i in category){
    if(i.innertext == "personal"){
        document.getElementById('list-item-2').style.backgroundColor = "orange";
    }

    else if(i.innertext == "work"){
        document.getElementById('list-item-2').style.backgroundColor = "purple";
    }

    else if(i.innertext == "school"){
        document.getElementById('list-item-2').style.backgroundColor = "lightgreen";
    }

    else if(i.innertext == "cleaning"){
        document.getElementById('list-item-2').style.backgroundColor = "lime";
    }

    else{
        document.getElementById('list-item-2').style.backgroundColor = "white";
    }
   }