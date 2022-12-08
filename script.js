const circle = document.querySelector('.circle');
const rect = document.querySelector('.rect');
const triangle = document.querySelector('.triangle');
const pepar = document.querySelector('.pepar');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const rem = document.querySelector('.rem')
let background = '';
blue.onclick = e => background = 'blue'
green.onclick = e => background = 'green'
red.onclick = e => background = 'red'
let draw = 't';
circle.addEventListener('mousedown', e => { draw = 'c' })
rect.addEventListener('mousedown', e => { draw = 'r' })
triangle.addEventListener('mousedown', e => { draw = 's' })
// paper

setInterval(
    () => {
        pepar.addEventListener('click', e => {
            background == '' ? console.log('you must choose color') : ''
            rem.addEventListener('click', e => {
                document.querySelector('.pepar div').remove();
            })

            if (draw == 'c') {
                const circle = document.createElement('div');
                circle.style.cssText = `width:100px;height:100px;background:${background};left:${e.offsetX};top:${e.offsetY};position:absolute;transform:translate(-50%,-50%) ; pointer-events: none;border-radius:50%`
                pepar.append(circle);

            }
            if (draw == 'r') {
                const rect = document.createElement('div');
                rect.style.cssText = `width:150px;height:90px;background:${background};left:${e.offsetX};top:${e.offsetY};position:absolute;transform:translate(-50%,-50%) ; pointer-events: none`
                pepar.append(rect);

            }
            if (draw == 's') {
                const squ = document.createElement('div');
                squ.style.cssText = `width:100px;height:100px;background:${background};left:${e.offsetX};top:${e.offsetY};position:absolute;transform:translate(-50%,-50%) ; pointer-events: none`
                pepar.append(squ);

            }

        })
    }
    , 1000)
