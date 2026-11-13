# Aula 03 em Quarto

Esta pasta contém a apresentação da terceira aula do curso, compilada a partir das três vinhetas e do material expositivo da apresentação PowerPoint.

## Prompt otimizado

Objetivo: revisar e finalizar a Aula 03 em Quarto, produzindo slides RevealJS e um roteiro HTML a partir de fontes normativas explícitas.

Fontes, nesta ordem:

1. D:\CursoST_EscolaOmicas\vinhetas\RCTD_Deconvolution_stxbrain.Rmd
2. D:\CursoST_EscolaOmicas\vinhetas\CellChat_Comunicacao_Celular_PathwaySpace.Rmd
3. D:\CursoST_EscolaOmicas\vinhetas\Segmentacao_Celular_VisiumHD.Rmd
4. D:\CursoST_EscolaOmicas\apresentacoes\aula03\Aula3_AnaliseDownstream_RNAseq_espacial.pptx, como referência para a sequência pedagógica, a teoria, os resultados e o bloco downstream

Requisitos:

- tratar o PPTX como fonte da ordem da aula e as três vinhetas Rmd como fontes normativas do código;
- preservar no QMD as alterações já realizadas pelo autor;
- não inventar funções auxiliares, nomes de objetos ou fluxos alternativos;
- remover dos slides comentários sobre decisões internas de compilação ou colaboração;
- acrescentar, no início de cada bloco prático, um link para a vinheta correspondente;
- manter visível o código que produz cada captura da pasta assets;
- nesses slides, mostrar primeiro o código e, no fragmento seguinte, o mesmo código acompanhado do resultado esperado;
- não executar a estimação completa do RCTD nem a inferência do CellChat durante a renderização;
- usar os resultados e as capturas já produzidos para as etapas pesadas;
- executar os blocos mais leves da vinheta de segmentação Visium HD e imprimir os resultados;
- preservar a sequência final de referências e análises downstream do PPTX;
- produzir uma apresentação RevealJS autocontida e um roteiro HTML autocontido;
- validar a fidelidade do código, a renderização, a presença dos três blocos e a legibilidade de códigos, figuras e tabelas;
- nesta rodada, não realizar commit nem push.

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
