async function search(){

    let query=document.getElementById("searchBox").value;


    let response=await fetch("/search",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            query:query
        })

    });


    let results=await response.json();


    let output="";


    if(results.length===0){

        output="<h4>No results found</h4>";

    }


    results.forEach(item=>{

        output+=`

        <div class="result-card">

        <h3>${item.title}</h3>

        <p>${item.description}</p>

        <a href="${item.url}" target="_blank">
        Visit Result
        </a>

        </div>

        `;

    });


    document.getElementById("results").innerHTML=output;

}