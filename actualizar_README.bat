@echo off
setlocal enabledelayedexpansion

:: === CONFIGURACIÓN ===
set "readme=README.md"
set "temp_readme=_temp_readme.md"

echo Generando índice en %readme%...
echo ## Índice de carpetas > %temp_readme%
echo. >> %temp_readme%
echo | Nº | Carpeta | Descripción | >> %temp_readme%
echo |----|---------|-------------| >> %temp_readme%

:: === RECORRER CARPETAS EN ORDEN NATURAL ===
set /a contador=1
for /d %%F in (*) do (
    set "nombre=%%~nxF"
    
    :: Ignorar carpetas especiales
    if /I not "!nombre!"=="node_modules" if /I not "!nombre!"==".git" (
        for /f "tokens=1,* delims=." %%A in ("!nombre!") do (
            set "numero=%%A"
            set "titulo=%%B"
            echo | !numero! | [!nombre!](./!nombre!) | !titulo! | >> %temp_readme%
        )
        set /a contador+=1
    )
)

:: Reemplazar README.md
copy /Y %temp_readme% %readme% >nul
del %temp_readme%
echo ✅ README.md actualizado respetando el orden actual.
pause