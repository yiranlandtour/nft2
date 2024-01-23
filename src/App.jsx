import { useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'

const App = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
        <div className="container">
      <div className="header">
        <h1>Choose your way to mint</h1>
      </div>
      <div className="wallet-button-container">
      <WalletMultiButton />
      </div>
    
      <div className="mint-status">Minted: 2356/5000</div>
      <div className="options">
        <div className="option">
          <img src="aurorium-icon.png" alt="Burn your Aurorium" />
          <p>Burn your Aurorium</p>
        </div>
        <div className="option">
          <img src="gen-zero-icon.png" alt="Burn your Gen Zero" />
          <p>Burn your Gen Zero</p>
        </div>
        <div className="option">
          <img src="classic-mint-icon.png" alt="Classic Mint" />
          <p>Classic Mint 0.1 Sol</p>
        </div>
      </div>
    </div>
          <WalletMultiButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;

