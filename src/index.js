let heroi = "Peter Parker";
let XPnivel = "1000"

let XPheroi;

if (XPnivel <= 1000) {
    XPheroi = "ferro";
} 

else if (XPnivel >= 1001 && XPnivel <= 2000) {
    XPheroi = "bronze";
}

else if (XPnivel >= 2001 && XPnivel <=5000) {
    XPheroi = "prata";
}

else if (XPnivel >= 5001 && XPnivel <= 7000) {
    XPheroi = "ouro";
}

else if (XPnivel >= 7001 && XPnivel <= 8000) {
    XPheroi = "platina";
}

else if (XPnivel >= 8001 && XPnivel <= 9000) {
    XPheroi = "ascendente";
}

else if (XPnivel >= 9001 && XPnivel <= 10000) {
    XPheroi = "imortal";
}

if (XPnivel >= 10001) {
    XPheroi = "radiante";
}

console.log("O herói", heroi, "está com nível", XPheroi);


