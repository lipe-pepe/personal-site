---
title: "O que é Dart?"
subtitle: "Uma visão geral sobre a linguagem"
date: "2023-03-16"
---

Talvez você nunca tenha ouvido falar de Dart, como era o meu caso até algum tempo atrás. Mas, talvez você, assim como eu, já tenha ouvido falar sobre Flutter. O Flutter é um framework de desenvolvimento de aplicativos usado principalmente para o mobile. Eis que eu, indo iniciar os estudos de mobile com Flutter, esbarro nesse tal de Dart. Então, decidi trazer um pouco sobre essa linguagem pra cá.

# O que é Dart? 🎯

O Dart é uma linguagem de programação em que se baseia o Flutter. Então, se você quiser aprender a programar apps mobile com o Flutter, vai ter que aprender Dart. Se você já sabe C ou C++, vai ver que o Dart tem uma sintaxe bem parecida. É molezinha nesse caso.

Mas a linguagem não se limita somente a mobile. Ela também pode ser usada para apps web e desktop. O Dart foi criado pela Google em 2011, com o objetivo de bater de frente com o JavaScript, que dominava a web. Não deu muito certo. O JS continua dominando a web, mas o Dart teve impacto quando foi adotado pelo Flutter (que também foi feito pela Google).

Uma das principais características do Dart é a sua velocidade de desenvolvimento. A linguagem foi projetada para ser simples, segura e rápida. Vamos ver quais são as coisas que contribuem para essa produtividade.

### Tipagem

O Dart é uma linguagem fortemente tipada. Isso significa que, pra escrever código em Dart, você sempre tem que definir o tipo da sua variável. Às vezes quem está vindo de linguagens com tipagem dinâmica, tipo o Python, pode ter dificuldade de entender como isso funciona, mas rapidinho isso entra na cabeça. A diferença da tipagem do Dart é que ela é estática, ao invés de dinâmica. Isso significa que as variáveis tem um tipo fixo desde quando são declaradas e o seu valor precisa ser daquele tipo, senão o programa não roda e acusa um erro. Isso ajuda a diminuir os erros que podem aparecer durante a execução do programa.

Mas, na verdade, o Dart é flexível. É possível usar tipagem dinâmica também, definindo o tipo de sua variável como _dynamic_. Isso pode ser útil por exemplo, se você tem uma lista de objetos com diferentes valores, como uma lista que representa uma pessoa com nome, idade e altura, por exemplo. Esses três atributos tem tipos diferentes, então o tipo da lista pode ser definido como dinâmico. Tem alternativas melhores pra esse exemplo, mas é só um exemplo.

Hoje eu até prefiro linguagens com tipagem estática pela organização e robustez do código. Ponto pro Dart. Se eu posso usar TypeScript, por exemplo, eu prefiro do que usar JavaScript. E sim, o TypeScript é uma versão com tipagem estática do JavaScript.

### Null-safety

Uma das coisas que mais aparecem quando se pesquisa sobre o Dart é sobre o null safety. Isso significa que o código não permite que uma variável tenha valor nulo a não ser que você diga que ela pode. Mais uma vez, isso previne erros em tempo de execução e crashes no seu app. É mais uma coisa que contribui pra robustez do código.

Os erros que isso previne são chamados de erros de valor nulo. Um exemplo deles é se você quer receber um dado do backend, mas esse dado ainda não chegou. Ao tentar acessá-lo, a aplicação pode lançar um erro de valor nulo e provavelmente vai crashar (parar de funcionar). A vantagem do null safety é que ele não deixa chegar a esse ponto. Você vai ter que explicitar que a variável pode ser nula para evitar esse tipo de problema.

### Compilação Just-in-Time

Isso é uma coisa boa demais, que contribui muito pra produtividade. O Dart possui um compilador JIT (just-in-time). Isso significa que, durante a execução do programa, ou seja, enquanto você está testando o app, ele compila o código. Assim, se você estiver rodando seu código e fizer uma alteração, ele vai atualizar a execução na hora. Não há a necessidade de parar a execução e rodar novamente. O nome disso é **hot-reload**. Talvez isso pareça pouca coisa, mas é muito bom pra velocidade do desenvolvimento.

Imagina se a cada mínima alteração no código você tivesse que parar de rodar e rodar de novo? Provavelmente, pela repetição do processo, você ia parar de rodar a cada alteração e só testar o app depois de alterar muita coisa. Só que aí, verificar e mitigar os erros seria mais trabalhoso e demorado. Basicamente, seria uma bola de neve - você só vê os erros após mudar muita coisa, mas depois de ver os erros é obrigado a mudar muita coisa. Por isso o JIT é tão vantajoso.

# Por que aprender Dart?

Chegamos aos motivos que fazem a linguagem valer a pena. Levando em conta a história da linguagem e as suas características, as vantagens de aprender Dart são:

- **Abrangência:** Como já disse, você pode usar a linguagem para desenvolver apps mobile, web e desktop, apesar da força que ela tem no mobile. Pode ser bom aprender uma única linguagem e usar em diferentes produtos.

- **Facilidade de aprender:** Se você já tiver contato com Java ou uma das linguagens C, o Dart é muito familiar. Mas, mesmo se não tiver, é uma linguagem relativamente fácil de aprender.

- **Popularidade:** Dart se tornou uma linguagem muito popular, principalmente em função do Flutter. Anteriormente, o React Native tinha destaque na área de desenvolvimento mobile, mas hoje o Flutter é o framework mais usado. Você pode conferir isso e também outras estatísticas nesse [levantamento anual do Stack Overflow](https://survey.stackoverflow.co/2022/#most-popular-technologies-language-prof). A coisa boa da popularidade é a quantidade de documentação que teremos na internet, tanto a documentação oficial, quanto códigos de outros devs, dúvidas em fóruns e etc. Isso é definitivamente um ponto a se considerar na hora de escolher uma linguagem.

Bom, esses são os principais aspectos do Dart. De cara, dá pra perceber o quão vantajoso e produtivo pode ser utilizar essa linguagem. No meu primeiro contato, eu já senti que é uma linguagem fácil de aprender. Conforme eu for aprendendo mais, trago novos conteúdos e novas visões sobre Dart e Flutter pra cá!
