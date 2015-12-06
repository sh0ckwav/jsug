#pragma strict

public var speed:float = -0.5F;

function Start () {

}

function Update () {
    transform.Translate(0, 0, speed);
    if (gameObject.transform.position.z < -15) {
        Destroy (gameObject);
    }
}