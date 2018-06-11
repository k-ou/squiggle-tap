function renderForID(id) {
    var params = {
        container: document.getElementById(id),
        renderer: 'html',
        loop: false,
        autoplay: true,
        animationData: getAnimationData(),
    };
    bodymovin.loadAnimation(params);
};


let i = 0;
function getID() {
    return i++;
}

width = 3000;

function getStyle(x, y) {
  return `width: ${width}; left: ${x}px; top: ${y}px;`;
}

function onClick(event) {
    const id = 'squiggle_' + getID();
    const style = getStyle(event.pageX - width / 2, event.pageY - width / 10);
    const element = `<div class="squiggle" id="${id}" style="${style}" />`; 
    $('body').append(element);
    renderForID(id);
}

$(document).ready(function(){
  $('body').click(onClick);
});
