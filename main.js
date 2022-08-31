let btns = document.querySelectorAll(".btn")

let playerOut = document.getElementById("playerOut")
let compOut = document.getElementById("compOut")

let player = document.querySelector(".player")
let comp = document.querySelector(".comp")

let options = ["Rock","Paper","Scissor"]

function play(choice){
				
								player.choose = choice;
								playerOut.innerText = player.choose
								
								let rand = Math.floor(Math.random()*3)
							
								comp.choose = options[rand]
								compOut.innerText=comp.choose
	
								chkWin()
}


function chkWin(){
				if (comp.choose === player.choose) {
								alert("draw")
				}else if (player.choose === "Rock"){
								if (comp.choose === "Scissor") {
												alert("Player Win")
								}else {
												alert("Comp Win")
								}
				}else if (player.choose === "Scissor") {
								if (comp.choose === "Paper") {
												alert("Player Win")
								}else {
												alert("Comp Win")
								}
				}else if (player.choose === "Paper") {
								if (comp.choose === "Rock") {
												alert("Player Win")
								}else {
								alert("Comp Win")
								}
				}
}

btns.forEach((btn)=>{

				btn.choice = btn.innerText
				
				btn.addEventListener("click" , ()=>{
								play(btn.choice);
				})												
})