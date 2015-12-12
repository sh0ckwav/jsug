#pragma strict

public var spawnCycle:float = 0.5F;
public var prefab:GameObject;
public var spawnsPerCycle:int = 10;

private var spawned:int = 0;
private var timeElapsed:float = 0;
private var xPos:float;

function Start () {
   xPos = Random.Range(-3, 4);
   timeElapsed = Time.time;
}

function Update () {
	if (Time.time > timeElapsed) {
		Spawn ();
	}
}

function Spawn () {
	if (spawned < spawnsPerCycle)
    {
        Instantiate (prefab, new Vector3(xPos, 0, 15), Quaternion.identity);
        spawned++;
    } else {
    	spawned = 0;
    	xPos = Random.Range(-3, 4);
    	timeElapsed = Time.time + spawnCycle;
	}
}