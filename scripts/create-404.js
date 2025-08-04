import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built index.html
const indexPath = path.join(__dirname, "../dist/index.html");
const indexContent = fs.readFileSync(indexPath, "utf8");

// Create 404.html content
const html404Content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MaXGrind</title>
    <link rel="icon" type="image/png" href="/maxgrind/assets/500x500-maxgrind-bg-logo-0P09r4nD.png" />
    <script type="module" crossorigin src="/maxgrind/assets/index-CKUBBTOY.js"></script>
    <link rel="stylesheet" crossorigin href="/maxgrind/assets/index-D67szltY.css">
</head>
<body>
    <div id="root"></div>
    <script>
        // Single Page Apps for GitHub Pages
        // MIT License
        // https://github.com/rafgraph/spa-github-pages
        // This script takes the current url and converts the path and query
        // string into just a query string, and then redirects the browser
        // to the new url with only a query string and hash fragment.
        var pathSegmentsToKeep = 1;

        var l = window.location;
        l.replace(
            l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
            l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
            l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
            (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
        );
    </script>
</body>
</html>`;

// Write 404.html
const html404Path = path.join(__dirname, "../dist/404.html");
fs.writeFileSync(html404Path, html404Content);

console.log("✅ Created 404.html for GitHub Pages routing");
