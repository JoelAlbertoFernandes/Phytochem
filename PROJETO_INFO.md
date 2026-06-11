# Informações Oficiais do Projeto PHYTOCHEM

Este documento registra a arquitetura oficial, os fluxos de trabalho e as convenções aprovadas para a landing page da PHYTOCHEM.

## 1. Identidade do projeto

- **Projeto:** Landing page institucional PHYTOCHEM
- **Objetivo:** apresentar a empresa, suas soluções científicas, projetos de P&DI, equipe, canais oficiais e formas de contato.
- **Tecnologia:** site estático em HTML, CSS e JavaScript, publicado pelo GitHub Pages.
- **Repositório GitHub:** `https://github.com/JoelAlbertoFernandes/Phytochem`
- **Branch de publicação:** `master`

## 2. Diretório oficial

O diretório oficial e raiz principal do projeto é:

```text
H:\Meu Drive\Projetos\Phytochem\Landing-page\Phytochem
```

Antes de qualquer alteração:

1. Confirmar que o diretório de trabalho é exatamente o caminho acima.
2. Confirmar que a pasta `.git` está presente nessa raiz.
3. Verificar o estado atual com `git status`.

## 3. URL pública

```text
https://joelalbertofernandes.github.io/Phytochem/
```

## 4. URL GitHub Pages

```text
https://joelalbertofernandes.github.io/Phytochem/
```

A publicação é atualizada automaticamente pelo GitHub Pages após alterações aprovadas serem enviadas para a branch `master`.

## 5. Estrutura oficial de diretórios

```text
Phytochem/
|-- .git/
|-- assets/
|   `-- images/
|-- content/
|   |-- pt.js
|   |-- en.js
|   `-- es.js
|-- index.html
|-- script.js
|-- styles.css
|-- COMO_EDITAR.md
`-- PROJETO_INFO.md
```

## 6. Responsabilidade de cada arquivo

### `index.html`

- Contém a estrutura semântica e a ordem oficial das seções.
- Mantém o conteúdo em português como fallback inicial e base para SEO.
- Carrega os arquivos de conteúdo, estilos e JavaScript.
- Não deve ter sua estrutura ou classes alteradas durante edições comuns de conteúdo.

### `script.js`

- Controla o seletor de idioma.
- Aplica textos, metadados, links e dados de contato vindos da pasta `content/`.
- Controla interações como menu, animações e agenda.
- Não deve ser alterado durante edições comuns de conteúdo.

### `styles.css`

- Define todo o design, layout e responsividade aprovados.
- Não deve ser alterado durante edições comuns de conteúdo.

### `content/pt.js`

- Fonte editável do conteúdo em português.
- Contém textos, CTAs, SEO, links oficiais, e-mail e dados da agenda.

### `content/en.js`

- Fonte editável do conteúdo em inglês.
- Contém textos, CTAs, SEO, links oficiais, e-mail e dados da agenda.

### `content/es.js`

- Fonte editável do conteúdo em espanhol.
- Contém textos, CTAs, SEO, links oficiais, e-mail e dados da agenda.

### `assets/`

- Contém os arquivos visuais utilizados pelo site.
- As imagens oficiais ficam em `assets/images/`.
- Não substituir, remover ou renomear imagens sem validação visual.

### `COMO_EDITAR.md`

- Manual prático para editar textos, links, e-mail, CTAs, SEO e agenda.
- Deve ser consultado antes de qualquer alteração de conteúdo.

### `PROJETO_INFO.md`

- Referência oficial da arquitetura, dos fluxos e das convenções do projeto.
- Deve ser atualizado quando uma decisão arquitetural aprovada mudar.

## 7. Idiomas suportados

O site suporta:

- Português: `pt` / `pt-BR`
- Inglês: `en`
- Espanhol: `es`

Os três idiomas devem permanecer disponíveis e sincronizados. O seletor de idioma deve continuar funcionando após qualquer alteração.

## 8. Fluxo de edição de conteúdo

1. Confirmar a raiz oficial e executar `git status`.
2. Trabalhar em uma branch separada.
3. Consultar `COMO_EDITAR.md`.
4. Editar somente os valores necessários em:
   - `content/pt.js`
   - `content/en.js`
   - `content/es.js`
5. Preservar chaves, nomes de propriedades, estrutura dos objetos, links não relacionados e lógica.
6. Revisar os três idiomas para manter consistência.
7. Não alterar design, estrutura ou JavaScript funcional em uma edição comum de conteúdo.

## 9. Fluxo de validação

Antes de aprovar uma alteração:

1. Validar a sintaxe JavaScript:

```powershell
node --check content/pt.js
node --check content/en.js
node --check content/es.js
node --check script.js
```

2. Iniciar um servidor local:

```powershell
python -m http.server 8000
```

3. Abrir:

```text
http://localhost:8000/
```

4. Verificar:
   - carregamento da página;
   - português, inglês e espanhol;
   - seletor de idioma;
   - textos e CTAs alterados;
   - links oficiais e e-mail;
   - agenda;
   - SEO básico;
   - responsividade;
   - ausência de erros no console;
   - ausência de caracteres corrompidos de encoding.

5. Revisar as diferenças:

```powershell
git status
git diff
git diff --check
```

## 10. Fluxo de publicação

1. Validar localmente todas as alterações.
2. Confirmar que somente os arquivos aprovados foram alterados.
3. Criar um commit claro na branch de trabalho.
4. Integrar a alteração aprovada na branch `master`.
5. Fazer push da `master` para `origin/master`.
6. Acompanhar o deployment do GitHub Pages.
7. Verificar a URL pública e os recursos alterados.

Nunca publicar automaticamente sem autorização explícita.

## 11. Convenções para futuras alterações

- Usar a raiz oficial registrada neste documento.
- Executar `git status` antes e depois de qualquer trabalho.
- Criar uma branch separada para alterações.
- Preservar o design e a estrutura aprovados, salvo solicitação explícita.
- Em edições de conteúdo, alterar somente os arquivos em `content/`.
- Manter português, inglês e espanhol sincronizados.
- Preservar UTF-8.
- Não alterar chaves da seção `texts`; alterar somente os valores.
- Não remover propriedades ou arquivos sem análise prévia.
- Não fazer commit, push ou publicação sem autorização explícita.
- Validar localmente antes de integrar ou publicar.
- Manter `COMO_EDITAR.md` focado na edição prática.
- Manter `PROJETO_INFO.md` focado na arquitetura, nos fluxos e nas decisões aprovadas.
- Usar o histórico Git para detalhes técnicos; registrar aqui apenas marcos relevantes.

## 12. Marcos arquiteturais aprovados

- Criação da primeira landing page institucional PHYTOCHEM.
- Publicação do site estático pelo GitHub Pages.
- Correção do logo utilizado na publicação.
- Aplicação dos ajustes oficiais V3 da landing page.
- Suporte aos idiomas português, inglês e espanhol.
- Separação do conteúdo editável em:
  - `content/pt.js`
  - `content/en.js`
  - `content/es.js`
- Substituição do antigo `translations.js` pela camada oficial `content/`.
- Criação do manual prático `COMO_EDITAR.md`.
- Definição do diretório oficial do projeto.

## 13. Data da última revisão

```text
11 de junho de 2026
```
