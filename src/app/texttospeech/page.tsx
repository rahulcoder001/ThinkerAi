"use client";
import { useState } from 'react';
import styles from './text.module.css';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfurl, setPdfurl] = useState('');

  // Function to handle input and make API call
  const handleSendMessage = async () => {
    if (!prompt) return;

    setLoading(true);

    try {
      const res = await fetch('/api/trans/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }), // Send prompt to API
      });

      const data = await res.json(); // Assuming the API returns a JSON response

      setResponse(data.content); // Update response (message) in state
      setPdfurl(data.pdfUrl); // Update PDF URL in state
    } catch (error) {
      console.error('Error fetching translation:', error);
    } finally {
      setLoading(false); // Set loading to false after API call is complete
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>THINKER.AI</div>
        <h1 style={{ color: 'grey' }}>Features</h1>
        <div className={styles.navLinks}>
          <a href="#">Dashboard</a>
          <a href="#" className={styles.active}>Chat</a>
          <a href="#">Llama Lab</a>
          <a href="#">Fine-tuning</a>
          <a href="#">PromptPro</a>
        </div>
        <h1 style={{ color: 'grey' }}>Settings</h1>
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
          <h1 style={{ color: 'grey', fontSize: '0.7rem' }}>A conversational tool for web searches, citing sources.</h1>
        </header>

        <section className={styles.chatSection}>
          <div className={styles.messageArea}>
            <h3 style={{ fontWeight: 'bolder' }}>Where knowledge begins</h3>
            <h1 style={{ color: 'grey', fontSize: '0.8rem' }}>Uses multiple sources and tools to answer questions with citations.</h1>

            {/* Display loading spinner, response, or default feature boxes */}
            <div className={styles.featureGrid}>
              {loading ? (
                <div className={styles.responseBox}>
                  <h1 style={{ color: 'grey', fontSize: '0.8vw' }}>Loading...</h1>
                </div>
              ) : response ? (
                <div className={styles.responseBox}>
                  {/* Render beautified HTML content */}
                  <div dangerouslySetInnerHTML={{ __html: response }} />
                  {pdfurl && (
                    <div style={{ marginTop: '1rem' }}>
                      <a href={pdfurl} download className={styles.downloadButton}>
                        Download PDF
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div className={styles.featureBox}>
                    <h1 style={{ fontWeight: 'bolder', fontSize: '0.87vw' }}>Stay Updated</h1>
                    <h1 style={{ color: 'grey', fontSize: '0.6vw' }}>Rental Prices in North American Cities.</h1>
                  </div>
                  <div className={styles.featureBox}>
                    <h1 style={{ fontWeight: 'bolder', fontSize: '0.87vw' }}>Learn a Topic</h1>
                    <h1 style={{ color: 'grey', fontSize: '0.6vw' }}>Detailed explanation of Trigonometry.</h1>
                  </div>
                  <div className={styles.featureBox}>
                    <h1 style={{ fontWeight: 'bolder', fontSize: '0.87vw' }}>Research</h1>
                    <h1 style={{ color: 'grey', fontSize: '0.6vw' }}>Overview of the Solar Panel Industry.</h1>
                  </div>
                </>
              )}
            </div>

            <div className={styles.messageInput}>
              <input
                type="text"
                placeholder="Write a message here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button onClick={handleSendMessage} disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav className={styles.sidebar} style={{ marginRight: '1rem' }}>
        <div>TOOLS</div>
        <h1 style={{ color: 'grey' }}>Features</h1>
        <div className={styles.navLinks}>
          <a href="#">Dashboard</a>
          <a href="#" className={styles.active}>Chat</a>
          <a href="#">Llama Lab</a>
          <a href="#">Fine-tuning</a>
          <a href="#">PromptPro</a>
        </div>
        <h1 style={{ color: 'grey' }}>Settings</h1>
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
