
dineroCofla = prompt('Cuanto dinero tienes cofla?');
dineroRoberto = prompt('Cuanto dinero tienes roberto?');
dineroPedro = prompt('Cuanto dinero tienes Pedro?');

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >=0.6 && dineroCofla <1) {
    alert("Cofla, compra el helado de agua");
    alert("y te sobra "+ (dineroCofla - 0.6));   
}

else if (dineroCofla >=1 && dineroCofla < 1.6) {
    alert("Cofla, compra el helado de crema");
    alert("y te sobra " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, compra el helado heladix");
    alert("y te sobra " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, compra el helado heladovich");
    alert("y te sobra " + (dineroCofla - 1.7));
}

else if (dineroCofla >=1.8 && dineroCofla < 2.9) {
    alert("Cofla, compra el helado helardo");
    alert("y te sobra " + (dineroCofla - 1.8));
}

else if (dineroCofla >=2.9) {
    alert("Cofla, compra el helado con confites o el porte de 1/4 kg");
    alert("y te sobra " + (dineroCofla - 2.9));
}

else{
    alert("Lo siento,Cofla, no te alcanza");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, compra el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, compra el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, compra el helado heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, compra el helado heladovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, compra el helado helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, compra el helado con confites o el porte de 1/4 kg")
}

else {
    alert("Roberto, lo siento, no te alcanza");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, compra el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, compra el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, compra el helado heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, compra el helado heladovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, compra el helado helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, compra el helado con confites o el porte de 1/4 kg");
}

else {
    alert("Lo siento,Pedro,  no te alcanza");
}