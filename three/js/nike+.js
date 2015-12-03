var scene, camera, renderer;
var geometry, material, mesh;
var loader;
var dirLight, pointLight;

init();
//animate();

function init() {

    scene = new THREE.Scene();

    // LIGHTS
    dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
    dirLight.position.set( 0, 0, 1 ).normalize();
    scene.add( dirLight );

    pointLight = new THREE.PointLight( 0xffffff, 1.5 );
    pointLight.position.set( 0, 100, 90 );
    scene.add( pointLight );

    // CAMERA
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.z = 5;

    //geometry = new THREE.BoxGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0xfa5400 } );

    //mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    loader = new THREE.JSONLoader();
    loader.load("models/nikeplus.json", onLoad);

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.z += 0.01;

    renderer.render( scene, camera );

}

function onLoad(geometry, materials) {

    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.x = 90;
    scene.add( mesh );

    animate();

}
