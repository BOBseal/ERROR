import { CredentialsProvider } from "next-auth/providers";
import NextAuth from 'next-auth';
import Moralis from "moralis";

export default NextAuth ({
    providers : [
        CredentialsProvider({
            name: 'MoralisAuth',
            credentials : {
                message: {
                    label : 'Message',
                    type : 'text',
                    placeholder: '0x0',
                },
                signature :{
                    label: 'Signature',
                    type : 'text',
                    placeholder: '0x0',
                },
            },

            async authorize (credentials){
                try {
                    const {message, signature} = credentials;
                    await Moralis.start({apiKey: process.env.MORALIS_APP_ID});
                    const {address ,profileId } = (await Moralis.Auth.verify({message , signature, network: 'evm'})).raw;
                    const user ={address, profileId, signature};
                } catch (error) {
                    return null;
                }
            },
        }),
    ],

    callbacks :{
        async jwt({token , user}) {
            user && (token.user = user);
            return token;
        },
        async session({session , token}) {
            session.user = token.user;
            return session;
        },
    },
});