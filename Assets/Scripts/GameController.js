#pragma strict

var hazard: GameObject;
var hazardCount: int;

var spawnValues : Vector3;
var startWait: float;
var spawnWait: float;
var waveWait: float;

var scoreText: UI.Text;
var score: int = 0;

var restartText: UI.Text;
var gameOverText: UI.Text;

private var gameOver : boolean = false;
private var restart : boolean = false;

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
		
        if (gameOver)
        {
            restartText.text = "Press 'R' for Restart";
            restart = true;
            break;
        }
	}
}

function AddScore (newScoreValue : int) {
    score += newScoreValue;
    UpdateScore ();
}

function UpdateScore() {
	scoreText.text = "Score: " + score;
}

function GameOver() {
	gameOverText.text = "Game over";
	gameOver = true;
}

function Start() {
	restartText.text = "";
	gameOverText.text = "";

	UpdateScore();
	SpawnWaves();
}

function Update() {
	if (restart && Input.GetKeyDown (KeyCode.R))
    {
        Application.LoadLevel (Application.loadedLevel);
    }
}