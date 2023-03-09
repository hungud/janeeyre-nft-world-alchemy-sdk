// npm install alchemy-sdk
import { Network, Alchemy, NftTokenType } from 'alchemy-sdk';

//
let sdkApiKey = '_VjdzzrnnoHM_K4HNV_jWT_TtIzzwFrq';
let nftAddress = '0xDad98A22e4AB42371f8957A487e1892066761Bd3';
let nftId = 1;

const alchemysettings = {
    apiKey: sdkApiKey,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(alchemysettings);

// Get the latest block number
alchemy.core.getBlockNumber();

// Get all NFTs owned by an address
alchemy.nft.getNftsForOwner(nftAddress).then(console.log);


// Subscribe to pending transactions to the nft address
alchemy.ws.on({
    method: 'alchemy_pendingTransactions',
    toAddress: nftAddress
},
    (tx) => console.log(tx)
)

// Get the floor price for a NFT contract
// alchemy.nft.getFloorPrice(nftAddress).then(console.log);
alchemy.nft.getNftMetadata(nftAddress,nftId, NftTokenType.ERC721, 100).then(console.log);

// Execute the code
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};