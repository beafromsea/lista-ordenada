# 🖥️  Ferramenta de Ordenação de Propriedades CSS

Neste projeto temos uma **Ferramenta de Ordenação de Propriedades CSS** e com ela é possível inserir uma lista de propriedades CSS, ordena-la alfabeticamente e visualizar o resultado no terminal.

O mesmo foi criado como requisito do curso de Formação Web Dev Fullstack - Resilia, com o intuito de colocar em prática o conteúdo estudado no módulo 4, onde o que foi solicitado é:

          Uma empresa de desenvolvimento de software precisa de uma ferramenta que vai
          receber uma lista de propriedades de CSS (ex: background-color, font-size, text-align)
          e vai devolvê-la ordenada de A-Z.


## 🚀 Tecnologias
Projeto desenvolvido com as tecnologias:

- [Node.js](https://nodejs.org/en/)
- [readline-sync](https://www.npmjs.com/package/readline-sync)

## 📍 Rodando localmente
***Certifique-se de ter o Node.js instalado em seu sistema.***
 - [NodeJS - Download](https://nodejs.org/pt-br/download)

***Clone o projeto***
 - com HTTPS:
```bash
  git clone https://github.com/beafromsea/lista-ordenada.git
```

***Entre no diretório do projeto***

```bash
  cd projeto-ferramenta
```

***Abra com code (opcional)***

```bash
  cd code .
```

***Instale as dependências***

```bash
  npm install
```

***Inicie o servidor***

```bash
  npm start
```


## 📄 Documentação da API

#### Retorna todas as propriedades CSS em ordem alfabética

```bash
  npm start
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `propriedades` | `array` | **Obrigatório**. Uma lista de propriedades CSS a serem ordenadas. |
| `SAIR` | `string` | **Obrigatório**. Uma lista de propriedades CSS a serem ordenadas. |


### ➡️ Entrada - ***Recebe uma lista de propriedades CSS:***

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
 margin-bottom   
```
[enter]

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
background
```
[enter]

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
font-size 
```
[enter]

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
sair
```
[enter]

***Retorna todas as propriedades CSS em ordem alfabética:***

### ⬅️ Saída - ***Propriedades ordenadas:***

*BACKGROUND*

*FONT-SIZE*

*MARGIN-BOTTON*

#### 🎉🎉🎉 Espero que esse projeto possa lhe auxiliar.

*Feito por Beatriz Santos🖤*

## 📖 Referência

 - [NodeJS - documentação](https://nodejs.org/en/docs)
