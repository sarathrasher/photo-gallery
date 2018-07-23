var images = [
    {caption: 'Sometimes life can get messy.', url: "images/messy-desk.png"},
    {caption: 'Initial layout for my plus quilt.', url: "images/plus-quilt.png"},
    {caption: 'Rare moment--a clean desk.', url: "images/ordered-desk.png"},
    {caption: 'The backbone of my warm-hearted quilt.', url: "images/heart-papers.png"},
    {caption: 'Fabric inspiration', url: "images/fabric.png"}
];

var container = document.querySelector('.image-list');

for (var image of images) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.url);
    newImage.classList.add('image');

    var caption = document.createElement('p');
    caption.textContent = image.caption;
    caption.classList.add('caption')

    var listItem = document.createElement('li');
    listItem.classList.add('image-post');

    var post = document.createElement('div');
    post.classList.add('post');

    listItem.appendChild(newImage);
    listItem.appendChild(caption);

    post.appendChild(listItem);

    container.appendChild(post);
}