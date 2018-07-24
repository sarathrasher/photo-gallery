var images = [
    {caption: 'Quilting pattern idea for my plus quilt.', url: "images/plus-quilting-pattern.jpg"},
    {caption: 'Initial layout for my plus quilt.', url: "images/plus-quilt.png"},
    {caption: 'Sometimes life can get messy.', url: "images/messy-desk.png"},
    {caption: 'Rare moment--a clean desk.', url: "images/ordered-desk.png"},
    {caption: 'Newest addition to the crab-monster family', url: "images/crabbie-shirt.jpg"},
    {caption: 'Warm hearted quilting--shaping up', url: "images/hearts.jpg"},
    {caption: 'The backbone of my warm-hearted quilt.', url: "images/heart-papers.png"},
    {caption: 'Fabric inspiration', url: "images/fabric.png"},
    {caption: 'Feel the Bern', url: "images/bernie-pillow.jpg"},
    {caption: 'My new life motto', url: "images/sloth.jpg"},
    {caption: 'An ode to Yeezus', url: "images/kanye.jpg"},
    {caption: 'First embroidery project.', url: "images/fun.jpg"}
];

var container = document.querySelector('.image-list');

var background= document.getElementsByClassName('background')[0];
var modal = document.getElementsByClassName('modal')[0];
var modalImage = document.getElementsByClassName('modal-image')[0];
var modalContent = document.getElementsByClassName('modal-content')[0];
var button = document.getElementsByClassName('close-button')[0];
var rightArrow = document.getElementsByClassName('right-arrow')[0];
var leftArrow = document.getElementsByClassName('left-arrow')[0];

var setSource = function (index) {
    modalImage.setAttribute('src', images[index].url);
}
var index = null

var handleClick = function (event) {
    index = event.target.id;
    button.addEventListener('click', handleClose);
    modal.setAttribute('class', 'open modal');
    rightArrow.addEventListener('click', handleRightArrow); 
    leftArrow.addEventListener('click', handleLeftArrow);
    setSource(index);
};

var handleClose = function (event) {
    modal.setAttribute('class', 'modal');
}

var handleRightArrow = function (event) {
    if (index === images.length - 1) {
        index = 0;
    } else {
        index--;
    }
    setSource(index);

};

var handleLeftArrow = function (event) {
    if (index === 0) {
        index = images.length - 1;
    } else {
        index++;
    }
    setSource(index);
};


for (var i = 0; i < images.length; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', images[i].url);
    newImage.classList.add('image');
    

    var caption = document.createElement('p');
    caption.textContent = images[i].caption;
    caption.classList.add('caption')
    caption.id = i;
    caption.addEventListener('click', handleClick);

    var listItem = document.createElement('li');
    listItem.classList.add('image-post');

    var post = document.createElement('div');
    post.classList.add('post');

    listItem.appendChild(newImage);
    listItem.appendChild(caption);

    post.appendChild(listItem);

    container.appendChild(post);
}





