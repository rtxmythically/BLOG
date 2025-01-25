import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:去中心化應用程式(DApp)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>去中心化應用程式(DApp)</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年12月26日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/DApp%2FDApp.jpg?alt=media&token=1a2fafd4-d8af-4f23-a274-7944dc43cd13"/>
          </div>
      <h2>什麼是DApp?</h2>
      <h4>去中心化應用程式是運用區塊鏈和智能合約打造的應用程式，一般的應用程式是由中央來控制的。DApp在區塊鏈上自主運行，使用智能合約來制定規則。</h4>
      <h2>DApp有何用途?</h2>
      <h4>現在一般應用程式的權利都過大，像是Google瀏覽器搜尋結果最上面通常都是贊助，意味著有很多網站必須買廣告，避免自己的用戶點錯網站。小公司很難生存，如果你要買小公司的東西，你會願意交出自己的信用卡嗎?
      <br></br>
      <br></br>
      在區塊鏈你可以使用加密錢包連接DApp，在上面完成交易。在這個過程你不必註冊和拿出你的個人資料。在區塊鏈大家講求開源，區塊鏈就像一個大家庭。不會有人把抽成訂太高，因為其他人可以馬上複製一個一樣功能的網站，Apple store抽成高達30%。
      </h4>
      <h2>DApp 的應用領域</h2>
      <h3>DeFi</h3>
      <h4>是一種基於區塊鏈的金融生態系統，提供無需銀行或金融機構的金融服務，如交易、借貸、保險、收益耕種等。這些服務完全由智能合約執行，無需信任中介機構，大幅提升透明度與可及性。</h4>
      <h3>GameFi</h3>
      <h4>玩家可以在遊戲中賺取代幣或 NFT，並自由交易或變現。這種類型的遊戲也被稱為 Play-to-Earn（P2E，邊玩邊賺）。</h4>
      <h3>DAO</h3>
      <h4>是一種基於智能合約運行的組織，沒有傳統的管理者，而是由社群投票決策，確保公平、透明和民主化治理。</h4>
      </div>
    </div>
  );
};

export default One;
