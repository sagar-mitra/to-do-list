const inputBox = document.querySelector("#input-box");
const taskList = document.querySelector("#task-list");



function addTask() {
    if(inputBox.value == ""){
        alert("You must enter something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add ("unchecked") //this is used to add classname 
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

taskList.addEventListener('click',(dets) => {
    if(dets.target.tagName === "LI") {
        dets.target.classList.toggle("checked");
        saveData();
    }
    else if(dets.target.tagName === "SPAN") {
        dets.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data");
}

showData();


// animation 

let aside = document.querySelector("aside")

let tl =  gsap.timeline();

tl.from(aside, {
    x:-390,
    duration: 1,
    delay: 1,
})

tl.from("#aside-upper", {
    x: -20,
    duration: 0.9,
    // stagger: 2,
    opacity: 0
})

tl.from("#aside-user img", {
    x: -20,
    duration: 0.6,
    opacity: 0
})

tl.from("#aside-user h3", {
    x: -20,
    duration: 0.6,
    opacity: 0
})

tl.from("hr", {
    x: -20,
    duration: 0.6,
    opacity: 0
})

tl.from("#aside-lower i", {
    x: -20,
    duration: 0.6,
    opacity: 0,
})

tl.from("#aside-lower h4", {
    x: -20,
    duration: 0.6,
    opacity: 0,
})

tl.from("#main-quote h3", {
    y: -20,
    duration: 0.6,
    opacity: 0,
})

tl.from("#main-quote h2", {
    y: -20,
    duration: 0.6,
    opacity: 0,
})

tl.from("#main-input", {
    y: -20,
    duration: 0.6,
    opacity: 0,
})

tl.from("#circle i", {
    x: -20,
    duration: 0.6,
    opacity: 0,
    stagger: 0.4
})

tl.from("#input-box", {
    x: -20,
    duration: 0.6,
    opacity: 0,
    
})

tl.from(".add", {
    
    duration: 0.6,
    opacity: 0,
    
})



