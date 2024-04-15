const {Builder, Browser, By, until} = require('selenium-webdriver');

(async function voidTest() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();

  await driver.get('https://void.co.mz');

  const nome = driver.findElement(By.name('form_fields[name]'))
  const email = driver.findElement(By.name('form_fields[email]'))
  const campoMensagem = driver.findElement(By.name('form_fields[message]'))
  // const captcha = driver.findElement(By.className('recaptcha-checkbox-border'))
  const botaoEnviar = driver.findElement(By.css('input[type="submit"]'))
  const success = driver.findElement(By.css('.elementor-message elementor-message-success'))

  await nome.sendKeys("Edwin Banda")
  await email.sendKeys("casemirobanda@gmail.com")
  await campoMensagem.sendKeys("Chamo me Edwin Banda, e este foi o meu teste técnico na Void!")
  // await captcha.click()
  await botaoEnviar.click()
  
  await driver.wait(until.elementLocated(success), 10000)
  console.log("Done!")
  await driver.quit();
})();

//delcioluis