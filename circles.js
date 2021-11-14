let heading = document.createElement('h1');
$(heading).text("Hover on the circles")
let wrapper = $('.wrapper');
wrapper.append(heading);

let circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    circle.addEventListener('mouseover', (e) => {
        let circleTarget = e.target
        let circleVal = parseInt(circleTarget.innerText);
        for (let i = 0; i < circleVal; i++) {
            circles[i].style.backgroundColor = "yellow";
        }
    });
    circle.addEventListener('mouseout', (e) => {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "white";
        }
    });
});