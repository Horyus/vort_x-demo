<!--
  Title: Vortex Demo
  Description: And Ethereum Dapp React and Redux tool taking care of transactions, smart contracts and many more !
  Author: mortimr
  -->
<div align="center" >
<img width="25%" src="https://github.com/Horyus/vortex-truffle-box/raw/master/box-img-lg.png">
</div>

[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/0)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/0)[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/1)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/1)[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/2)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/2)[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/3)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/3)[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/4)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/4)[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/5)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/5)[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/6)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/6)[![](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/images/7)](https://sourcerer.io/fame/mortimr/Horyus/vortex-demo-truffle/links/7)

### [Documentation](https://vort-x.readthedocs.io/en/develop/tutorial)

### Running the Demo

## Metamask

Install [Metamask](https://metamask.io/) for your browser.

## Running

In one terminal
```
npm install -g ganache-cli truffle
ganache-cli -p 8545 -b 5
```

And in another one
```
cd vortex-demo
npm install
truffle migrate
npm start
```

And visit localhost on port 3000 !

**TIP !**

You can use the same `mnemonic` (12 word seed phrase) while calling `ganache-cli`, just add them with the `--mnemonic` flag.
This is very helpful as you can import these words in Metamask and always have a ready to use account for testing !

### Live Transaction Data

![Live Transaction Data](https://raw.githubusercontent.com/Horyus/vortex-demo/master/.assets/LiveTransactionData.png)

### Event Notifications

<div align="center" >
<img width="33%" src="https://raw.githubusercontent.com/Horyus/vortex-demo/master/.assets/EventNotification_1.png">
<img width="33%" src="https://raw.githubusercontent.com/Horyus/vortex-demo/master/.assets/EventNotification_2.png">
<img width="33%" src="https://raw.githubusercontent.com/Horyus/vortex-demo/master/.assets/EventNotification_3.png">
</div>


### Contract Interactions

![Contract Interactions](https://raw.githubusercontent.com/Horyus/vortex-demo/master/.assets/ContractInteraction.png)

### Event Feed

![Event Feed](https://raw.githubusercontent.com/Horyus/vortex-demo/master/.assets/EventFeed.png)

### IPFS Content Fetching

![IPFS Fetching](https://raw.githubusercontent.com/Horyus/vortex-demo/master/.assets/IpfsFetching.png)

