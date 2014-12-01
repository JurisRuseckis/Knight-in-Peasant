#pragma strict
 
// JavaScript
 
var backgroundTexture : Texture;
var foregroundTexture : Texture;
var frameTexture : Texture;
 
private var healthWidth: int = 210;
private var healthHeight: int = 30;
private var bgWidth: int = 172;
 
private var healthMarginLeft: int = 35;
private var healthMarginTop: int = 25;
 
private var frameWidth : int = 225;
private var frameHeight: int = 50;
 
private var frameMarginLeft : int = 10;
private var frameMarginTop: int = 10;
 
function OnGUI () {
 
 	GUI.DrawTexture( Rect( healthMarginLeft, healthMarginTop, bgWidth + healthMarginLeft, healthHeight), backgroundTexture, ScaleMode.ScaleAndCrop, true, 0 );
 
    GUI.DrawTexture( Rect( healthMarginLeft, healthMarginTop, healthWidth , healthHeight), foregroundTexture, ScaleMode.ScaleAndCrop, true, 0 );
 
    GUI.DrawTexture( Rect( frameMarginLeft, frameMarginTop, frameMarginLeft + frameWidth,frameMarginTop + frameHeight), frameTexture, ScaleMode.ScaleToFit, true, 0 );

 
}

function reduceHealth(amount: int){
	Debug.Log(healthWidth);
	if(healthWidth > amount){
		healthWidth -= amount;
	} else {
		healthWidth = 0;
	}
}

function increaseHealth(amount: int){
	amount += healthWidth;
	if(amount < 210){
		healthWidth = amount;
	} else {
		healthWidth = 210;
	}
}

function toZero (){
	healthWidth = 0;
}