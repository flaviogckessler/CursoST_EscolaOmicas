# Aula 03 em Quarto

Esta pasta contém a apresentação da terceira aula do curso, compilada a partir das três vinhetas e do material expositivo da apresentação PowerPoint.

## Prompt otimizado

Objetivo: criar uma apresentação Quarto da Aula 03 em D:\CursoST_EscolaOmicas\apresentacoes\aula03, seguindo a organização e as opções de compilação da Aula 02.

Fontes, nesta ordem:

1. D:\CursoST_EscolaOmicas\vinhetas\RCTD_Deconvolution_stxbrain.Rmd
2. D:\CursoST_EscolaOmicas\vinhetas\CellChat_Comunicacao_Celular_PathwaySpace.Rmd
3. D:\CursoST_EscolaOmicas\vinhetas\Segmentacao_Celular_VisiumHD.Rmd
4. D:\CursoST_EscolaOmicas\apresentacoes\Aula3_AnaliseDownstream_RNAseq_espacial.pptx, para o bloco final de referências e análises downstream

Requisitos:

- produzir uma apresentação RevealJS autocontida e um roteiro HTML;
- preservar a sequência pedagógica das três vinhetas e, depois, das referências downstream;
- manter nos slides o código necessário para reproduzir cada fluxo;
- não executar a estimação completa do RCTD nem a inferência original do CellChat durante a compilação;
- carregar os resultados pré-processados de resultados/ para mostrar sumários e figuras de RCTD e CellChat;
- executar durante a compilação a exploração e a projeção da vinheta de segmentação Visium HD;
- reutilizar os elementos gráficos úteis do PPTX e representar as animações relevantes com fragments do RevealJS;
- corrigir caminhos relativos para que a compilação parta da pasta aula03;
- validar a compilação, a presença dos três blocos práticos, os resultados renderizados e a legibilidade dos slides.

## Arquivos

- aula03.qmd: fonte da apresentação e do roteiro
- aula03.css: estilo RevealJS/HTML
- assets/: figuras locais e elementos selecionados do PPTX
- aula03-slides.html: apresentação autocontida
- aula03-roteiro.html: roteiro autocontido

## Compilação no ambiente validado

Em PowerShell:

~~~powershell
.\render-aula03.ps1
~~~

Para gerar somente os slides:

~~~powershell
.\render-aula03.ps1 -Format revealjs
~~~

O script compensa uma ausência de templates observada no Quarto distribuído com o RStudio deste computador, usando uma cópia local e ignorada em .quarto-runtime. Uma instalação completa do Quarto também pode compilar diretamente com quarto render aula03.qmd.

O cache do knitr fica em aula03_cache. Remova essa pasta apenas quando quiser forçar a execução de todos os blocos.
