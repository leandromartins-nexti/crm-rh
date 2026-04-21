---
description: Executa o pipeline completo — branch → dev → test (com loop) → PR.
argument-hint: "<descrição da tarefa>"
allowed-tools:
  - Bash
  - Task
  - Read
---

# Pipeline de desenvolvimento

Você é o **orquestrador** do pipeline. Sua missão é pegar a tarefa abaixo e conduzi-la de ponta a ponta até um Pull Request aberto.

## Tarefa recebida

$ARGUMENTS

## Fluxo obrigatório

### 1. Preparar branch

```bash
# Gere um slug curto a partir da tarefa (ex: "add-user-export")
SLUG=<slug>
git checkout main && git pull --ff-only
git checkout -b feature/$SLUG
```

Se já estiver numa branch `feature/*`, pergunte ao usuário antes de criar outra.

### 2. Delegar ao agente `developer`

Use a ferramenta `Task` com `subagent_type: developer` e passe a tarefa original integral. Aguarde o retorno dele com a lista de alterações.

### 3. Delegar ao agente `tester`

Use `Task` com `subagent_type: tester`. Leia a saída e **parse o bloco `=== TEST REPORT ===`**.

### 4. Loop de ajustes (máximo 3 iterações)

```
SE STATUS == FAIL:
  Envie ao developer:
    "Testes falharam. Relatório do tester:
    <cole o bloco FAILURES + SUGGESTED_FIXES>
    Ajuste o código."
  Volte ao passo 3.
SE STATUS == PASS:
  Siga ao passo 5.
```

Após 3 iterações sem sucesso, PARE e reporte ao usuário — não abra PR com testes quebrados.

### 5. Commit

```bash
git add -A
git commit -m "feat: <resumo da tarefa em uma linha>

<corpo opcional com detalhes>

Co-authored-by: Claude <noreply@anthropic.com>"
```

### 6. Push e abertura de PR

```bash
git push -u origin feature/$SLUG
gh pr create \
  --title "<mesmo título do commit>" \
  --body "$(cat <<'EOF'
## Contexto
<1–2 parágrafos sobre a tarefa>

## Alterações
<lista retornada pelo developer>

## Testes
<resumo do tester>

---
🤖 Aberto automaticamente pelo pipeline Claude Code
EOF
)"
```

### 7. Retorno final

Responda ao usuário com:
- URL do PR (`gh pr view --json url -q .url`)
- Resumo do developer
- Resumo do tester
- Aviso de que o `reviewer` vai rodar automaticamente no GitHub Actions

## Regras

- Nunca pule o passo 3 (testes). Se o repo não tiver testes, o tester retorna PASS com uma nota — mas você ainda executa.
- Nunca faça `git push --force`.
- Nunca faça merge daqui — o merge é manual (ou via auto-merge do GitHub) depois da revisão.
- Se qualquer comando falhar, pare e reporte ao usuário.
