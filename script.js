// Import Three.js (ensure the library is linked in your index.html)
const scene = new THREE.Scene(); // Create a scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Set up the camera

const renderer = new THREE.WebGLRenderer(); // Create a renderer
renderer.setSize(window.innerWidth, window.innerHeight); // Set the renderer size to match the window
document.body.appendChild(renderer.domElement); // Append the renderer to the DOM

// Create cube geometry and apply textures
const geometry = new THREE.BoxGeometry(); // Create a cube
const textureLoader = new THREE.TextureLoader(); // Load textures

// Load the textures for each face of the cube
const texture1 = textureLoader.load('textures/texture1.jpg'); // Replace with your texture paths
const texture2 = textureLoader.load('textures/texture2.jpg');
const texture3 = textureLoader.load('textures/texture3.jpg');
const texture4 = textureLoader.load('textures/texture4.jpg');

const materials = [
    new THREE.MeshBasicMaterial({ map: texture1 }), // Front face
    new THREE.MeshBasicMaterial({ map: texture2 }), // Back face
    new THREE.MeshBasicMaterial({ map: texture3 }), // Top face
    new THREE.MeshBasicMaterial({ map: texture4 }), // Bottom face
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // Left face (default white)
    new THREE.MeshBasicMaterial({ color: 0xffffff })  // Right face (default white)
];

const cube = new THREE.Mesh(geometry, materials); // Combine geometry and materials into a mesh
scene.add(cube); // Add the cube to the scene

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1); // Create a directional light
light.position.set(10, 10, 10).normalize(); // Set the position of the light
scene.add(light); // Add the light to the scene

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate); // Request the next frame
    cube.rotation.x += 0.01; // Rotate the cube on the x-axis
    cube.rotation.y += 0.01; // Rotate the cube on the y-axis
    renderer.render(scene, camera); // Render the scene from the perspective of the camera
}
animate(); // Start the animation

// Add rotation control with arrow keys
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft': // Rotate left
            cube.rotation.y -= 0.1;
            break;
        case 'ArrowRight': // Rotate right
            cube.rotation.y += 0.1;
            break;
        case 'ArrowUp': // Rotate up
            cube.rotation.x -= 0.1;
            break;
        case 'ArrowDown': // Rotate down
            cube.rotation.x += 0.1;
            break;
    }
});

