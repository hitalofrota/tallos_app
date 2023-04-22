<template>
    <p>Cadastro de Usuário</p>
    <div>
        <span>Nome do usuário</span>
        <input type="text" placeholder="Seu nome" />
    </div>
    <div>
        <span>Seu e-mail</span>
        <input type="text" placeholder="contato@email.com.br" />
    </div>
    <div>
        <span>Sua senha</span>
        <input type="password" placeholder="Senha com mais de 8 Caracteres" />
    </div>
    <div>
        <span>Confirme sua senha</span>
        <input type="password" placeholder="Confirme sua senha" />
    </div>
    <div>
        <button><a href="http://localhost:8081/login">Voltar</a></button>
        <!-- vai mandar o push com rota publica e depois vai voltar para a tela de login -->
        <button>Cadastrar</button>
    </div>
</template>