#pragma strict

var hazard: GameObject;
var spawnValues : Vector3;

function spawnWaves() : void {
	Instantiate(
		hazard, 
		new Vector3(Random.Range(-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z), 
		Quaternion.identity);
}

function Start() {
	spawnWaves();
}