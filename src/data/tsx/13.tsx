import React from 'react';
import { Helmet } from 'react-helmet';
import './css/basic.css';

const One: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Jimmy Lin's Blog:分叉（Fork）</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='title'>
        <h1>分叉（Fork）</h1>
          <div className='time'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/calendar.svg?alt=media&token=df753433-ce85-4b37-bd10-2c3864a16565"/>
            <a>2025年1月2日</a>
          </div>
          <div className='img'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/Fork%2FFork.png?alt=media&token=1cc18230-c36d-4fc9-bb44-14f9abb7d55e"/>
          </div>
      <h2>區塊鏈的由來</h2>
      <h4>在區塊鏈世界中，"Fork"（分叉）是一個常見的現象，指的是區塊鏈的規則發生變化，導致網絡分裂成兩條或多條不同的鏈。這種分叉可能是計劃內的技術升級，也可能是社群內部對發展方向的意見分歧。本文將帶你深入了解 Crypto Fork 的類型、原因及其影響。</h4>
      <h3>什麼是 Fork？</h3>
      <h4>Fork 是指區塊鏈網絡的規則發生改變，導致舊版本與新版本可能無法兼容。根據兼容性的不同，Fork 主要分為硬分叉（Hard Fork）和軟分叉（Soft Fork）兩種類型。</h4>
      <h3>硬分叉（Hard Fork）</h3>
      <h4>硬分叉是指區塊鏈的規則發生重大變更，並且與舊版本不兼容。當部分節點繼續運行舊規則時，區塊鏈就會分裂成兩條不同的鏈，進而產生新的加密貨幣。</h4>
      <h3>硬分叉案例</h3>
      <h4><div className="black">Bitcoin Cash（BCH）（2017）</div>比特幣社群因區塊大小擴容問題發生分歧，導致部分開發者將區塊大小從 1MB 增加到 8MB，形成 Bitcoin Cash。</h4>
      <h4><div className="black">Ethereum Classic（ETC）（2016）</div>以太坊因 The DAO 事件決定回滾交易，但部分人不同意這項決策，堅持維護原鏈，於是誕生了 Ethereum Classic。</h4>
      <h3>硬分叉的特點</h3>
      <h4>
        舊鏈與新鏈不兼容
        <br></br>
        可能會產生新的加密貨幣
        <br></br>
        需要礦工和社群選擇支持哪條鏈
      </h4>
      <h3>軟分叉（Soft Fork）</h3>
      <h4>軟分叉是區塊鏈的規則改變，但與舊版本保持兼容。即使節點不升級到新版本，仍然可以參與網絡，只是會受到某些限制。</h4>
      <h3>軟分叉案例：</h3>
      <h4><div className="black">比特幣 SegWit 升級（2017）</div>SegWit（隔離見證）改進了交易處理方式，提高了比特幣的可擴展性，但與舊版本仍然兼容。</h4>
      <h4><div className="black">Ethereum's Spurious Dragon & Byzantium Fork（2016）</div>這次升級改進了以太坊的安全性與可擴展性，Spurious Dragon 主要修復了 DoS 攻擊問題，而 Byzantium 引入了更強大的智慧合約功能與 ZK-SNARKs 支援，提高了隱私性。</h4>
      <h3>軟分叉的特點</h3>
      <h4>
        舊節點仍能參與
        <br></br>
        不會創造新的加密貨幣
        <br></br>
        通常被視為更安全和穩定的升級方式
      </h4>
      <h2>為什麼會發生 Fork？</h2>
      <h4>
        技術升級（例如比特幣的 SegWit 升級）
        <br></br>
        社群意見分歧（例如比特幣與 Bitcoin Cash 的分裂）
        <br></br>
        安全性問題（例如以太坊的 The DAO 事件導致的分叉）
        <br></br>
        治理變更（例如區塊獎勵機制調整）
        </h4>
      </div>
    </div>
  );
};

export default One;
