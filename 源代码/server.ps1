$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "======================================"
Write-Host "Jade Jewelry Shop - Server Started"
Write-Host "======================================"
Write-Host "URL: http://localhost:$port"
Write-Host "Press Ctrl+C to stop"
Write-Host ""

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") { $urlPath = "/index.html" }
        
        $filePath = Join-Path $PSScriptRoot $urlPath.TrimStart("/")
        
        if (Test-Path $filePath) {
            $content = Get-Content $filePath -Raw -Encoding UTF8
            if ($filePath -match "\.js$") {
                $response.Headers.Add("Content-Type", "application/javascript; charset=utf-8")
            } elseif ($filePath -match "\.css$") {
                $response.Headers.Add("Content-Type", "text/css; charset=utf-8")
            } elseif ($filePath -match "\.json$") {
                $response.Headers.Add("Content-Type", "application/json; charset=utf-8")
            } else {
                $response.Headers.Add("Content-Type", "text/html; charset=utf-8")
            }
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            Write-Host "[OK] 200 $urlPath"
        } else {
            $notFound = "<html><body><h1>404 - File Not Found</h1></body></html>"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($notFound)
            $response.StatusCode = 404
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            Write-Host "[ERR] 404 $urlPath"
        }
        
        $response.Close()
    }
} finally {
    $listener.Stop()
    Write-Host "Server stopped"
}
