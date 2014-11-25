#pragma strict


private var fixedRotation : Quaternion;

function Awake()
{
	fixedRotation = transform.rotation;
}

function LateUpdate()
{
	transform.rotation = fixedRotation;
}