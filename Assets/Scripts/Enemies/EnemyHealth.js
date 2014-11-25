#pragma strict

public var health : float = 10f;                           

private var anim : Animator;                                // Reference to the animator component.
private var enemyController : Enemy_controller;            
private var textSpawner : TextSpawner;
private var uI : UI;
private var isDead : boolean;                          


function Awake ()
{
    // Setting up the references.
    anim = GetComponent(Animator);
    enemyController = GetComponent(Enemy_controller);
    textSpawner = GameObject.FindGameObjectWithTag("GameController").GetComponent(TextSpawner);
    uI = GameObject.FindGameObjectWithTag("GameController").GetComponent(UI);
}


function Update ()
{

    if(health <= 0f)
    {
        if(!isDead)

            EnemyDying();
        else
        {
            EnemyDead();
        }
    }
}


function EnemyDying ()
{
    // The player is now dead.
    isDead = true;
    uI.AddPoints(10);
}

function EnemyDead ()
{
	//disables movement   
    enemyController.enabled = false;
    //animation of a dead body
    anim.SetBool("Dead", true);
    Destroy(gameObject.collider2D);
    Destroy(gameObject, 1f);    
}

public function TakeDamage (amount : float)
{
    // Decrement the player's health by amount.
    health -= amount;
    var ToViewport : Vector3 = Camera.main.WorldToViewportPoint(transform.position);
    textSpawner.SpawnDmgText(amount, ToViewport.x, ToViewport.y);
}

