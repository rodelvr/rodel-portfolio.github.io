# Experimental components

Three.js experiments that are not rendered on the site yet. They live outside
`islands/` on purpose: Fresh bundles every file in `islands/`, and three.js adds
~600 kB to the client bundle and enough memory pressure to the server build that
Deno Deploy's default build container runs out of memory.

To use one, move it back into `islands/` and render it from a route.
