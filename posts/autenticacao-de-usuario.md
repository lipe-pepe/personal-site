---
title: "Autenticação de Usuários"
subtitle: "Tudo sobre autenticação"
date: "2023-01-18"
---

Todo mundo tem uma noção básica do que é autenticação, eu acho. Ou, em termos mais leigos, login. É colocar seu usuário e a senha para acessar numa plataforma. Mas autenticação vai além disso, pode ter vários tipos diferentes e alternativas para quando você for desenvolver sua aplicação. Vamos ver, então, tudo o que é importante sobre autenticação, explicado da forma mais fácil possível.

# O que é autenticação?

Autenticar significa verificar a verdade. Quando falamos de sistemas, autenticação corresponde aos processos de cadastro e login em sistemas que permitem que a identidade do usuário seja verificada. Geralmente a verificação acontece por meio de um nome de usuário (username) e uma senha, ou email e senha, dependendo da aplicação em questão. Mas existem outros tipos de autenticação dos quais falaremos nesse post.

Basicamente, na autenticação o usuário coloca seus dados de login num formulário, que é enviado pela [API](/posts/o-que-e-uma-api) da aplicação ao servidor. No servidor, os dados são comparados com as credenciais do usuário salvas em algum arquivo e o servidor retorna se as credenciais bateram ou não. Se sim, o usuário está autenticado, entra na plataforma e passamos para a etapa da autorização.

### Autenticação X Autorização

Autenticação e autorização são dois termos que podem se confundir. A diferença entre elas é que autenticação são os processos de verificação da identidade do usuário, enquanto autorização é o que define o que ele poderá ver e fazer na plataforma uma vez que já estiver autenticado. Por exemplo, se você está no Instagram e postou uma foto, somente você deve ser capaz de apagar aquela foto. Isso é autorização. As duas ferramentas juntas são importantíssimas para a segurança da sua aplicação.

# Formas de autenticação

Você já deve ter percebido que existem formas variadas de autenticação. Resumidamente, elas se dividem em autenticações baseadas em senha (as mais comuns) e sem senha. Antes de falar delas, é legal saber quais os fatores de autenticação que existem. Os fatores são os dados que o servidor usa para conferir se realmente é você que está tentando entrar no site. Eles podem ser de alguns tipos:

- coisas que você sabe, como uma senha que você memorizou, uma palavra-chave, um código PIN...
- coisas que você possui, como um email, cartões de acesso, tokens físicos...
- características suas, como a sua impressão digital, rosto, íris dos olhos...

Agora que sabemos os fatores que são comumente utilizados para autenticação, vamos ver os tipos de autenticação que utilizam esses fatores.

### Senhas

A autenticação mais conhecida e mais usada de todas é a senha. Aquela autenticação em que o usuário cria uma senha na hora de se registrar e tem que colocar a mesma senha sempre que for acessar o sistema. Ela é a mais usada por ser a mais fácil de implementar e a mais abrangente também. Nem todos têm acesso a um dispositivo com leitor de digital, por exemplo, mas todo mundo pode digitar a senha por meio do seu dispositivo.

Por outro lado, é a autenticação menos segura, pois hackers podem adivinhar a sua senha, ou usando conhecimento sobre você, ou usando alguma tecnologia de tentativa de senha (algum programa que teste milhares de senhas até bater). As pessoas têm o costume de usar a mesma senha para todas as suas contas de plataformas, o que é um grande risco para a segurança de seus dados. Além disso, as pessoas tendem a escolher padrões de senha ou palavras fáceis de descobrir. Bom, aí já estamos entrando em outro assunto, de segurança da informação, que quem sabe eu escrevo sobre também em algum momento...

### Biometria

A biometria é todo tipo de autenticação que envolve as características físicas do usuário, como a impressão digital, o reconhecimento facial, etc. É o padrão que vemos hoje em alguns smartphones, por exemplo. Ela é segura por um lado, pois as características físicas como digital e rosto são únicas para cada um. Por outro, também é possível burlar a autenticação de biometria. Um exemplo é se o criminoso usar imagens de alta resolução do seu rosto... O sistema vai permitir a entrada do usuário.

<!-- ### Email

(ESCREVER SOBRE O EMAIL) -->

### SSO, Sessões, Autenticação de dois fatores...

Existem formas de autenticação das quais podemos falar mais tecnicamente e ser mais específicos. Já que são assuntos grandes dentro de um assunto maior, eu separei elas em posts separados. Vale a pena acessar os links e ler sobre as que você tiver interesse. São elas:

- [SSO - Single Sign On](/posts/single-sign-on)

<!-- - [Autenticação de Dois Fatores (2FA)](/posts/autenticacao-2fa)
- Social Login (ver sobre)
- Session Based
- Token Based -->
