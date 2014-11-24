#pragma strict

public var speed : float = 5.0f;


private var player : Transform;
private var playerHealth : PlayerHealth;                    // Reference to the player's health.

function Start () {
	player = GameObject.FindWithTag("Player").transform;
	playerHealth = player.gameObject.GetComponent(PlayerHealth);
}

function FixedUpdate () {
	var z : float = Mathf.Atan2( (player.transform.position.y - transform.position.y), (player.transform.position.x - transform.position.x) ) * Mathf.Rad2Deg - 90;
	
	transform.eulerAngles = new Vector3(0, 0, z);
	
	rigidbody2D.AddForce(gameObject.transform.up * speed);
	
}

function OnCollisionEnter2D(collider: Collision2D) {

	if (collider.gameObject.tag == "Player")
	{
		playerHealth.TakeDamage(100.0f);
	}
	
}