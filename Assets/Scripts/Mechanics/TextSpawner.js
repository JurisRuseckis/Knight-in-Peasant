#pragma strict

public var damageText : Transform;

public function SpawnDmgText(text: String, x: float, y: float, color: Color)
{
	x = Mathf.Clamp(x, 0.05f, 0.95f);
	y = Mathf.Clamp(y, 0.05f, 0.9f);
	var gui : Transform = Instantiate(damageText, Vector3(x,y,0), Quaternion.identity);
	gui.guiText.text = text;
	gui.guiText.color = color;
}