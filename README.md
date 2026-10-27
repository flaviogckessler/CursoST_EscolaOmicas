# Análise de Dados de Transcriptômica Espacial

*Outubro 2026*

Este repositório reúne os materiais do curso **Análise de Dados de Transcriptômica Espacial**, dedicado aos fundamentos das tecnologias de transcriptômica de alta resolução e às estratégias de análise de dados espaciais. O curso combina aulas expositivas e atividades práticas em R, com ênfase em dados gerados pela plataforma Visium.

## Objetivos

Ao final do curso, espera-se que as pessoas participantes sejam capazes de:

-   compreender os conceitos fundamentais da transcriptômica espacial e suas aplicações nas Ciências da Saúde;
-   reconhecer as principais plataformas e a estrutura dos dados de transcriptômica espacial;
-   realizar etapas de controle de qualidade, normalização e redução de dimensionalidade com o pacote Seurat;
-   conhecer abordagens para deconvolução, comunicação celular, visualização contínua de sinal e outras análises secundárias;
-   discutir possibilidades de aplicação dessas técnicas em seus próprios contextos de pesquisa.

## Conteúdo programático

### 1. Introdução à transcriptômica espacial

-   fundamentos teóricos;
-   plataformas disponíveis;
-   estrutura dos dados.

### 2. Pré-processamento de dados

-   controle de qualidade;
-   normalização;
-   redução de dimensionalidade;
-   uso do pacote Seurat em R;
-   identificação de genes espacialmente variáveis (SVGs);
-   visualização contínua de sinal com PathwaySpace.

### 3. Análise de dados em transcriptômica espacial

-   técnicas de deconvolução;
-   análise de comunicação celular;
-   segmentação celular;
-   Referências de análise.

## Metodologia

O curso tem caráter teórico-prático. As exposições conceituais são seguidas de atividades práticas, tutoriais e exemplos desenvolvidos em R. As análises têm foco principal em dados de transcriptômica espacial produzidos pela plataforma Visium.

<p align="center">

<img src="imagens/estrutura_conceitual_curso_transcriptomica_espacial.png" alt="Estrutura conceitual do curso, com aulas, vinhetas, dados utilizados e resultados gerados"/>

</p>

## Carga horária e programação

A carga horária total é de **9 horas**, distribuídas da seguinte forma:

| Data                 | Horário |
|----------------------|---------|
| 27/10 (terça-feira)  | 9h–12h  |
| 28/10 (quarta-feira) | 9h–12h  |
| 29/10 (quinta-feira) | 9h–12h  |

## Pré-requisitos

São recomendados conhecimentos básicos de biologia molecular e de tecnologias de sequenciamento. Experiência prévia com linguagem de programação R é desejável, mas não obrigatória.

**Recursos:** computador com R 4.5 ou superior, RStudio, acesso à internet e pacotes previamente instalados. A execução de algumas atividades podem exigir cerca de 20 GB de memória, mas alternativas são fornecidas para o acompanhamento da aula.

## Vinhetas

### do Curso

