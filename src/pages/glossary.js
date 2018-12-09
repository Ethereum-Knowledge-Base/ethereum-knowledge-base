import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { colors, fonts, responsive } from '../styles'

const glossary = [
  {
    name: 'Wallet',
    description:
      'The software or hardware used to store and manage  accounts. These can be either a desktop app, mobile app or a hardware device',
  },
  {
    name: 'Account',
    description:
      "A key pair that contains both a public and private key used to identity the account and sign on the account's behalf, respectively. Your funds are actually stored on the blockchain, not in the wallet or account.",
  },
  {
    name: 'Address',
    description:
      "A string that represents your account, that is sometimes confused with the public key but is not the same. In Ethereum, it starts with '0x and is followed by 40 hexadecimal characters",
  },
  {
    name: 'Public Key',
    description:
      'In cryptography, you have a key pair with a public and a private key. You can derive a public key from a private key, but you cannot derive a private key from a public key.',
  },
  {
    name: 'Private Key',
    description:
      'A string that of 64 hexadecimal characters that is used to sign transactions and messages from an account. This key is private and should not be shared with anyone else as it can act in the behalf ot the account you own.',
  },
  {
    name: 'Seed Phrase',
    description:
      'A seed phrase or mnemonic phrase is a set of 12 to 24 words that represent multiple accounts. You use a seed phrase to generate multiple accounts (or accounts). Seed phrases are commonly used as a backup to easily recover multiple accounts generated inside a Wallet in case you loose your Wallet. This seed phrase should never be shared with anyone else as it will give access to private keys for multiple accounts that you own in your wallet.',
  },
  {
    name: 'Hardware Wallet',
    description:
      "A dedicated device to store and manage private keys. Similarly to software wallets, it can generate multiple accounts using a seed phrase and it can sign messages and transactions. These devices have high-security to never expose your account's private keys. As long as you never share your backup seed phrase with anyone.",
  },
  {
    name: 'Hexadecimal',
    description:
      "An encoding commonly used in Ethereum to represent addresses, private keys, transaction id's, etc. They are represented using 0-9 and letters A-F",
  },
  {
    name: 'Smart Contracts',
    description:
      'A program that is available on the blockchain that acts autonomously when you interact with it using transactions. The conditions of the smart contract can either be predefined by the contract owner or change by other accounts in the network.',
  },
  {
    name: 'Blockchain',
    description:
      'A distributed network of nodes that share a ledger with a record of all the changes in the state of the network. These changes are recorded as list of transactions inside blocks that are composed in a verifiable sequence, usually called chain.',
  },
  {
    name: 'Block',
    description:
      'Contains the a list of transactions that are cryptographically linked together to form a blockchain. A block represents a snapshot of the state of the blockchain a single period of time. In Ethereum, these blocks are mined around every 15 seconds.',
  },
  {
    name: 'Mining',
    description:
      'The process by which transactions are verified using a function that hashes together all of these transaction validations in sequence. Miners use high-powered specialized computing hardware to obtain these hashes. They are reward for performing this hashing to secure the blockchain.',
  },
  {
    name: 'Hashing',
    description:
      'A one-way function that takes any random input and deterministically produces a fixed-length output known as a hash. Hashes are used to verify that the date has not been altered and are used to validate the blockchain state.',
  },
  {
    name: 'Proof-of-Work (PoW)',
    description:
      'A security mechanism to determine the validity of the blocks and its order in a blockchain by using large amounts of computational power to ensure the consensus of a blockchain. This mechanism uses an algorithm that requires multiple trials-and-errors to create a valid block to be added to the blockchain.',
  },
  {
    name: 'Proof-of-Stake (PoS)',
    description:
      'An alternative security mechanism to Proof-of-Work that also ensures the validity of the blocks and its order in a blockchain but instead uses an enconomic stake of the validator (similar to a miner) to allow them to propose the next block and be reward for securing the network.',
  },
  {
    name: 'Pseudonymous',
    description:
      "Accounts in the blockchain are pseudonymous, meaning that their owners aren't identifiable but they are transparent and can be registered using their account's address which is used as an alias for their transactions and balances on the blockchain.",
  },
]

const SHeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (${responsive.sm.min}) {
    display: block;
  }
`

const SHeroBackground = styled.div`
  display: flex;
  justify-content: ${({ align }) => align};
  /* align-items: center; */
  z-index: -1;

  @media screen and (${responsive.sm.min}) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const SGlossaryText = styled.div`
width: 100%;
@media screen and (${responsive.sm.min}) {
  width: 50%;
}
  /* font-family: ${fonts.family.Eczar};
  font-weight: ${fonts.weight.semibold};
  font-size: ${fonts.size.h3}; */
`

const SGlossaryTerm = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 40px;
`

const SHeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
  margin: 40px auto;

  @media screen and (${responsive.sm.min}) {
    margin: 0;
    height: 100%;
  }
`

const SHeroText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${fonts.family.Eczar};
  font-weight: ${fonts.weight.extrabold};
  font-size: 25vw;
  line-height: 0.833em;

  @media screen and (${responsive.sm.min}) {
    font-size: 12.7vw;
    line-height: 0.833em;

    // TODO: REMOVE THIS LATER
    position: fixed;
    top: 0;
  }

  @media screen and (${responsive.xl.min}) {
    font-size: 178px;
    line-height: 0.833em;
  }
`

const sections = [
  {
    title: 'About',
    bgColor: colors.blue,
    dark: false,
    content: () => (
      <SHeroWrapper>
        <SHeroContent>
          <SHeroText>
            <div>{'Learn'}</div>
            <div>{'Web3.'}</div>
          </SHeroText>
        </SHeroContent>
        <SHeroBackground align={'flex-end'}>
          <SGlossaryText>
            {glossary.map(term => (
              <SGlossaryTerm>
                <h6>{term.name}</h6>
                <p>{term.description}</p>
              </SGlossaryTerm>
            ))}
          </SGlossaryText>
        </SHeroBackground>
      </SHeroWrapper>
    ),
  },
]

const GlossaryPage = () => <Layout sections={sections} />

export default GlossaryPage
