class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login-btn");
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
