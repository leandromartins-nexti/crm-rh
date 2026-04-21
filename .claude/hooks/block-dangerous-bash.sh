#!/usr/bin/env bash
# Bloqueia comandos bash perigosos antes da execução.
# Recebe JSON via stdin com tool_input.command.

set -euo pipefail

INPUT=$(cat)
CMD=$(echo "$INPUT" | jq -r '.tool_input.command // ""')

# Padrões que bloqueamos sempre
BLOCKED_PATTERNS=(
  "rm -rf /"
  "rm -rf ~"
  "rm -rf \$HOME"
  "git push --force"
  "git push -f "
  "git reset --hard origin"
  ":(){ :|:& };:"
)

for pattern in "${BLOCKED_PATTERNS[@]}"; do
  if [[ "$CMD" == *"$pattern"* ]]; then
    cat <<EOF
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Comando bloqueado pelo hook de segurança: padrão '$pattern'"
  }
}
EOF
    exit 0
  fi
done

# Libera normalmente
exit 0
