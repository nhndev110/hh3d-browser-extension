Write-Host "Building HoatHinh3D Extension with JavaScript Obfuscator..." -ForegroundColor Green
Write-Host ""

# Kiem tra javascript-obfuscator
Write-Host "Checking javascript-obfuscator..." -ForegroundColor Yellow
try {
    $obfuscatorVersion = javascript-obfuscator --version 2>&1
    Write-Host "javascript-obfuscator found: $obfuscatorVersion" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "javascript-obfuscator not found!" -ForegroundColor Red
    Write-Host "Installing javascript-obfuscator..." -ForegroundColor Yellow
    npm install -g javascript-obfuscator
    Write-Host ""
}

$buildPath = "D:\hoathinh3d-extension"

# Tao thu muc hoathinh3d-extension
Write-Host "Creating $buildPath directory..." -ForegroundColor Yellow
if (Test-Path $buildPath) {
    Remove-Item -Path $buildPath -Recurse -Force
}
New-Item -ItemType Directory -Path $buildPath | Out-Null
Write-Host "$buildPath directory created" -ForegroundColor Green
Write-Host ""

# Copy files
Write-Host "Copying static files..." -ForegroundColor Yellow
$filesToCopy = @(
    "manifest.json",
    "popup.html",
    "zalo.png",
    "momo.png",
    "icon.png",
    "style.css"
)

$copyCount = 0
foreach ($file in $filesToCopy) {
    if (Test-Path $file) {
        Copy-Item $file -Destination $buildPath
        Write-Host "  Copied: $file" -ForegroundColor Green
        $copyCount++
    } else {
        Write-Host "  Not found: $file" -ForegroundColor Yellow
    }
}
Write-Host "Copied $copyCount files" -ForegroundColor Cyan
Write-Host ""

# Obfuscate JS files
Write-Host "Obfuscating JavaScript files (MEDIUM MODE)..." -ForegroundColor Yellow

$jsFiles = @(
    "content.js",
    "popup.js",
    "utils.js"
)

$obfuscateCount = 0
$totalSizeBefore = 0
$totalSizeAfter = 0

foreach ($jsFile in $jsFiles) {
    if (Test-Path $jsFile) {
        Write-Host "  Processing: $jsFile" -ForegroundColor Cyan
        
        $sizeBefore = (Get-Item $jsFile).Length
        $totalSizeBefore += $sizeBefore
        
        try {
            $outputFile = "$buildPath\$jsFile"
            
            # CAU HINH AN TOAN - BAO TOAN CU PHAP
            javascript-obfuscator $jsFile --output $outputFile `
                --compact true `
                --control-flow-flattening false `
                --dead-code-injection false `
                --debug-protection false `
                --disable-console-output false `
                --identifier-names-generator hexadecimal `
                --log false `
                --numbers-to-expressions false `
                --rename-globals false `
                --rename-properties false `
                --self-defending false `
                --simplify false `
                --split-strings false `
                --string-array true `
                --string-array-calls-transform false `
                --string-array-encoding base64 `
                --string-array-index-shift false `
                --string-array-rotate false `
                --string-array-shuffle false `
                --string-array-wrappers-count 1 `
                --string-array-threshold 0.3 `
                --unicode-escape-sequence false `
                --transform-object-keys false `
                --ignore-imports true
            
            if ($LASTEXITCODE -eq 0) {
                # KIEM TRA FILE OUTPUT CO HOP LE KHONG
                $outputContent = Get-Content $outputFile -Raw
                if ($outputContent -match ',\s*function\s*\(' -or $outputContent -match ',\s*var\s+' -or $outputContent -match ',\s*const\s+') {
                    Write-Host "    Warning: Syntax error detected in obfuscated file!" -ForegroundColor Yellow
                    Write-Host "    Using original file instead..." -ForegroundColor Yellow
                    Copy-Item $jsFile -Destination $buildPath
                    $totalSizeAfter += $sizeBefore
                } else {
                    $sizeAfter = (Get-Item $outputFile).Length
                    $totalSizeAfter += $sizeAfter
                    $sizeBeforeKB = [math]::Round($sizeBefore/1KB, 1)
                    $sizeAfterKB = [math]::Round($sizeAfter/1KB, 1)
                    
                    Write-Host "    Success - OBFUSCATED" -ForegroundColor Green
                    Write-Host "    Size: $sizeBeforeKB KB -> $sizeAfterKB KB" -ForegroundColor Gray
                    $obfuscateCount++
                }
            } else {
                throw "Obfuscator failed with exit code: $LASTEXITCODE"
            }
        } catch {
            Write-Host "    Failed: $_" -ForegroundColor Red
            Write-Host "    Copying original file as fallback..." -ForegroundColor Yellow
            Copy-Item $jsFile -Destination $buildPath
            $totalSizeAfter += $sizeBefore
        }
    } else {
        Write-Host "  Not found: $jsFile (skipped)" -ForegroundColor Yellow
    }
}

if ($totalSizeBefore -gt 0) {
    $totalBeforeKB = [math]::Round($totalSizeBefore/1KB, 1)
    $totalAfterKB = [math]::Round($totalSizeAfter/1KB, 1)
    Write-Host ""
    Write-Host "Total JS size: $totalBeforeKB KB -> $totalAfterKB KB" -ForegroundColor Cyan
}
Write-Host "Obfuscated $obfuscateCount files" -ForegroundColor Cyan
Write-Host ""

# Tao file zip
Write-Host "Creating ZIP file..." -ForegroundColor Yellow
$zipFileLatest = "D:\hoathinh3d-extension.zip"

try {
    Compress-Archive -Path "$buildPath\*" -DestinationPath $zipFileLatest -Force
    
    $zipSize = [math]::Round((Get-Item $zipFileLatest).Length / 1KB, 2)
    
    Write-Host "Created: $zipFileLatest" -ForegroundColor Green
    Write-Host "ZIP Size: $zipSize KB" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host "Failed to create ZIP: $_" -ForegroundColor Red
    exit 1
}

Write-Host "========================================" -ForegroundColor Gray
Write-Host "Build completed successfully!" -ForegroundColor Green
Write-Host "Mode: MEDIUM OBFUSCATION" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Gray
Write-Host "Output files:" -ForegroundColor Cyan
Write-Host "  - $zipFileLatest" -ForegroundColor White
Write-Host "Build folder: $buildPath" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Gray
Write-Host ""
