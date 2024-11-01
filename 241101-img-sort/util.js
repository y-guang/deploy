
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function random_two_positions() {
    // Generate first random angle between 0-360 degrees
    const angle1 = Math.floor(Math.random() * 360);

    // Generate second angle that's exactly 90-270 degrees clockwise from first angle
    const offsetAngle = Math.floor(Math.random() * 120) + 120; // Random angle between 90-270 degrees
    const angle2 = (angle1 + offsetAngle) % 360;

    // Distance from center point (in viewport units)
    const vh = window.innerHeight / 100;
    const vw = window.innerWidth / 100;
    const vmin = Math.min(vh, vw);
    const distance = 25 * vmin;

    // Convert polar coordinates to viewport coordinates (center is at 50vw, 50vh)
    const x1 = distance * Math.cos(angle1 * Math.PI / 180) + 50 * vw;
    const y1 = distance * Math.sin(angle1 * Math.PI / 180) + 50 * vh;
    const x2 = distance * Math.cos(angle2 * Math.PI / 180) + 50 * vw;
    const y2 = distance * Math.sin(angle2 * Math.PI / 180) + 50 * vh;

    return [x1, y1, x2, y2];
}

function getElementCenter(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX + rect.width / 2,
        y: rect.top + window.scrollY + rect.height / 2
    };
}
