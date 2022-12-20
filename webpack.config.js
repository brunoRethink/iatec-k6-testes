require('dotenv').config() 
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    FinancialAgreements: './microservices_test/test/financialAgreements/FinancialAgreements.test.js',
    GenerateBillet: './microservices_test/test/billet/GenerateBillet.test.js',
    ContractEdition: './microservices_test/test/saveContract/ContractEdition.test.js',
    ContractEdition3: './microservices_test/test/saveContract/ContractEdition3.test.js',
    ContractEdition2: './microservices_test/test/saveContract/ContractEdition2.test.js',
    DeleteFileProcessing: './microservices_test/test/bankReturnFile/DeleteFileProcessing.test.js',
    CantransferBatch: './microservices_test/test/cashierManagement/CantransferBatch.test.js',
    CurrentAccount: './microservices_test/test/currentAccounts/CurrentAccount.test.js',
    SearchContract: './microservices_test/site/contrato/SearchContract.test.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].test.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};
