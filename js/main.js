// function acao(this) {
//     alert(this)
// }

let item = document.querySelector('.owl-carousel')
let titulo_principal = document.querySelector('.titulo');
let conteudo_descricao = document.querySelector('.descricao');
let filme_principal = document.querySelector('.filme-principal');

item.addEventListener('click', function (e) {
    let filme = e.target.id;
    filme_principal.style.heigh = '800px';
    filme_principal.background_size = 'cover';
    filme_principal.display = 'flex';
    filme_principal.flex_direction = 'column';
    filme_principal.justify_content = 'center';
    filme_principal.align_items = 'flex-start';

    switch (filme) {
        case "naruto":
            titulo_principal.innerHTML = 'NARUTO';
            conteudo_descricao.innerHTML = "Naruto Shippuden ocorre 2 anos e meio após Naruto ter ficado para treinar com Jiraiya. Após seu retorno, Naruto descobre que seus amigos shinobi's o superaram na classificação, e ele caiu para trás. No entanto, com apenas 6 meses para resgatar Sasuke, Naruto tem de enfrentar inimigos ainda mais perigosos. O plano da Akatsuki se revela lentamente e os perigos surgem mais do que nunca!"
            filme_principal.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%),url('../img/capa-naruto.jpg')";

            break;
        case "death-note":
            titulo_principal.innerHTML = 'DEATH NOTE';
            conteudo_descricao.innerHTML = "O jovem estudante Light Yagami acha um caderno com poderes sobrenaturais, chamado Death Note, no qual é possível matar uma pessoa apenas escrevendo seu nome no caderno. Quando o descobre, Light tenta eliminar todos os criminosos do mundo e dar à sociedade um mundo livre do mal. Mas seus planos começam a sair de rumo quando o detetive L resolve contrariar Light."
            filme_principal.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%),url('../img/capa-deathnote.jpg')";

            break;
        case "dragon-ball":
            titulo_principal.innerHTML = 'DRAGON BALL Z';
            conteudo_descricao.innerHTML = "Cinco anos após vencer o Torneio Mundial de Artes Marciais, Goku tem uma vida pacífica com sua esposa e filho. No entanto, isso muda com a chegada de um misterioso inimigo chamado Raditz, que se apresenta como o irmão perdido de Goku e revela que ele é um guerreiro da raça Saiyan, e que originalmente foi enviado à Terra para conquista-la. Com sua tentativa fracassada de recrutar Goku como aliado, Raditz adverte Goku e seus amigos de que uma nova ameaça se aproxima rapidamente da Terra, uma que poderia mergulhar o planeta em um conflito intergaláctico e fazer os próprios céus tremerem. Uma guerra será travada pelas esferas místicas do dragão, e somente os mais fortes sobreviverão."
            filme_principal.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%),url('../img/capa-dragonball.png')";

            break;
        case "one-piece":
            titulo_principal.innerHTML = 'ONE PIECE';
            conteudo_descricao.innerHTML = "Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. 'Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!'. Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis... Assim começou a Grande Era dos Piratas!"
            filme_principal.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%),url('../img/capa-onepiece.jpg')";

            break;

        case "aku-no-hana":
            titulo_principal.innerHTML = 'AKU NO HANA';
            conteudo_descricao.innerHTML = "Kasuga Takao é um garoto que adora ler livros, especialmente de Baudelaire As Flores do Mal. Uma garota em sua escola, Nanako Saeki, é sua musa e sua Vênus, ele admira ela a distância. Um dia, ele se esquece de sua cópia de As Flores do Mal na sala de aula e corre de volta sozinho para buscá-la. Na sala de aula, ele encontra não só o livro dele, mas o uniforme da Saeki de ginásio. Em um impulso louco, ele rouba o uniforme da Saeki. Agora todo mundo sabe que “um pervertido” roubou o uniforme da Saeki, e Kasuga está morrendo de vergonha e culpa. Além disso, a garota, estranha assustadora, e sem amigos de classe, Nakamura, o viu roubar o uniforme."
            filme_principal.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%),url('../img/capa-akunohana.jpg')";

            break;

        case "fairy-tail":
            titulo_principal.innerHTML = 'FAIRY TAIL';
            conteudo_descricao.innerHTML = "Lucy é uma garota de 16 anos que quer se tornar uma maga completa, para isso, ela precisa entrar em uma guilda de magos. Um dia visitando a cidade de Harujion, ela conhece Natsu, um jovem rapaz que fica facilmente enjoado com qualquer tipo de transporte. Mas Natsu não é apenas uma criança fraca, ele é um membro de uma das maiores e infames guildas: FAIRY TAIL."
            filme_principal.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%),url('../img/capa-fairytail.png')";
            break;

        default:
            break;
    }
    // if (e.target.id == "naruto") {
    //     console.log('narutoooo');
    //     titulo_principal.innerHTML = 'NARUTO';
    //     conteudo_descricao.innerHTML = "Naruto Shippuden ocorre 2 anos e meio após Naruto ter ficado para treinar com Jiraiya. Após seu retorno, Naruto descobre que seus amigos shinobi's o superaram na classificação, e ele caiu para trás. No entanto, com apenas 6 meses para resgatar Sasuke, Naruto tem de enfrentar inimigos ainda mais perigosos. O plano da Akatsuki se revela lentamente e os perigos surgem mais do que nunca!"
    //     filme_principal.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%),url('../img/capa.jpg')";

    // }
})
// var descendentes = document.querySelectorAll("#list a");
// for (var i = 0; i < descendentes.length; i++) {
//     descendentes[i].addEventListener("click", function (e) {
//         alert('O elemento clicado foi o ' + this.innerHTML);
//     })
// }