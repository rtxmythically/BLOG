import React from 'react';
import { Helmet } from 'react-helmet';
import './css/Donate.css';

const Donate: React.FC = () => {
    return (
    <>
        <Helmet>
            <title>Jimmy Lin's Blog:捐贈</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <div className="donate-container">
            <div className="address">
                <p className="chain-name">Bitcoin Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FBTC-address(Taproot).png?alt=media&token=be28f696-f613-43a8-a18a-378a9b16d771" alt='BTC-address' />
                <p className="address-text">bc1pjsr6eyvkjlap43p8njmgfsyr5r62hu3u28d97mx46n8k7su6khqqt9y5a4</p>
            </div>
            <div className="address">
                <p className="chain-name">Solana Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FSOL-address.png?alt=media&token=84f7d419-f42f-46ef-9c04-6cfd0c72ca3c" alt='Sol-address' />
                <p className="address-text">8c2vPFeNCKnL4XLKj1sDvqEhZG9g7XsVxvVKWnZX6NBs</p>
            </div>
            <div className="address">
                <p className="chain-name">Ethereum Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FETH-address.png?alt=media&token=adaf5da4-2ae7-42c1-8a62-32d602e9a0ec" alt='ETH-address' />
                <p className="address-text">0x041feae93c2e4b66e3a0cd7ea8d9b82bc79ec1ff</p>
            </div>
            <div className="address">
                <p className="chain-name">Arbitrum Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FARB-address.png?alt=media&token=a670fb41-a1e2-408a-9985-430059ebdf06" alt='ETH-address' />
                <p className="address-text">0x041feae93c2e4b66e3a0cd7ea8d9b82bc79ec1ff</p>
            </div>
            <div className="address">
                <p className="chain-name">Optimism Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FOP-address.png?alt=media&token=a767c8f2-c8e9-4474-b972-664325e06a60" alt='ETH-address' />
                <p className="address-text">0x041feae93c2e4b66e3a0cd7ea8d9b82bc79ec1ff</p>
            </div>
            <div className="address">
                <p className="chain-name">Base Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FBASE-address.png?alt=media&token=216a5a7d-cb6d-46e1-ba07-e6d75cda7cdb" alt='Base-address' />
                <p className="address-text">0x041feae93c2e4b66e3a0cd7ea8d9b82bc79ec1ff</p>
            </div>
            <div className="address">
                <p className="chain-name">Polygon Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FPOL-address.png?alt=media&token=8fd1707a-5132-4c6f-9a3e-584abe457bd3" alt='ETH-address' />
                <p className="address-text">0x041feae93c2e4b66e3a0cd7ea8d9b82bc79ec1ff</p>
            </div>
            <div className="address">
                <p className="chain-name">BNB Smart Chain(BSC)</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FBNB-address.png?alt=media&token=d5c2f941-bcbf-4417-93fa-50a6fbbab29d" alt='BNB-address' />
                <p className="address-text">0x041feae93c2e4b66e3a0cd7ea8d9b82bc79ec1ff</p>
            </div>
            
            <div className="address">
                <p className="chain-name">TON Chain</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FTON-address.png?alt=media&token=6fecca85-6ec4-4ae5-aa84-66eb2ba04ae7" alt='Ton-address'/>
                <p className="address-text">UQAAoyiWoTjNVJJ9zqRTBl20ZodkoQsHUJIc-Y6XPBh2wQGK</p>
            </div>
            <div className="address">
                <p className="chain-name">TRON Chain</p>
                <img src='https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FTRX-address.png?alt=media&token=e825292a-49bd-4bf9-9f36-c5f2255bb28b' alt='Tron-address'/>
                <p className="address-text">TEpUAbd3PV1ir1fQ1R4JrMr9gDutxKzVps</p>
            </div>
            <div className="address">
                <p className="chain-name">Cardano(ADA) Chain</p>
                <img src='https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FADA-address.png?alt=media&token=73ea6ed9-5fcf-4f10-afe6-1795bd776cf4' alt='Cardano-address'/>
                <p className="address-text">addr1qx6kzr4tz60xhge465mk282gl9p5m5sva7lljapsu690h3fnenu5jxsux02sxrpqar0crrwdw6gwvjevq0fwv6rqkc4s8cej0s</p>
            </div>
            <div className="address">
                <p className="chain-name">SUI Chain</p>
                <img src='https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FSUI-address.png?alt=media&token=08165c3c-62fa-499b-a760-e4ffd594d098' alt='Cardano-address'/>
                <p className="address-text">0x26508a434a9f0f6be1d22553bff67f77225abfbc2334e8a7238310d9c13af5c0</p>
            </div>
            <div className="address">
                <p className="chain-name">Aptos Chain</p>
                <img src='https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E5%9C%B0%E5%9D%80%2FAPT-address.png?alt=media&token=03c627bf-a4ae-487c-92a2-3ded526e892b' alt='Cardano-address'/>
                <p className="address-text">0x43a77104fc43fae9610e8076574dda91c3087bb5cbb496909b3bbfa6bd84b2a7</p>
            </div>
        </div>
    </>
    );
};

export default Donate;
