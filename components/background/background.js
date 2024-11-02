import { LitElement, html, css } from 'https://unpkg.com/lit@2.2.7?module';
import 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
import 'https://threejs.org/examples/js/loaders/FBXLoader.js';

class PiranhaAnimation extends LitElement {
    static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100vw;
      height: 100vh;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;

    constructor() {
        super();
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.piranha = null;
        this.animationId = null;
    }

    firstUpdated() {
        this.initThreeJS();
    }

    async initThreeJS() {
        // Create Scene
        this.scene = new THREE.Scene();

        // Create Camera
        this.camera = new THREE.PerspectiveCamera(75, this.clientWidth / this.clientHeight, 0.1, 1000);
        this.camera.position.set(0, 1, 5);

        // Create Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.renderRoot.querySelector('#bg-canvas'),
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(this.clientWidth, this.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Load Piranha Model using fetch and createObjectURL
        const fbxUrl = await this.loadFBXModel('./components/background/source/piranha.fbx');
        const loader = new THREE.FBXLoader();
        loader.load(fbxUrl, (object) => {
            this.piranha = object;
            this.piranha.scale.set(0.05, 0.05, 0.05);
            this.scene.add(this.piranha);

            // Apply textures using fetch
            this.applyTextures();
        });

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        this.scene.add(directionalLight);

        // Handle Window Resize
        window.addEventListener('resize', this.onWindowResize.bind(this), false);

        // Start Animation
        this.animate();
    }

    async loadFBXModel(url) {
        // Fetch the model as a Blob and convert it to an Object URL
        const response = await fetch(url);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    async loadTexture(url) {
        // Fetch the texture as a Blob and convert it to an Object URL
        const response = await fetch(url);
        const blob = await response.blob();
        return new THREE.TextureLoader().load(URL.createObjectURL(blob));
    }

    async applyTextures() {
        const textureMap = await this.loadTexture('./components/background/textures/pir_Colourc.jpg');
        const normalMap = await this.loadTexture('./components/background/textures/pir_Bump.jpg');
        const specularMap = await this.loadTexture('./components/background/textures/pir_Spec.jpg');
        const roughnessMap = await this.loadTexture('./components/background/textures/pir_occ.jpg');

        // Traverse through piranha model and apply textures
        this.piranha.traverse((child) => {
            if (child.isMesh) {
                child.material.map = textureMap;
                child.material.normalMap = normalMap;
                child.material.specularMap = specularMap;
                child.material.roughnessMap = roughnessMap;
            }
        });
    }

    animate() {
        this.animationId = requestAnimationFrame(this.animate.bind(this));

        // Piranha swimming motion
        if (this.piranha) {
            this.piranha.rotation.y += 0.01;
            this.piranha.position.x = Math.sin(Date.now() * 0.001) * 2;
            this.piranha.position.y = Math.sin(Date.now() * 0.0005) * 0.5;
        }

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = this.clientWidth / this.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.clientWidth, this.clientHeight);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
        window.removeEventListener('resize', this.onWindowResize.bind(this));
    }

    render() {
        return html`<canvas id="bg-canvas"></canvas>`;
    }
}

customElements.define('piranha-animation', PiranhaAnimation);