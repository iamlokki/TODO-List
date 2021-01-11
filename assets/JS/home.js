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

var category = document.getElementsByClassName("category-text");
console.log(category);

for(let i of category){
    let p_id = i.getAttribute('id');
    
    let div_id = p_id.split('-')[0];
    
    div_id += '-div';
    console.log(div_id);
    console.log(i.innerText);

    if(i.innerText === "personal"){
        document.getElementById(`${div_id}`).style.backgroundColor = "#fab73c";
    }

    else if(i.innerText === "work"){
        document.getElementById(`${div_id}`).style.backgroundColor = "#783778";
    }

    else if(i.innerText === "school"){
        document.getElementById(`${div_id}`).style.backgroundColor = "lightgreen";
    }

    else if(i.innerText === "cleaning"){
        document.getElementById(`${div_id}`).style.backgroundColor = "#2ea72e";
    }

    else{
        document.getElementById(`${div_id}`).style.backgroundColor = "white";
    }
   }