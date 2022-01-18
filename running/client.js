"use strict";   // 厳格モードとする

//*******************************************************************************************************
// グローバル変数
//*******************************************************************************************************
const g_distance = document.getElementById( "distance" );
const g_minutes = document.getElementById( "min" );
const g_seconds = document.getElementById( "sec" );
let g_pace_sec = 0;

//*******************************************************************************************************
// UIから呼ばれる関数
function onclickButton_calc()
{
    console.log( "UI Event : onclickButton_calc clicked." );
    var time = parseInt(g_minutes.value) * 60 + parseInt(g_seconds.value);
    var dist = parseInt(g_distance.value);

    g_pace_sec = time * 1000 / dist;

    var sec = g_pace_sec % 60;
    var min = (g_pace_sec - sec) / 60;

    document.getElementById("pace_min").textContent = min;
    document.getElementById("pace_sec").textContent = sec;
}

function onclickButton_clear()
{
    console.log( "UI Event : onclickButton_clear clicked." );
    g_distance.value = 0;
    g_minutes.value = 0;
    g_seconds.value = 0;
}

