#pragma strict

public var fuelEarned:int;
public var fuelText:UnityEngine.UI.Text;

function Start () {
    fuelEarned = 0;
    fuelText.text = fuelEarned.ToString ();
}

function Update () {

}

function OnTriggerEnter (other:Collider) {
    fuelEarned++;
    fuelText.text = fuelEarned.ToString ();
    Debug.Log ("FUEL:" + fuelEarned);
    Destroy (other.gameObject);
}