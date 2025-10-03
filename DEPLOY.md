# 🌐 Guía de Despliegue del Portafolio

Esta guía te ayudará a publicar tu portafolio en línea de forma gratuita.

## Opciones de Hosting Gratuito

### 1. 🚀 GitHub Pages (Recomendado)

**Ventajas**: Gratis, fácil, dominio personalizado, SSL gratis

**Pasos**:

1. **Crear un repositorio en GitHub**:
   ```bash
   # Inicializar git en la carpeta portfolio
   cd portfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Crear repositorio en GitHub**:
   - Ve a [github.com](https://github.com)
   - Clic en "New repository"
   - Nombre: `tu-usuario.github.io` (para dominio principal) o cualquier nombre
   - Público
   - No inicializar con README

3. **Subir tu código**:
   ```bash
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git branch -M main
   git push -u origin main
   ```

4. **Configurar GitHub Pages**:
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Save

5. **Visita tu sitio**:
   - `https://tu-usuario.github.io/nombre-repositorio`
   - O `https://tu-usuario.github.io` si usaste ese nombre

### 2. 🔷 Netlify

**Ventajas**: Despliegue automático, formularios, funciones serverless

**Pasos**:

1. Ve a [netlify.com](https://netlify.com)
2. Regístrate/Inicia sesión
3. "Add new site" > "Deploy manually"
4. Arrastra la carpeta `portfolio` completa
5. Tu sitio estará en: `random-name.netlify.app`
6. Puedes cambiar el nombre en Site settings

### 3. 🔶 Vercel

**Ventajas**: Rápido, optimizado, analytics

**Pasos**:

1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con GitHub
3. "New Project"
4. Importa tu repositorio o sube archivos
5. Deploy

### 4. 📦 Surge

**Ventajas**: Simple, línea de comandos

**Pasos**:

```bash
# Instalar surge
npm install -g surge

# Navegar a tu carpeta
cd portfolio

# Desplegar
surge
```

Sigue las instrucciones, tu sitio estará en `random-name.surge.sh`

### 5. 🔺 Firebase Hosting

**Ventajas**: Google infrastructure, CDN global

**Pasos**:

1. Instala Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Inicializa Firebase:
   ```bash
   cd portfolio
   firebase login
   firebase init hosting
   ```

3. Selecciona:
   - Use existing project o crea uno nuevo
   - Public directory: . (punto)
   - Single-page app: No
   - Overwrite index.html: No

4. Despliega:
   ```bash
   firebase deploy
   ```

## 📝 Dominio Personalizado

### Para GitHub Pages:

1. Compra un dominio (Namecheap, GoDaddy, etc.)
2. En tu proveedor de DNS, agrega estos registros:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: tu-usuario.github.io
   ```

3. En GitHub Pages settings, agrega tu dominio personalizado
4. Marca "Enforce HTTPS"

### Para Netlify/Vercel:

1. Ve a Domain settings
2. Add custom domain
3. Sigue las instrucciones DNS proporcionadas

## 🔧 Optimizaciones Pre-Despliegue

### 1. Minificar CSS y JS

Online minifiers:
- CSS: [cssminifier.com](https://cssminifier.com)
- JS: [javascript-minifier.com](https://javascript-minifier.com)

### 2. Optimizar Imágenes

Si agregas imágenes:
- Usa [tinypng.com](https://tinypng.com)
- Formato WebP cuando sea posible
- Lazy loading para imágenes

### 3. Meta Tags para SEO

Ya incluidos en `index.html`, pero personaliza:
```html
<meta name="description" content="Tu descripción">
<meta name="keywords" content="tus, palabras, clave">
<meta property="og:title" content="Tu nombre - Portfolio">
<meta property="og:description" content="Tu descripción">
```

### 4. Google Analytics (Opcional)

Agrega antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

## ✅ Checklist Pre-Lanzamiento

- [ ] Revisar toda la información personal
- [ ] Verificar enlaces (email, LinkedIn, teléfono)
- [ ] Probar formulario de contacto
- [ ] Probar en diferentes navegadores
- [ ] Probar en dispositivos móviles
- [ ] Verificar ortografía
- [ ] Optimizar imágenes (si las hay)
- [ ] Añadir meta tags
- [ ] Configurar analytics (opcional)
- [ ] Crear favicon (opcional)

## 🎯 Siguiente Paso Recomendado

**GitHub Pages** es la opción más sencilla y profesional para empezar:

```bash
# En la carpeta portfolio
git init
git add .
git commit -m "Initial commit: My portfolio"
# Crea el repositorio en GitHub primero
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Luego activa GitHub Pages en la configuración del repositorio.

## 🆘 Solución de Problemas

**Problema**: Los estilos no se cargan
- **Solución**: Verifica las rutas de los archivos CSS y JS

**Problema**: GitHub Pages muestra 404
- **Solución**: Asegúrate de que `index.html` esté en la raíz

**Problema**: Cambios no se reflejan
- **Solución**: Limpia caché del navegador (Ctrl+F5)

## 📞 Soporte

Si necesitas ayuda:
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)

---

**¡Buena suerte con tu portafolio! 🚀**


