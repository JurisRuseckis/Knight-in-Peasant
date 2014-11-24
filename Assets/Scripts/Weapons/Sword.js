#pragma strict

function OnTriggerEnter2D(collider: Collider2D) 
{
	if(collider.tag == "Enemy")
	{
		Destroy (collider.gameObject);
	}
	
}