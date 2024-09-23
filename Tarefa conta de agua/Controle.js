function calcular() {
    let quantidade = parseFloat(document.getElementById("inputQ").value);
    let consumo = document.getElementById("inputC").value;
    let local = document.getElementById("inputL").value;

    let taxaConsumo = 0

    if (consumo == "Agua") {
        if (quantidade <= 5) {
            taxaConsumo = 10.084 * quantidade
        } else if (quantidade <= 10) {
            taxaConsumo = (50.42) + ((quantidade - 5) * 1.56)
        } else if (quantidade <= 15) {
            taxaConsumo = (50.42) + (5 * 1.56) + ((quantidade - 10) * 8.69)
        } else if (quantidade <= 20) {
            taxaConsumo = (50.42) + (5 * 1.56) + (5 * 8.69) + ((quantidade - 15) * 8.73)
        } else if (quantidade <= 30) {
            taxaConsumo = (50.42) + (5 * 1.56) + (5 * 8.69) + (5 * 8.73) + ((quantidade - 20) * 8.81)
        } else {
            taxaConsumo = (50.42) + (5 * 1.56) + (5 * 8.69) + (5 * 8.73) + (10 * 8.81) + ((quantidade - 30) * 14.90)
        }
    } else

        if (consumo == "Esgoto") {
            if (local == "Curitiba") {
                if (quantidade <= 5) {
                    taxaConsumo = 8.572 * quantidade
                } else if (quantidade <= 10) {
                    taxaConsumo = (42.86) + ((quantidade - 5) * 1.32)
                } else if (quantidade <= 15) {
                    taxaConsumo = (42.86) + (5 * 1.32) + ((quantidade - 10) * 7.39)
                } else if (quantidade <= 20) {
                    taxaConsumo = (42.86) + (5 * 1.32) + (5 * 7.39) + ((quantidade - 15) * 7.43)
                } else if (quantidade <= 30) {
                    taxaConsumo = (42.86) + (5 * 1.32) + (5 * 7.39) + (5 * 7.43) + ((quantidade - 20) * 7.49)
                } else {
                    taxaConsumo = (42.86) + (5 * 1.32) + (5 * 7.39) + (5 * 7.43) + (10 * 7.49) + ((quantidade - 30) * 12.67)
                }
            } else {
                if (quantidade <= 5) {
                    taxaConsumo = 8.068 * quantidade
                } else if (quantidade <= 10) {
                    taxaConsumo = (40.34) + ((quantidade - 5) * 1.25)
                } else if (quantidade <= 15) {
                    taxaConsumo = (40.34) + (5 * 1.25) + ((quantidade - 10) * 6.95)
                } else if (quantidade <= 20) {
                    taxaConsumo = (40.34) + (5 * 1.25) + (5 * 6.95) + ((quantidade - 15) * 6.98)
                } else if (quantidade <= 30) {
                    taxaConsumo = (40.34) + (5 * 1.25) + (5 * 6.95) + (5 * 6.98) + ((quantidade - 20) * 7.04)
                } else {
                    taxaConsumo = (40.34) + (5 * 1.25) + (5 * 6.95) + (5 * 6.98) + (10 * 7.04) + ((quantidade - 30) * 11.92)
                }
            }
        } else {

            if (local == "Curitiba") {
                if (quantidade <= 5) {
                    taxaConsumo = 18.656 * quantidade
                } else if (quantidade <= 10) {
                    taxaConsumo = (93.28) + ((quantidade - 5) * 2.88)
                } else if (quantidade <= 15) {
                    taxaConsumo = (93.28) + (5 * 2.88) + ((quantidade - 10) * 16.08)
                } else if (quantidade <= 20) {
                    taxaConsumo = (93.28) + (5 * 2.88) + (5 * 16.08) + ((quantidade - 15) * 16.16)
                } else if (quantidade <= 30) {
                    taxaConsumo = (93.28) + (5 * 2.88) + (5 * 16.08) + (5 * 16.16) + ((quantidade - 20) * 16.29)
                } else {
                    taxaConsumo = (93.28) + (5 * 2.88) + (5 * 16.08) + (5 * 16.16) + (10 * 16.29) + ((quantidade - 30) * 27.57)
                }
            } else {
                if (quantidade <= 5) {
                    taxaConsumo = 18.152 * quantidade
                } else if (quantidade <= 10) {
                    taxaConsumo = (90.76) + ((quantidade - 5) * 2.81)
                } else if (quantidade <= 15) {
                    taxaConsumo = (90.76) + (5 * 2.81) + ((quantidade - 10) * 15.64)
                } else if (quantidade <= 20) {
                    taxaConsumo = (90.76) + (5 * 2.81) + (5 * 15.64) + ((quantidade - 15) * 15.72)
                } else if (quantidade <= 30) {
                    taxaConsumo = (90.76) + (5 * 2.81) + (5 * 15.64) + (5 * 15.72) + ((quantidade - 20) * 15.85)
                } else {
                    taxaConsumo = (90.76) + (5 * 2.81) + (5 * 15.64) + (5 * 15.72) + (10 * 15.85) + ((quantidade - 30) * 26.82)
                }
            }
        }

    document.getElementById("resultado").innerHTML = "R$"+taxaConsumo.toFixed(2);
}