param(
  [ValidateSet("all", "revealjs", "html")]
  [string]$Format = "all"
)

$ErrorActionPreference = "Stop"

$quartoBin = "C:\Program Files\RStudio\resources\app\bin\quarto\bin\quarto.exe"
$shareSource = "C:\Program Files\RStudio\resources\app\bin\quarto\share"

if (-not (Test-Path -LiteralPath $quartoBin)) {
  $quartoCommand = Get-Command quarto -ErrorAction Stop
  $quartoBin = $quartoCommand.Source
}

if (-not (Test-Path -LiteralPath $shareSource)) {
  throw "A pasta de recursos do Quarto não foi encontrada: $shareSource"
}

$templateInstalled = Join-Path $shareSource "pandoc\datadir\templates\template.patched"

if (Test-Path -LiteralPath $templateInstalled) {
  $shareRuntime = $shareSource
} else {
  $runtimeBase = $PSScriptRoot
  $shareRuntime = Join-Path $runtimeBase ".quarto-runtime"
  $runtimeMarker = Join-Path $shareRuntime ".aula03-runtime-ready"

  if (-not (Test-Path -LiteralPath $runtimeMarker)) {
    $runtimeFull = [System.IO.Path]::GetFullPath($shareRuntime)
    $scriptFull = [System.IO.Path]::GetFullPath($PSScriptRoot).TrimEnd("\") + "\"

    if (-not $runtimeFull.StartsWith(
      $scriptFull,
      [System.StringComparison]::OrdinalIgnoreCase
    )) {
      throw "A pasta de runtime ficou fora de aula03: $runtimeFull"
    }

    if (Test-Path -LiteralPath $shareRuntime) {
      Remove-Item -LiteralPath $shareRuntime -Recurse -Force
    }

    Copy-Item -LiteralPath $shareSource -Destination $shareRuntime -Recurse
    New-Item -ItemType File -Path $runtimeMarker -Force | Out-Null
  }
}

$templatesDir = Join-Path $shareRuntime "pandoc\datadir\templates"
New-Item -ItemType Directory -Path $templatesDir -Force | Out-Null

function Set-QuartoTemplate {
  param(
    [ValidateSet("revealjs", "html")]
    [string]$TargetFormat
  )

  if ($TargetFormat -eq "revealjs") {
    $formatDir = Join-Path $shareRuntime "formats\revealjs"
    Copy-Item -LiteralPath (Join-Path $formatDir "pandoc\template.html") -Destination (Join-Path $templatesDir "template.patched") -Force
    Copy-Item -LiteralPath (Join-Path $formatDir "pandoc\title-slide.html") -Destination $templatesDir -Force
    Copy-Item -LiteralPath (Join-Path $formatDir "pandoc\toc-slide.html") -Destination $templatesDir -Force
    Copy-Item -LiteralPath (Join-Path $formatDir "styles.html") -Destination $templatesDir -Force

    $stylesPath = Join-Path $templatesDir "styles.html"
    $stylesText = [System.IO.File]::ReadAllText($stylesPath)
    $stylesText = $stylesText.Replace(
      "<% if (scrollable) { %>overflow-y: auto;<% } %>",
      "overflow-y: auto;"
    )
    $stylesText = $stylesText.Replace(
      "<style type=""text/css"">",
      ""
    )
    $stylesText = $stylesText.Replace(
      "</style>",
      ""
    )
    [System.IO.File]::WriteAllText(
      $stylesPath,
      $stylesText,
      [System.Text.UTF8Encoding]::new($false)
    )
  } else {
    $formatDir = Join-Path $shareRuntime "formats\html\pandoc"
    Copy-Item -LiteralPath (Join-Path $formatDir "template.html") -Destination (Join-Path $templatesDir "template.patched") -Force
    Copy-Item -LiteralPath (Join-Path $formatDir "metadata.html") -Destination $templatesDir -Force
    Copy-Item -LiteralPath (Join-Path $formatDir "styles.html") -Destination $templatesDir -Force
    Copy-Item -LiteralPath (Join-Path $formatDir "title-block.html") -Destination $templatesDir -Force
    Copy-Item -LiteralPath (Join-Path $formatDir "toc.html") -Destination $templatesDir -Force
  }
}

if (-not $env:R_LIBS_USER) {
  $bibliotecaR = "C:\Users\flavi\AppData\Local\R\win-library\4.5"
  if (Test-Path -LiteralPath $bibliotecaR) {
    $env:R_LIBS_USER = $bibliotecaR
  }
}

$env:QUARTO_SHARE_PATH = $shareRuntime

Push-Location $PSScriptRoot

try {
  $targets = if ($Format -eq "all") {
    @("revealjs", "html")
  } else {
    @($Format)
  }

  foreach ($target in $targets) {
    Set-QuartoTemplate -TargetFormat $target
    & $quartoBin render "aula03.qmd" --to $target

    if ($LASTEXITCODE -ne 0) {
      throw "A compilação para $target falhou com código $LASTEXITCODE."
    }
  }
} finally {
  Pop-Location
}
