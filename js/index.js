document.querySelector("#button").addEventListener("click", sendData)
// button.addEventListener('click')

let questions = {
    "Question One": document.getElementById("QuestionOne"),
    "Question Two": document.getElementById("QuestionTwo"),
    "Question Three": document.getElementById("QuestionThree"),
    "Question Four": document.getElementById("QuestionFour"),
    "Question Five": document.getElementById("QuestionFive"),
}

async function sendData(){
// Making the form a way of an object
    try{
        const response = await fetch(`/result?QuestionOne=${questions["Question One"].value}&QuestionTwo=${questions["Question Two"].value}&QuestionThree=${questions["Question Three"].value}&QuestionFour=${questions["Question Four"].value}&QuestionFive=${questions["Question Five"].value}`);

        if(!response.ok){
            throw new Error("An error")
        }
        const data = await response.json();
        document.getElementById('nameHere').innerHTML = data.one;
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

