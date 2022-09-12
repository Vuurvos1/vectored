const esbuild = require('esbuild');

esbuild
	.build({
		entryPoints: ['index.js'],
		outfile: 'dist/vec.js',
		bundle: true,
		sourcemap: true,
		minify: true,
		format: 'esm',
		target: ['esnext']
	})
	.catch(() => process.exit(1));
