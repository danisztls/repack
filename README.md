# RePack
Node post-processor for static resources (HTML, CSS, JS).

## Goals
- Simplify the process of setting a post-build optimization pipeline when working with static site generators like Jekyll.
- Serve as a template and speed up the deployment of new projects.
- Reuse existing great tools from Node community like esbuild, PostCSS (autoprefixer).

## Caveats
It doesn't compete with more complex frameworks for assets bundling, minification and optimization like Webpack or modern generators like Hugo which have integrated methods for those. It's meant to provide a decent level of optimization with a trival amount of overhead for projects that otherwise would have none.

## Usage
### CLI
```sh
# Build
./build && repack --src <source> --dst <destination>

# Serve
./serve && repack --watch --src <source> --dst <destination>
```

### API
...

## Development
Project use Node [standard](https://github.com/standard/standard) to automatically fix code and enforce a style.

## See also
- [jekyll-minifier](https://github.com/Mendeo/jekyll-minifier): pure Liquid, should be slow and experimental but work with GitHub Pages
