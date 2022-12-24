import Moralis from 'moralis';

const config ={
  domain : 'bob.app',
  statement: 'Please Sign this Message to Continue',
  uri : 'http://localhost:3000',
  timeout: 120,

};
export default async function handler (req , res) {
  const {address , chain , network } = req.body;
  await Moralis.start({apiKey : process.env.MORALIS_APP_ID});
  try {
    const message = await Moralis.Auth.requestMessage({
      address,chain,network,...config,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({error});
    console.error(error);
    
  }
}