#!/usr/bin/env bash
# Script de ejemplo: inicializa un repo, crea ramas y commits con mensajes claros.
# Úsalo en tu máquina local para crear el historial que quieres mostrar en GitHub.

set -e
REPO="mi-portafolio"
git init "$REPO"
cd "$REPO"
git checkout -b main

# Copiar los archivos del proyecto (ejecuta esto desde la carpeta donde están los archivos)
cp -r ../* .

git add .
git commit -m "feat: estructura inicial del portafolio (index, styles, script, README)"

# Crear rama para diseño
git checkout -b design/header-and-hero
# (simular cambios)
git commit --allow-empty -m "style: mejorar header y sección hero"

# Merge al main
git checkout main
git merge --no-ff design/header-and-hero -m "chore: merge diseño header/hero"

# Crear rama para seccion proyectos
git checkout -b feat/projects
git commit --allow-empty -m "feat: añadir sección de proyectos y tarjetas"

# Crear rama para contacto y formulario
git checkout -b feat/contact-form
git commit --allow-empty -m "feat: añadir formulario de contacto (simulado)"

# Merge feature branches
git checkout main
git merge --no-ff feat/projects -m "chore: merge feat/projects"
git merge --no-ff feat/contact-form -m "chore: merge feat/contact-form"

# Crear rama gh-pages y push (requiere repo remoto)
git checkout -b gh-pages
git commit --allow-empty -m "chore: preparar gh-pages"
echo "Ahora conecta tu repo remoto y haz 'git push --all origin' y 'git push origin gh-pages'"

echo "Listo. Revisa 'git log --graph --oneline --all' para ver el historial."\n