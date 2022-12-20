const pup = require('puppeteer');

const url = "https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9dex_Nacional"; // pagina

const busca = "Pikachu"; // item que quer pesquisar

(async () =>{
    const browser = await pup.launch({headless: false}); // true n mostra as açoes, false mostra
    const pagina = await browser.newPage();
    console.log("Iniciando a busca");

    await pagina.goto(url);
    console.log("abriu url");

    const opcoes = await pagina.$$eval('tr', el => el.map(title => title.title) ); // documento .querySelect all
    console.log(opcoes);

    for(const op of opcoes){

        const nome = await pagina.$eval('td > a', element => element.innerText);
        console.log(nome);
        
        if(nome == busca){
            console.log("o pokemom existe ");
           // const tipo = await pagina.$eval('td >span > a', element => element.innerText);
           // console.log(tipo);
        }


     }



    // const obj = {pokemon, tipo}
    // console.log(obj);

    await browser.close();
}) ();


