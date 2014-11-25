#pragma strict

private var enemyHealth : EnemyHealth;

function OnTriggerEnter2D(collider: Collider2D) 
{
	if(collider.tag == "Enemy")
	{
		enemyHealth = collider.gameObject.GetComponent(EnemyHealth);
		enemyHealth.TakeDamage(10.0f);
	}
	
}