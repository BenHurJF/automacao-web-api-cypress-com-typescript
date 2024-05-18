import { default as axios } from "axios";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // reporter sendo Junit não precisa instalar dependência...
    // reporter: "junit",
    // reporterOptions: {
    //   mochaFile: 'cypress/reports/junit/resultadoTestes.xml',
    //   toConsole: true,
    // },

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Reporting testes example',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
      reportDir: 'cypress/reports/mochawesome',
      // reportFilename: `Relatorio-${gerarData(0, 'minutes', 'dd-MM-yyyy-HH-mm')}`,
      reportTitle: 'Results smoke test automation',
      assetsDir: 'mochawesome-report',
      reportJsonFile: 'mochawesome.json',
      overwrite: true,
      autoOpen: true
    },


    setupNodeEvents(on, config) {
      on('task', {
        async sendResults(body: object) {
          const url = 'WebHook do discord';
          try {
            const res = await axios.post(url, body
            );
            console.log('Mensagem enviada com sucesso: ', res.data);
            return null;
          } catch (error) {
            console.error('Falha ao enviar mensagem: ', error.response.data);
            return null;
          }
        }
      });
      require('cypress-mochawesome-reporter/plugin')(on)
      return config;
    },
    baseUrl: 'https://www.test,com',
    viewportHeight: 1920,
    viewportWidth: 1080,
    watchForFileChanges: true,
    chromeWebSecurity: false,
    responseTimeout: 29000,
    video: true,
    screenshotOnRunFailure: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 10,
    screenshotsFolder: "cypress/screenshots"
  }
});
