const express = require('express');
const { Network, Alchemy, NftTokenType } = require('alchemy-sdk');

const app = express();
const port = process.env.PORT || 3000;

const alchemysettings = {
    apiKey: '_VjdzzrnnoHM_K4HNV_jWT_TtIzzwFrq',
    network: Network.ETH_GOERLI,
  };

const alchemy = new Alchemy(alchemysettings);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/nfts', async (req, res) => {
    const { address } = req.query;
    try {
      const nfts = await alchemy.nft.getNftsForOwner(address);
      res.render('nfts', { nfts, address });
    } catch (err) {
      console.error(err);
      res.render('error');
    }
  });  

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });