# <p align = "center"> Projeto LiteraBooks </p>

<p align="center">
<img height="150" width="400" src="./src/assets/images/readme_img.jpeg"> <br>
</p>

<p align = "center">
 
</p>

# Tabela de Conteúdos

* [Sobre](#sobre)
* [Documentação](#documentacao)
* [Tecnologias](#tecnologias)

# Resumo
 <h3>Você poderá fazer seu cadastro na nossa rede social e preencher seu perfil informando algumas de suas preferências, como: autor favorito, genêros favoritos, livro favorito, meta de leitura anual e muito mais!</h3>
<h3>  Ao entrar em nossa plataforma você receberá sugestões de livros baseados nos seus gostos preferidos, vendo um belo resumo do livro. </h3> 
<h3>  Além disso, você poderá ver quais as últimas leituras de outros usuários e saber o que eles acharam dos livros! </h3><br>




***

# Documentação


## 1 - Rotas de cadastro (autenticação com JWT)

<details>

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "name": "Ivan",
        "email": "ivan@hotmail.com",
        "password": "Ivan123*",
        "image": "https://blog.unis.edu.br/hubfs/carteirinha-nacional-do-estudante-o-que-e-importante-saber.jpg"
    }
    - status: 201
    - response: token


```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "ivan@hotmail.com",
    "senha": "Ivan123*"
    }
    - status: 201
    - response: token
```

</details>

## 2 - informações de usuários

<details>

```yml 
GET /infos/user (autenticada)
    - Rota que retorna as informações do usuário que está logado
    - headers: { "Authorization": "Bearer $token" }
    - body: {} 
    - status: 200
    - response: {
        "id": 3,
        "name": "Caio",
        "email": "caiovitor@hotmail.com",
        "password": "$2b$10$pg2.c0M7T3.7GezlXTe1Y.qYy/wCyEjk30JeRbKeGUciuNoWOljCq",
        "image": "https://img.elo7.com.br/users/picture/7EC5DD.jpg?85888342",
        "nextReading": null,
        "favoriteBook": "Uma breve história do tempo",
        "favoriteAuthor": "Stephen Hawking",
        "readingGoals": 4
        }
```

```yml 
GET /infos/users/:idUser (autenticada)
    - Rota que retorna as informações de um usuário especificado pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    - status: 200
    - response: {
        "id": 1,
        "name": "Admin",
        "email": "teste@hotmail.com",
        "password": "Caio123*",
        "image": "https://static.vecteezy.com/ti/vetor-gratis/p3/7166516-boss-administrator-head-avatar-profile-icon-with-tie-symbol-vector-illustration-vetor.jpg",
        "nextReading": null,
        "favoriteBook": "Um dia",
        "favoriteAuthor": "Nicholas Sparks",
        "readingGoals": 10
        }
```
    
```yml 
GET /infos/users (autenticada)
    - Rota que retorna as informações de todos os usuários cadastrados
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    - status: 200
    - response: [
        {
            "id": 1,
            "name": "Caio",
            "email": "caiovitor@hotmail.com",
            "password": "$2b$10$pg2.c0M7T3.7GezlXTe1Y.qYy/wCyEjk30JeRbKeGUciuNoWOljCq",
            "image": "https://img.elo7.com.br/users/picture/7EC5DD.jpg?85888342",
            "nextReading": null,
            "favoriteBook": "Uma breve história do tempo",
            "favoriteAuthor": "Stephen Hawking",
            "readingGoals": 4
        },
        {
            "id": 2,
            "name": "Marinaaa",
            "email": "marinaaa@hotmail.com",
            "password": "$2a$10$rYthprLiRcP/CxQHYX5lMuy4vCWxTGHId.4d9fEakHjgXefmMpzkG",
            "image": "123",
            "nextReading": null,
            "favoriteBook": null,
            "favoriteAuthor": null,
            "readingGoals": null
        },
    ]
```

</details>

## 3 - informações das resenhas

<details>

```yml 
POST /reviews/register (autenticada)
    - Adiciona uma nova resenha ao banco de dados
    - headers: { "Authorization": "Bearer $token" }
    - body: {
  "title": "As 7 leis espirituais do sucesso" ,
  "image": "https://m.media-amazon.com/images/I/81G7GJsELbL.jpg",
  "author": " Deepak Chopra",      
  "genreId": 9,
  "description": "descrição da resenha"
}
    - status: 201
    - response: "new review add"
```

```yml 
GET /reviews/getRecommendations (autenticada)
    - Retorna resenhas sugeridas ao usuário de acordo com seus genêros preferidos
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    - status: 200
    - response: [
        "first": [
        {
            "id": 16,
            "title": "Uma Breve História do Tempo",
            "image": "https://m.media-amazon.com/images/I/61AaXcdHXKS.jpg",
            "author": "Stephen Hawking ",
            "genreId": 8,
            "description": "descrição do livro",
            "userId": 1
        },
        {
            "id": 17,
            "title": "Sapiens: uma breve história da humanidade",
            "image": "https://m.media-amazon.com/images/I/71-ghLb8qML.jpg",
            "author": "Yuval Noah Harari",
            "genreId": 8,
            "description": "descrição do livro.",
            "userId": 1
        }
        ]
    
```

```yml 
GET /reviews/user (autenticada)
    - Retorna as resenhas cadastradas pelo usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    - status: 200
    - response: [
  {
    "id": 38,
    "title": "O Meu Pé de Laranja Lima",
    "image": "https://m.media-amazon.com/images/I/914xinLX3HL.jpg",
    "author": "José Mauro de Vasconcelos",
    "genreId": 2,
    "description": "descrição do livro.",
    "userId": 3
  },
  {
    "id": 39,
    "title": "O Meu Pé de Laranja Lima",
    "image": "https://m.media-amazon.com/images/I/914xinLX3HL.jpg",
    "author": "José Mauro de Vasconcelos",
    "genreId": 2,
    "description": "descrição do livro.",
    "userId": 3
  }
]
    
```

```yml 
GET /reviews/user/:idUser (autenticada)
    - Retorna as resenhas de um usuário especificado pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    - status: 200
    - response: [
  {
    "id": 38,
    "title": "Rede social",
    "image": "https://m.media-amazon.com/images/I/914xinLX3HL.jpg",
    "author": "Ben Mezrich",
    "genreId": 2,
    "description": "descrição do livro",
    "userId": 4
  }
]
    
```

```yml 
GET /reviews/:bookId" (autenticada)
    - Retorna a resenha de um livro especificado pelo seu id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    - status: 200
    - response: {
        "id": 23,
        "title": "Anjos e Demônios",
        "image": "https://m.media-amazon.com/images/I/41zzqil4SEL.jpg",
        "author": "Dan Brown",
        "genreId": 7,
        "description": "descrição do livro",
        "userId": 3
        }
    
```

</details>


## 4 - informações das preferências do usuário

<details>


```yml 
POST /preferences/genres (autenticada)
    - Insere os 3 genêros preferidos do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "genre1": "ciencias",
        "genre2": "biografia",
        "genre3": "infantil"
        }
    - status: 201
    - response: "insert preferences with succesful"
    
```

```yml 
POST /preferences/userspreferences (autenticada)
    - insere o livro e autor favoritos do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "favoriteBook": "Um dia",
        "favoriteAuthor": "Nicholas"
        }
    - status: 201
    - response: "Favorite Author and books includes in your perfil"
    
```

```yml 
POST /preferences/readingGoals (autenticada)
    - Insere a meta de leitura anual do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "readingGoals": "4"
        }
    - status: 201
    - response: "Reading goals includs in your perfil"
    
```
</details>




***



# Tecnologias
<div display='flex'>
<img height="80" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img height="80" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
<img height="80" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
<img height="80" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
<img height="80" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
<div>


## 🏁 Rodando a aplicação


Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/CaioVitor1/literaBooks_back.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias:

```
npm install
```

Em seguida, rode o seed para atualizar o banco de dados:

```
npm run dev:seed
```

Finalizado o processo, é só inicializar o servidor:
```
npm run dev
```

Para rodar os testes unitários: 
```
npm run test:unit
```

Para rodar os testes de integração:
```
npm run test:integration
```

---

Made with love by <a href='https://www.linkedin.com/in/caiovitor33/'> Caio Vitor </a>

