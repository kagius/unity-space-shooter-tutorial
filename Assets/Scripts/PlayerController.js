#pragma strict

class Boundary
{
    var xMin : float;
    var xMax : float;
    var zMin : float;
    var zMax : float;
}

class PlayerController extends MonoBehaviour {

	var speed : float;
	var tilt : float;
	var boundary: Boundary;

	function FixedUpdate () {

		var moveHorizontal : float= Input.GetAxis ("Horizontal");
		var moveVertical : float= Input.GetAxis ("Vertical");
		
		var movement : Vector3= new Vector3 (moveHorizontal, 0.0f, moveVertical);
		
		rigidbody.velocity = movement * speed;
		
		rigidbody.position = new Vector3(
			Mathf.Clamp(rigidbody.position.x, boundary.xMin, boundary.xMax), 
			0.0, 
			Mathf.Clamp(rigidbody.position.z, boundary.zMin, boundary.zMax));
			
		rigidbody.rotation = Quaternion.Euler(0.0, 0.0, rigidbody.velocity.x * -tilt);
	}
}