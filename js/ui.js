function renderStream(stream)
{
	// Describe our HTML container
	var streamHTML = $('#stream')[0];

	// Calculate the size of our stream
	storyCount = stream.length;

	// Fetch any text attributes of a story
	story = _.pluck(stream, 'story');
	caption = _.pluck(stream, 'caption');

	// Fetch all links associated with stories
	links = _.pluck(stream, 'link');

	// Fetch all graphic resources associated with stories
	picture = _.pluck(stream, 'picture');
	icon = _.pluck(stream, 'icon');

	for (var i = 0; i< storyCount; i++){

		var storyDiv = document.createElement('div');

		var storyText = document.createElement('div');
			storyText.innerHTML = (story[i] || '');
			storyText.setAttribute('class', 'storyText');
			storyDiv.appendChild(storyText);

		var captionText = document.createElement('div');
			captionText.innerHTML = (caption[i] || '');
			captionText.setAttribute('class', 'captionText');
			storyDiv.appendChild(captionText);

		var link = document.createElement('a');
			link.innerHTML = (links[i] || '#');
			link.setAttribute('href', links[i]);
			storyDiv.appendChild(link);

		var pictureDiv = document.createElement('div');
		var pictureImg = document.createElement('img');
			pictureImg.setAttribute('src', (picture[i] || ''));
			pictureDiv.setAttribute('class', 'storyPicture');
			pictureDiv.appendChild(pictureImg);

		var iconImg = document.createElement('img');
			iconImg.setAttribute('src', (icon[i] || ''));
			iconImg.setAttribute('class', 'storyIcon');
			storyDiv.appendChild(iconImg);

		streamHTML.appendChild(storyDiv);
	}

}