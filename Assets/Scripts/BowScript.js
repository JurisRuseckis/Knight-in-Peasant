#pragma strict

private var shot = false;

function OnEnable () {
	var mouse_position = Camera.main.ScreenToWorldPoint (Input.mousePosition);
	var rot : Quaternion = Quaternion.LookRotation(transform.position - mouse_position, Vector3.forward);
	
	Instantiate(Resources.Load("Arrow"), transform.position, rot);
	shot = true;
	
}