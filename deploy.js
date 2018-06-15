const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDwalletProvider(
  'hotel defense slim hover crisp exit reason actual define follow rural three',
  'https://rinkeby.infura.io/sJJavTvdpRc58eFav3zT'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('From account:', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi there!!!'] })
    .send({ from: accounts[0] });

  console.log('Deployed to:', result.options.address);
};
deploy();
