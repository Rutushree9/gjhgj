/*to add item in a list*/
var add=document.querySelector("button");
var textinput=document.querySelector("input");
var input=document.querySelector("input[type='text']");


//to find todays date
function calender(){
	var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
	var d=new Date();
	setText('calender-day',day[d.getDay()]);
	setText('calender-date',d.getDate());
	setText('calender-month-year',month[d.getMonth()]+'<br> '+(1900+d.getYear()));
};

function setText(id,val)
{
	if(val< 10)
	{
		val='0' + val;
	}
	document.getElementById(id).innerHTML=val;
};

//call calender
window.onload=calender;

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



//to insert data
add.addEventListener("click",function(){
	  textinput.style.display="block";
});


input.onkeypress=(function(evt){
	if(evt.which == 13)
	{
		var Todo=document.createElement("LI");
		var TodoText=document.createTextNode(this.value);
		Todo.appendChild(TodoText);
		document.getElementById("list").appendChild(Todo);
	}
})





