#pragma strict

public var spawnCycle:float = 0.5F;
public var prefab:GameObject;

private var timeElapsed:float = 0;

function Start () {
   
}

function Update () {
    timeElapsed += Time.deltaTime;
    if(timeElapsed > spawnCycle)
    {
        Instantiate(prefab, new Vector3(Random.Range(-3, 4), 0, 15), Quaternion.identity);
        timeElapsed -= spawnCycle;
    }
}