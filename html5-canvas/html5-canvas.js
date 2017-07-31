const canvas = document.querySelector("#draw")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")
context.strokeStyle = "BADA55"
context.lineJoin = "round"
context.lineCap = "round"
