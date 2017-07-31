
const canvas = document.querySelector("#draw")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")
context.lineJoin = "round"
context.lineCap = "round"
context.lineWidth = 20

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0


function draw(e) {
    if (!isDrawing) return
    context.strokeStyle = `hsl(${hue}, 40%, 50%)`
    context.beginPath()
    context.moveTo(lastX, lastY)
    context.lineTo(e.offsetX, e.offsetY)
    context.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    hue = hue < 360 ? hue + 1 : 0
}

canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)
