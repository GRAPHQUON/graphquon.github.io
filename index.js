/* CONFIG */
const cam_radius = 50; // radius of the sphere around which the camera rotates
const start_y_position = 5; // Note: The origin is the center of the window
const debug = false; // Set to true to enable orbit controls and to view the shadow map cameras

/* GET TEXT CONTENT FROM THE HTML */
let title = '';
let subtitles = [];
const canvasContainerEl = document.getElementById('canvas-container').childNodes.forEach((node) => {
    if (node.nodeName === 'H1') {
        title = node.textContent;
        node.remove();
    } else if (node.nodeName === 'H2') {
        subtitles.push(node.textContent);
        node.remove();
    }
});

/* UTILS */
function spherical_to_cartesian(theta, phi, r) {
    sin_phi = Math.sin(phi);
    return {
        z: sin_phi * Math.cos(theta) * r,
        y: Math.cos(phi) * r,
        x: sin_phi * Math.sin(theta) * r
    };
}

function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
};

function computeFov(aspect_ratio) {
    // Compute the vertical fov from a set horizontal fov using the window's aspect ratio
    // fovy = 2 * atan(tan(fovx / 2) / aspect_ratio)
    const fovx = 80 / 180 * Math.PI; // Convert degrees to radians
    return 2 * Math.atan(Math.tan(fovx / 2) / aspect_ratio) / Math.PI * 180;
}


/* BASIC THREE.JS SETUP */
const scene = new THREE.Scene();
const aspect_ratio = window.innerWidth / window.innerHeight;
const fovy = computeFov(aspect_ratio);
const camera = new THREE.PerspectiveCamera(fovy, aspect_ratio, 1, 10000); // fovy = 45
camera.position.z = cam_radius;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0xffffff, 0); // Transparent background
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight); // Fill the window
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Currently the orbit controls are just used as a way to automatically keep the camera 'lookat' position at the origin.
// But they are also useful for debugging (set controls.enabled to true)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enabled = debug;


/* BUILD THE BACKGROUND PLANE */
const planeGeometry = new THREE.PlaneBufferGeometry(1000, 1000, 32, 32);
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.7 }); // Render only the shadow! This allows keeping a transparent background that can be set using CSS
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.z = -1.2; // Positioned just behind the text
plane.receiveShadow = true;
scene.add(plane);


/* LIGHTING (with shadow map) */
const light = new THREE.DirectionalLight(0xffffff, 1.1);
light.position.set(-30, 30, 50);
light.castShadow = true;
scene.add(light);

light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 1024;
light.shadow.camera.top = 20;
light.shadow.camera.bottom = -10;
light.shadow.camera.left = 30;
light.shadow.camera.right = -30;

// Debug tools (useful to see if the shadow map camera is setup correctly):
if (debug) {
    const helper = new THREE.CameraHelper( light.shadow.camera );
    scene.add( helper );
}


/* TEXT MESHES */
// Use https://gero3.github.io/facetype.js/ to convert a font to the required json format
const loader = new THREE.FontLoader();
loader.load('res/Titillium_Bold.json', (title_font) => {
    loader.load('res/Lato_Regular.json', (subtitle_font) => {

        let previous_y_position = start_y_position;
        const text_material = new THREE.MeshLambertMaterial({ color: 0xecf0f1, emissive: 0xffffff, emissiveIntensity: 0.1 });

        // Title
        const title_geometry = new THREE.TextGeometry(title, {
            font: title_font,
            size: 7.5,
            height: 1.4,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.1,
            bevelOffset: 0,
            bevelSegments: 5
        });
        const title_mesh = new THREE.Mesh(title_geometry, text_material);
        title_mesh.castShadow = true;
        title_mesh.geometry.computeBoundingBox();
        title_size = title_mesh.geometry.boundingBox.getSize(new THREE.Vector2());
        title_mesh.position.x -= title_size.x / 2;
        title_mesh.position.y = previous_y_position;
        scene.add(title_mesh);

        // Subtitles
        previous_y_position = previous_y_position - title_size.y + 5.5;
        for(let subtitle of subtitles) {
            const subtitle_geometry = new THREE.TextGeometry(subtitle, {
                font: subtitle_font,
                size: 1 * (1920 / 937) / aspect_ratio, // scale for portrait-oriented screens
                height: 0.05,
                curveSegments: 12,
                bevelEnabled: false
            });
            const subtitle_mesh = new THREE.Mesh(subtitle_geometry, text_material);
            subtitle_mesh.geometry.computeBoundingBox();
            subtitle_size = subtitle_mesh.geometry.boundingBox.getSize(new THREE.Vector2());
            subtitle_mesh.position.x -= subtitle_size.x / 2;
            previous_y_position = previous_y_position - 0.5 - subtitle_size.y;
            subtitle_mesh.position.y = previous_y_position;
            subtitle_mesh.position.z = 2 + Math.random() - 0.5;
            scene.add(subtitle_mesh);
        }
    });
});

/* EVENT HANDLERS */
function handleMotion(x, y) {
    cam_pos = spherical_to_cartesian(x * 0.5, y * 0.7 + Math.PI / 2, cam_radius);
    camera.position.set(cam_pos.x, cam_pos.y, cam_pos.z);
    camera.updateProjectionMatrix();
}

document.addEventListener("mousemove", (e) => {
    const r_size = renderer.getSize(new THREE.Vector2());
    const x = clamp(e.clientX / r_size.x, 0, 1) - 0.5;
    const y = clamp(e.clientY / r_size.y, 0, 1) - 0.5;
    handleMotion(x, y)
});

// TODO: For mobile devices, detect tilt:
// window.addEventListener("deviceorientation", (e) => {
//     const x = clamp(e.alpha / 180, -1, 1) / 2;
//     const y = clamp(e.beta / 90, -1, 1) / 2;
//     handleMotion(x, y);
// });

window.addEventListener('resize', (e) => {
    const aspect_ratio = window.innerWidth / window.innerHeight;
    const fovy = computeFov(aspect_ratio);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.fov = fovy;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('scroll', (e) => {
    const scrollY = document.documentElement.scrollTop;
    const navEl = document.getElementById('nav-container');
    if (scrollY > window.innerHeight / 4) {
        navEl.classList.add('solid');
    } else {
        navEl.classList.remove('solid');
    }
});


/* RENDERING LOOP */
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
