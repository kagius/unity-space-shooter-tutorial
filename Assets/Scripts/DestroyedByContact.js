#pragma strict

var explosion : GameObject;
var playerExplosion : GameObject;

function OnTriggerEnter(other: Collider) {

	if (other.tag == "Boundary")
		return;
	
	if (other.tag == "Player")
		Instantiate(playerExplosion, other.transform.position, other.transform.rotation);
			
	Instantiate(explosion, transform.position, transform.rotation);
	Destroy(other.gameObject);
    Destroy(gameObject);
}