import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:穩定幣(Stablecoin)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>穩定幣(Stablecoin)</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年12月7日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%A9%A9%E5%AE%9A%E5%B9%A3%2Fstablecoins.webp?alt=media&token=130847b0-5d61-4bdc-9b7f-a93562b0449c"/>
          </div>
      <h2>穩定幣(Stablecoin)是什麼？</h2>
      <h4>穩定幣是一種類型的加密貨幣，目的是通過價格穩定在某個區間，比如 1 美元、1 歐元、1 人民幣等等。它結合了傳統資產的穩定性和加密貨幣的技術優勢，適合作為支付、交易和價值儲存的媒介。</h4>
      <h2>穩定幣的功能</h2>
      <h3>1.價格穩定</h3>
      <h4>與高波動性的比特幣和以太坊相比，穩定幣更適合日常支付和價值儲存。</h4>
      <h3>2.快速交易</h3>
      <h4>利用區塊鏈技術進行全球快速結算，無需銀行中介。</h4>     
      <h3>3.跨境支付</h3>
      <h4>成本低、速度快，適合跨國支付和匯款。</h4>
      <h3>4.去中心化金融（DeFi）</h3>
      <h4>穩定幣是 DeFi 生態中的核心，廣泛用於借貸、交易和流動性挖礦等場景。</h4>
      <h2>穩定幣的分類</h2>
      <h3>法定貨幣支持的穩定幣</h3>
      <h4>用法定貨幣（例如美元、歐元）作為抵押品。
      <br></br>
      <br></br> 
      例子：USDT（Tether）、USDC（USD Coin）、BUSD。
      <br></br>
      <br></br>
      運作方式：每發行一枚穩定幣，會有等值的法定貨幣存放在銀行或其他受信任的儲備機構中。
      </h4>
      <h3>加密資產支持的穩定幣</h3>
      <h4>
      用加密貨幣（如以太坊）作為抵押品。
      <br></br>
      <br></br> 
      例子：DAI。
      <br></br>
      <br></br>
      運作方式：用超額抵押的方式應對加密資產的價格波動。例如，用價值 150 美元的以太坊發行 100 美元的穩定幣。
      </h4>
      <h3>算法穩定幣</h3>
      <h4>通過智能合約和算法控制供需，維持價格穩定。
      <br></br>
      <br></br> 
      例子：UST（已失敗）。
      <br></br>
      <br></br>
      運作方式：如果價格高於目標（例如 1 美元），系統會增發代幣；如果價格低於目標，則減少代幣供應。但在2022年LUNA事件導致UST脫鉤，LUNC與UST市值接近歸0。
      </h4>
      <h3>商品支持的穩定幣</h3>
      <h4>用實物資產（如黃金、石油）作為抵押品。
      <br></br>
      <br></br> 
      例子：PAXG（Paxos Gold）。
      <br></br>
      <br></br>
      運作方式：每枚穩定幣對應一定量的商品，例如 1 枚 PAXG 對應 1 盎司黃金。
      </h4>
      <h2>常見穩定幣介紹</h2>
      <h3>1.USDT（Tether）</h3>
      <div className='img'>
          <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%A9%A9%E5%AE%9A%E5%B9%A3%2FUSDT.png?alt=media&token=a7961463-0044-4cbd-a68d-a8effd036029"/>
      </div>
      <h4>USDT 是目前市值最大的穩定幣，由 Tether 公司發行，與美元 1:1 錨定。每枚 USDT 的價值理論上由等值的美元或等價資產（如商業票據、短期債券）支持。
      <br></br>
      <br></br> 
      目前市佔率最大的穩定幣被廣泛使用於交易所作為交易對和資金流動工具。
      <br></br>
      <br></br>
      曾因透明度和儲備資產結構引發爭議，但仍具有強大的市場影響力。
      </h4>
      <h3>2.USDC（USD Coin）</h3>
      <div className='img'>
          <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%A9%A9%E5%AE%9A%E5%B9%A3%2FUSDC.png?alt=media&token=3ca4314f-8f06-48ff-9c26-61ae90a12abc"/>
      </div>
      <h4>由 Circle 和 Coinbase 聯合發行的穩定幣，與美元 1:1 錨定，受到美國監管機構的支持，透明度高，儲備金定期由第三方審計。
      <br></br>
      <br></br> 
      被認為是穩定幣市場中透明度最高的選擇之一。
      <br></br>
      <br></br>
      廣泛用於 DeFi、生態支付和全球交易。
      </h4>
      <h3>3.BUSD（Binance USD）</h3>
      <div className='img'>
          <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%A9%A9%E5%AE%9A%E5%B9%A3%2FBUSD.png?alt=media&token=8dd0c994-a146-4bde-9fc9-133e749afb23"/>
      </div>
      <h4>由 Binance 和 Paxos 合作發行，與美元 1:1 錨定。BUSD 受到紐約金融服務局（NYDFS）的監管，儲備金完全存放於銀行並接受定期審計。
      <br></br>
      <br></br> 
      與 Binance 交易平台深度集成，適合交易和 DeFi 應用。
      <br></br>
      <br></br>
      在監管透明度和儲備金安全性上表現不錯。
      </h4>
      <h3>4.UST（TerraUSD）</h3>
      <div className='img'>
          <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%A9%A9%E5%AE%9A%E5%B9%A3%2FUSTC.png?alt=media&token=07d6c6b2-5a91-49db-bec9-be6fc08df313"/>
      </div>
      <h4>由 Terra 區塊鏈發行，設計為通過 LUNA 作為機制代幣來維持與美元 1:1 的價值穩定。然而，因市場信心崩潰，UST 無法維持穩定，最終在 2022 年崩盤。
      <br></br>
      <br></br> 
      設計理念獨特，試圖避免法定貨幣支持的集中化問題。
      <br></br>
      <br></br>
      失敗案例突顯了純算法穩定幣的風險和局限性。
      </h4>
      <h3>5.DAI</h3>
      <div className='img'>
          <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%A9%A9%E5%AE%9A%E5%B9%A3%2FDAI.webp?alt=media&token=735c5570-642b-4245-b9f5-3847535dea54"/>
      </div>
      <h4>由 MakerDAO 生態系統發行，是一種去中心化穩定幣，與美元 1:1 錨定。DAI 的價值由用戶抵押的加密資產（如 ETH）來支持，並使用智能合約進行自動化管理。
      <br></br>
      <br></br> 
      去中心化，沒有單一的發行機構，透明度高。
      <br></br>
      <br></br>
      超額抵押保證資產安全，但效率較低。
      </h4>
      <h3>6.PAXG（Paxos Gold）</h3>
      <div className='img'>
          <img src="https://public.bnbstatic.com/static/academy/uploads/76b56862bbb4490d84dc71f32f909174.png"/>
      </div>
      <h4>由 Paxos 發行的數位資產，與實物黃金 1:1 錨定，每枚 PAXG 代表 1 盎司的倫敦優質黃金（London Good Delivery Gold）。所有黃金均存放於受監管的保險金庫中。
      <br></br>
      <br></br> 
      為數位化的黃金提供了便捷的交易方式，適合黃金投資者。
      <br></br>
      <br></br>
      可用於全球交易，並且能快速將數字資產轉換為實物黃金。
      </h4>
      </div>
    </div>
  );
};

export default One;
