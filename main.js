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

var modal = $('.modal');
var modalImage = $('.modal-image');
var modalContent = $('.modal-content');
var button = $('.close-button');
var rightArrow = $('.right-arrow');
var leftArrow = $('.left-arrow');
var modalContent = $('.modal-content');

var currentIndex

var setSource = function (index) {
    modalImage.attr('src', images[index].url);
}

images.forEach(function(image, i) {
    var container = $('.image-list');

    var newImage = $('<img>');
    newImage.attr('src', images[i].url);
    newImage.addClass('image');
    
    var caption = $('<p>');
    caption.text(images[i].caption);
    caption.addClass('caption black-outline pointer')
    
    var listItem = $('<li>');
    listItem.addClass('image-post');

    var post = $('<div>');
    post.addClass('post');

    listItem.append(newImage);
    listItem.append(caption);

    post.append(listItem);

    container.append(post);

    var handleClick = function handleClick(event) {
        modal.attr('class', 'open modal');
        setSource(i);
        currentIndex = i;
    };
    caption.on('click', handleClick);
}); 

var handleClose = function (event) {
    modal.removeClass('open'); 
};

var clickOnBackdrop = function (event) {
    if (event.target === modal[0]) {
        modal.removeClass('open');
    }  
};

var handleRightArrow = function () {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setSource(currentIndex);
    };

var handleLeftArrow = function () {
    if ( currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    setSource(currentIndex);
};

var handleKeyPress = function () {
    event.preventDefault();
    if (event.key === "ArrowLeft") {
        handleLeftArrow();
    } else if (event.key === "ArrowRight") {
        handleRightArrow();
    }
};

button.on('click', handleClose);
rightArrow.on('click', handleRightArrow);
leftArrow.on('click', handleLeftArrow);
$(window).on('keydown', handleKeyPress);
modal.on('click', clickOnBackdrop);