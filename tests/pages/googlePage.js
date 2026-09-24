class GooglePage {
  constructor(page) {
    this.page = page;
    // Mapeamento dos localizadores acessíveis (getByRole)
    this.botaoAceitar = page.getByRole('button', { name: /aceitar/i });
    this.barraBusca = page.getByRole('combobox', { name: /pesquisar/i });
  }

  async navegar() {
    await this.page.goto('https://www.google.com?hl=pt-BR');
  }

  async aceitarCookiesSeVisivel() {
    if (await this.botaoAceitar.isVisible()) {
      await this.botaoAceitar.click();
    }
  }

  async pesquisar(termo) {
    await this.barraBusca.fill(termo);
    await this.barraBusca.press('Enter');
  }
}

module.exports = { GooglePage };