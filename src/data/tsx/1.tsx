import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:區塊鏈的基礎知識與技術</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>區塊鏈的基礎知識與技術</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年9月9日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%8D%80%E5%A1%8A%E9%8F%88%E7%9A%84%E5%9F%BA%E7%A4%8E%E7%9F%A5%E8%AD%98%E8%88%87%E6%8A%80%E8%A1%93%2FBlockchain.jpg?alt=media&token=2327bbea-0b5c-429c-9d14-bf945304c4f2"/>
          </div>
      <h2>區塊鏈的由來</h2>
      <h4>在傳統的銀行裡，我們的交易還有我們還有多少錢，都儲存在一個帳本，這個帳本只有銀行高管接觸的到。不過之前有許多人嘗試解決這個問題，但都無法解決雙花(double-spending)，比特幣就誕生了，比特幣是如何運作的?每十分鐘就會創造一個帳本，一個一個像鎖鏈一樣連接，這個叫做區塊鏈，透過使用系統算計的方式，記下每一個鏈上的交易紀錄，每一個鏈都會給予成功結算的電腦50顆比特幣作為酬勞，運行這些電腦的人，我們稱為礦工(miner)，礦工的開銷就是電力，也就是比特幣的基礎價格。</h4>
      <h2>區塊鏈技術有哪些功能？</h2>
      <h3>分散式帳本</h3>
      <h4>區塊鏈是一個分散式的帳本，交易資訊儲存在全網路的節點上每個節點都有完整的交易記錄副本，沒有單一控制點</h4>
      <h3>加密區塊</h3>
      <h4>交易資訊被打包成區塊，每個區塊都有唯一的雜湊值區塊中包含前一個區塊的雜湊值，形成鏈式結構</h4>     
      <h3>共識機制</h3>
      <h4>網路中的節點需要達成共識來確認交易常見的共識機制有工作量證明(PoW)和權益證明(PoS)</h4>
      <h3>不可篡改性</h3>
      <h4>一旦交易被確認寫入區塊，就無法被修改或刪除要修改一個區塊，需要重新計算整個鏈上的雜湊值</h4>
      <h3>透明性</h3>
      <h4>所有交易資訊都是公開的，可以被查閱但交易者的身份是匿名的，只顯示加密後的地址</h4>
      <h2>區塊鏈如何運作?</h2>
      <h3>工作量證明(PoW)</h3>
      <h4>PoW是比特幣區塊鏈使用的共識機制。礦工需要解決一個複雜的數學問題,即找到一個特定的雜湊值。第一個計算完成的礦工將有權利編寫下一個新區塊,同時獲得一定數量的加密貨幣作為獎勵。這個過程需要大量的計算能力,確保了網路的安全性。</h4>
      <h3>權益證明(PoS)</h3>
      <h4>PoS是一種替代PoW的共識機制。在PoS中,驗證交易的權利根據節點持有的加密貨幣數量(權益)來分配。持有更多加密貨幣的節點有更高的機會被選中來驗證交易和創建新區塊。PoS通常被認為更加環保和高效,因為它不需要大量的計算能力。</h4>
      <h2>區塊鏈的解決?</h2>
      <h4>1.國家銀行可以想印多少就印多少，隨時決定你手上錢價值的問題</h4>
      <h4>2.比特幣簡化了人與人交易的問題只需要10分鐘我就可以把錢給你，也不需要通過銀行，減少了非常多的手續費，一年365天24小時都可以交易。</h4>
      <h4>3.比特幣交易是非常安全的，沒有人可以控制整個系統，就算銀行倒閉，政府倒閉，也不會影響整個系統的運作。</h4>
      </div>
    </div>
  );
};

export default One;
