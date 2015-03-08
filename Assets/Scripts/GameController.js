#pragma strict

var hazard: GameObject;
var hazardCount: int;

var spawnValues : Vector3;
var startWait: float;
var spawnWait: float;
var waveWait: float;

var scoreText: UI.Text;
var score: int = 0;

function SpawnWaves() {
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

function AddScore (newScoreValue : int) {
    score += newScoreValue;
    UpdateScore ();
}

function UpdateScore() {
	scoreText.text = "Score: " + score;
}

function Start() {
	UpdateScore();
	SpawnWaves();
}