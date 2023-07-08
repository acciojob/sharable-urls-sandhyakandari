const btn=document.getElementById("button");
let h3=document.getElementById("url");
console.log(h3);
btn.addEventListener('click',(e)=>{
    let form=document.getElementById("form");
    e.preventDefault();
     h3.innerHTML="https://localhost:8080/";
	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;
	if(name!="" && year!=""){
		h3.innerHTML+=`?name=${name}&year=${year}`
	}

	else if(name==""){
		h3.innerHTML+=`?year=${year}`
	}
    else{  h3.innerHTML+=`?name=${name}`

    }
    form.reset();
})