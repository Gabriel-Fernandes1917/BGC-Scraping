const pup = require('puppeteer');

const url = "https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9dex_Nacional"; // pagina

const busca = "Weedle"; // Pokemon que deseja pesquisar

(async () => {
    const browser = await pup.launch();
    const page = await browser.newPage();
    await page.goto(url);
  
    const data = await page.evaluate(() => {
      const nome = Array.from(document.querySelectorAll('td')) // coleta todas as tags Td


      return nome.map(td => td.innerText) // retorna um array com os itens das tabelas
    });

      //console.log(data);

    for(let i = 0; i < data.length; i++){
        if(data[i] == busca){ // seleciona o tipo do pokemon

            console.log(` O Pokemon ${busca} e do tipo ${data[i+1]}`)
            return;
        }
    }

  await browser.close();
})();