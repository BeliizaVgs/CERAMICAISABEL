var america = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/AMERICA.png";
var canasta = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/CANASTA.png";
var chef = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/CHEF.png";
var cruzazul = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/CRUZAZUL.png";
var jarra = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/JARRA.png";
var pera = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/PERA.png";
var vaca = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/VACA.png";
var ardillas = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/ARDILLA.png";
var estrellas = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/ESTRELLA.png";
var borrego = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/BORREGO.png";

var regadera = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/REGADERA.png";

var marrano = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/MARRANO.png";
var unicornio = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/UNICORNIO.png";
let imgurl = "";

var chivas = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/CHIVAS.png";
var girasol = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/GIRASOL.png";
var groot = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/GROOT.png";
var sandia = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/SANDIA.png";
var liza = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/LIZA.png";
var nautilus = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/NAUTILUS.png";
var tornillo = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/TORNILLO.png";
//BOTONES CAMBIAR

function btnchivas() {
    imgurl = chivas;
    download()
}
function btngirasol() {
    imgurl = girasol;
    download()
}
function btngroot() {
    imgurl = groot;
    download()
}
function btnsandia() {
    imgurl = sandia;
    download()
}
function btnliza() {
    imgurl = liza;
    download()
}
function btnnautilus() {
    imgurl = nautilus;
    download()
}
function btntornillo() {
    imgurl = tornillo;
    download()
}



function btnamerica() {
    imgurl = america;
    download()
}
function btncanasta() {
    imgurl = canasta;
    download()
}
function btnchef() {
    imgurl = chef;
    download()
}
function btncruzazul() {
    imgurl = cruzazul;
    download()
}
function btnjarra() {
    imgurl = jarra;
    download()
}
function btnpera() {
    imgurl = pera;
    download()
}
function btnvaca() {
    imgurl = vaca;
    download()
}
function btnardillas() {
    imgurl = ardillas;
    download()
}
function btnestrellas() {
    imgurl = estrellas;
    download()
}
function btnborrego() {
    imgurl = borrego;
    download()
}
function btnregadera() {
    imgurl = regadera;
    download()
}
function btnmarrano() {
    imgurl = marrano;
    download()
}
function btnunicornio() {
    imgurl = unicornio;
    download()
}

function download() {
    axios({
        url: imgurl,
        method: 'GET',
        responseType: 'blob'
    })
        .then((response) => {
            const url = window.URL
                .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'image.png');
            document.body.appendChild(link);
            link.click();
        })
}