1.  [Configuração do ambiente RStudio](https://flaviogckessler.github.io/Curso_ST/vinhetas/Configuracao_do_ambiente_RStudio.html) — Aula 1
2.  [Controle de qualidade, pré-processamento e clusterização de dados espaciais](https://flaviogckessler.github.io/Curso_ST/vinhetas/Controle_de_qualidade_preprocessamento_clusterizacao_espacial.html) — Aula 2
3.  [Visualização contínua de dados espaciais com PathwaySpace](https://flaviogckessler.github.io/Curso_ST/vinhetas/Visualizacao_Continua_PathwaySpace.html) — Aula 2
4.  [Deconvolução com RCTD](https://flaviogckessler.github.io/Curso_ST/vinhetas/RCTD_Deconvolution_stxbrain.html) — Aula 3
5.  [Comunicação celular](https://flaviogckessler.github.io/Curso_ST/vinhetas/CellChat_Comunicacao_Celular_PathwaySpace.html) — Aula 3
6.  [Segmentação Celular](https://flaviogckessler.github.io/Curso_ST/vinhetas/Segmentacao_Celular.html) — Aula 3

### Vinhetas externas recomendadas

1.  Seurat: [Analysis, visualization, and integration of spatial datasets with Seurat](https://satijalab.org/seurat/articles/spatial_vignette)

2.  RGraphSpace: [Spatial Feature Data](https://sysbiolab.github.io/RGraphSpace/articles/spatial-data.html)

3.  PathwaySpace: [Visualizing spatial transcriptomics](https://sysbiolab.github.io/PathwaySpace/articles/spatial-transcriptomics.html)

4.  RCTD: [RCTD Tutorial](https://bioconductor.uib.no/packages/3.22/bioc/vignettes/spacexr/inst/doc/rctd-tutorial.html)

5.  CellChat: [CellChat inference and analysis of spatially proximal cell-cell communication](https://htmlpreview.github.io/?https://github.com/jinworks/CellChat/blob/master/tutorial/CellChat_analysis_of_spatial_transcriptomics_data.html)

6.  RGraphSpace: [Spatial-segmented data with Seurat and RGraphSpace](https://sysbiolab.github.io/RGraphSpace/articles/spatial-segmentation1.html)

## Leituras recomendadas

Os artigos científicos, capítulos, tutoriais, vídeos e repositórios citados nas apresentações estão reunidos em uma página pesquisável, organizada por tipo de material e vinculada aos slides correspondentes da Aula 1.

-   [Explorar as leituras recomendadas no GitHub Pages](https://flaviogckessler.github.io/Curso_ST/apresentacoes/LEITURA_RECOMENDADA.html)
-   [Consultar a lista em Markdown](apresentacoes/LEITURA_RECOMENDADA.md)

## Ministrantes

**Flávio Gabriel Carazza-Kessler**

-   [Currículo Lattes](http://lattes.cnpq.br/0370990742893359)
-   [Google Scholar](https://scholar.google.com/citations?user=DYrSfHYAAAAJ&hl=en)
-   [LinkedIn](https://www.linkedin.com/in/flaviogckessler)
-   Contato: [flaviokessler\@ufpr.br](mailto:flaviokessler@ufpr.br)

**Lana Bazan Peters Querne**

-   [Currículo Lattes](http://lattes.cnpq.br/8667049282972617)
-   Contato: [lanapeters\@ufpr.br](mailto:lanapeters@ufpr.br)

**Jonathan André Back**

-   [Currículo Lattes](http://lattes.cnpq.br/1008893623298003)
-   [LinkedIn](https://www.linkedin.com/in/jonathan-a-back)
-   Contato: [jonathanback01\@gmail.com](mailto:jonathanback01@gmail.com)

## Histórico

O curso aqui apresentado está em constante adaptação e atualização. Ele tem sua origem no congresso X-meeting 2026, no qual a primeira versão foi ministrada pela Dra. [Carolina Saibro-Girardi](http://lattes.cnpq.br/0251933645400206) e por Flávio. O curso de então foi entitulado como "Análise de Dados de Transcriptômica Single-Cell e Espacial" e focava em análise tanto de dados de single-cell quanto de transcriptômica espacial.

Ainda no X-meeting 2026, a RSG-Brazil convida para que o curso fosse ministrado novamente, dessa vez focando apenas em dados de transcriptômica espacial. Esta versão do curso está disponível em: (https://github.com/flaviogckessler/Curso_ST).

A atual versão, aprimorada e revisada, conta com a participação de dois novos ministrantes: Lana Querne e Jonathan Back, que dedicam seus doutorado e mestrado, respectivamente, para a análise de dados de transcriptômica espacial.

*Deixa-se aqui agradecimento à Dra. Carol, querida amiga, pelo convite inicial que deu origem a essa série de atualizações e por gentilmente compartilhar o material do curso.*

Genealogia do curso:
- Outubro/2026. EPB 2026. *Análise de Dados de Transcriptômica Espacial*
- Setembro/2026. RSG-Brazil. *Análise de Dados de Transcriptômica Espacial*
- Junho/2026. X-meeting 2026. *Análise de Dados de Transcriptômica Single-Cell e Espacial*

## Declaração de IA

Ferramentas de inteligência artificial generativa foram utilizadas como apoio na elaboração e revisão de textos, códigos e materiais deste repositório. Todo o conteúdo produzido com esse auxílio foi revisado, adaptado e validado pelo autor, que permanece responsável por sua versão final.

## Licenças

O conteúdo de texto deste curso está disponível sob a licença [Creative Commons Atribuição-NãoComercial 4.0 Internacional (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/deed.pt-br). Os códigos-fonte (vinhetas) estão disponíveis sob a licença MIT. Consulte o arquivo [LICENSE.md](LICENSE.md) para os termos aplicáveis.
