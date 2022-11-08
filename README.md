# Levante

## 🚀 Começando

Gerenciador de reservas.

### 🔧 Instalação

> É necessário ter Docker na sua máquina local para executar os seguintes comandos.

- Rode os serviços `frontend`, `backend` e `db` com o comando `docker-compose up -d --build`.
- Lembre-se de parar o `MySQL` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `levante_web`, `levante_api` e outro chamado `levante_db`.
- A partir daqui é ideal você acompanhar o log do container `levante_api` para ter certeza que o banco foi populado e a API está pronta para uso.

- Ele vai subir sua API na porta `3001`
- Aplicação Frontend na porta `3000`

> Acesso de usuário <br/>
`email: email@user.com` <br/>
`password: senhapadrao`

> Acesso de admin <br/>
`email: email@admin.com` <br/>
`password: senhapadrao`

