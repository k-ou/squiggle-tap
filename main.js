function renderForID(id) {
    var params = {
        container: document.getElementById(id),
        renderer: 'html',
        loop: false,
        autoplay: true,
        animationData: getAnimationData(),
    };
    lottie.loadAnimation(params);
};


let i = 0;
function getID() {
    return i++;
}

function getStyle(x, y) {
  return `left: ${x}px; top: ${y}px;`;
}

function onClick(event) {
    width = 200;
    const id = 'squiggle_' + getID();
    const style = getStyle(event.pageX - width / 2, event.pageY - width / 4);
    const element = `<div class="squiggle" id="${id}" style="${style}" />`; 
    $('body').append(element);
    renderForID(id);
}

$(document).ready(function(){
  $('body').click(onClick);
});
