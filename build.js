import esbuild from 'esbuild';

// esm output bundles with code splitting
esbuild
	.build({
		entryPoints: ['index.js'],
		outdir: 'dist',
		outExtension: { '.js': '.mjs' },
		bundle: true,
		sourcemap: true,
		minify: true,
		format: 'esm',
		define: { global: 'window' },
		target: ['es2020']
	})
	.catch(() => process.exit(1));

// cjs output bundle
esbuild
	.build({
		entryPoints: ['index.js'],
		outdir: 'dist',
		bundle: true,
		sourcemap: true,
		minify: true,
		format: 'cjs',
		platform: 'node',
		target: ['node16']
	})
	.catch(() => process.exit(1));
