# Honey Trick Protocol — Área de Miembros

Área de membros do **Honey Trick Protocol** (LATAM, espanhol, homens 40+).
Adaptada do app francês `gelatinemembers` (Protocole Vitalité). São três arquivos, sem dependências e sem build: `index.html`, `styles.css` e `app.js`.
Todo o estado do membro (dose, progresso, notas, acesso ao 7x) fica no `localStorage` do navegador.

## O que tem no app

| Aba | Conteúdo |
|---|---|
| **Inicio** | Saudação, dia do ciclo, lembrete da dose, progresso, retomar o programa, rotina do dia |
| **Protocolo** | 8 módulos em 3 blocos (Fundamentos · La práctica diaria · Los 21 días) |
| **Mi dosis** | Questionário de 4 perguntas → dose personalizada do elixir + 3 preparos |
| **Progreso** | Calendário de 21 dias, avanço, detalhe, energia ao acordar (1–5), notas |
| **7X** | Acelerador del Caballo 7x — 6 protocolos, **bloqueados** por padrão |

## A receita (elixir de miel)

Mel cru, água morna (nunca fervendo), canela de Ceilão, gengibre fresco e limão, em jejum pela manhã.
A quantidade de mel depende da glicemia: quem responde "prediabetes" ou "diabetes" cai em ½ colher de chá
e na versão baixa em açúcar, com aviso para consultar o médico. As tabelas ficam em `computeDose()`
(`MIEL_PESO`, `MIEL_AZUCAR`, `AGUA`, `CANELA`, `JENGIBRE`, `LIMON`, `CYCLE_DAYS`, `CYCLES`).

## Os 3 ajustes antes de colocar no ar

Tudo fica no topo de `app.js`, em `CONFIG`:

```js
const CONFIG = {
  acceleratorUrl: "#",                               // 1. página de compra avulsa do 7x
  acceleratorCode: "CABALLO7X",                      // 2. código enviado ao cliente após comprar o 7x
  supportEmail: "soporte@honeytrickprotocol.com",    // 3. e-mail exibido em Recursos
  totalDays: 21
};
```

1. **`acceleratorUrl`**: use uma página de checkout **avulsa**, não a URL do upsell one-click do funil,
   que só vale uma vez, logo depois da compra. Enquanto for `"#"`, o botão mostra uma mensagem de erro em vez de abrir um link morto.
2. **`acceleratorCode`**: o código que vai no e-mail de confirmação do 7x. O membro digita na aba 7X
   para liberar os 6 protocolos. A validação ignora maiúsculas, espaços e hífens.
3. **`supportEmail`**: o endereço atual é provisório. Troque pelo e-mail real de suporte.

## Adicionar os vídeos

Em `VIDEOS`, troque `null` pelo ID do YouTube do módulo. Enquanto for `null`, aparece o bloco "Video próximamente".
Todos os módulos já têm conteúdo escrito, então o app funciona sem vídeo nenhum.

## Pontos de atenção

- **Mel é açúcar.** A quantidade tem teto (2 colheres de chá no máximo) e cai para ½ colher com glicemia alta.
  O bloco de precauções aparece em Mi dosis e em Recursos. Não aumente esses valores: o público inclui diabéticos e homens em tratamento.
- **Canela de Ceilão, não cassia**, e no máximo ¼ de colher de chá. A cassia em excesso faz mal ao fígado.
- **Gengibre e canela** podem interagir com anticoagulantes e remédios de pressão. O aviso está nas precauções.
- **Não há login.** O acesso depende de uma URL não indexada (`noindex` + `X-Robots-Tag`). O desbloqueio do 7x
  acontece no navegador: organiza o acesso, mas não protege o conteúdo.
- **O estado é local.** Quem troca de celular começa do zero.

## Deploy

Vercel, projeto estático. Um push na `main` publica.
