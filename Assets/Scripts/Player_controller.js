#pragma strict

public var speed : float = 35.0f;
private var anim : Animator;
private var ActiveWeapon = "SwordAttack";

function Start () 
{
	anim = GetComponent("Animator");
}

function Update()
{
	if(Input.GetButtonDown ("PrimaryWeapon"))
	{
		ActiveWeapon = "SwordAttack";
	}
	if(Input.GetButtonDown ("SecondaryWeapon"))
	{
		ActiveWeapon = "SpearAttack";
	}
	if(Input.GetButtonDown ("RangedWeapon"))
	{
		ActiveWeapon = "BowAttack";
	}
	
	if(Input.GetButtonDown ("Fire1")) 
	{
		anim.SetTrigger(ActiveWeapon);
	}
}

function FixedUpdate () 
{
	//rotation - follow mouse
	var mouse_position = Camera.main.ScreenToWorldPoint (Input.mousePosition);
	var rot : Quaternion = Quaternion.LookRotation(transform.position - mouse_position, Vector3.forward);
	
	transform.rotation = rot;
	transform.eulerAngles = new Vector3(0, 0, transform.eulerAngles.z);
	rigidbody2D.angularVelocity = 0;
	
	//movement
	var movement = Input.GetAxis("Vertical");
	rigidbody2D.AddForce(gameObject.transform.up * speed * movement);
	

}