function renderForID(id) {
    var params = {
        container: document.getElementById(id),
        renderer: 'html',
        loop: false,
        autoplay: true,
        animationData: getAnimationData(),
    };
    lottie.loadAnimation(params);
}
renderForID('squiggle');
renderForID('squiggle2');
