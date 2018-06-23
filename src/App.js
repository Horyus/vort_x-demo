import React, { Component } from 'react'
import {VortexGate, VortexWeb3Loaded, VortexWeb3LoadError, VortexWeb3NetworkError, VortexWeb3Loading, VortexWeb3Locked, VortexMetamaskLoader} from "vort_x-components";
import SimpleStorage from '../build/contracts/SimpleStorage.json'
import {Grid, Col, Panel} from 'react-bootstrap';
import Web3 from 'web3';

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

import {TransactionPanel} from "./demo-sections/transactions";
import {Overlay} from "./demo-sections/left-overlay";
import {FeedNotifications} from "./demo-sections/feed-notifications";
import {ListTransactions} from "./demo-sections/list-transactions";
import {ListContracts} from "./demo-sections/list-contracts";
import {AccountFollower} from "./demo-sections/account_follower";
import {IPFSFetcher} from './demo-sections/ipfs-fetcher';

class App extends Component {
    render() {
        return (
            <VortexGate contracts={{
                type: 'truffle',
                truffle_contracts: [SimpleStorage],
                preloaded_contracts: ["SimpleStorage"],
                network_contracts: [SimpleStorage]
            }} loader={VortexMetamaskLoader(Web3)}>


                <VortexWeb3Loaded>
                    <FeedNotifications>
                        <div className="App">
                            <main className="container">
                                <div className="pure-g">
                                    <div className="pure-u-1-1">
                                        <h1>VortΞx Demo Loaded !</h1>
                                    </div>
                                </div>
                                <Grid>
                                    <Col xs={6}>
                                        <TransactionPanel/>
                                    </Col>
                                    <Col xs={6}>
                                        <ListTransactions/>
                                    </Col>
                                    <Col xs={6}>
                                        <ListContracts/>
                                    </Col>
                                    <Col xs={6}>
                                        <IPFSFetcher/>
                                    </Col>
                                    <Col xs={6}>
                                        <Overlay/>
                                    </Col>
                                    <Col xs={6}>
                                        <Panel bsStyle="primary">
                                            <Panel.Heading>Example #6: Instant Balances</Panel.Heading>
                                            <Panel.Body>
                                                <AccountFollower/>
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                </Grid>
                            </main>
                        </div>
                    </FeedNotifications>
                </VortexWeb3Loaded>


                <VortexWeb3Loading>
                    <div className="App">

                        <main className="container">
                            <div className="pure-g">
                                <div className="pure-u-1-1">
                                    <h1>Loading ... </h1>
                                </div>
                            </div>
                        </main>
                    </div>
                </VortexWeb3Loading>


                <VortexWeb3LoadError>
                    <div className="App">

                        <main className="container">
                            <div className="pure-g">
                                <div className="pure-u-1-1">
                                    <h1>Oops!</h1>
                                    <p>Looks like there is a problem with your Web3. Check that you unlocked your account, that Web3 is properly connected to a network and that your loader resolves a web3@1.0.0+ version of Web3 !</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </VortexWeb3LoadError>


                <VortexWeb3NetworkError>
                    <div className="App">

                        <main className="container">
                            <div className="pure-g">
                                <div className="pure-u-1-1">
                                    <h1>Oops!</h1>
                                    <p>We could not find your smart contracts on the current network :(.<br/> Please check if you are on the good network !</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </VortexWeb3NetworkError>


                <VortexWeb3Locked>
                    <div className="App">

                        <main className="container">
                            <div className="pure-g">
                                <div className="pure-u-1-1">
                                    <h1>Psst!</h1>
                                    <p>Looks like someone forgot to unlock its wallet provider ;)</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </VortexWeb3Locked>


            </VortexGate>
        );
    }
}

export default App
