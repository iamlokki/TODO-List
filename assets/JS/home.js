var toggleArray = [];

function toggleFunction(id){
    if(id in toggleArray){
        removeItem('id',toggleArray);
        console.log(toggleArray);
        return;
    }

    toggleArray.push(id);
    console.log(toggleArray);
    return;
};