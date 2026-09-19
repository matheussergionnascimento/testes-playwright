const { test, expect } = require('@playwright/test');
const { GooglePage } = require('./pages/googlePage');

test.describe('Busca no Google', () => {
  test('Deve realizar a busca por um termo e validar o título da página', async ({ page }) => {
    const googlePage = new GooglePage(page);
    const termoBusca = 'Playwright';

    // 1. Acessa a aplicação e trata modais de cookies
    await googlePage.navegar();
    await googlePage.aceitarCookiesSeVisivel();

    // 2. Executa a ação de busca
    await googlePage.pesquisar(termoBusca);

    // 3. Valida o resultado esperado (Assertion)
    await expect(page).toHaveTitle(new RegExp(termoBusca, 'i'));
  });
});