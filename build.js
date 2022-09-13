import esbuild from 'esbuild';

// esm output bundles with code splitting
esbuild
	.build({
		entryPoints: ['index.js'],
		outdir: 'dist/esm',
		bundle: true,
		sourcemap: true,
		minify: true,
		splitting: true,
		format: 'esm',
		define: { global: 'window' },
		target: ['es2020']
	})
	.catch(() => process.exit(1));

// cjs output bundle
esbuild
	.build({
		entryPoints: ['index.js'],
		outfile: 'dist/cjs/index.js',
		bundle: true,
		sourcemap: true,
		minify: true,
		platform: 'node',
		target: ['node16']
	})
	.catch(() => process.exit(1));
