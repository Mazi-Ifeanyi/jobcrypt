
import classes from '../styles/Jobs.module.css';
import hack from '../assets/hack.png';
import ficon from '../assets/filecoin-logo.png';


const Jobs =() =>{
    return(
        <section className={classes.parent}>
            <div className={classes.firstBox}>
                <header className={classes.header}>
                    <p className={classes.hotTxt}>Hot Search</p>
                    <p className={classes.marketingTxt}>Marketing|Training|Non-Dev|</p>
                </header>
                <div className={classes.box}>
                    <p className={classes.popular}>Popular</p>
                    <p className={classes.desc}>Test JobCrypt Mini-Workshop Lead<br/>Blockchain Developer<br/>QA Tester NEW<br/>Junior Programmer<br/>Web 3 Test Job</p>
                </div>
            </div>
            <div className={classes.secondBox}>
            <header className={classes.header}>
                    <p className={classes.hotTxt}>Latest Jobs</p>
                    <h5 style={{ margin: '0'}}>Approve 1 JCTUSDT Approve FIRST to Stake</h5>
                    <h5 style={{ margin: '0'}}>NOT STAKED - To Apply for jobs, please Stake :: 1 JCTUSDT</h5>
                </header>
                <div className={classes.box}>
                    <h1 className={classes.blockchain}>Blockchain Developer</h1>
                    <p style={{ color: '#00a4bd'}} className={classes.jobTxt}>JobCrypt</p>
                    <h5>| Location :: Geo-Remote | Work Type :: Contract | Posted :: 18/03/2023, 13:50:24 | more...</h5>
                </div>
                <div className={classes.box}>
                    <h1 className={classes.blockchain}>QA Tester New</h1>
                    <p style={{ color: '#00a4bd'}} className={classes.jobTxt}>JobCrypt</p>
                    <h5>| Location :: Geo-Remote | Work Type :: Contract | Posted :: 18/03/2023, 13:27:12 | more...</h5>
                </div>
            </div>
            <div className={classes.thirdBox}>
            <header className={classes.header}>
                    <p className={classes.hotTxt}>Dream Job Decentralized Search</p>
                    <span className={classes.inputContainer}>
                        <input type='' placeholder='Type search e.g solidity...' />
                        <button>Search</button>
                    </span>
                </header>
                <div className={classes.box}>
                    <h1 className={classes.popular}>Featured jobs</h1>
                    {/* <p style={{ color: '#00a4bd'}} className={classes.jobTxt}>JobCrypt</p>
                    <h5>| Location :: Geo-Remote | Work Type :: Contract | Posted :: 18/03/2023, 13:50:24 | more...</h5> */}
                </div>
            </div>
            <div className={classes.down}>
                <h1>Winner Browsers<br/> 3000 - Filecoin<br/>Prize</h1>
                <img src={hack} alt='' width={200} height={100} />
                <h1>Filecoin Next Steps<br/> Micro Grant -<br/> Awardee 2021</h1>
                <img src={ficon} alt='' width={350} height={100} />
            </div>
        </section>
    )
}

export default Jobs;