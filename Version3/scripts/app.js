new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,   
    scrollOverflow: true,
    onLeave: (origin, destination, direction) => {

        // Grabs the section number (1,2,3) of the current section that we have just scrolled passed
        const section = destination.item;

        // Grabs the h1 title for the section that we have just scrolled passed
        const title = section.querySelector('h1');
        const subtitle = section.querySelector('h3');
        const description = document.querySelectorAll('.project-description');
        const projectImg = document.querySelectorAll('.project-imgs');

        const tl = new TimelineMax({delay: 0.3});


        // Animates title (h1) of each section to make it slide-up into view
        
        
        if (destination.index > 0){
            tl.fromTo(title, 0.25, {x: '50', opacity: 0}, {x: 0, opacity: 1});
        }

        tl.fromTo(projectImg, 0.35, {x: '-50', opacity: 0}, {x: 0, opacity: 1})
        .fromTo(subtitle, 0.35, {x: '-50', opacity: 0}, {x: 0, opacity: 1}, "+=0.02")
        .fromTo(description, 0.35, {x: '-50', opacity: 0}, {x: 0, opacity: 1}, "+=0.02")


    }

    

});