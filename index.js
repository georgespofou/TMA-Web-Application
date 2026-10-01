// Dom loading alert
function showDataPrivacyModal() {
  alert("Loaded!");
}
// initial page
function initialState() {
  //all bodies cards
  const cardTma01 = document.querySelector("#tm252-25b-tma01-body");
  const cardTma03 = document.querySelector("#m269-24j-tma03-body");
  const cardTma02 = document.querySelector("#tm252-25b-tma02-body");
  // all buttons of the cards
  const Btn_Tma02 = document.getElementById("hideBtn");
  const Btn_Tma03 = document.getElementById("btn_m269");
  const Btn_Tma01 = document.getElementById("btn_tm252");
  //changing the state of the card tm252-25b-tma01-body
  if (cardTma01 !== null) {
    cardTma01.classList.remove("d-none");
    cardTma01.classList.add("d-block");
    // changing the button display names
    Btn_Tma01.ariaExpanded = "true";
    Btn_Tma01.innerHTML = "Hide details";
  }
  //changing the state of the card m269-24j-tma03-body
  if (cardTma03 !== null) {
    cardTma03.classList.remove("d-none");
    cardTma03.classList.add("d-block");
    // changing the button display names
    Btn_Tma03.ariaExpanded = "true";
    Btn_Tma03.innerHTML = "Hide details";
  }
  // changing the state of the card tm252-25b-tma02-body
  if (cardTma02 !== null) {
    cardTma02.classList.remove("d-block");
    cardTma02.classList.add("d-none");
    // changing the button display names
    Btn_Tma02.ariaExpanded = "false";
    Btn_Tma02.innerHTML = "Show details";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  showDataPrivacyModal();
  initialState();
  
});
//toggle Btn_Tma01 button
document.addEventListener("DOMContentLoaded", () => {
  const Btn_Tma01 = document.getElementById("btn_tm252");

  if (Btn_Tma01 !== null) {
    Btn_Tma01.addEventListener("click", () => {
      const cardTma01 = document.querySelector("#tm252-25b-tma01-body");

      if (cardTma01 !== null) {
        //checking and modify the card body ccs attribute
        if (cardTma01.classList.contains("d-block")) {
          cardTma01.classList.remove("d-block");
          cardTma01.classList.add("d-none");
          //changing the button attribute and html content
          Btn_Tma01.setAttribute("ariaExpanded", "false");
          Btn_Tma01.innerHTML = " Show details";
        } else {
          cardTma01.classList.remove("d-none");
          cardTma01.classList.add("d-block");
          Btn_Tma01.setAttribute("ariaExpanded", "true");
          Btn_Tma01.innerHTML = " Hide details";
          loadFeedback()
        }
      }
    });
  }
});
//toggle Btn_Tma03 button
document.addEventListener("DOMContentLoaded", () => {
  const Btn_Tma03 = document.getElementById("btn_m269");

  if (Btn_Tma03 !== null) {
    Btn_Tma03.addEventListener("click", () => {
      const cardTma03 = document.querySelector("#m269-24j-tma03-body");

      if (cardTma03 !== null) {
        //checking and modify the card body ccs attribute
        if (cardTma03.classList.contains("d-block")) {
          cardTma03.classList.remove("d-block");
          cardTma03.classList.add("d-none");
          //changing the button attribute and html content
          Btn_Tma03.setAttribute("ariaExpanded", "false");
          Btn_Tma03.innerHTML = " Show details";
        } else {
          cardTma03.classList.remove("d-none");
          cardTma03.classList.add("d-block");
          Btn_Tma03.setAttribute("ariaExpanded", "true");
          Btn_Tma03.innerHTML = " Hide details";
        }
      }
    });
  }
});
//toggle Btn_Tma02 button
document.addEventListener("DOMContentLoaded", () => {
  const Btn_Tma02 = document.getElementById("hideBtn");

  if (Btn_Tma02 !== null) {
    Btn_Tma02.addEventListener("click", () => {
      const cardTma02 = document.querySelector("#tm252-25b-tma02-body");

      if (cardTma02 !== null) {
        //checking and modify the card body ccs attribute
        if (cardTma02.classList.contains("d-none")) {
          cardTma02.classList.remove("d-none");
          cardTma02.classList.add("d-block");
          //changing the button attribute and html content
          Btn_Tma02.setAttribute("ariaExpanded", "true");
          Btn_Tma02.innerHTML = " Hide details";
        } else {
          cardTma02.classList.remove("d-block");
          cardTma02.classList.add("d-none");
          Btn_Tma02.setAttribute("ariaExpanded", "false");
          Btn_Tma02.innerHTML = " Show details";
        }
      }
    });
  }
  
});
// This function is fetching the feedback but we have 2 issues:
// 1-that the response status is 404
//2-Each time user click on the show details,the feedback content keep added.
async function loadFeedback() {
    const response = await fetch("./api/feedback");
    const data = await response.text();
    console.log(data);
 const fBoxes = document.querySelectorAll(".role-feedback");
 for(const fBox of fBoxes){

        const para = document.createElement("p");
        para.innerHTML =  data;
        fBox.appendChild(para);
        // this is just for texting (line 145)
        fBox.style.background ="red";    
  } 
}
//This is th fetch the Q&A 
 async function loadingQa() {

    const response =await fetch("./api/q-and-a");
    const data = await response.json();
    console.log(data);
     const DL = document.querySelector(".role-existing-q-and-a");
    for(const item of data){
         //const DL = document.querySelector(".role-existing-q-and-a");
         const Question = document.createElement("dt");
         Question.innerHTML = item.question;
         const Answer = document.createElement("dd");
         Answer.innerHTML = item.answer;
            DL.appendChild(Question);
            DL.appendChild(Answer);
    } 
 }
   //sending  q & a function
// todo: recheck the below code
   async function sendQaForm(event){
    event.preventDefault();
    const formData = new FormData(ev.target);
    await fetch("/api/q-and-a", {
    method: "POST",
    body: formData,
});
  const response = await fetch("/api/search");
  const data = await response.text();
}
  document.addEventListener("DOMContentLoaded",()=>
    {document.querySelector(".d-block w-100").addEventListener("submit",sendQaForm )});
    

   

   
   
 