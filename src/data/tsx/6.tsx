import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:模塊化區塊鏈</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>模塊化區塊鏈</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2024年11月14日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E6%A8%A1%E5%A1%8A%E5%8C%96%E5%8D%80%E5%A1%8A%E9%8F%88%2F%E6%A8%A1%E5%A1%8A%E5%8C%96%E5%8D%80%E5%A1%8A%E9%8F%88.png?alt=media&token=c0f8fde9-5296-4e56-9415-34c9dbacff86"/>
          </div>
      <h2>在區塊鏈的不可能三角</h2>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E6%A8%A1%E5%A1%8A%E5%8C%96%E5%8D%80%E5%A1%8A%E9%8F%88%2F%E4%B8%8D%E5%8F%AF%E8%83%BD%E4%B8%89%E8%A7%92.webp?alt=media&token=9201242c-5a0b-4e4d-881b-e25074da2846"/>
      </div>
      <h4>沒有一條獨立的區塊鏈可以同時具有安全性，去中心化，可擴展性。模塊化區塊鏈的出現，讓不可能三角終於可以解決了</h4>
      <h2>區塊鏈可以分為四層</h2>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E6%A8%A1%E5%A1%8A%E5%8C%96%E5%8D%80%E5%A1%8A%E9%8F%88%2F%E5%8D%80%E5%A1%8A%E9%8F%88%E5%88%86%E7%82%BA%E5%9B%9B%E5%B1%A4.jpg?alt=media&token=962656f2-67d1-4c52-85da-4e27060cba83"/>
      </div>
      <h3>1.執行層</h3>
      <h4>執行層是區塊鏈的核心，負責處理和執行交易。這一層包括了智能合約的執行，確保交易按照預先定義的規則進行。執行層的主要功能是確保所有操作在區塊鏈上正確無誤地執行，並且能夠即時反映在區塊鏈上。</h4>
      <h3>2.數據可用層</h3>
      <h4>數據層是區塊鏈的基礎，負責記錄所有交易數據和相關資訊。這一層確保數據的不可篡改性，並形成一條安全且透明的數據鏈。每個區塊包含交易記錄、前一個區塊的哈希值及時間戳，確保數據之間的連續性和完整性。</h4>
      <h3>3.共識層</h3>
      <h4>共識層負責協調節點之間的意見，確保所有節點對區塊鏈中的交易達成一致。不同的區塊鏈系統使用不同的共識算法，如工作量證明（PoW）或權益證明（PoS），以確保只有合法且正確的交易被記錄在鏈上。</h4>
      <h3>4.結算層</h3>
      <h4>結算層是指在交易完成後進行最終確認和記錄的過程。這一層確保所有交易在區塊鏈上被正式記錄並且不可更改，提供了一個安全且透明的方式來追蹤資產和交易歷史。這些層次共同協作，形成了一個完整而高效的區塊鏈系統，每一層都對整體功能至關重要，並且支持不同類型的應用和服務</h4>
      <h2>單體區塊鏈</h2>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E6%A8%A1%E5%A1%8A%E5%8C%96%E5%8D%80%E5%A1%8A%E9%8F%88%2Fmonolithic%20blockchain.jpg?alt=media&token=fdd1a1ed-4594-4641-bd51-9d7be7bd1c65"/>
      </div>
      <h3>1.一體化結構</h3>
      <h4>單體區塊鏈將執行層、共識層、數據可用性層和結算層等所有功能整合在一起，形成一個完整的系統。這使得所有的交易處理和狀態更新都在同一個鏈上進行。</h4>
      <h3>2.穩定性與安全性</h3>
      <h4>由於所有的處理程序都在鏈上進行，這種結構通常被認為更穩定且安全。例如，比特幣和以太坊等知名區塊鏈均屬於此類。</h4>
      <h3>3.性能限制</h3>
      <h4>儘管單體區塊鏈在安全性和穩定性方面具有優勢，但其可擴展性相對較低。隨著用戶數量和交易量的增加，交易處理速度可能會變得緩慢，導致網絡擁堵。也可能導致更高的交易費用，這也是為什麼某些區塊鏈會尋求使用二層解決方案（如閃電網絡）來改善可擴展性。</h4>
      <h2>模塊化區塊鏈</h2>
      <div className='img'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E6%A8%A1%E5%A1%8A%E5%8C%96%E5%8D%80%E5%A1%8A%E9%8F%88%2Fmodular%20blockchain.jpg?alt=media&token=7eb8cfe7-bb73-4eec-8acc-54f78fb8bc9f"/>
      </div>
      <h3>1.功能分離</h3>
      <h4>模塊化區塊鏈將執行、結算、共識和數據可用性等功能拆分為獨立的模組。這意味著每個模組可以根據需求進行獨立部署和升級，從而提高系統的靈活性和可定製性，想一塊塊的積木可以自由插拔。</h4>
      <h3>2.可擴展性</h3>
      <h4>通過將不同功能分離，模塊化區塊鏈能夠實現橫向擴展。當系統需要處理更多交易時，可以簡單地增加相應的模組，而不必對整個系統進行全面升級。</h4>
      <h3>3.互操作性</h3>
      <h4>模塊化設計使得不同的模組可以高效地進行通信和協作，這有助於實現更複雜的業務邏輯。例如，可以將身份驗證模組與智能合約執行模組結合，以增強系統的安全性和可信度。</h4>
      <h3>4.易於維護</h3>
      <h4>由於各個模組的獨立性，系統維護和更新變得更加簡單。開發者可以針對特定模組進行修改，而不影響整體系統的運作。使得開發者能夠快速定位問題並解決，特別是在面對快速技術變化和升級時，模塊化架構的靈活性尤為重要。</h4>

      </div>
    </div>
  );
};

export default One;
