let string="";
let buttons =document.querySelectorAll("#buttonStyle");
Array.from(buttons).forEach((button)=>
{
	button.addEventListener('click', (e)=>{
		if(e.target.innerHTML== '=')
		{
			
			
			string = "Ans="+ eval(string) ;
			
			document.querySelector('input').value=string;
			document.querySelector('input').style.textAlign='center';
			
			
		}
		else if(e.target.innerHTML=="C")
		{
			string="";
			document.querySelector("input").value=string;
			document.querySelector('input').style.textAlign='right';
		}
		else
		{
			console.log(e.target)
			string =string +e.target.innerHTML;
			document.querySelector('input').value =string;
			document.querySelector('input').style.textAlign='right';
		}
	})
})

