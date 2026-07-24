# Guia de imagens da landing TudoLimpo

Todas as imagens editáveis ficam centralizadas em `TUDOLIMPO_IMAGES`, no arquivo `script.js`.

Não altere caminhos de imagens diretamente no HTML, CSS ou em outros objetos de conteúdo. Use sempre a central.

## Pastas

As imagens devem ficar em:

```text
assets/images/
  brand/
  hero/
  services/
  about/
  before-after/
  testimonials/
  backgrounds/
  placeholders/
  icons/
```

## Tabela de referência

| Área | Pasta | Proporção recomendada | Tamanho recomendado |
|---|---|---:|---:|
| Logo | `brand` | horizontal | SVG |
| Hero | `hero` | 4:3 ou conforme layout | 1600x1200 |
| Serviços | `services` | 4:3 | 1200x900 |
| Antes e Depois | `before-after` | 4:3 | 1400x1050 |
| Clientes | `testimonials` | 1:1 | 500x500 |
| CTA final | `backgrounds` | retrato ou paisagem | 1200px+ no maior lado |

Esses valores são orientações. O projeto não corta imagens automaticamente.

## Como trocar a imagem do Hero

1. Coloque o arquivo em `assets/images/hero/`.
2. Abra `script.js`.
3. Procure por `TUDOLIMPO_IMAGES.hero.main`.
4. Altere `src`, `alt`, `width` e `height`.

O Hero usa `loading="eager"` e `fetchpriority="high"` porque aparece na primeira dobra.

## Como trocar a imagem do CTA final

1. Coloque o arquivo em `assets/images/backgrounds/`.
2. Abra `script.js`.
3. Procure por `TUDOLIMPO_IMAGES.finalCta.supervisor`.
4. Altere `src`, `width` e `height`.

A imagem do CTA final é decorativa e recebe o degradê pelo CSS para manter o texto legível. A logo decorativa do lado esquerdo fica em `TUDOLIMPO_IMAGES.finalCta.logo`.

## Como trocar a logo

A marca visível no cabeçalho usa uma imagem em `assets/images/brand/logo-header.png`.

Para trocar a logo:

1. Coloque o arquivo original em `assets/images/brand/`.
2. Gere uma versão recortada para o cabeçalho, sem margens grandes ao redor da arte.
3. Atualize o `src` da imagem `.brand__logo` no `index.html`.
4. Use `alt="TudoLimpo"` se o nome da marca estiver escrito na própria imagem.

## Como trocar imagens dos serviços

1. Coloque os arquivos em `assets/images/services/`.
2. No `script.js`, altere:
   - `TUDOLIMPO_IMAGES.services.residential`
   - `TUDOLIMPO_IMAGES.services.business`
   - `TUDOLIMPO_IMAGES.services.condominium`
   - `TUDOLIMPO_IMAGES.services.postConstruction`

Os cards usam a chave `data-service-image`, não a posição do card.

## Como trocar imagens de Antes e Depois

1. Coloque os arquivos em `assets/images/before-after/`.
2. No `script.js`, altere os itens em `TUDOLIMPO_IMAGES.beforeAfter`.
3. Mantenha o `id` igual ao slide correspondente em `TUDOLIMPO_BEFORE_AFTER`.

Cada item tem uma imagem `before` e uma imagem `after`, com alt independente.

Se a arte já vier montada com antes/depois, textos, logo e CTA em uma única imagem, use `full` no lugar de `before` e `after`:

```js
{
  id: 1,
  full: {
    src: "assets/images/before-after/banheiros-sanitarios.png",
    alt: "Antes e depois de limpeza de banheiros e sanitários",
    width: 1536,
    height: 1024,
    decorative: false
  }
}
```

## Como adicionar um novo conjunto Antes e Depois

1. Adicione um novo objeto em `TUDOLIMPO_BEFORE_AFTER`, com `id`, `service`, `title` e `description`.
2. Adicione um novo objeto com o mesmo `id` em `TUDOLIMPO_IMAGES.beforeAfter`.
3. Preencha `before.src`, `before.alt`, `after.src` e `after.alt`.

## Como adicionar fotos de clientes

1. Coloque a foto em `assets/images/testimonials/`.
2. No `script.js`, altere o item correspondente em `TUDOLIMPO_IMAGES.testimonials`.
3. Mantenha o `id` igual ao depoimento em `TUDOLIMPO_TESTIMONIALS`.

Se `src` estiver vazio ou falhar, o card usa iniciais do cliente e não exibe imagem quebrada.

## Como alterar o texto alt

Altere o campo `alt` dentro de `TUDOLIMPO_IMAGES`.

Use descrições objetivas. Evite começar com "Imagem de" ou repetir textos próximos.

## Formatos recomendados

- Logotipos e ícones vetoriais: SVG.
- Fotografias: WebP.
- Transparência: PNG.
- JPG apenas quando não houver WebP.
- AVIF somente com fallback adequado.

## Como evitar imagens deformadas

Use imagens próximas da proporção recomendada. O CSS usa `object-fit: cover`, então imagens muito fora da proporção podem ser cortadas visualmente.

## Cache do navegador

Se uma imagem nova não aparecer:

1. Recarregue com `Ctrl + F5`.
2. Confirme se o caminho em `TUDOLIMPO_IMAGES` está correto.
3. Verifique o console do navegador para avisos de imagem.

## WordPress

Antes de carregar a landing em WordPress, defina:

```html
<script>
  window.TUDOLIMPO_ASSET_BASE_PATH = "/wp-content/themes/seu-tema/";
</script>
```

Todas as imagens passam por `resolveAssetPath()`, então o prefixo será aplicado em um único lugar.
