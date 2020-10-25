function calcular() {
    const pes = window.document.getElementById('peso');
    const peso = Number.parseFloat(pes.value);
    const alt = window.document.getElementById('altura');
    const altura = alt.value;
    const res = window.document.getElementById('res');
    const tab = window.document.getElementById('normal');
    const nm = tab.value;
    if (peso <= 0 || altura <= 0) {
        window.alert('Por favor, preencha os campos de peso e altura corretamente.')
    } else if (peso.length > 4 || altura.length > 4) {
        window.alert('Por favor, utilize apenas três dígitos nos campos de peso e altura.')
    }
    else {
        result = peso / altura ** 2;
        res1 = result.toString();
        res2 = res1.substring(0, 5); 
        res.innerHTML = `${res2}`;
    }
    }

    function limpar() {
        document.getElementById('peso').value = "";
        document.getElementById('altura').value = "";
        document.getElementById('res').innerHTML = "";
    }
   