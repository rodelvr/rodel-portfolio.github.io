import { Component, createRef } from "preact";
import { h } from "preact";
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';

interface ThreeJSComponentProps {}

interface ThreeJSComponentState {
    stats: Stats | null;
    camera: THREE.OrthographicCamera | null;
    scene: THREE.Scene | null;
    raycaster: THREE.Raycaster | null;
    renderer: THREE.WebGLRenderer | null;
    pointer: THREE.Vector2;
    radius: number;
    frustumSize: number;
}

class ThreeJSComponent extends Component<ThreeJSComponentProps, ThreeJSComponentState> {
    private containerRef = createRef<HTMLDivElement>();
    private theta: number = 0;
    private INTERSECTED: THREE.Mesh | null = null;

    constructor(props: ThreeJSComponentProps) {
        super(props);
        this.state = {
            stats: null,
            camera: null,
            scene: null,
            raycaster: null,
            renderer: null,
            pointer: new THREE.Vector2(),
            radius: 25,
            frustumSize: 50
        };
    }

    componentDidMount() {
        const { pointer, radius, frustumSize } = this.state;

        const aspect = window.innerWidth / window.innerHeight;
        const camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 0.1, 100);
        camera.position.z = 25;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);

        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        const geometry = new THREE.BoxGeometry();

        for (let i = 0; i < 2000; i++) {
            const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));
            object.position.x = Math.random() * 40 - 20;
            object.position.y = Math.random() * 40 - 20;
            object.position.z = Math.random() * 40 - 20;
            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;
            object.scale.x = Math.random() + 0.5;
            object.scale.y = Math.random() + 0.5;
            object.scale.z = Math.random() + 0.5;
            scene.add(object);
        }

        const raycaster = new THREE.Raycaster();

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth * 0.25, window.innerHeight * 0.25);

        if (this.containerRef.current) {
            this.containerRef.current.appendChild(renderer.domElement);
        }

        const stats = new Stats();
        document.body.appendChild(stats.dom);

        this.setState({
            stats,
            camera,
            scene,
            raycaster,
            renderer
        });

        document.addEventListener('pointermove', this.onPointerMove);
        window.addEventListener('resize', this.onWindowResize);
        renderer.setAnimationLoop(this.animate);
    }

    componentWillUnmount() {
        const { stats, renderer } = this.state;
        if (stats) document.body.removeChild(stats.dom);
        document.removeEventListener('pointermove', this.onPointerMove);
        window.removeEventListener('resize', this.onWindowResize);
        if (renderer) renderer.setAnimationLoop(null);
    }

    onWindowResize = () => {
        const { camera, renderer } = this.state;
        const aspect = window.innerWidth / window.innerHeight;
        if (camera) {
            camera.left = -this.state.frustumSize * aspect / 2;
            camera.right = this.state.frustumSize * aspect / 2;
            camera.top = this.state.frustumSize / 2;
            camera.bottom = -this.state.frustumSize / 2;
            camera.updateProjectionMatrix();
        }
        if (renderer) {
            renderer.setSize(window.innerWidth * 0.25, window.innerHeight * 0.25);
        }
    }

    onPointerMove = (event: MouseEvent) => {
        const pointer = new THREE.Vector2();
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.setState({ pointer });
    }

    animate = () => {
        this.renderScene();
        if (this.state.stats) this.state.stats.update();
    }

    renderScene = () => {
        const { camera, scene, raycaster, renderer, pointer, radius } = this.state;

        this.theta += 0.1;

        if (camera) {
            camera.position.x = this.state.radius * Math.sin(THREE.MathUtils.degToRad(this.theta));
            camera.position.y = this.state.radius * Math.sin(THREE.MathUtils.degToRad(this.theta));
            camera.position.z = this.state.radius * Math.cos(THREE.MathUtils.degToRad(this.theta));
            camera.lookAt(scene!.position);
            camera.updateMatrixWorld();
        }

        if (raycaster) {
            raycaster.setFromCamera(pointer, camera!);
            const intersects = raycaster.intersectObjects(scene!.children, false);

            if (intersects.length > 0) {
                if (this.INTERSECTED !== intersects[0].object) {
                    if (this.INTERSECTED) (this.INTERSECTED as THREE.Mesh).material.emissive.setHex((this.INTERSECTED as THREE.Mesh).currentHex);
                    this.INTERSECTED = intersects[0].object as THREE.Mesh;
                    this.INTERSECTED.currentHex = (this.INTERSECTED as THREE.Mesh).material.emissive.getHex();
                    (this.INTERSECTED as THREE.Mesh).material.emissive.setHex(0xff0000);
                }
            } else {
                if (this.INTERSECTED) (this.INTERSECTED as THREE.Mesh).material.emissive.setHex((this.INTERSECTED as THREE.Mesh).currentHex);
                this.INTERSECTED = null;
            }
        }

        if (renderer && scene && camera) {
            renderer.render(scene, camera);
        }
    }

    render() {
        return (
            <div ref={this.containerRef} />
        );
    }
}

export default ThreeJSComponent;
