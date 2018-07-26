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

var modal = document.getElementsByClassName('modal')[0];
var modalImage = document.getElementsByClassName('modal-image')[0];
var modalContent = document.getElementsByClassName('modal-content')[0];
var button = document.getElementsByClassName('close-button')[0];
var rightArrow = document.getElementsByClassName('right-arrow')[0];
var leftArrow = document.getElementsByClassName('left-arrow')[0];
var modalContent = document.getElementsByClassName('modal-content');

var currentIndex

var setSource = function (index) {
    modalImage.setAttribute('src', images[index].url);
}

for (var i = 0; i < images.length; i++) {
    (function(){
        var container = document.querySelector('.image-list');
        var index = i;

        var newImage = document.createElement('img');
        newImage.setAttribute('src', images[index].url);
        newImage.classList.add('image');
        
    
        var caption = document.createElement('p');
        caption.textContent = images[index].caption;
        caption.classList.add('caption', 'black-outline', 'pointer')
        
    
        var listItem = document.createElement('li');
        listItem.classList.add('image-post');
    
        var post = document.createElement('div');
        post.classList.add('post');
    
        listItem.appendChild(newImage);
        listItem.appendChild(caption);
    
        post.appendChild(listItem);
    
        container.appendChild(post);

        var handleClick = function handleClick(event) {
            modal.setAttribute('class', 'open modal');
            setSource(index);
            currentIndex = index;
        };
        caption.addEventListener('click', handleClick);
    })(); 
};

var handleClose = function (event) {
    if (event.target === button) {
        modal.setAttribute('class', 'modal');
    } else if (event.target != leftArrow && event.target != rightArrow) {
        modal.setAttribute('class', 'modal');
    } 
};

var handleRightArrow = function (event) {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setSource(currentIndex);
};

var handleLeftArrow = function (event) {
    if ( currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    setSource(currentIndex);
};

button.addEventListener('click', handleClose);
rightArrow.addEventListener('click', handleRightArrow); 
leftArrow.addEventListener('click', handleLeftArrow);
modal.addEventListener('click', handleClose);