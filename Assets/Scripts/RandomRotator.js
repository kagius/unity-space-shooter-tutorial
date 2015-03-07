#pragma strict

var tumble : float;

function Start () {
	GetComponent.<Rigidbody>().angularVelocity = Random.insideUnitSphere * tumble;
}