// Preserva a composição editorial do fluxograma de referência e gera SVG/PNG.
// O conteúdo acompanha as aulas, os roteiros e as vinhetas atuais do curso.
const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch {
  sharp = require(path.resolve(path.dirname(process.execPath), '..', 'node_modules', 'sharp'));
}

const outDir = __dirname;
const svgPath = path.join(outDir, 'estrutura_conceitual_curso_transcriptomica_espacial.svg');
const pngPath = path.join(outDir, 'estrutura_conceitual_curso_transcriptomica_espacial.png');

const C = {
  bg: '#F4F7FB', ink: '#17223B', muted: '#52627A', line: '#78879B', navy: '#17365D',
  blue: '#1F6E9C', blueFill: '#EAF4FF', support: '#EEF2FF', supportStroke: '#51648C',
  used: '#FFF7E8', usedStroke: '#B97912', generated: '#EAF8EF', generatedStroke: '#2F855A',
  figure: '#F3ECFF', figureStroke: '#7251A3', white: '#FFFFFF', grid: '#C9D3E1', lane: '#EDF1F6'
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function textLines(lines, x, y, { size = 20, weight = 500, fill = C.ink, lh = 27, anchor = 'middle' } = {}) {
  return lines.map((line, i) => `<text x="${x}" y="${y + i * lh}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`).join('\n');
}

function rounded(x, y, w, h, fill, stroke, r = 18, sw = 2.5) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

function processNode(x, y, w, h, id, title, body, optional = false) {
  const tag = optional ? 'VINHETA OPCIONAL' : 'VINHETA';
  return `<g>${rounded(x, y, w, h, C.blueFill, C.blue)}
    <text x="${x + 20}" y="${y + 29}" font-size="15" font-weight="700" letter-spacing="1.2" fill="${C.blue}">${tag}</text>
    <rect x="${x + 18}" y="${y + 42}" width="${optional ? 56 : 42}" height="28" rx="8" fill="${C.blue}"/>
    <text x="${x + (optional ? 46 : 39)}" y="${y + 62}" text-anchor="middle" font-size="17" font-weight="800" fill="white">${esc(id)}</text>
    ${textLines(title, x + w / 2, y + 97, { size: 22, weight: 800, lh: 27 })}
    ${textLines(body, x + w / 2, y + 97 + title.length * 27 + 15, { size: 17, fill: C.muted, lh: 23 })}
  </g>`;
}

function conceptNode(x, y, w, h, title, body) {
  return `<g>${rounded(x, y, w, h, '#F7F9FC', '#8090A4')}
    <text x="${x + 20}" y="${y + 29}" font-size="15" font-weight="700" letter-spacing="1.2" fill="${C.muted}">BLOCO CONCEITUAL</text>
    ${textLines(title, x + w / 2, y + 78, { size: 23, weight: 800, lh: 28 })}
    ${textLines(body, x + w / 2, y + 118, { size: 17, fill: C.muted, lh: 24 })}
  </g>`;
}

function dataNode(x, y, w, h, tag, title, body, generated = false) {
  const fill = generated ? C.generated : C.used;
  const stroke = generated ? C.generatedStroke : C.usedStroke;
  const ry = 15;
  return `<g>
    <path d="M ${x} ${y + ry} Q ${x} ${y} ${x + w / 2} ${y} Q ${x + w} ${y} ${x + w} ${y + ry} L ${x + w} ${y + h - ry} Q ${x + w} ${y + h} ${x + w / 2} ${y + h} Q ${x} ${y + h} ${x} ${y + h - ry} Z" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>
    <ellipse cx="${x + w / 2}" cy="${y + ry}" rx="${w / 2}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>
    <path d="M ${x} ${y + h - ry} Q ${x + w / 2} ${y + h + ry} ${x + w} ${y + h - ry}" fill="none" stroke="${stroke}" stroke-width="2.5" opacity=".55"/>
    <text x="${x + 18}" y="${y + 42}" font-size="14" font-weight="750" letter-spacing="1.1" fill="${stroke}">${esc(tag)}</text>
    ${textLines(title, x + w / 2, y + 77, { size: 20, weight: 800, lh: 25 })}
    ${textLines(body, x + w / 2, y + 77 + title.length * 25 + 11, { size: 16, fill: C.muted, lh: 22 })}
  </g>`;
}

function figureNode(x, y, w, h, title, body) {
  const fold = 26;
  return `<g>
    <path d="M ${x + 16} ${y} H ${x + w - fold} L ${x + w} ${y + fold} V ${y + h - 16} Q ${x + w} ${y + h} ${x + w - 16} ${y + h} H ${x + 16} Q ${x} ${y + h} ${x} ${y + h - 16} V ${y + 16} Q ${x} ${y} ${x + 16} ${y} Z" fill="${C.figure}" stroke="${C.figureStroke}" stroke-width="2.5"/>
    <path d="M ${x + w - fold} ${y} V ${y + fold} H ${x + w}" fill="none" stroke="${C.figureStroke}" stroke-width="2.5"/>
    <text x="${x + 18}" y="${y + 30}" font-size="14" font-weight="750" letter-spacing="1.1" fill="${C.figureStroke}">FIGURA GERADA</text>
    ${textLines(title, x + w / 2, y + 64, { size: 19, weight: 800, lh: 24 })}
    ${textLines(body, x + w / 2, y + 64 + title.length * 24 + 8, { size: 15.5, fill: C.muted, lh: 21 })}
  </g>`;
}

function arrow(x1, y1, x2, y2, label = '', dashed = false, bend = null, color = C.line) {
  const d = bend ? `M ${x1} ${y1} C ${bend[0]} ${bend[1]}, ${bend[2]} ${bend[3]}, ${x2} ${y2}` : `M ${x1} ${y1} L ${x2} ${y2}`;
  const tx = bend ? (bend[0] + bend[2]) / 2 : (x1 + x2) / 2;
  const ty = bend ? (bend[1] + bend[3]) / 2 : (y1 + y2) / 2;
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" ${dashed ? 'stroke-dasharray="9 8"' : ''} marker-end="url(#arrow)"/>` +
    (label ? `<text x="${tx}" y="${ty - 10}" text-anchor="middle" font-size="15" font-weight="650" fill="${color}" paint-order="stroke" stroke="${C.bg}" stroke-width="7">${esc(label)}</text>` : '');
}

function panel(x, y, w, h, n, title, hours, color) {
  return `<g filter="url(#shadow)">${rounded(x, y, w, h, C.white, C.grid, 24, 2.2)}
    <path d="M ${x + 24} ${y} H ${x + w - 24} Q ${x + w} ${y} ${x + w} ${y + 24} V ${y + 76} H ${x} V ${y + 24} Q ${x} ${y} ${x + 24} ${y} Z" fill="${color}"/>
    <circle cx="${x + 42}" cy="${y + 38}" r="22" fill="white" fill-opacity=".18"/>
    <text x="${x + 42}" y="${y + 46}" text-anchor="middle" font-size="24" font-weight="800" fill="white">${n}</text>
    <text x="${x + 79}" y="${y + 33}" font-size="23" font-weight="800" fill="white">${esc(title)}</text>
    <text x="${x + 79}" y="${y + 58}" font-size="16" font-weight="600" fill="white" opacity=".9">${esc(hours)}</text>
  </g>`;
}

function lane(x, y, w, label) {
  return `<g><line x1="${x}" y1="${y}" x2="${x + w}" y2="${y}" stroke="${C.lane}" stroke-width="2"/>
    <rect x="${x}" y="${y - 16}" width="${Math.max(170, label.length * 9 + 30)}" height="30" rx="8" fill="${C.bg}"/>
    <text x="${x + 14}" y="${y + 5}" font-size="15" font-weight="750" letter-spacing="1" fill="${C.muted}">${esc(label.toUpperCase())}</text></g>`;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="2600" height="1760" viewBox="0 0 2600 1760" role="img" aria-labelledby="title desc">
<title id="title">Estrutura conceitual do curso de Análise de Dados de Transcriptômica Espacial</title>
<desc id="desc">As três aulas, as vinhetas V1 a V6 e a vinheta opcional, com distinção entre dados utilizados, dados gerados e figuras geradas.</desc>
<defs>
  <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#17223B" flood-opacity=".09"/></filter>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="context-stroke"/></marker>
</defs>
<rect width="2600" height="1760" fill="${C.bg}"/>

<text x="80" y="70" font-size="43" font-weight="800" fill="${C.navy}">Estrutura conceitual do curso</text>
<text x="80" y="111" font-size="24" font-weight="500" fill="${C.muted}">Blocos das aulas · vinhetas · dados utilizados · objetos e figuras gerados</text>

<g filter="url(#shadow)">${rounded(80, 145, 2440, 90, C.support, C.supportStroke, 18, 2.5)}
  <text x="106" y="178" font-size="15" font-weight="750" letter-spacing="1.2" fill="${C.supportStroke}">SUPORTE TRANSVERSAL</text>
  <text x="1300" y="206" text-anchor="middle" font-size="21" font-weight="700" fill="${C.ink}">Ementa · três apresentações · dois roteiros · leituras recomendadas · referências · QR codes · repositório e HTMLs</text>
</g>

<text x="80" y="282" font-size="16" font-weight="750" fill="${C.muted}">LEGENDA</text>
<g transform="translate(182,256)">
  <ellipse cx="24" cy="16" rx="24" ry="8" fill="${C.used}" stroke="${C.usedStroke}" stroke-width="2"/><rect x="0" y="16" width="48" height="27" fill="${C.used}" stroke="${C.usedStroke}" stroke-width="2"/><ellipse cx="24" cy="43" rx="24" ry="8" fill="${C.used}" stroke="${C.usedStroke}" stroke-width="2"/><text x="62" y="35" font-size="17" font-weight="650" fill="${C.ink}">dado utilizado</text>
</g>
<g transform="translate(400,256)">
  <ellipse cx="24" cy="16" rx="24" ry="8" fill="${C.generated}" stroke="${C.generatedStroke}" stroke-width="2"/><rect x="0" y="16" width="48" height="27" fill="${C.generated}" stroke="${C.generatedStroke}" stroke-width="2"/><ellipse cx="24" cy="43" rx="24" ry="8" fill="${C.generated}" stroke="${C.generatedStroke}" stroke-width="2"/><text x="62" y="35" font-size="17" font-weight="650" fill="${C.ink}">dado/objeto gerado</text>
</g>
<g transform="translate(674,257)"><path d="M0 0 H38 L52 14 V50 H0 Z" fill="${C.figure}" stroke="${C.figureStroke}" stroke-width="2"/><path d="M38 0 V14 H52" fill="none" stroke="${C.figureStroke}" stroke-width="2"/><text x="67" y="33" font-size="17" font-weight="650" fill="${C.ink}">figura gerada</text></g>
<g transform="translate(880,257)">${rounded(0, 0, 56, 50, C.blueFill, C.blue, 10, 2)}<text x="28" y="33" text-anchor="middle" font-size="17" font-weight="800" fill="${C.blue}">Vn</text><text x="72" y="33" font-size="17" font-weight="650" fill="${C.ink}">vinheta</text></g>
<text x="2520" y="286" text-anchor="end" font-size="15" font-weight="600" fill="${C.muted}">Seta contínua: fluxo principal · seta tracejada: reutilização/desafio</text>

${panel(70, 330, 430, 1335, '1', 'AULA 1', 'Fundamentos e ambiente · 3 h', '#355C8A')}
${panel(540, 330, 720, 1335, '2', 'AULA 2', 'Fluxo principal Visium · 3 h', '#1F6E9C')}
${panel(1300, 330, 1230, 1335, '3', 'AULA 3', 'Análises avançadas · 3 h', '#5C4A86')}

${arrow(500, 420, 540, 420)}
${arrow(1260, 420, 1300, 420)}

${conceptNode(105, 450, 360, 190, ['Fundamentos'], ['bulk × scRNA-seq × espacial', 'Visium · Visium HD · Xenium', 'estrutura e resolução dos dados'])}
${processNode(105, 720, 360, 205, 'V1', ['Configuração do RStudio'], ['R ≥ 4.5 · Seurat · RGraphSpace', 'PathwaySpace · CellChat · spacexr'])}
${dataNode(115, 1030, 340, 170, 'RESULTADO GERADO', ['Ambiente preparado'], ['pré-requisito para V2–V6', 'e para os roteiros do curso'], true)}
${arrow(285, 640, 285, 720)}
${arrow(285, 925, 285, 1030)}

${dataNode(580, 455, 260, 170, 'DADO UTILIZADO', ['stxBrain'], ['anterior1 na aula', 'duas seções na vinheta'], false)}
${processNode(885, 435, 335, 235, 'V2', ['QC e pré-processamento'], ['aula: LogNormalize', 'vinheta: SCTransform', 'PCA · UMAP/t-SNE · clustering', "DEG · SVGs (Moran's I)"])}
${dataNode(590, 790, 270, 165, 'DADO GERADO', ['data/brain.RDS'], ['Seurat normalizado', 'e clusterizado'], true)}
${figureNode(925, 790, 260, 155, ['QC · clusters · DEG/SVG'], ['genes e padrões espaciais'])}
${processNode(590, 1070, 270, 195, 'V3', ['Visualização contínua'], ['Seurat → RGraphSpace', '→ PathwaySpace'])}
${figureNode(925, 1082, 260, 155, ['Spots × sinal contínuo'], ['comparações espaciais'])}
${arrow(840, 540, 885, 540)}
${arrow(1053, 670, 725, 790, '', false, [1030,735,800,730])}
${arrow(1053, 670, 1053, 790)}
${arrow(725, 955, 725, 1070)}
${arrow(860, 1167, 925, 1160)}

${lane(1335, 435, 1160, 'Deconvolução')}
${dataNode(1335, 475, 210, 145, 'DADO UTILIZADO', ['stxBrain anterior1'], ['contagens brutas'], false)}
${dataNode(1570, 535, 225, 145, 'DADO UTILIZADO', ['allen_cortex.rds'], ['scRNA-seq anotado', 'referência celular'], false)}
${processNode(1825, 455, 235, 180, 'V4', ['RCTD'], ['deconvolução', 'modo doublet'])}
${dataNode(2090, 448, 395, 150, 'DADOS/OBJETOS GERADOS', ['RCTD · resumo CSV'], ['Seurat anotado com tipos celulares'], true)}
${figureNode(2090, 625, 395, 105, ['Classes e tipos celulares'], [])}
${arrow(1545, 510, 1825, 505, '', false, [1640,445,1740,445])}
${arrow(1795, 607, 1825, 570)}
${arrow(2060, 535, 2090, 525)}
${arrow(1942, 635, 2090, 677, '', false, [1950,680,2025,677])}

${lane(1335, 805, 1160, 'Comunicação celular')}
${dataNode(1335, 845, 235, 150, 'DADO GERADO NA AULA 2', ['data/brain.RDS'], ['clusters do Seurat'], true)}
${processNode(1610, 825, 250, 185, 'V5', ['CellChat'], ['grupos + restrição espacial', '+ projeção PathwaySpace'])}
${dataNode(1900, 845, 275, 150, 'DADO GERADO', ['spot-spot_commu_', 'anterior.rds'], [], true)}
${figureNode(2210, 852, 275, 135, ['Pares ligante–receptor'], [])}
${arrow(1570, 920, 1610, 920)}
${arrow(1860, 920, 1900, 920)}
${arrow(2175, 920, 2210, 920)}
${arrow(725, 955, 1335, 920, 'reutilização do brain.RDS', true, [850,1015,1150,1015], C.generatedStroke)}

${lane(1335, 1100, 1160, 'Visium HD e geometria celular')}
${dataNode(1335, 1145, 300, 155, 'DADO UTILIZADO', ['VisiumHD_GS_Crop.RDS'], ['GraphSpace · 539 células', 'limites já segmentados'], false)}
${processNode(1690, 1125, 350, 195, 'V6', ['Exploração da segmentação'], ['centros × polígonos', 'PIGR · PathwaySpace'])}
${figureNode(2095, 1145, 390, 155, ['Segmentação celular'], ['polígonos × projeção contínua'])}
${arrow(1635, 1222, 1690, 1222)}
${arrow(2040, 1222, 2095, 1222)}
${conceptNode(1335, 1415, 700, 150, ['Referências de análise e perspectivas'], ['anotação · SVGs · microambientes', '3D/4D · limitações · próximos passos'])}

<text x="1300" y="1709" text-anchor="middle" font-size="17" font-weight="600" fill="${C.muted}">O RCTD recarrega contagens brutas; brain.RDS alimenta V3 e V5; o recorte Visium HD alimenta V6.</text>
</svg>`;

const normalizedSvg = svg.replace(/[ \t]+$/gm, '');
fs.writeFileSync(svgPath, normalizedSvg, 'utf8');
sharp(Buffer.from(normalizedSvg)).png({ compressionLevel: 9 }).toFile(pngPath).then(() => {
  console.log(svgPath);
  console.log(pngPath);
});
