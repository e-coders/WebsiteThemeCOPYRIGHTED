search = document.querySelector("#search-field");
c = new URL(window.location.href);
if(c.searchParams.has("search") && c.searchParams.get("search") != ""){
	f = c.searchParams.get('search');
	search.value = f;
	if(f === "Results"){
		addResult("You are on a secret!","SECRET","Searching 'Results' will show you these 3 results. No other will show!");
		addResult("Title","Category","Description");
		addResult("Edit or add more results","RESULTS","Go to assets/js/search-page.js line 7 or 8 or 9 and use the addResult function to add more results.");
		document.querySelector("#alert-no-results").remove();
	}
	else{
		document.querySelector("#search-results").remove();
	}
}
else{
	window.location.href = "index.html";
}

h = document.querySelector("#search-title");
h.innerHTML = "Search Results for '" + f + "'";


// Sample for a Result:
`
<div class="col-md-6 col-lg-4 item"><div class="box"><h3 class="name">Title</h3><p class="title">Category</p><p class="description">Description</p></div></div>
`

function addResult(title,category,desc){
	g = document.querySelector("#search-results");
	g.innerHTML += `<div class="col-md-6 col-lg-4 item"><div class="box"><h3 class="name">` + title + `</h3><p class="title">` + category + `</p><p class="description">` + desc + `</p></div></div>`;
}


