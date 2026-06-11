# Como editar o conteúdo da landing page

O conteúdo editável fica na pasta `content`:

- `content/pt.js`: português
- `content/en.js`: inglês
- `content/es.js`: espanhol

O design, as seções e o layout continuam definidos por `index.html` e `styles.css`.

## Regra mais importante

Nos arquivos de conteúdo, altere somente os valores depois dos dois-pontos.

Exemplo:

```js
"Agendar conversa": "Agendar uma reunião"
```

Não altere o texto à esquerda (`"Agendar conversa"`). Ele é a chave usada para localizar o conteúdo na página.

## Alterar textos e CTAs

Abra o arquivo do idioma desejado e procure a seção `texts`.

Use a busca do editor para encontrar o texto atual. Altere somente o valor à direita.

Para manter os três idiomas consistentes, revise os arquivos `pt.js`, `en.js` e `es.js`.

## Alterar links oficiais e redes sociais

Em cada arquivo de idioma, procure a seção `links`:

```js
"linkedinCompany": "https://www.linkedin.com/company/phytochemlab/",
"instagram": "https://www.instagram.com/phytochem.lab/",
"alineLinkedIn": "https://www.linkedin.com/in/alineborgesreche/",
"ilzaLinkedIn": "https://www.linkedin.com/in/ilza-maria-oliveira-sousa-48b1352b9/",
"linkedinCompanyLabel": "linkedin.com/company/phytochemlab",
"instagramLabel": "@phytochem.lab"
```

Altere apenas o valor à direita. Os campos terminados em `Label` controlam o texto curto exibido na área de conexões. Para usar o mesmo link em todos os idiomas, faça a mesma alteração nos três arquivos.

## Alterar o e-mail comercial

Na seção `links`, altere:

```js
"commercialEmail": "comercial@phytochem.com.br"
```

Esse valor atualiza os links de e-mail, o rodapé, a área de conexões e o participante do convite do Google Calendar.

## Alterar SEO

Na seção `meta`, é possível editar:

- `title`: título exibido na aba e usado por mecanismos de busca;
- `description`: descrição da página;
- `lang`: código do idioma. Normalmente não precisa ser alterado.

O endereço público e os links canônicos ficam em `links.siteUrl`.

## Alterar dados da agenda

Na seção `scheduler`, é possível alterar:

- `defaultSubject`: assunto usado quando o visitante não informa um assunto;
- `details`: descrição incluída no convite do Google Calendar.

## Testar localmente

Na pasta do projeto, execute:

```powershell
python -m http.server 8000
```

Depois abra:

```text
http://localhost:8000/
```

Teste os botões `PT`, `EN` e `ES`, os links oficiais, o e-mail e a janela de agendamento.

## Publicar com segurança

Antes de publicar:

```powershell
git status
git diff
```

Confirme que somente os arquivos desejados foram alterados. Trabalhe em uma branch separada e crie um commit:

```powershell
git switch -c conteudo/minha-atualizacao
git add content COMO_EDITAR.md index.html script.js
git commit -m "Atualizar conteúdo da landing page"
```

Depois de revisar a página localmente, integre a branch na `master`:

```powershell
git switch master
git merge conteudo/minha-atualizacao
git push origin master
```

O GitHub Pages publica automaticamente as alterações enviadas para a branch configurada para publicação.
