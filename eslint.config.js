import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = defineConfig([
	{
		files: [eslintConfigIamnapo.filePatterns["react-typescript"]],
		extends: [eslintConfigIamnapo.configs["react-typescript"]],
	},
	globalIgnores(["distribution"]),
]);

export default config;
