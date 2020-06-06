function fetchData(){
// fetch API data

	fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
	.then(response => response.json())
	.then(data => {
	  //console.log(data); 
	  //console.log(data[1]);
	  // We use a function to append the data pulled from the fetch
	  appendProfile(data);
	  //appendProfile(data);
	  //appendProfile(data);
	})
	.catch(error => console.error(error))
	}

	//Function to format information from the API
	function appendProfile(data){
		var tprofile = document.getElementById('teammembers_profile');
		//to make sure the div is clean so we can show the data everytime the button is clicked without it duplicating
		tprofile.innerHTML="";
		// for each employee
		for (var key in data) {
		  if (data.hasOwnProperty(key)) {
			var tmember = data[key];
			//console.log(tmember);
			//console.log(tmember.employeeisfeatured);
			var profileDiv = document.createElement('div');
			profileDiv.className = 'em_profile';
			var featuredDiv = document.createElement('div');
			featuredDiv.id = 'featured';
			var featuredP = document.createElement('p');
			featuredP.id = 'f_hidden';
			var employeeImgDiv = document.createElement('div');
			employeeImgDiv.id = 'employeeimg';
			var employeeImg = document.createElement('img');
			employeeImg.src = 'http://sandbox.bittsdevelopment.com/code1/employeepics/' + tmember.employeeid + '.jpg';
			var nameDiv = document.createElement('div');
			nameDiv.id = 'em_name';
			var bioDiv = document.createElement('div');
			bioDiv.id = 'em_bio';
			var rolesDiv = document.createElement('div');
			rolesDiv.id = 'em_roles';
			
			featuredP.innerHTML = tmember.employeeisfeatured;
			nameDiv.innerHTML = tmember.employeefname + " " + tmember.employeelname;
			bioDiv.innerHTML = tmember.employeebio;

			//To be able to show the roles the employee has we have to access the object array
			for (var key in tmember.roles) {
				if (tmember.roles.hasOwnProperty(key)) {
					var emroles = tmember.roles[key];
					//console.log(emroles);
					var roleSpan = document.createElement('span');
					roleSpan.className = 'em_role';
					roleSpan.style = 'background-color:' + emroles.rolecolor + ';';
					
					roleSpan.innerHTML = emroles.rolename;
		
					rolesDiv.appendChild(roleSpan);
				}
			}
			
			//We put all the information together and append it to the existing div in our HTML
			tprofile.appendChild(profileDiv);
			featuredDiv.appendChild(featuredP);
			profileDiv.appendChild(featuredDiv);
			employeeImgDiv.appendChild(employeeImg);
			profileDiv.appendChild(employeeImgDiv);
			profileDiv.appendChild(nameDiv);
			profileDiv.appendChild(bioDiv);
			profileDiv.appendChild(rolesDiv);
			
			
			//If employee has a 1 as value in their employeeisfeatured, they'll have a crown
			if (tmember.employeeisfeatured == 1){
				//console.log(tmember.employeeisfeatured);
				featured.innerHTML = "<img src=\"https://hotemoji.com/images/emoji/5/1x0qwry1xodau5.png\">";
			}
		}
}
}

// create buttons to filter each role, when clicked only the team members with that role show up.
fetch('http://sandbox.bittsdevelopment.com/code1/fetchroles.php ')
.then(response => response.json())
.then(data => {
	//console.log(data); 
	//We show all the roles that are in the API and format them as buttons
	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			var roles = data[key];
			var troles = document.getElementById('teamroles_btns');
			var roleBtn = document.createElement('button');
				roleBtn.id = 'roleBtn_' + roles.rolename;
				roleBtn.style = 'background-color:' + roles.rolecolor + ';';
					roleBtn.innerHTML = roles.rolename;
					troles.appendChild(roleBtn);
						

		}
	}
	// we assign variables to the role buttons so that we can give them a function
	var codingBtn = document.getElementById('roleBtn_Coding');
	var commBtn = document.getElementById('roleBtn_Communications');
	var eatingBtn = document.getElementById('roleBtn_Eating');
	var writingBtn = document.getElementById('roleBtn_Writing');
	var gamingBtn = document.getElementById('roleBtn_Gaming');

		codingBtn.onclick = codingFetch;
		commBtn.onclick = commFetch;
		eatingBtn.onclick = eatingFetch;
		writingBtn.onclick = writingFetch;
		gamingBtn.onclick = gamingFetch;
		
		// use one fuction for all buttons changing id value, was not able to get it to work
		/*
		function codingFetch(id) {
			fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php?roles=' + id)
			.then(response => response.json())
			.then(data => {
				//console.log(id)
				appendProfile(data);
			})
			.catch(error => console.error(error))							
		}
		*/
})
.catch(error => console.error(error))

	//we create functions so that when a role button is clicked only the employees with that role show
	function codingFetch() {
		fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php?roles=1')
		.then(response => response.json())
		.then(data => {
		  appendProfile(data);
		})
		.catch(error => console.error(error))							
	}
	function commFetch() {
		fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php?roles=2')
		.then(response => response.json())
		.then(data => {
		  appendProfile(data);
		})
		.catch(error => console.error(error))							
	}
	function eatingFetch() {
		fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php?roles=3')
		.then(response => response.json())
		.then(data => {
		  appendProfile(data);
		})
		.catch(error => console.error(error))							
	}
	function writingFetch() {
		fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php?roles=5')
		.then(response => response.json())
		.then(data => {
		  appendProfile(data);
		})
		.catch(error => console.error(error))							
	}
	function gamingFetch() {
		fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php?roles=6')
		.then(response => response.json())
		.then(data => {
		  appendProfile(data);
		})
		.catch(error => console.error(error))
	}