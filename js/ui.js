// Describe our HTML container
var streamHTML = $('#stream')[0];

function renderStream(stream)
{
	// Calculate the size of our stream
	storyCount = stream.length;

	for (var i = 0; i< storyCount; i++){
		processStory(stream[i]);
	}

}


function processStory(story){

	var storyDiv = createDiv('story', '');

	var userDiv = createDiv('userDiv',''),
		userNameLink = linkUser(story.from);
		userDiv.appendChild(userNameLink);

		if (story.to != undefined){
			var toNameLink = linkUser(story.to.data[0]);
			userDiv.innerHTML += ' &gt; ';
			userDiv.appendChild(toNameLink);
		}

		storyDiv.appendChild(userDiv);

	var storyText = (	story.message || 
						story.description ||
						story.story || 
						story.caption || 
						story.name || '');

		storyText = storyText.split(/\r\n|\r|\n/).join('<br/>');
	var storyText = createDiv('storyText', storyText);
		storyDiv.appendChild(storyText);

	if (story.picture != undefined)
	{
		storyDiv.setAttribute('class', 'story hasAttachment');

		var image = (story.picture || ''),
			imageDiv = createDiv('imageDiv', createImg(image));

		if (story.link == undefined){
			storyDiv.appendChild(imageDiv);
		}else{
			var a = document.createElement('a');
			a.setAttribute('href', (story.link || '#'));
			a.setAttribute('target', '_blank');
			a.appendChild(imageDiv);
			storyDiv.appendChild(a);
		}	
		
	}
	
	/*
	if (story.link != undefined){
		var link = (story.link || ''),
			linkEl = createLink('Link', link);
		storyDiv.appendChild(linkEl);
	}
	*/
	
	streamHTML.appendChild(storyDiv);

}

function linkUser(user){
	var userName = user.name,
		userProfile = 'https://www.facebook.com/'+user.id,
		userNameLink = createLink(userName, userProfile);

	return userNameLink;
}

function createLink(text, url){
	var a = document.createElement('a');
	a.setAttribute('href', url);
	a.setAttribute('target', '_blank');
	a.innerHTML = text;
	return a;
}

function createDiv(classs, content){
	var div = document.createElement('div');
	div.setAttribute('class', classs);
	div.innerHTML = content;
	return div;
}

function createImg(src){
	return '<img src="' + src + '" />';
}

function addbutton(){
	var button = document.createElement('div');
	button.innerHTML = 'Login with Facebook';
	button.setAttribute('class', 'login');
	button.setAttribute('onclick','login();');
	streamHTML.innerHTML = '';

	var section = document.createElement('section');
	section.appendChild(button);
	streamHTML.appendChild(section);
}

function loading(){
	var div = document.createElement('div');
	div.setAttribute('class','alert hidden');
	div.innerHTML = 'Loading your Facebook';
	document.body.appendChild(div);
	setTimeout("$('.alert').removeClass('hidden')", 400);
}

function doneloading(){
	$('.alert').addClass('hidden');
}