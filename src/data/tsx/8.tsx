import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:分散式自治組織(DAO)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>分散式自治組織(DAO)</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年11月28日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FLearn_Illustration_What_are_Decentralized_Autonomous_Organizations__DAOs_.png?alt=media&token=69f6f563-643c-44b5-bf17-274b20e46657"/>
          </div>
      <h2>什麼是 DAO？</h2>
      <h4>DAO 是一種使用區塊鏈技術運作的組織，沒有傳統的領導結構。成員透過智能合約自動執行規則，達成去中心化治理。</h4>
      <h2>DAO 如何運作？</h2>
      <h3>1.智能合約：核心運行規則</h3>
      <h4>DAO 的規則和指南以程式碼形式寫入區塊鏈上的智能合約。智能合約根據預先定義的條件自動執行操作，確保運行無需人工干預。</h4>
      <h3>2.決策機制：代幣與投票權</h3>
      <h4>成員透過擁有 DAO 的代幣或股份參與治理，代幣數量決定投票影響力。需要決定事項（如資金分配或專案提案）時，成員使用代幣進行投票。民主程序確保決策反映社群的集體意願。</h4>     
      <h3>3.資金管理：金庫與資源分配</h3>
      <h4>DAO 擁有由社群管理的資金池，用於資助專案、投資新企業或支持倡議。成員提交資金使用提案，由社群表決決定。一旦提案核准，智能合約自動執行操作，例如資金轉帳或新代幣鑄造。(PoW)和權益證明(PoS)</h4>
      <h3>4.透明度與問責制</h3>
      <h4>所有交易和決策記錄在區塊鏈上，任何人都能公開查閱和驗證。透明性確保成員能信任組織運作，並自行負責行為。</h4>
      <h3>5.去中心化與抗審查性</h3>
      <h4>DAO 透過去中心化網路運行，抵抗審查和篡改。增強信任與可靠性，提供更穩定的組織運作方式。</h4>
      <h2>DAO 範例</h2>
      <h3>1.MakerDAO</h3>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FMakerDao.webp?alt=media&token=97ec1f58-9366-48dd-8e52-eb5bd56457b3"/>
      </div>
      <h3>領域</h3>
      <h4>去中心化金融 (DeFi)</h4>
      <h3>功能</h3>
      <h4>MakerDAO 是一個以太坊上的去中心化借貸平台，支持用戶質押加密資產來生成穩定幣 DAI。社群成員（持有 MKR 代幣）可參與治理，包括調整穩定幣儲備率等決策。</h4>
      <h3>意義</h3>
      <h4>MakerDAO 透過去中心化治理，創造了一個透明和抗審查的穩定幣生態。</h4>
      <h3>2.Uniswap DAO</h3>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FUniswap.png?alt=media&token=c5a6ead4-cd30-4149-9602-19c88d16cfcb"/>
      </div>
      <h3>領域</h3>
      <h4>去中心化交易所 (DEX)</h4>
      <h3>功能</h3>
      <h4>持有 UNI 代幣的成員可提出和表決 Uniswap 協議的升級或資金分配計劃。例如，決定用於流動性挖礦或開發新功能的資金使用。</h4>
      <h3>意義</h3>
      <h4>社群共同治理交易所，提升用戶參與感並確保公平。</h4>
      <h3>3.Aave DAO</h3>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FAAVE.jpg?alt=media&token=7f5fad54-bb30-4c36-b610-b56d5801c4b3"/>
      </div>
      <h3>領域</h3>
      <h4>借貸平台</h4>
      <h3>功能</h3>
      <h4>Aave 是一個去中心化的借貸協議，允許用戶存入或借出加密資產。社群成員（持有 AAVE 代幣）可參與協議的治理，例如添加新資產、設定利率模型等。</h4>
      <h3>意義</h3>
      <h4>讓去中心化金融產品的管理權掌握在用戶手中。</h4>
      <h3>4.ConstitutionDAO</h3>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FPeople.jpg?alt=media&token=1c1a4165-b5b5-4123-93b6-9d096e1af8cf"/>
      </div>
      <h3>領域</h3>
      <h4>籌款/文化</h4>
      <h3>功能</h3>
      <h4>該 DAO 成立於 2021 年，目的是透過集資購買美國憲法的一份稀有副本。社群成員以 ETH 捐款，捐贈者持有代幣 $PEOPLE 作為治理權利象徵。</h4>
      <h3>結果</h3>
      <h4>雖未成功購得憲法，但展示了快速動員全球資金的潛力。</h4>
      <h3>5.Decentraland DAO</h3>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FMANA.jpg?alt=media&token=9d561be5-e091-4e36-8d94-3e47a7205f6b"/>
      </div>
      <h3>領域</h3>
      <h4>元宇宙</h4>
      <h3>功能</h3>
      <h4>Decentraland 是一個虛擬世界，持有 MANA 代幣的用戶可治理平台，包括決定虛擬土地政策或社區活動資助。</h4>
      <h3>意義</h3>
      <h4>使用DAO來管理虛擬世界，讓玩家成為生態的主要決策者。以太坊和「DAO」</h4>
      <h2>以太坊和「DAO」</h2>
      <h4>DAO最早的範例之一就叫作「The DAO」，一個運行在 以太坊區塊鏈上的去中心化自治基金。它的目的是提供一個去中心化的創業基金，支持各種創新項目。成員可以通過購買 DAO 代幣來獲得該基金的所有權和治理權，包括提案和投票權。</h4>
      <h3>ICO和資金募集</h3>
      <h4>2016年5月，The DAO進行了首次代幣發行(ICO)，向公眾出售DAO代幣。該ICO很成功，吸引了大量投資者，籌集了超過1.5億美元，創下當時的記錄。</h4>
      <h3>駭客攻擊與資金盜竊</h3>
      <h4>不過，在 2016年6月，The DAO發生了駭客攻擊。攻擊者利用智能合約的漏洞，成功盜取了大約 三分之一的資金（約 5000 萬美元）。這次攻擊是加密貨幣歷史上最大的黑客事件之一，對以太坊社群造成了重大衝擊。</h4>
      <h3>硬分叉與區塊鏈分裂</h3>
      <h4>這場事件導致了以太坊區塊鏈和以太坊經典區塊鏈的分裂。</h4> 
      <h3>以太坊區塊鏈</h3>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FEthereum.webp?alt=media&token=2e033601-52d9-4f25-b3df-6e1aa43d026d"/>
      </div>
      <h4>經過硬分叉（hard fork），將詐騙交易逆轉，讓資金回到原投資者手中。這條鏈現在被稱為以太坊（ETH）。</h4> 
      <h3>以太坊經典（Ethereum Classic, ETC）</h3>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%88%86%E6%95%A3%E5%BC%8F%E8%87%AA%E6%B2%BB%E7%B5%84%E7%B9%94(DAO)%2FETC.jpeg?alt=media&token=327f3acb-113d-4f7f-b472-dc92f5c4b58a"/>
      </div>
      <h4>這條鏈遵循「程式碼即法律」的原則，認為智能合約的內容應該被尊重，即使它被利用進行了非法操作。因此，它沒有回溯交易，保留了駭客攻擊的紀錄。</h4>       
      <h3>以太坊與DAO的關聯</h3>
      <h4>The DAO的事件讓以太坊的社群和開發者在去中心化治理、智能合約安全和區塊鏈倫理方面進行了深刻的反思。儘管 The DAO 的事件最終以硬分叉結束，但它促使了區塊鏈和去中心化組織的發展，並對DAO概念的推廣和智能合約的改進起到了重要作用。</h4>
      </div>
    </div>
  );
};

export default One;
