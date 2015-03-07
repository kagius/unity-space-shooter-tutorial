#pragma strict

class Mover extends MonoBehaviour {
	
	var speed: float;
	
	function Start() : void {
		GetComponent.<Rigidbody>().velocity = transform.forward * speed;
	}
}