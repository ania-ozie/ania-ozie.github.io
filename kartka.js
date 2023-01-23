import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("bg","obrszek.png")
loadSprite("gwiazda","gwiazda.png")

// add a piece of text at position (120, 80)
// add([
//     text("hello"),
//     pos(120, 80),
// ]);

const bg = add([
    sprite("bg"),
    pos(0,0)
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(120,80)
])

// onUpdate(()=>{

//     if(gwiazda.pos.y<320)
//     gwiazda.pos.x=gwiazda.pos.x+4
// })
onUpdate(()=>{


    if(gwiazda.pos.x<200)

    {
        gwiazda.pos.x=gwiazda.pos.x+4
        gwiazda.pos.y=gwiazda.pos.y+4

    }

    
})