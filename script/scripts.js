const bart = document.querySelector('.bart');
const tubo = document.querySelector('.tubo');

const pular = ()=>{
    bart.classList.add('pular');

    setTimeout(() => 
    {
        bart.classList.remove('pular');
    }, 500);
}

const loop = setInterval(()=>{

    const posicaoCano = tubo.offsetLeft;
    const posicaobart = +window.getComputedStyle(bart).bottom.replace('px','');
    
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaobart < 70){
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoCano}px`;

        bart.style.animation = 'none';
        bart.style.bottom = `${posicaobart}px`;

        bart.src = './img/caindo.png';
        
        
        clearInterval(loop);
        
    }
}, 10)

document.addEventListener('keydown', pular);