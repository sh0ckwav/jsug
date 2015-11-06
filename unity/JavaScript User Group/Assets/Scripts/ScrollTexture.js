#pragma strict

public var speed:float = 0.5F;

private var offset:float;
private var rend:Renderer;

function Start () {
	rend = GetComponent.<Renderer>();
}

function Update () {
	offset = Time.time * speed;                             
	rend.material.mainTextureOffset = new Vector2(0, -offset); 
}