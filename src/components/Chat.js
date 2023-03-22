import { useState } from 'react';


import classes from '../styles/Chat.module.css';
import logo from '../assets/jcrypt_logo.svg';
import send from '../assets/send.png';
import { isNull } from '../util/Util';



const Chat = () =>{
    const [ field, setField ] = useState({ isValid: false, text: ''});


    const updateFieldHandler = (e) =>{
        const value = e.target.value;
        console.log(value)
        if(isNull(value))setField({ isValid: false, text: value });
        setField({ isValid: true, text: value });
    }

    return(
        <section className={classes.parent}>
            <header className={classes.header}>
                <span className={classes.logoContainer}>
                    <img src={logo} alt='' className={classes.logo} />
                </span>
                <p>Jobo</p>
            </header>
            <ul className={classes.ul}>
                <li>
                   <img src={logo} alt='' className={classes.logo2} />
                   <span className={classes.chat}>Got any questions? I'm happy to help.</span>
                </li>
            </ul>
            <div className={classes.inputContainer}>
                <span className={classes.areaSpan}>
                    <textarea removeOpacity
                        placeholder='Write message...' 
                        className={classes.textarea} 
                        value={field.text}
                        onChange={updateFieldHandler}
                    />
                    <span className={classes.sendContainer}>
                       <img src={send} alt='' className={`${classes.send} ${field.isValid? classes.removeOpacity : ''}`} />
                    </span>
                </span>
                <span className={classes.last}>
                   Add free&nbsp;<b style={{ color: 'orange', fontWeight: 'normal', textDecoration: 'underline'}}>live chat</b>&nbsp;to your site
                </span>
            </div>
        </section>
    )
}

export default Chat;