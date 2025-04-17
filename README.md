# 📄 EngegraphRTD - Contador de Folhas

Bem-vindo ao **EngegraphRTD - Contador de Folhas**, um sistema simples e eficiente desenvolvido para auxiliar na contagem de folhas no Registro de Títulos e Documentos (RTD).

🔢 Com ele, você pode calcular facilmente o número de folhas finais com ou sem o uso do verso (lado), além de gerar queries SQL personalizadas para consultar dados de livros completos.

---

## 🚀 Funcionalidades

✅ Cálculo de contagem de folhas:
- 📘 **Com uso de verso (Frente e Verso)**
- 📗 **Sem uso de verso (apenas Frente)**

✅ Modos especiais para livros completos:
- 📒 Livro Completo (Com Lado)
- 📙 Livro Completo (Sem Lado)

✅ Geração de **queries SQL automáticas** com base no número e letra do livro.

✅ Interface leve, responsiva e amigável, com uso de **Bootstrap** e **FontAwesome** para visual moderno.

---

## 🧩 Como usar

1. Acesse a tela principal (`index.html`);
2. Selecione o tipo de cálculo desejado:
   - "Contar com Lado"
   - "Contar sem Lado"
   - "Livro Completo (Com Lado)"
   - "Livro Completo (Sem Lado)"
3. Preencha os campos solicitados (como número de folha, lado inicial, quantidade de páginas etc.);
4. Clique em **Calcular** ou **Gerar Consulta**;
5. Copie o resultado da consulta SQL (quando aplicável) para seu sistema de banco de dados.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 + CSS3**
- **JavaScript**
- **Bootstrap 5**
- **FontAwesome**
- Git e GitHub para versionamento

---

## 📁 Estrutura de Diretórios

├── index.html
├── pages/
│   ├── com-lado.html
│   ├── sem-lado.html
│   ├── livro-completo-com-lado.html
│   └── livro-completo-sem-lado.html
├── js/
│   ├── com-lado.js
│   ├── sem-lado.js
│   ├── livro-completo-com-lado.js
│   └── livro-completo-sem-lado.js
├── assets/
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── icon.png


---

## 👨‍💻 Desenvolvedor

Este projeto foi desenvolvido com dedicação por **Diuliano** 🧠  
Caso tenha sugestões, melhorias ou queira colaborar, fique à vontade para abrir um _pull request_ ou _issue_ aqui no GitHub!

---

## 📝 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se livre para usar, modificar e distribuir conforme necessário.

---

> ⚠️ **Aviso:** Esse sistema foi criado para uso interno e auxiliar nos processos do RTD. Certifique-se de validar os resultados com as regras aplicáveis ao seu cartório ou instituição.

