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
	var shot: GameObject;
	var shotSpawn: Transform;
	var fireRate : float;

	private var nextFire : float;

	function Update() {
		
		if (Input.GetButton("Fire1") && Time.time > nextFire)
	    {
	        nextFire = Time.time + fireRate;
	        Instantiate(shot, shotSpawn.position, shotSpawn.rotation);	
	    }
	}

	function FixedUpdate () {

		var moveHorizontal : float= Input.GetAxis ("Horizontal");
		var moveVertical : float= Input.GetAxis ("Vertical");
		
		var movement : Vector3= new Vector3 (moveHorizontal, 0.0f, moveVertical);
		
		var rigidBody = GetComponent.<Rigidbody>();
				
		rigidBody.velocity = movement * speed;
		
		rigidBody.position = new Vector3(
			Mathf.Clamp(rigidBody.position.x, boundary.xMin, boundary.xMax), 
			0.0, 
			Mathf.Clamp(rigidBody.position.z, boundary.zMin, boundary.zMax));
			
		rigidBody.rotation = Quaternion.Euler(0.0, 0.0, rigidBody.velocity.x * -tilt);
	}
}