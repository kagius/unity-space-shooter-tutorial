#pragma strict

class Mover extends MonoBehaviour {
	
	var speed: float;
	
	function Start() : void {
		rigidbody.velocity = transform.forward * speed;
	}
}