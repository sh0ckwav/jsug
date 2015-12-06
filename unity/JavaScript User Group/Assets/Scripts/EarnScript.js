#pragma strict

public var fuelEarned:int;

function Start () {
    fuelEarned = 0;
}

function Update () {

}

function OnTriggerEnter (other:Collider) {
    fuelEarned++;
    Debug.Log("FUEL:" + fuelEarned);
    Destroy (other.gameObject);
}