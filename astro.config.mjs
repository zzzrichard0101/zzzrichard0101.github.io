import { defineConfig } from 'astro/config';

// GitHub Actions supplies these automatically; local builds use the root path.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const customSite = process.env.SITE_URL;
const isUserPage = repo?.toLowerCase() === `${owner}.github.io`.toLowerCase();
const base = process.env.BASE_PATH ?? (customSite ? '/' : (repo && !isUserPage ? `/${repo}` : '/'));

export default defineConfig({
  output: 'static',
  site: customSite || (owner ? `https://${owner}.github.io` : undefined),
  base,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
