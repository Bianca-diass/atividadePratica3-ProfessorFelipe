function media(v) {
    if (!Array.isArray(v) || v.length === 0) {
        return null;
    }

    let total = 0;

    for (const numero of v) {
        total = total + numero;
    }

    return total / v.length;
}

function menor(v) {
    if (!Array.isArray(v) || v.length === 0) {
        return null;
    }

    let menorNumero = v[0];

    for (const numero of v) {
        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }

    return menorNumero;
}

function maior(v) {
    if (!Array.isArray(v) || v.length === 0) {
        return null;
    }

    let maiorNumero = v[0];

    for (const numero of v) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }

    return maiorNumero;
}

module.exports = {
    media,
    menor,
    maior
};

let teste = [10, 5, 8, 2];

console.log(media(teste));