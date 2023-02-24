---
title: "O que é uma API?"
subtitle: "Entendendo APIs de forma fácil"
date: "2023-01-18"
---

Trabalhando como dev, eu tenho usado APIs frequentemente. Na minha empresa, a aplicação principal é dividida em dois projetos - um para o backend e um para o frontend. O problema é que, apesar de ter uma noção sobre o que são APIs, eu nunca pesquisei a fundo sobre elas e não saberia explicar pra um novato na área sobre o assunto. Por isso, estudei sobre elas e trago aqui uma explicação simples e fácil de entender.

## O que é uma API?

API significa Application Programming Interface (Interface de Programação de Aplicação em português). Basicamente, é uma interface que uma aplicação precisa possuir se quiser se comunicar com outras aplicações. Por interface, entenda como um conjunto de métodos que recebem e retornam algo para alguém. Elas fazem o papel de mensageiro.

Uma boa metáfora para elas é a do garçom 🤵. Quando você está num restaurante, você tem o cardápio com as opções e a cozinha com todos os ingredientes. Mas para conseguir comer, você precisa fazer um pedido à cozinha. Para isso serve o garçom. Você faz o pedido pro garçom e ele leva o pedido para a cozinha. A cozinha usa o pedido para preparar seu prato e, quando ele está pronto, o garçom leva o prato de volta pra você. O garçom é a API nesse exemplo.

Traduzindo em termos de tecnologia agora, usando o exemplo da minha empresa, seria algo assim... O frontend precisa de um dado do backend para exibir ao usuário. Ele então faz um pedido (request) para a API, que leva o pedido até o backend. O backend processa o pedido e retorna o dado requisitado. A API leva essa resposta do back (response) para o frontend, que agora pode exibir os dados.

Vale dizer que quando falamos de APIs, falamos de cliente e servidor. O cliente é o lado que está solicitando algo e o servidor é o lado que provê essa coisa. No exemplo do restaurante, você é o cliente, que pede um prato para o servidor (a cozinha). Assim fica mais fácil de entender, né?

Quer um exemplo mais concreto de como isso acontece no seu dia-a-dia? Quando você vai olhar a previsão de tempo no aplicativo do seu celular, os dados não estão no aplicativo. O aplicativo cliente faz um pedido à API de um software do instituto meteorológico, o servidor, que retorna os dados. Se você mudar a cidade que deseja ver o clima, um pedido novo será feito e retornará uma nova resposta com as informações para aquela cidade.

Pronto, agora você sabe o que é uma API e pra quê ela serve. E sempre que se esquecer, tenta pensar na metáfora do garçom! Não tem jeito de não saber mais.
