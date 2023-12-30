// import React from 'react';
// import {
//   WalletProvider,
//   WalletConnectButton,
//   useWallet,
// } from '@solana/wallet-adapter-react';
// import { clusterApiUrl } from '@solana/web3.js';

// // 配置可连接的网络
// const network = clusterApiUrl('devnet'); // 使用 Solana 的开发网络，您可以更改为其他网络
// class Button extends React.Component {
//     handleButtonClick = () => {
//       alert("Button clicked!");
//     };
  
//     render() {
//       return (
//         <button onClick={this.handleButtonClick}>Click Me</button>
//       );
//     }
//   }
  
//   export default Button;
  
// function WalletButton() {
//   const { wallet } = useWallet();

//   return (
//     <div>
//       {wallet ? (
//         <p>Connected to Solana Wallet</p>
//       ) : (
//         <WalletConnectButton />
//       )}
//     </div>
//   );
// }

