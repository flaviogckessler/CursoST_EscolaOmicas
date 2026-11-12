---
title: "Leituras recomendadas"
bibliography: ../bibliography.bib
link-citations: true
---

# Leituras recomendadas

Esta página reúne os artigos, tutoriais, vídeos e sites citados nas apresentações e os materiais complementares diretamente associados a cada aula. A organização por aula preserva a apresentação em que cada recurso é referenciado. A bibliografia completa dos artigos está cadastrada em [`bibliography.bib`](../bibliography.bib).

## Aula 1 — Introdução às transcriptômicas de alta resolução {#aula-1}

Apresentação: [slides em HTML](aula01/aula01-slides.html) · [arquivo PowerPoint](aula01/Aula1_Introducao_transcriptomica_espacial.pptx)

### Artigos científicos {#artigos-cientificos-aula-1}

- [**A practical guide to single-cell RNA-sequencing for biomedical research and clinical applications**](https://doi.org/10.1186/s13073-017-0467-4) — guia para planejamento experimental, escolha de protocolo, controle de qualidade e análise de scRNA-seq. [@Haque2017PracticalGuide]
- [**A comprehensive analysis framework for evaluating commercial single-cell RNA sequencing technologies**](https://doi.org/10.1093/nar/gkae1186) — comparação de tecnologias comerciais de scRNA-seq e de seus perfis de desempenho. [@DeSimone2025Commercial]
- [**High-definition spatial transcriptomic profiling of immune cell populations in colorectal cancer**](https://doi.org/10.1038/s41588-025-02193-3) — aplicação do Visium HD à caracterização espacial de populações imunes em câncer colorretal. [@DeOliveira2025VisiumHD]
- [**The emerging landscape of spatial profiling technologies**](https://doi.org/10.1038/s41576-022-00515-3) — revisão das principais abordagens de perfil molecular espacial e de suas características técnicas. [@Moffitt2022SpatialProfiling]

### Tutoriais e documentação {#tutoriais-e-documentacao-aula-1}

- [**Tutorial do RStudio para iniciantes: um guia completo**](https://www.datacamp.com/pt/tutorial/r-studio-tutorial) — introdução em português ao RStudio indicada no bloco sobre o ambiente do curso.
- [**Space Ranger Algorithms: Read Processing & Secondary Analysis**](https://www.10xgenomics.com/support/software/space-ranger/latest/algorithms-overview/gene-expression) — documentação oficial sobre processamento de leituras, alinhamento, barcodes, UMIs e análises secundárias do Space Ranger.
- [**Configuração do ambiente RStudio**](../vinhetas/Configuracao_do_ambiente_RStudio.html) — vinheta do curso cujo conteúdo é reproduzido no bloco prático final da apresentação.

### Vídeos {#videos-aula-1}

- [**Single Cell Gene Expression Protocol v3.1: Assemble Chromium Next GEM Chip G**](https://www.youtube.com/watch?v=cH8ldAqKUzE) — demonstração da montagem do chip para o protocolo Chromium Single Cell Gene Expression.
- [**Visium Spatial Gene Expression Protocol**](https://www.youtube.com/playlist?list=PLfaSRwcfHcq1acX1nuTFcUGClpNRPEyHH) — série de vídeos sobre o protocolo Visium Spatial Gene Expression.

### Sites e repositórios {#sites-e-repositorios-aula-1}

- [**SysBioLab no GitHub**](https://github.com/sysbiolab) — perfil do laboratório responsável por parte dos pacotes e materiais usados no curso.

## Aula 2 — Pré-processamento, clusterização e genes espacialmente variáveis {#aula-2}

Apresentação: [slides em HTML](aula02/aula02-slides.html) · [fonte em Quarto](aula02/aula02.qmd) · [roteiro em HTML](aula02/aula02-roteiro.html)

### Artigos científicos {#artigos-cientificos-aula-2}

- [**Comprehensive Integration of Single-Cell Data**](https://doi.org/10.1016/j.cell.2019.05.031) — artigo do Seurat v3 sobre integração de conjuntos de dados de célula única. [@Stuart2019Seurat]
- [**Normalization and variance stabilization of single-cell RNA-seq data using regularized negative binomial regression**](https://doi.org/10.1186/s13059-019-1874-1) — trabalho que apresenta o SCTransform para normalização e estabilização da variância. [@Hafemeister2019SCTransform]
- [**SpatialDE: identification of spatially variable genes**](https://doi.org/10.1038/nmeth.4636) — método baseado em processos gaussianos para identificar genes com variação espacial. [@Svensson2018SpatialDE]
- [**SPARK-X: non-parametric modeling enables scalable and robust detection of spatial expression patterns for large spatial transcriptomic studies**](https://doi.org/10.1186/s13059-021-02404-0) — método não paramétrico e escalável para detectar padrões espaciais de expressão. [@Zhu2021SPARKX]
- [**nnSVG for the scalable identification of spatially variable genes using nearest-neighbor Gaussian processes**](https://doi.org/10.1038/s41467-023-39748-z) — abordagem baseada em processos gaussianos com aproximação por vizinhos. [@Weber2023NnSVG]
- [**Disparities in spatially variable gene calling highlight the need for benchmarking spatial transcriptomics methods**](https://doi.org/10.1186/s13059-023-03045-1) — mostra a baixa concordância entre métodos e discute a necessidade de benchmarks. [@Charitakis2023SVGCalling]
- [**Evaluating spatially variable gene detection methods for spatial transcriptomics data**](https://doi.org/10.1186/s13059-023-03145-y) — avaliação de precisão, robustez, significância estatística e desempenho computacional de detectores de SVGs. [@Chen2024SVGEvaluation]
- [**Categorization of 34 computational methods to detect spatially variable genes from spatially resolved transcriptomics data**](https://doi.org/10.1038/s41467-025-56080-w) — organiza os métodos em SVGs globais, específicos de tipo celular e marcadores de domínios espaciais. [@Yan2025SVGMethods]
- [**Systematic benchmarking of computational methods to identify spatially variable genes**](https://doi.org/10.1186/s13059-025-03731-2) — benchmark sistemático de métodos de identificação de SVGs em diferentes tecnologias e cenários. [@Li2025SVGBenchmark]
- [**Benchmarking cell-type-specific spatially variable gene detection methods**](https://doi.org/10.1093/bib/bbag190) — comparação de métodos para detectar SVGs específicos de tipos celulares. [@Yao2026CtSVGBenchmark]
- [**Benchmarking computational methods for detecting spatial domains and domain-specific spatially variable genes from spatial transcriptomics data**](https://doi.org/10.1093/nar/gkaf303) — benchmark conjunto de domínios espaciais e genes marcadores desses domínios. [@Kang2025SpatialDomains]
- [**Protocol for assessing distances in pathway space for classifier feature sets from machine learning methods**](https://doi.org/10.1016/j.xpro.2025.103681) — protocolo do PathwaySpace, usado na aula para projeção contínua de sinais no tecido. [@Tercan2025PathwaySpace]
- [**RGraphSpace: Rendering graphs as coherent spatial objects in ggplot2**](https://doi.org/10.21105/joss.11209) — descrição do RGraphSpace e de sua representação coerente de grafos e dados espaciais no ggplot2. [@RGraphSpace2026]

### Tutoriais e documentação {#tutoriais-e-documentacao-aula-2}

- [**Controle de qualidade, pré-processamento e clusterização de dados espaciais**](../vinhetas/Controle_de_qualidade_preprocessamento_clusterizacao_espacial.html) — vinheta do curso para preparar, avaliar, normalizar e clusterizar dados Visium.
- [**Visualização contínua de dados espaciais com PathwaySpace**](../vinhetas/Visualizacao_Continua_PathwaySpace.html) — atividade prática de projeção e exploração de sinais contínuos.
- [**Analysis, visualization, and integration of spatial datasets with Seurat**](https://satijalab.org/seurat/articles/spatial_vignette) — vinheta oficial do Seurat para análise de dados espaciais.
- [**RGraphSpace: Spatial Feature Data**](https://sysbiolab.github.io/RGraphSpace/articles/spatial-data.html) — vinheta sobre imagens, coordenadas e atributos moleculares em objetos espaciais.
- [**PathwaySpace: Visualizing spatial transcriptomics**](https://sysbiolab.github.io/PathwaySpace/articles/spatial-transcriptomics.html) — vinheta sobre a projeção de sinais de transcriptômica espacial.

### Sites e repositórios {#sites-e-repositorios-aula-2}

- [**Seurat**](https://satijalab.org/seurat/) — documentação do pacote usado no fluxo de controle de qualidade, normalização, redução de dimensionalidade e clusterização.
- [**RGraphSpace**](https://sysbiolab.github.io/RGraphSpace/) — documentação do pacote usado para representar dados espaciais como objetos gráficos coerentes.
- [**PathwaySpace**](https://sysbiolab.github.io/PathwaySpace/) — documentação do pacote usado para projeção contínua de sinais no espaço do tecido.

## Aula 3 — Análises downstream de transcriptômica espacial {#aula-3}

Apresentação: [slides em HTML](aula03/aula03-slides.html) · [fonte em Quarto](aula03/aula03.qmd) · [roteiro em HTML](aula03/aula03-roteiro.html)

### Artigos científicos {#artigos-cientificos-aula-3}

- [**Robust decomposition of cell type mixtures in spatial transcriptomics**](https://doi.org/10.1038/s41587-021-00830-w) — apresenta o RCTD para estimar os tipos celulares presentes em spots de transcriptômica espacial. [@Cable2022RCTD]
- [**Inference and analysis of cell-cell communication using CellChat**](https://doi.org/10.1038/s41467-021-21246-9) — artigo original do CellChat para inferir redes de comunicação celular a partir de dados transcriptômicos. [@Jin2021CellChat]
- [**CellChat for systematic analysis of cell-cell communication from single-cell transcriptomics**](https://doi.org/10.1038/s41596-024-01045-4) — protocolo detalhado para análise de comunicação celular com CellChat. [@Jin2025CellChat]
- [**Protocol for assessing distances in pathway space for classifier feature sets from machine learning methods**](https://doi.org/10.1016/j.xpro.2025.103681) — protocolo do PathwaySpace, aplicado na aula à projeção espacial de sinais de comunicação. [@Tercan2025PathwaySpace]
- [**High-definition spatial transcriptomic profiling of immune cell populations in colorectal cancer**](https://doi.org/10.1038/s41588-025-02193-3) — aplicação do Visium HD à caracterização de populações imunes e à segmentação celular. [@DeOliveira2025VisiumHD]
- [**RGraphSpace: Rendering graphs as coherent spatial objects in ggplot2**](https://doi.org/10.21105/joss.11209) — artigo do pacote usado para manter expressão, posição, imagem e geometria celular alinhadas. [@RGraphSpace2026]
- [**Cell2location maps fine-grained cell types in spatial transcriptomics**](https://doi.org/10.1038/s41587-021-01139-4) — método probabilístico para mapear tipos celulares detalhados de uma referência de célula única. [@Kleshchevnikov2022Cell2location]
- [**SpatialDE: identification of spatially variable genes**](https://doi.org/10.1038/nmeth.4636) — método baseado em processos gaussianos para detectar variação espacial da expressão. [@Svensson2018SpatialDE]
- [**nnSVG for the scalable identification of spatially variable genes using nearest-neighbor Gaussian processes**](https://doi.org/10.1038/s41467-023-39748-z) — abordagem escalável para identificar genes espacialmente variáveis. [@Weber2023NnSVG]
- [**SPARK-X: non-parametric modeling enables scalable and robust detection of spatial expression patterns for large spatial transcriptomic studies**](https://doi.org/10.1186/s13059-021-02404-0) — teste não paramétrico para padrões espaciais em conjuntos de grande escala. [@Zhu2021SPARKX]
- [**Modeling intercellular communication in tissues using spatial graphs of cells**](https://doi.org/10.1038/s41587-022-01467-z) — apresenta o NCEM para modelar o efeito da vizinhança celular sobre a expressão gênica. [@Fischer2023NCEM]
- [**Reconstruction of the tumor spatial microenvironment along the malignant-boundary-nonmalignant axis**](https://doi.org/10.1038/s41467-023-36560-7) — descreve o Cottrazm para investigar microambientes tumorais e suas regiões de transição. [@Xun2023TumorMicroenvironment]
- [**Squidpy: a scalable framework for spatial omics analysis**](https://doi.org/10.1038/s41592-021-01358-2) — ecossistema em Python para análise e visualização escalável de dados ômicos espaciais. [@Palla2022Squidpy]
- [**Giotto: a toolbox for integrative analysis and visualization of spatial expression data**](https://doi.org/10.1186/s13059-021-02286-2) — conjunto de ferramentas para análise integrada e visualização de dados espaciais. [@Dries2021Giotto]
- [**Spatial transcriptomic alignment, integration, and 3D reconstruction by STAIR**](https://doi.org/10.1186/s13059-025-03895-x) — método para alinhar e integrar cortes histológicos em reconstruções tridimensionais. [@Yu2025STAIR]
- [**Temporal and spatial omics technologies for 4D profiling**](https://doi.org/10.1038/s41592-025-02683-6) — perspectiva sobre a integração de informação espacial tridimensional e dinâmica temporal. [@Reynolds2025FourD]
- [**Systematic comparison of sequencing-based spatial transcriptomic methods**](https://doi.org/10.1038/s41592-024-02325-3) — comparação sistemática de tecnologias de transcriptômica espacial baseadas em sequenciamento. [@You2024SpatialMethods]

### Tutoriais e documentação {#tutoriais-e-documentacao-aula-3}

- [**Deconvolução com RCTD**](../vinhetas/RCTD_Deconvolution_stxbrain.html) — vinheta prática para estimar a composição celular dos spots.
- [**Comunicação celular com CellChat e PathwaySpace**](../vinhetas/CellChat_Comunicacao_Celular_PathwaySpace.html) — vinheta prática para inferir e visualizar redes de comunicação celular.
- [**Segmentação celular em dados Visium HD**](../vinhetas/Segmentacao_Celular_VisiumHD.html) — atividade prática sobre geometrias celulares e expressão em dados de alta resolução.
- [**RCTD Tutorial**](https://bioconductor.uib.no/packages/3.22/bioc/vignettes/spacexr/inst/doc/rctd-tutorial.html) — tutorial do pacote spacexr para execução e interpretação do RCTD.
- [**CellChat inference and analysis of spatially proximal cell-cell communication**](https://htmlpreview.github.io/?https://github.com/jinworks/CellChat/blob/master/tutorial/CellChat_analysis_of_spatial_transcriptomics_data.html) — tutorial de CellChat para dados com informação espacial.
- [**Spatial-segmented data with Seurat and RGraphSpace**](https://sysbiolab.github.io/RGraphSpace/articles/spatial-segmentation1.html) — vinheta sobre dados segmentados e sua representação com Seurat e RGraphSpace.

### Sites e repositórios {#sites-e-repositorios-aula-3}

- [**SysBioLab no GitHub**](https://github.com/sysbiolab) — código dos pacotes e projetos do laboratório citado nos créditos da apresentação.
- [**Laboratório de Bioinformática e Biologia de Sistemas da UFPR**](https://bioinfo.ufpr.br) — página institucional citada nos créditos da apresentação.

## Referências {#referencias}

::: {#refs}
:::
