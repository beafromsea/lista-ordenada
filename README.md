# 🖥️  Ferramenta de Ordenação de Propriedades CSS

Neste projeto temos uma **Ferramenta de Ordenação de Propriedades CSS** e com ela é possível inserir uma lista de propriedades CSS, ordena-la alfabeticamente e visualizar o resultado no terminal.


## 🚀 Tecnologias
Projeto desenvolvido com as tecnologias:

- [Node.js](https://nodejs.org/en/) (versão v20.5.1)
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
  cd lista-ordenada
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


## 📖 Referências

 - [NodeJS - documentação](https://nodejs.org/en/docs)
 - [Readline-sync - documentação](https://www.npmjs.com/package/readline-sync)

*Feito por Beatriz Santos🖤*
