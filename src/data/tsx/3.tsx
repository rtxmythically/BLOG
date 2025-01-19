import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:權益證明(PoS)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>權益證明(PoS)</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年9月22日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%80%E9%BA%BC%E6%98%AF%E6%AC%8A%E7%9B%8A%E8%AD%89%E6%98%8E(PoS)%3F%2FProof%20of%20Stake.png?alt=media&token=3d4ca1b3-99da-43dd-a9ee-2b642c3434ca"/>
          </div>
      <h2>權益證明(Proof of Stake，簡稱 PoS)</h2>
      <h4>是一種根據用戶持有的加密貨幣數量來選擇驗證者的機制。持有更多代幣的用戶有更高的機會被選中進行交易驗證，這樣可以比PoW減少消耗的能源，因為不需要進行大量計算。在PoS中，區塊的驗證者是根據他們所質押的加密貨幣數量來選擇的。這意味著持有更多代幣的用戶將擁有更高的機會來驗證交易並獲得獎勵。具體來說，當用戶質押其代幣時，他們就有機會成為區塊的驗證者，並通過驗證交易賺取獎勵</h4>
      <h2>PoS 如何運作</h2>
      <h3>質押代幣</h3>
      <h4>用戶需要將一定數量的加密貨幣質押到網絡中，以獲得成為驗證者的資格。這些質押的代幣作為抵押品，確保驗證者誠實地執行其職責。</h4>
      <h3>選擇驗證者</h3>
      <h4>系統通過演算法選擇一部分質押者作為出塊節點（驗證者）。選擇的過程通常考慮以質押的代幣越多，成為驗證者的機會越大。質押時間越長，獲得記帳權的機會也會增加。如果一個節點較長時間未被選中，它可能會有更高的機會被選中。某些 PoS 協議，Cardano，還會引入「權益池」的概念，讓小額持有者通過加入質押池來提高成為驗證者的機會，而不僅僅依賴個人持有的代幣數量。</h4>
      <h3>打包交易</h3>
      <h4>被選中的驗證者負責打包交易並生成新的區塊，然後將該區塊廣播至全網。不過在某些 PoS 系統中，比如以太坊的 PoS (Ethereum 2.0)，還會有“提議者”（Proposer）和“見證者”（Attester）兩類角色。提議者負責打包區塊，而見證者則負責檢查該區塊是否有效。因此，有時候會涉及到更複雜的角色分工。</h4>
      <h3>驗證和確認</h3>
      <h4>其他節點對新生成的區塊進行驗證，確認交易無誤後，該區塊便被添加到區塊鏈上，所有參與者都能同步更新。多數 PoS 協議使用共識算法（如 Byzantine Fault Tolerance, BFT 變種），這意味著驗證者之間會就區塊達成共識，並確保系統中不存在雙重支出或其他問題。</h4>
      <h3>懲罰機制</h3>
      <h4>除了驗證者需要質押代幣作為抵押，PoS 系統通常還設有「懲罰機制」（Slashing），以防止惡意行為或疏忽。如果驗證者行為不端，系統會懲罰他們並扣除其部分質押代幣，以保障網絡安全和誠信。</h4>
      <h2>PoS(Proof of Stake)的優點</h2>
      <h3>資本集中</h3>
      <h4>PoS 系統可能導致富者更富的現象，因為擁有大量代幣的人更容易成為驗證者，從而獲得更多的獎勵。這可能導致系統的資本集中化，進而減少去中心化的程度。相比之下，PoW 雖然也有規模經濟效益問題，但對計算能力的需求可以使新參與者能夠進入競爭。</h4>
      <h3>流動性風險</h3>
      <h4>PoS 參與者需要將代幣鎖定在網絡中一定的時間，這限制了他們在市場劇烈波動時迅速提取資金的能力。而在 PoW 系統中，礦工不需要鎖定資金，只需投入硬件和能源即可參與挖礦，因此沒有這樣的流動性風險。</h4>
      <h3>通脹問題</h3>
      <h4>在 PoS 系統中，質押者可以在區塊鏈分叉的情況下同時在多條鏈上獲取收益，這可能導致通脹風險。同時，由於 PoS 會定期發行新代幣作為獎勵，如果發行過多，也可能導致整體代幣價值稀釋。PoW 系統也有通脹風險，但 PoW 中礦工的收益更直接與其算力競爭相關，代幣的發行量和節奏通常較為固定。</h4>
      <h2>主流的PoS幣種</h2>
      <h3>1.以太坊(ETH)</h3>
      <div className='img'>
        <img src="https://cryptocurrencyfacts.com/wp-content/uploads/2017/09/ethereum-1.jpg"/>
      </div>
      <h4>概述：以太坊確實是第二大加密貨幣，它在 2022 年成功從 PoW 轉型為 PoS，這一過程被稱為“合併”（The Merge），而以太坊2.0 是針對 PoS 和其他可擴展性解決方案的總稱。</h4>
      <h4>機制：用戶需要質押至少 32 ETH 才能成為驗證者。驗證者通過隨機選擇來打包和驗證交易，並生成新的區塊。PoS 的引入大幅降低了以太坊網絡的能源消耗。以太坊也有「質押池」機制，允許小額持有者聯合質押，共同參與驗證，分配獎勵。</h4>
      <h3>2.索拉納（SOL）</h3>
      <div className='img'>
        <img src="https://public.bnbstatic.com/static/academy/uploads-original/2dde1146856049b0825c1bae268762c8.png"/>
      </div>
      <h4>概述：索拉納是一個主打高效能和可擴展性的區塊鏈平台，知名於其極高的交易吞吐量（TPS）和極低的交易費用。其創新技術使其成為熱門選擇之一。</h4>
      <h4>機制：索拉納的 PoS 機制與「歷史證明」（PoH）結合使用。PoH 通過時間戳記來提升共識過程的效率，使得區塊生成速度更快。這種結合允許索拉納處理每秒數千筆交易，並實現快速確認。</h4>
      <h3>3.TON（The Open Network）</h3>
      <div className='img'>
        <img src="https://coinacademy.fr/wp-content/uploads/2022/12/logo-toncoin-ton-the-open-network-1600x1000.png.webp"/>
      </div>
      <h4>概述：TON 是一個由 Telegram 開發，後來開源並由社區進一步開發的區塊鏈平台。它的設計目的是提供可擴展、高效的區塊鏈基礎設施，支持各種去中心化應用。</h4>
      <h4>機制：TON 使用 PoS 機制，但其特點在於其「分片技術」，使得區塊鏈能夠水平擴展。驗證者可以質押 TON 代幣來參與共識過程，質押者會根據其質押額度和貢獻獲得獎勵。</h4>
      <h3>4.艾達幣（ADA）</h3>
      <div className='img'>
        <img src="https://public.bnbstatic.com/static/academy/uploads-original/6628e286df1f461a86d25314c7204525.png"/>
      </div>
      <h4>概述：艾達幣是卡爾達諾（Cardano）平台的原生代幣，這是一個以學術研究為基礎的區塊鏈項目，被認為是“第三代”區塊鏈，旨在解決比特幣和以太坊在可擴展性、安全性、互操作性等方面的挑戰。</h4>
      <h4>機制：卡爾達諾採用 Ouroboros PoS 協議，這是經過嚴格數學證明的共識機制。該系統允許 ADA 持有者將其代幣委託給權益池，這意味著即使持有小量 ADA 也能參與驗證過程並獲得獎勵。這樣的設計促進了更好的去中心化和公平性，同時支持智能合約和去中心化應用。</h4>
      <h2>PoS質押獎勵計算</h2>
      <h4>
        <a href="https://www.stakingrewards.com/calculator" target="_blank">https://www.stakingrewards.com/calculator</a>
      </h4>
      </div>
    </div>
  );
};

export default One;