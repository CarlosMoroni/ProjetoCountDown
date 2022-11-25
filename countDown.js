const elementoDias = document.getElementById('dias')
const elementoHoras = document.getElementById('horas')
const elementoMinutos = document.getElementById('minutos')
const elementoSegundos = document.getElementById('segundos')


function countDown() {
    const tempoAtual = new Date()
    // alterando esse valor determina a data que deseja contar
    const dataFinal = new Date('1 jan 2023')

    const totalSegundos = (dataFinal - tempoAtual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    elementoDias.innerText = dias;
    elementoHoras.innerText = formatTime(horas);
    elementoMinutos.innerText = formatTime(minutos);
    elementoSegundos.innerText = formatTime(segundos);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

countDown()

setInterval(countDown, 1000)