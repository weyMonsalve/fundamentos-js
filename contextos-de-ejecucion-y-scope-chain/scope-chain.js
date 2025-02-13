const userPoints = 150;

function checkAccess() {

    if (userPoints < 100) {
        const message = "Access denied: Insufficient points!"
        return message
    } else {
        const message = "Access granted: Enjoy the premiun features!"
        return message
    }
}
console.log(checkAccess());





const globalVariable = "🙂"

function localOne() {
    console.log('GLOBAL 1:', globalVariable)
        //console.log('LOCAL 1:', localVariable)

    function localTwo() {
        const carrot = '🥕'
        console.log('LOCAL 2:', carrot)
    }

    function localThree() {
        console.log('LOCAL 3:', carrot)
    }
    localTwo()
    localThree()
}
console.log(localOne())