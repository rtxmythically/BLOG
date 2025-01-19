import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:中心化金融(DeFi)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>中心化金融(DeFi)</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年11月21日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D(DeFi)%2FDeFi.webp?alt=media&token=a8732284-335a-4679-9db9-1948c51bd34a"/>
          </div>
        <h2>中心化金融(Decentralized Finance，簡稱DeFi)</h2>
        <h4>去中心化金融(DeFi)是指利用智能合約在區塊鏈上提供的金融服務，這些服務包括借貸、交易、保險和儲蓄等。DeFi 的核心在於其開放性和透明性，任何人都可以參與，簡單來說就是去中心化的銀行。</h4>
        <h2>DeFi 的運作方式</h2>
        <h4>1.用戶 A 希望借入某種加密貨幣。</h4>
        <h4>2.用戶 B 願意借出該加密貨幣。</h4>
        <h4>3.A 和 B 在 DeFi 平台上建立帳戶並存入擔保資金。</h4>
        <h4>4.智能合約根據預先設定的條件自動執行借貸交易。</h4>
        <h2>DeFi 的優勢</h2>
        <h3>1.自主性</h3>
        <h4>用戶完全掌控自己的資金和數據，不必依賴中心化機構。</h4>
        <h3>2.高流動性</h3>
        <h4>全球用戶可隨時進行交易，提升市場流動性。</h4>
        <h3>3.創新性</h3>
        <h4>DeFi 生態系統不斷催生新的金融產品，如流動性挖礦和衍生品等。</h4>
        <h3>4.透明性</h3>
        <h4>用戶可以看到現在的資金使用率，如下圖是在AAVE USDT的池子</h4>
        <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D(DeFi)%2F%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202024-12-07%20160422.png?alt=media&token=142173b8-ad3d-415a-b944-e11b9781ab31"/>
        </div>
        <h2>DeFi 的挑戰</h2>
        <h3>1.技術風險</h3>
        <h4>智能合約可能存在漏洞，導致資金損失。</h4>
        <h3>2.監管不確定性</h3>
        <h4>目前 DeFi 的法律地位尚不明確，各國對其監管政策各異。不過川普會換SEC主席，應該會對監管有更明確。</h4>
        <h3>3.使用門檻</h3>
        <h4>對於普通用戶而言，操作 DeFi 平台仍然有一定的技術門檻。</h4>

      </div>
    </div>
  );
};

export default One;
