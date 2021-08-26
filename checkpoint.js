// Microondas Mesa 3
// Loyana Jacinto Rodrigues - T17 (Full Time)
// 1º Checkpoint de Programação Imperativa

// Criar uma função para o parâmetro esquentar, que recebe "tempo" e "prato"

function esquentar(tempo, prato){

    //Menu
    // Criar as variáveis tempoDoPrato, mensagem - para a mensagem que deve aparecer de acordo com o tempo, e a variável menu, false por padrão.

    tempoDoPrato = ''
    mensagem = ''
    menu = false

    // Usar a condicional if para receber prato, tempoDoPrato e retornar as mensagens que estão de acordo com as condições lá embaixo.

    if (prato == 'pipoca') {
        tempoDoPrato = 10
        menu = true
    }

    if (prato == 'macarrão') {
        tempoDoPrato = 8
        menu = true
    }

    if (prato == 'carne') {
        tempoDoPrato = 15
        menu = true
    }

    if (prato == 'feijão') {
        tempoDoPrato = 12
        menu = true
    }

    if (prato == 'brigadeiro') {
        tempoDoPrato = 8
        menu = true
    }

    // Se entrar qualquer outro prato diferente dos 5 acima, vai retornar prato inexistente

    if (menu == false) {
        mensagem = 'prato inexistente'
    }
    
    // Condições
    // Nesta parte foram feitas as tratativas para cada tempo: tempo padrão, duas vezes maior e 3 vezes maior e tempo insuficiente

    if (menu == true) {
        mensagem = "Prato pronto, bom apetite!"

        if (tempo > tempoDoPrato * 2) {
            mensagem = "queimou"
        }

        if (tempo > tempoDoPrato * 3) {
            mensagem = "kabummm"
        }

        if (tempo < tempoDoPrato) {
            mensagem = "tempo insuficiente"
        }
    }

    // Mensagem a ser exibida
    console.log(`${prato} - ${mensagem}`)

}

// Testando as mensagens para cada prato e tempo

esquentar(9, 'pipoca');
esquentar(10, 'pipoca');
esquentar(12, 'pipoca');
esquentar(21, 'pipoca');
esquentar(31, 'pipoca');

esquentar(7, 'macarrão');
esquentar(8, 'macarrão');
esquentar(17, 'macarrão');
esquentar(25, 'macarrão');

esquentar(14, 'carne');
esquentar(15, 'carne');
esquentar(31, 'carne');
esquentar(46, 'carne');

esquentar(11, 'feijão');
esquentar(12, 'feijão');
esquentar(25, 'feijão');
esquentar(37, 'feijão');

esquentar(7, 'brigadeiro');
esquentar(8, 'brigadeiro');
esquentar(17, 'brigadeiro');
esquentar(25, 'brigadeiro');

esquentar(15, 'pizza');