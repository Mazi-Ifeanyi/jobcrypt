import { useState, useLayoutEffect } from 'react';
import { ethers } from 'ethers';


import classes from '../styles/Layout.module.css';
import logo from '../assets/jcrypt_logo.svg';
import youtube from '../assets/youtube.png';
import tiktok from '../assets/tik-tok.png';
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';
import chatIcon from '../assets/live-chat.png';
import cancelIcon from '../assets/x.png';
import { isNull, networks } from '../util/Util';
import Chat from './Chat';


const Layout = (props) =>{
    const [ wallet, setWallet ] = useState('');
    const [ buttonStatus, setButtonStatus ] = useState('Click to connect to metamask');
    const [ email, setEmail ] = useState({ isValid: null, text: '' });
    const [ showChat, setShowChat ] = useState(false);

    useLayoutEffect(()=>{
        async function run(){
            try{
                let accounts = await window.ethereum.request({method: 'eth_requestAccounts',params: []});
                // console.log(accounts)
                if(isNull(accounts[0])){
                    setWallet('');
                    setButtonStatus('Click to connect to metamask.');
                }else{
                    setWallet(`Connected Wallet: ${accounts[0]}`);
                    setButtonStatus('Web3 Connected!');
                }
            }catch(err){}
          
    }
        try{
            run();
        }catch(err){
            setWallet('');
            setButtonStatus('Click to connect to metamask.');
        }

       const accountsChanged = (accounts)=>{
        console.log('account: ', accounts)
        if(isNull(accounts[0])){
            setWallet('');
            setButtonStatus('Click to connect to metamask.');
        }else{
            setWallet(`Connected Wallet: ${accounts[0]}`);
            setButtonStatus('Disconnect');
        }
    } 

    try{
        window.ethereum.on('accountsChanged', accountsChanged);
    }catch(err){}

    return()=>{
        try{
            window.ethereum.removeListener('accountsChanged', accountsChanged);
        }catch(err){}
     }
    },[]);


    const emailHandler = (event) =>{
        const value = event.target.value;
        const emailRegex = /\S+@\S+\.\S+/;

            if(emailRegex.test(value)){
                setEmail(prev=>({ ...prev, text: value }));
            }else{
                setEmail(prev=>({ ...prev, text: value }));
            }
    }

    async function connectToMetaMask(){
        
        try{
            let accounts = await window.ethereum.request({method: 'eth_requestAccounts',params: []});
            if(isNull(accounts[0])){
                setWallet('');
                setButtonStatus('Click to connect to metamask.');
            }else{
                setWallet(`Connected Wallet: ${accounts[0]}`);
                setButtonStatus('Web3 Connected!');
            }

            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: networks.sepolia.chainId }],
            });
          }catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [networks.sepolia],
                });
              } catch (addError) {
                // handle "add" error
              }
            }
        }

      
    }
       
    



    const submit = () =>{
        if(isNull(email.text)){
            setEmail(prev=>({ ...prev, isValid: false }));
            return;
        }
    }


    return <section className={classes.parent}>
        {showChat && <Chat />}
            <header className={classes.header}>
                <div className={classes.leftHeader}>
                    <img src={logo} alt='jcrypt' className={classes.logo} />
                    <p className={classes.logoName}>Job Crypt</p>
                    <p className={classes.text}>Employer | Job Seeker</p>
                </div>
                <div className={classes.rightHeader}>
                    <span className={classes.bar}>
                        <img src={youtube} alt='' onClick={()=>window.open('https://youtu.be/iW9EAOCsgJc')} />
                        <p>How to use JobCrypt</p>
                    </span>
                    <span className={classes.bar}>
                        <img src={youtube} alt='' />
                        <span>
                            <button className={classes.btn} onClick={connectToMetaMask}>{buttonStatus}</button>
                            <p>Need Crypto? <b style={{ fontWeight: 'normal', color: 'red'}}>TEST NET USE FAUCET!!</b></p>
                        </span>
                    </span>
                    <span style={{ fontWeight: 'bold'}}>{wallet}</span>
                    <span className={classes.bar2}>
                        <span className={classes.postBtnContainer}>
                            <button className={classes.postBtn}>Post a Job</button>
                        </span>
                        <span className={classes.imageContainer}>
                            <img src={twitter} alt='' onClick={()=>window.open('https://www.twitter.com/JobCrypt')} />
                            <img src={discord} alt='' onClick={()=>window.open('https://discord.gg/89DWAkEnWb')} />
                            <img src={tiktok} alt='' onClick={()=>window.open('https://www.tiktok.com/@jobcrypt')} />
                            <img src={youtube} alt='' onClick={()=>window.open('https://www.youtube.com/channel/UCEX4iMGm6HXD9kP5MiEieAQ')} />
                        </span>
                    </span>
                </div>
            </header>
            <section className={classes.nextSection}>
                    <header className={classes.titleHeader}>Your Decentralized Job Results</header>
                    <header className={classes.titleHeader}>Ready To Start?</header>
                    <p style={{ width: '100%', textAlign: 'center',fontSize: '18px'}}>Get the latest jobs direct to your inbox</p>
                    <div className={classes.emailContainer}>
                      <p style={{ width: '100%', textAlign: 'right', fontSize:'12px', margin: '0' }}><b style={{ fontWeight: 'normal', color: 'red',}}>*</b> indicates required</p>
                    </div>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>Email Address <b style={{ fontWeight: 'normal', color: 'red'}}>*</b> </p>
                    <input 
                        type='email' 
                        placeholder='Enter Your Email...' 
                        style={!email.isValid? { borderColor: 'red'} :{}}
                        className={classes.input} 
                        value={email.text}
                        onChange={emailHandler}
                    />
                    <button className={classes.alertBtn} onClick={submit}>Join Alert List</button>
            </section>
            <footer className={classes.footer}>
                <span className={classes.leftFooter}>
                    <p>© 2022 Job Crypt</p>
                    <p>Framework by Uisual</p>
                    <p> Powered By <b style={{ color: '#000' }}>Open Block EI</b></p>
                </span>
                <span className={classes.about}>
                    about |	terms |	privacy policy |	cookie policy
                </span>
            </footer>
            <div className={classes.contactUs} onClick={()=>setShowChat(prev=>!prev)}>
                {!showChat && <img src={chatIcon} alt='' className={classes.chatIcon} />}
                {showChat &&<img src={cancelIcon} alt='' className={classes.cancelIcon} />}
            </div>
    </section>
}

export default Layout;