#pragma strict

function Update () {
	rigidbody2D.AddForce(gameObject.transform.up * 300);
	Destroy(gameObject, 1.5f);
}

function OnTriggerEnter2D(collider: Collider2D) 
{
	if(collider.tag == "Enemy")
	{
		Destroy (collider.gameObject);
	}
	
}