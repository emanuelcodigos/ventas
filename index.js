const formualario = document.querySelector('#formulario');
const inputVuelto = document.querySelector('#devolucion');
const botonResetear = document.querySelector('#btnReset');

formualario.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const montoTotal = formualario.monto.value;
    const pagoCliente = formualario.cliente.value;
    
    if(montoTotal === '' || pagoCliente === ''){
        return alert('completa todos los campos');
    }

    const devolucion = pagoCliente - montoTotal;

    inputVuelto.value = devolucion;

});

botonResetear.addEventListener( 'click', () => {
    resetear();
});


const resetear = () => {
    formualario.reset();
    inputVuelto.value = '';
}
