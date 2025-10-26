let dragel = document.getElementById('drag');
let initialX = 0;
let initialY = 0;
let moveElement = false;

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice(); // Initialize deviceType

// Function to stop the movement
const stopMovement = (e) => {
    moveElement = false;
};

// Event listener to start the drag
dragel.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();

    initialX = deviceType === "mouse" ? e.clientX : e.touches[0].clientX;
    initialY = deviceType === "mouse" ? e.clientY : e.touches[0].clientY;
    moveElement = true;
});

// Event listener to handle dragging
dragel.addEventListener(events[deviceType].move, (e) => {
    if (moveElement) {
        e.preventDefault();

        let newX = deviceType === "mouse" ? e.clientX : e.touches[0].clientX;
        let newY = deviceType === "mouse" ? e.clientY : e.touches[0].clientY;

        dragel.style.top = dragel.offsetTop - (initialY - newY) + "px";
        dragel.style.left = dragel.offsetLeft - (initialX - newX) + "px";

        initialX = newX;
        initialY = newY;
    }
});

// Event listener to stop dragging when mouse or touch ends
dragel.addEventListener(events[deviceType].up, stopMovement);
dragel.addEventListener("mouseleave", stopMovement); // Mouse leave also stops dragging
