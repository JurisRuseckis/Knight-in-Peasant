#pragma strict

public var speed : float = 5.0f;
public var player : Transform;



function Start () {
	player = GameObject.FindWithTag("Player").transform;
}

function FixedUpdate () {
	var z : float = Mathf.Atan2( (player.transform.position.y - transform.position.y), (player.transform.position.x - transform.position.x) ) * Mathf.Rad2Deg - 90;
	
	transform.eulerAngles = new Vector3(0, 0, z);
	
	rigidbody2D.AddForce(gameObject.transform.up * speed);
	
}