#pragma strict

public var scroll : float = 0.05f;
public var duration : float = 1.5f;
public var alpha : float;

function Start () {
	alpha = 1;
}

function Update () {
	if(alpha > 0) 
	{
		transform.position.y += scroll*Time.deltaTime;
		alpha -= Time.deltaTime/duration;
		guiText.material.color.a = alpha;
	}
	else 
	{
		Destroy(gameObject);
	}
}