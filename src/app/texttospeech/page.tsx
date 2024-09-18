import styles from './text.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>THINKER.AI</div>
        <h1 style={{color:'grey'}}>Feautures</h1>
        <div className={styles.navLinks}>
          <a href="#">Dashboard</a>
          <a href="#" className={styles.active}>Chat</a>
          <a href="#">Llama Lab</a>
          <a href="#">Fine-tuning</a>
          <a href="#">PromptPro</a>
        </div>
        

        <h1 style={{color:'grey'}}>Settings</h1>
        <div className={styles.settings}>
          <a href="#">My Profile</a>
          <a href="#">Teams</a>
          <a href="#">Billing & Usage</a>
          <a href="#">Docs</a>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2>Chat with Command R+</h2>
          <h1 style={{color:'grey',fontSize:'0.7rem'}}>A conversational tool for web searches, citing sources.</h1>
        </header>
        <section className={styles.chatSection}>
          <div className={styles.messageArea}>
            <h3 style={{fontWeight:'bolder'}}>Where knowledge begins</h3>
            <h1 style={{color:'grey',fontSize:'0.8rem'}}>Uses mutiple sources and tools to answer questions with citations.</h1>
            <div className={styles.featureGrid}>
              <div className={styles.featureBox}>
                <h1 style={{fontWeight:'bolder',fontSize:'0.87vw'}}>Stay Updated</h1>
                <h1 style={{color:'grey',fontSize:'0.6vw'}}>Rental Prices in North American Cities.</h1>
                
                 </div>
                 <div className={styles.featureBox}>
                <h1 style={{fontWeight:'bolder',fontSize:'0.87vw'}}>Learn a Topic</h1>
                <h1 style={{color:'grey',fontSize:'0.6vw'}}>Detailed explanation of Trignometry.</h1>
                
                 </div>
                 <div className={styles.featureBox}>
                <h1 style={{fontWeight:'bolder',fontSize:'0.87vw'}}>Research</h1>
                <h1 style={{color:'grey',fontSize:'0.6vw'}}>Overview of the Solar Panel Industry.</h1>
                
                 </div>
            </div>
           <div style={{display:'flex',gap:'1rem'}}>
                <div className={styles.command}>Language translator</div>
                <div className={styles.command1}>Text Extraction</div>
           </div>
            <div className={styles.messageInput}>
              <input type="text" placeholder="Write a message here..." />
              <button>Send</button>
            </div>
          </div>
        </section>
      </main>

      <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>

      <div className={styles.video_container}>
            <h1 style={{textAlign:'center'}}>Send a Prompt to generate Video</h1>
      </div>
      <div className={styles.video_container1} style={{marginBottom:'2rem'}}>
      <h1 style={{textAlign:'center'}}>Send a Prompt to generate GIF</h1>
          
      </div>
      </div>



      <nav className={styles.sidebar} style={{marginRight:'1rem'}}>
        <div style={{}}>TOOLS</div>
        <h1 style={{color:'grey'}}>Feautures</h1>
        <div className={styles.navLinks}>
          <a href="#">Dashboard</a>
          <a href="#" className={styles.active}>Chat</a>
          <a href="#">Llama Lab</a>
          <a href="#">Fine-tuning</a>
          <a href="#">PromptPro</a>
        </div>
        

        <h1 style={{color:'grey'}}>Settings</h1>
        <div className={styles.settings}>
          <a href="#">My Profile</a>
          <a href="#">Teams</a>
          <a href="#">Billing & Usage</a>
          <a href="#">Docs</a>
        </div>
      </nav>



    </div>
  );
}
