//All features
const popup = document.querySelector('.chat_popup');
const chatBtn = document.querySelector('.chat_btn');
const chatClosBtn = document.querySelector('.close_chat_btn');
const chatRoom = document.querySelector('.chat_room');
const answerField = document.querySelector('.answerField');
const answerSubmit = document.querySelector('.answerSubmit_btn');
/**
chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})
**/
//chat popup by toggle when chat_btn clicked
chatBtn.addEventListener('click', chatPopup)
function chatPopup(){
	popup.classList.add('show');
}
//chat close when close button clicked
chatClosBtn.addEventListener('click', chatDown)
function chatDown(){
	popup.classList.remove('show');
}
//when there is text button becomes usable*/
answerField.addEventListener('keyup',chatbtnState)
function chatbtnState(){
	let answer = answerField.value.trim();
	if(answer !== ''){
		answerSubmit.disabled = false;
		console.log(answerField.value);
	}else{
		answerSubmit.disabled = true;
	}
}

answerSubmit.addEventListener('click', sendMsg);
function sendMsg(){
 let userInput = answerField.value;

 let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    </div>`;
 if(answerField.value === ''){
   answerField.placeholder = "Please type a question."
 } else{
   chatRoom.insertAdjacentHTML("beforeend", temp);
   answerField.value = '';
 } 
}