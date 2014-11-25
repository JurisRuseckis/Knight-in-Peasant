#pragma strict

private var Score : int = 0;
private var playerHealth : PlayerHealth;

function Start()
{
	playerHealth = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerHealth);
}

function OnGUI () 
{
	GUI.Box(new Rect(5f, 5f, 100, 30), Score.ToString() );
	GUI.Box(new Rect(Screen.width - 105, 5f, 100, 30), playerHealth.health.ToString() ); 
}

function AddPoints(points : int)
{
	Score += points;
}