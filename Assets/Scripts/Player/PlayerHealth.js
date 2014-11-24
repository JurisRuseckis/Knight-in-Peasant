﻿#pragma strict

public var health : float = 100f;                           // How much health the player has left.
public var resetAfterDeathTime : float = 5f;                // How much time from the player dying to the level reseting.


private var anim : Animator;                                // Reference to the animator component.
private var playerController : Player_controller;            // Reference to the player movement script.
private var sceneFadeInOut : SceneFadeInOut;            // Reference to the SceneFadeInOut script.
private var timer : float;                                  // A timer for counting to the reset of the level once the player is dead.
private var playerDead : boolean;                           // A bool to show if the player is dead or not.


function Awake ()
{
    // Setting up the references.
    anim = GetComponent(Animator);
    playerController = GetComponent(Player_controller);
    sceneFadeInOut = GameObject.FindGameObjectWithTag("Fader").GetComponent(SceneFadeInOut);
}


function Update ()
{
    // If health is less than or equal to 0...
    if(health <= 0f)
    {
        // ... and if the player is not yet dead...
        if(!playerDead)
            // ... call the PlayerDying function.
            PlayerDying();
        else
        {
            // Otherwise, if the player is dead, call the PlayerDead and LevelReset functions.
            PlayerDead();
            LevelReset();
        }
    }
}


function PlayerDying ()
{
    // The player is now dead.
    playerDead = true;
    
    /*/ Set the animator's dead parameter to true also.
    anim.SetBool(hash.deadBool, playerDead);
    
    // Play the dying sound effect at the player's location.
    AudioSource.PlayClipAtPoint(deathClip, transform.position);*/
}


function PlayerDead ()
{
    /*/ If the player is in the dying state then reset the dead parameter.
    if(anim.GetCurrentAnimatorStateInfo(0).nameHash == hash.dyingState)
        anim.SetBool(hash.deadBool, false);
    
    // Disable the movement.
    anim.SetFloat(hash.speedFloat, 0f);*/
    playerController.enabled = false;
    
}


function LevelReset ()
{
    // Increment the timer.
    timer += Time.deltaTime;
    
    //If the timer is greater than or equal to the time before the level resets...
    if(timer >= resetAfterDeathTime)
        // ... reset the level.
        sceneFadeInOut.EndScene();
}


public function TakeDamage (amount : float)
{
    // Decrement the player's health by amount.
    health -= amount;
    Debug.Log(health);
}