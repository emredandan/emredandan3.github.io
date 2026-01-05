// network-config.js
const tempoTestnetConfig = {
    chainId: "0xa5ad", // 42429 (hex formatında)
    chainName: "Tempo Testnet",
    rpcUrls: ["https://rpc.testnet.tempo.xyz"],
    nativeCurrency: {
        name: "Tempo",
        symbol: "TEMPO",
        decimals: 18
    },
    blockExplorerUrls: ["https://explore.tempo.xyz"]
};

async function addTempoNetwork() {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [tempoTestnetConfig]
        });
        console.log("✅ Tempo Testnet eklendi!");
        alert("Tempo Testnet başarıyla Metamask'a eklendi!");
    } catch (error) {
        console.error("❌ Hata:", error);
        alert("Hata: " + error.message);
    }
}

async function connectWallet() {
    try {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });
        console.log("✅ Cüzdan bağlandı:", accounts);
        document.getElementById("walletAddress").innerText = accounts;
        return accounts;
    } catch (error) {
        console.error("❌ Cüzdan bağlanamadı:", error);
        alert("Cüzdan bağlanamadı!");
    }
}
