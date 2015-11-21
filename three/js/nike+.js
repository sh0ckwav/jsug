window.onload = function(){
    var 
        shapeObjectUrl = "models/nikeplus.json",
        scene = new THREE.Scene(),
        camera = new     THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000),
        renderer = new THREE.WebGLRenderer(),
        loader = new THREE.JSONLoader();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    loader.load( shapeObjectUrl, 
        function ( geometry, materials ) {
            console.log(geometry, materials);
            var mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial() );
            mesh.rotation.x = 90;
            scene.add( mesh );
            console.log(mesh);
            render();
    });

    camera.position.z = 5;

    var render = function () {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    };

};