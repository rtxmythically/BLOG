import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:非同質化代幣(NFT)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>非同質化代幣(NFT)</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年12月12日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/NFT%2FNFT.webp?alt=media&token=92c58d09-1d37-43eb-ad9b-eaf6e24872a7"/>
          </div>
          <h2>非同質化代幣（Non-Fungible Token，簡稱NFT）</h2>
          <h3>同質性與非同質性</h3>
          <h4>同質性（Fungibility）：例如，貨幣是同質性的，一張 5 美元的紙幣可以與另一張 5 美元的紙幣互換，價值相等且無區別。</h4>
          <h4>非同質性（Non-Fungibility）：NFT是非同質性的，每個 NFT 都是獨一無二的，具有獨特的識別碼與元數據，不能相互替代。</h4>
          <h3>NFT的運作原理</h3>
          <h4>NFT主要建立於區塊鏈上，最常見的是ERC-721和ERC-1155標準</h4>
          <h4>鑄造（Minting）：將數位資產（如圖片、影片或音樂）轉化為區塊鏈上的 NFT。</h4>
          <h4>NFT的獨特性使它成為所有權與真實性的證明。</h4>
          <h3>NFT的用途與類型</h3>
          <h4>藝術品：數位藝術家將作品數位化並上鏈。</h4>
          <h4>遊戲道具：遊戲內的角色皮膚、武器等可作為NFT持有和交易。</h4>
          <h4>音樂與影片：音樂人或影像創作者將作品轉化為NFT。</h4>
          <h4>收藏品：如頭像NFT（如 Cryptopunks）、交易卡等。</h4>
          <h4>實體資產的數位化：如房地產或稀有商品的證明。</h4>
          <h3>NFT的價值</h3>
          <h4>藝術家到NFT上來賣畫，不需要擔心會有人賣假畫。NFT採用區塊鏈技術，提供不可篡改的所有權證明和交易記錄。</h4>
          <h3>NFT的未來</h3>
          <h4>到遊戲購買造型，其實你不是擁有這個造型，你只是有這個造型的使用權。遊戲應該要讓造型可以交易。NFT 作為虛擬土地、建築、服飾或道具的所有權證明，將在元宇宙中發揮關鍵作用。</h4>

      </div>
    </div>
  );
};

export default One;