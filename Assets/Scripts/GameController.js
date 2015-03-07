﻿#pragma strict

var hazard: GameObject;
var hazardCount: int;

var spawnValues : Vector3;
var startWait: float;
var spawnWait: float;
var waveWait: float;

function spawnWaves() {
 	yield WaitForSeconds (startWait);
    while (true)
    {
		for (var i:int = 0; i < hazardCount; i++) {
			Instantiate(
				hazard, 
				new Vector3(Random.Range(-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z), 
				Quaternion.identity);
			yield WaitForSeconds (spawnWait);
		}
		yield WaitForSeconds (waveWait);
	}
}

function Start() {
	spawnWaves();
}