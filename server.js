const {Builder, Browser, By, until} = require('selenium-webdriver');

(async function sendMessage() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();

  await driver.get('https://void.co.mz');
  console.log("Started!")
  const nome = driver.findElement(By.xpath('//*[@id="form-field-name"]'))
  const email = driver.findElement(By.xpath('//*[@id="form-field-email"]'))
  const campoMensagem = driver.findElement(By.xpath('//*[@id="form-field-message"]'))
  // const captcha = driver.findElement(By.xpath('//*[@id="recaptcha-anchor"]/div[1]'))
  const botaoEnviar = driver.findElement(By.xpath('//*[@id="form-project"]/div/form/div/div[5]/button'))
  // const success = driver.findElement(By.xpath('//*[@id="form-project"]/div/form/div[2]'))
  await nome.sendKeys("Edwin Banda")
  await email.sendKeys("casemirobanda@gmail.com")
  await campoMensagem.sendKeys("Chamo me Edwin Banda, e este foi o meu teste técnico na Void!")
  // await captcha.click()
  await botaoEnviar.click()

  
  // await driver.wait(until.elementLocated(success), 10000)
  setTimeout(()=>{
    console.log("Closing...")
  },10000)
  console.log("Done!")
  await driver.quit();
})();

