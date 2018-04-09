import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'connecting-a-react-front-end-to-an-ethereum-smart-contract',
      subtitle: (
        <div>
          <a href="https://github.com/zubairnahmed" target="_blank">
            Zubair Ahmed
          </a>{' '}
          from{' '}
          <a href="https://www.blockchaindevelopers.io/" target="_blank">
            Oakland Blockchain Developers
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/gd2RefIhISQ',
      content: (
        <div>
          <p>
            Learn how to leverage the front-end skills you already know to
            connect to a smart contract and deploy to the Ethereum blockchain.
            We'll cover a brief introduction to Solidity, the Ethereum smart
            contract programming language (similar to JavaScript), and discuss
            the tools you need create a smart contract on the Ethereum
            blockchain. We'll also learn how to use web-based blockchain
            intermediaries such as Metamask.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Zubair is a software engineer with Oakland Blockchain Developers and
            the CTO of GIVE. He specializes in Solidity, Web3.js, Remix,
            Truffle, IPFS, geth, and smart contract security. He also loves
            building the front-end of his dApps with React, and is excited to
            share his insight on building for Ethereum.
          </p>
        </div>
      ),
      specialties: ['react', 'ethereum']
    }}
  </Talk>
);

export default TalkImplementation;
