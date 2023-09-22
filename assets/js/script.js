function showForm(display){
    changeVisibility("form", display);
    changeVisibility("social", !display);
}

function changeVisibility(elementType, display){
    let div = document.getElementById(elementType);
    let link = document.getElementById("use-"+elementType);

    if (display){
        show(div);
        hide(link);
    }else{
        hide(div);
        show(link);
    }
}

function hide(element){
    element.classList.add("hide");
    setTimeout(()=>{
        element.classList.remove("active");
    }, 250);
}

function show(element){
    setTimeout(()=>{
        element.classList.add("active");
        element.classList.remove("hide");
    }, 250);
}

function showSkills(tag){
    document.getElementById('first-level').style.display='none';
    document.getElementById('second-level').style.display='flex';
    document.getElementById(tag).style.display='flex';
}

function showSkillsMenu(){
    document.getElementById('second-level').style.display='none';
    document.getElementById('first-level').style.display='flex';

    let elements = document.getElementsByClassName("sub-list");
    for (const element of elements) {
        element.style.display = 'none';
    }
}