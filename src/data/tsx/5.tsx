import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:以太坊擴容方案</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>以太坊擴容方案</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年11月7日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2F%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88.png?alt=media&token=a21a0c61-20a2-4d7b-baeb-17f7c3fba012"/>
          </div>
          <h4>2017年，加密貓NFT遊戲，這是以太坊第一款NFT遊戲，於是大量新用戶湧入，交易量暴漲，導致以太坊主網堵了，一筆交易半天不確認，交易費(Gas Fee)更暴漲到上百美金，一個遊戲就把以太坊主網堵塞了，由於使用方的壓力只好擴容。</h4>
          <h2>擴容方案</h2>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2F%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88.png?alt=media&token=b75652f6-c99d-470c-9928-87350fb17002"/>
          </div>
          <h2>鏈上擴容方案</h2>
          <h3>更改共識機制</h3>
          <h4>以太坊在2022年九月正式從POW轉為POS</h4>
          <h3>分片</h3>
          <h4>把以太網主網開發成64條分片鏈</h4>
          <h3>擴大區塊規模</h3>
          <h4>以太坊主網坎昆升級 EIP4844引入blob</h4>
          <h2>鏈下擴容方案</h2>
          <h2>1.側鏈</h2>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2FPolygon-side-chain.jpg?alt=media&token=11fe371e-b989-4803-a87c-fd9fab4a6c62"></img>
          </div>
          <h4>polygon是以太坊做得最好的側鏈，是一條完全獨立運行的鏈，與主網平行存在。</h4>
          <h3>高TPS</h3>
          <h4>Polygon 作為一條側鏈，採用了更加輕量化的POS共識機制，這使其能夠輕鬆處理大量高頻交易，Polygon 可以實現最大7200TPS。</h4>
          <h3>低交易費用</h3>
          <h4>由於獨立於以太坊主鏈運行，Polygon 上的交易費用($0.015)比以太坊主鏈低得多，這降低了用戶和開發者的使用成本。</h4>
          <h3>安全性</h3>
          <h4>Polygon 透過 跨鏈橋（Bridge） 與以太坊主鏈相連接，這意味著其安全性與最終交易確認依賴於其定期回報主鏈（通常是每隔 5~30 分鐘）。這種設計提升了效率，但確實比直接在以太坊主鏈上執行交易的安全性略低。</h4>
          <h3>安全性的考量</h3>
          <h4>由於交易的最終性需要等待回報至以太坊主鏈，因此在此期間，Polygon 自身的安全性受到其共識機制（如 PoS 或其他機制）的保障。如果在回報主鏈之前，Polygon 的側鏈出現惡意行為，可能會導致臨時的資產風險。與以太坊主鏈的「去中心化與高安全性」相比，Polygon 偏向於「效率與低成本」，這是其最大的設計取捨。</h4>
          <h3>使用場景與定位</h3>
          <h4>高頻交易 DApps：例如 NFT 市場、遊戲和去中心化金融（DeFi）應用，由於交易頻繁且對低成本要求高，Polygon 是理想選擇。</h4>
          <h2>2.Layer2</h2>
          <h2>閃電網路</h2>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2Flightning-network.png?alt=media&token=978691a3-28a7-415a-99af-55cb79c3fae2"></img>
          </div>
          <br></br>
          <h3>高TPS</h3>
          <h4>閃電網路tps高達4000萬</h4>
          <h3>低交易費用</h3>
          <h4>閃電網路的“汽油費”通常非常小，通常被稱為“基本費用”，通常以聰（比特幣的最小單位）為單位，典型成本約為 1 聰，與標準比特幣交易費用； 本質上意味著閃電網路交易的費用極低，因為它是為快速、小額支付而設計的。</h4>
          <h3>高隱私性</h3>
          <h4>鏈下交易通常不會被追蹤</h4>
          <h3>擴容性差</h3>
          <h4>不支援智能合約，很難往上面去架應用</h4>
          <h2>2.Plasma</h2>
          <h3>1.Matic Network</h3>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2Fmatic%20network.png?alt=media&token=2a53441a-6c79-4148-9593-28c1682eaf17"></img>
          </div>
          <h3>Plasma 子鏈</h3>
          <h4>Matic 的 Plasma 協議是一種第二層擴展解決方案，利用 Plasma 框架來處理大量交易。這些交易是在 Matic 的 Plasma 子鏈上進行的，然後將最終的交易結果提交到以太坊主鏈。</h4>
          <h3>高效的交易處理</h3>
          <h4>Matic 網絡中的 Plasma 子鏈能處理大量的交易，並大幅減少主鏈的負擔。這樣，交易成本降低，且交易確認速度變快</h4>
          <h3>主鏈安全保障</h3>    
          <h4>儘管交易是在 Plasma 子鏈上進行，但 Matic 使用以太坊主鏈來保證整體的安全性。子鏈狀態的根被定期提交到主鏈，確保子鏈的透明性和安全性。</h4>
          <h3>2.OMG Network</h3>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2FOMG.png?alt=media&token=c49e3951-1e6a-497c-8f07-850737449d05"></img>
          </div>
          <h3>Plasma MVP（最小可行產品）</h3>
          <h4>OMG Network 使用 Plasma MVP（Minimum Viable Plasma）來實現其擴展方案，這是一種簡化版本的 Plasma，旨在提供基本的高效擴展性。這種方法在初期能夠快速處理交易，並將其狀態提交到以太坊主鏈。</h4>
          <h3>資金移動的高效性</h3>
          <h4>OMG 的 Plasma 技術特別適用於資金轉移和支付場景，支持更高的交易吞吐量和更低的交易費用。</h4>
          <h3>集中化的監控</h3>
          <h4>OMG Network 提供了一個「觀察者」或「監管者」，這些監管者能夠確保 Plasma 子鏈的正確運行，並能夠在發現問題時進行干預</h4>
          <h3>為什麼大家現在不再廣泛使用 Plasma？</h3>
          <h4>儘管 Plasma 曾被視為區塊鏈擴展的前沿技術，但隨著時間的推移，其他技術（如 Rollups）逐漸取而代之。這是因為 Plasma 存在以下一些限制，使其在實際應用中不如預期那麼受歡迎</h4>
          <h3>退出機制的複雜性</h3>
          <h4>Plasma 的一個主要挑戰是退出機制。在 Plasma 協議中，當用戶想要從 Plasma 子鏈退出並回到主鏈時，需要等待一段時間（通常是幾天），以防止欺詐行為。這樣的退出機制增加了用戶的風險和不便，尤其是在需要快速取回資金的情況下。</h4>
          <h3>缺乏靈活性和擴展性</h3>
          <h4>Plasma 雖然能提高交易吞吐量，但其設計本身缺乏對智能合約的支持，這使得它難以應用於更複雜的去中心化應用（dApp）。相比之下，Rollups 提供了更高的靈活性，能夠支持更複雜的智能合約和去中心化應用。</h4>
          <h3>安全性問題</h3>
          <h4>在某些情況下，Plasma 的安全性可能會受到質疑。由於子鏈和主鏈之間的互動方式，存在一定的風險，尤其是當子鏈的驗證者出現問題時，這會影響整個系統的安全性。</h4>
          <h3>技術的發展</h3>
          <h4>隨著 Rollups（如 Optimistic Rollups 和 ZK-Rollups）技術的成熟，這些方法被認為能夠提供更高效、更安全的擴展性解決方案。Rollups 能夠更好地處理複雜的智能合約，並且提供更高的交易吞吐量。</h4>
          <h2>3.Rollup</h2>
          <h3>1.Optimistic Rollup</h3>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2Foptimism-rollup.jpg?alt=media&token=42f32fcd-cb7b-4274-9e46-ddefb31de5f0"></img>
          </div>
          <h3>Optimistic Rollup 的運作原理</h3>
          <h3>交易處理</h3>
          <h4>Optimistic Rollup 在第二層（子鏈）處理交易，而不是直接在主鏈上處理。所有交易首先在第二層進行運算，並產生新的狀態數據。</h4>
          <h3>提交狀態根</h3>
          <h4>當交易在第二層執行完畢後，最終的結果（如新帳戶餘額）會以「狀態根」的形式被提交到主區塊鏈（例如以太坊）。這樣，主鏈能夠記錄並驗證每一筆交易的最終結果。</h4>
          <h3>延遲機制</h3>
          <h4>Optimistic Rollups 引入了一個「延遲期」的概念，通常為 7天。這是因為它假設所有的交易都是有效的，但如果有人認為某筆交易是無效的，可以在這個期間內提出挑戰（“fraud proof”）。如果挑戰成功，無效的交易會被撤銷，並且挑戰者會得到一定的獎勳。</h4>
          <h3>欺詐證明（Fraud Proofs）</h3>
          <h4>儘管Optimistic Rollup 假設所有交易都有效，但如果某筆交易被發現是無效的，系統允許其他參與者在延遲期內提出 欺詐證明。這是一種形式的“挑戰機制”，旨在保護系統免受欺詐行為的影響。如果證明某筆交易確實無效，這筆交易會被撤回，並且提出挑戰的人會獲得獎勳。</h4>
          <h3>安全性保障</h3>
          <h4>儘管交易是在第二層進行的，Optimistic Rollups 依然能夠保證一定的安全性，因為最終狀態提交到主鏈進行確認。主鏈的安全性和去中心化性使得Optimistic Rollups的整體系統在設計上更加可靠。</h4>
          <h3>Optimistic Rollups 的優點</h3>
          <h3>可擴展性</h3>
          <h4>Optimistic Rollups 通過將交易和計算處理移到第二層，減少了主鏈的負擔，從而大大提高了區塊鏈的吞吐量。它的TPS（每秒交易數量）可以顯著提高，解決了以太坊等區塊鏈的擁堵問題。</h4>
          <h3>低交易費用</h3>
          <h4>由於大部分計算在第二層進行，Optimistic Rollups 能夠顯著降低交易費用，使得微交易和大規模的去中心化應用（dApp）變得可行。</h4>
          <h3>兼容性</h3>
          <h4>Optimistic Rollups 可以與以太坊智能合約兼容，允許現有的以太坊 dApp 在 Rollup 上運行，這使得以太坊的遷移變得簡單且無縫。</h4>
          <h3>較高的安全性</h3>
          <h4>儘管交易是在第二層進行的，但 Optimistic Rollups 提交的狀態根會受到主鏈的保障，這使得整個系統的安全性更強。</h4>
          <h3>Optimistic Rollup 的挑戰與未來</h3>
          <h3>延遲問題</h3>
          <h4> 由於 Optimistic Rollups 需要等待一定的時間來提出挑戰（通常是7天），這意味著交易的最終性存在延遲。在這段時間內，交易無法被立即確認或撤回，這對一些對即時交易要求較高的應用場景（如即時支付）來說是一個問題。</h4>
          <h3>欺詐證明機制的挑戰</h3>
          <h4>儘管欺詐證明（fraud proofs）能夠幫助維護系統的安全性，但這也意味著需要額外的監控和挑戰機制。這可能增加了系統的複雜性和維護成本。</h4>
          <h3>資源消耗</h3>
          <h4>儘管 Optimistic Rollups 的交易費用較低，但它依賴主鏈來驗證最終狀態，因此仍然需要一定的資源來保證這些驗證操作的安全性。</h4>
          <h3>2.Zero Knowledge Rollup</h3>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%93%B4%E5%AE%B9%E6%96%B9%E6%A1%88%2FZK-rollup.jpg?alt=media&token=f6b39b5c-09a7-4c57-8a8d-5f2fe9b8e72f"></img>
          </div>
          <h3>交易批次處理（Off-chain）</h3>
          <h4>用戶的交易首先在第二層的 ZK-Rollup 區塊鏈中進行處理。這些交易通常涉及轉賬、智能合約執行等操作，但這些交易不會立即在主鏈上處理。</h4>
          <h4>多筆交易會被批量打包，並按照特定規則進行計算和處理。這樣可以大幅提升處理速度，因為許多交易會一起處理，而不是每筆交易都需要在主鏈上執行。</h4>
          <h3>狀態根的計算</h3>
          <h4>在處理完交易後，ZK-Rollup 會更新整個系統的 狀態樹，並計算出一個 狀態根（State Root），這個狀態根代表了所有交易完成後的系統最終狀態。狀態根是通過 Merkle 樹 哈希計算出來的，它是一個固定長度的值，用來表示區塊鏈中的所有賬戶和智能合約的狀態。</h4>
          <h4>狀態根 是 ZK-Rollup 的一個核心概念，代表了整個區塊鏈的當前狀態。所有交易和狀態變更都會通過狀態根來跟踪。</h4>
          <h3>生成零知識證明（ZKP）</h3>
          <h4><div className='black'>SNARKs（Succinct Non-Interactive Arguments of Knowledge） </div>是最常見的零知識證明技術，它可以有效地證明交易批次的有效性。這些證明是簡短且高效的，因此不會增加過多的主鏈負擔。</h4>
          <h3>提交交易數據到主鏈</h3> 
          <h4>
          當交易處理完畢並生成零知識證明後，這些證明會提交到以太坊等主鏈。提交的數據通常包括：
          <br></br>
          <div className='black'>狀態根（State Root）：</div>
          代表所有交易的最終狀態。
          <br></br>
          <div className='black'>零知識證明（ZKP）：</div>
          證明交易處理過程是正確的，不會透露交易的具體內容。
          <br></br>
          這樣一來，主鏈不需要處理每一筆交易，只需要驗證這些證明是否有效。
          </h4>
          <h3>主鏈驗證與最終性</h3>
          <h4>當主鏈接收到 ZK-Rollup 提交的數據後，主鏈的節點（如礦工）將使用零知識證明來驗證交易的有效性。主鏈的節點只需要驗證證明是否正確，而無需對每筆交易進行詳細計算。</h4>
          <h4>如果證明有效，主鏈將接受這些交易並更新狀態。由於證明的正確性是確保的，這些交易將被認為是最終且不可篡改的。</h4>
          <h4>這個過程大大減少了主鏈的計算和存儲需求，從而提升了可擴展性。</h4>
          <h3>ZK-Rollup 的優勢</h3>
          <h3>高吞吐量</h3>
          <h4> ZK-Rollup 可以將多筆交易打包在一個批次中處理，並且每次提交到主鏈的只是簡短的零知識證明和狀態根。這樣大大減少了主鏈的處理負擔，並能夠實現每秒處理數千甚至數萬筆交易的能力。</h4>
          <h3>低交易成本</h3>
          <h4>由於交易處理在第二層進行，並且主鏈只需要驗證證明而非所有交易，ZK-Rollup 大幅降低了交易的成本。</h4>
          <h3>即時交易確認</h3>
          <h4>雖然交易結果最終會提交到主鏈，但由於零知識證明是事先計算並且非常高效的，ZK-Rollup 使得交易可以實現幾乎即時的確認。</h4>
          <h3>安全性保障</h3>
          <h4>零知識證明的使用保證了交易的有效性，而不需要披露交易的具體內容。這為用戶提供了隱私保護，並且保證了第二層與主鏈之間的安全性。</h4>
          <h3>去中心化和透明性</h3>
          <h4>由於零知識證明和 Merkle 根的使用，ZK-Rollup 保證了所有交易的可驗證性和透明度，並且維持了區塊鏈的去中心化特性。</h4>
          <h3>ZK-Rollup 的挑戰與未來</h3>
          <h4>儘管 ZK-Rollup 提供了高效的解決方案，但其實現仍然面臨一些挑戰</h4>
          <h3>零知識證明的計算成本</h3>
          <h4>雖然零知識證明可以提供高效的驗證機制，但生成證明本身仍然需要一定的計算資源。隨著交易規模增長，生成證明的計算成本也可能增高。</h4>
          <h3>技術複雜性</h3>
          <h4>零知識證明和 ZK-Rollup 的實現相對較為複雜，需要精通加密學和區塊鏈技術的開發者來實現和維護。</h4>
          <h3>互操作性問題</h3>
          <h4>ZK-Rollup 需要與現有的區塊鏈（如以太坊）保持良好的互操作性，並且要支持跨鏈操作，這需要額外的協議和工具來確保不同區塊鏈之間的數據和資產流通。</h4>
        </div>
      </div>
  );
};

export default One;