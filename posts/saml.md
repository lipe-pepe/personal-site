---
title: "O que é SAML (Security Assertion Markup Language)?"
subtitle: "Explicando a autenticação SAML"
date: "2023-01-23"
---

Uma vez que já falei sobre [autenticação](/posts/autenticacao-de-usuario) em geral e sobre SSO, podemos falar sobre **SAML**. SAML é a sigla para Security Assertion Markup Language (linguagem de marcação de asserção de segurança). Sim, é mais uma sigla estranha, com um nome que também não é muito intuitivo, mas não é difícil de entender.

# O que é o SAML?

O SAML é uma tecnologia usada para fazer autenticação com _logon único_. Isso significa que, usando SAML, o usuário pode fazer login uma única vez e acessar vários sites ou aplicativos diferentes. Em outras palavras, o SAML possiblita o SSO. Pelo SAML, um provedor de identidade centraliza a autenticação, que é realizada só uma vez, e permite que o usuário acesse vários provedores de serviço com essa única autenticação.

Um exemplo cotidiano que pode explicar o SAML é sua carteira de identidade 👤. Quando você vai entrar em algum lugar e mostra a carteira de identidade, o fiscal somente verifica a sua carteira e permite sua passagem. Não há a necessidade de fazer testes de DNA, verificar sua certidão de nascimento, perguntar a outra pessoa se você é você... Após expedida sua identidade, você usa ela para entrar em todos os lugares - cinema, aeroporto, teatros, etc. Nesse exemplo, os estabelecimentos são os provedores de serviços, lugares que você quer acessar. A sua identidade são as credenciais autenticadas pelo SAML. O órgão expedidor da sua identidade, por exemplo o Detran, é o provedor de identidade que te autenticou. O Detran não precisa verificar sempre sua identidade, pois como todos os provedores utilizam o mesmo padrão (a carteira de identidade nacional), todos confiam na oficialidade da sua carteira. Mais fácil de entender assim, né?

E é por isso também que dizemos que o SAML é um padrão aberto. É um conjunto de normas em que todos os participantes aceitam e confiam.

### Provedores SAML

Até já falamos sobre os provedores SAML no exemplo acima, mas para reiterar, vamos falar sobre eles. Existem dois provedores SAML - os de **identidade** e os de **serviços**.

Um provedor de serviços é qualquer site ou aplicativo que usa SAML e o usuário deseja entrar. Ele precisa da autenticação do provedor de identidade para dar autorização ao usuário.

Um provedor de identidade é um sistema que faz a autenticação do usuário para verificar sua identidade e envia ao provedor de serviços os dados de autenticação. Os dados de autenticação são enviados no que chamamos de asserção SAML. Alguns provedores de identidade conhecidos são o Microsoft Active Diretory e o Azure.

### Asserção SAML

Uma asserção SAML é um documento XML (Extensible Markup Language) que contém os dados de autenticação do usuário e é enviado do provedor de identidade ao provedor de serviços. Só para constar, XML é uma linguagem que o SAML decidiu usar para padronizar suas comunicações. As asserções SAML podem ser de três tipos:

- **Asserção de autenticação**: é enviada para comprovar a identidade do usuário e indicam o método de autenticação usado e o tempo de login permitido.

- **Asserção de atribuição**: passam atributos SAML, algumas informações sobre o usuário, para o provedor de serviços.

- **Asserção de decisão de autorização**: fala ao provedor de serviços se o usuário está autorizado a acessar o serviço ou não, e nesse caso, porquê não.

# Como funciona o SAML?

Bom, vamos dar um exemplo real e prático de como funciona o SAML. Nesse exemplo, você é um funcionário de uma expresa que usa SSO com SAML. As coisas acontecem assim:

1. Você faz login no sistema pela manhã. Esse sistema foi fornecido pelo provedor de identidade.

2. O sistema faz a autenticação.

3. Você entra em algum aplicativo usado pela empresa, por exemplo o Workday. Lembre que ele é um provedor de serviços.

4. Por trás dos panos, Workday se comunica com o sistema para ver se o usuário está autenticado e o que ele está autorizado a fazer.

5. O sistema envia as asserções ao Workday, dizendo que identificou e autorizou sua entrada.

6. Você consegue logar no Workday, sem ter que realizar um segundo login.

Agora que está bem explicado, dá pra ver que é simples, não é? Não tão fácil deve ser implementar Single Sign On e SAML no seu projeto... Mas eventualmente, quando eu tentar, eu escrevo sobre a experiência aqui no blog e edito esse artigo para você poder continuar acompanhando o assunto! Fica ligado, hein? 😉
