    var params = {
        container: document.getElementById('squiggle'),
        renderer: 'html',
        loop: false,
        autoplay: true,
        animationData: getAnimationData(),
    };
    const runAnimation = () => lottie.loadAnimation(params);
    runAnimation();
    setTimeout(runAnimation, 4500);