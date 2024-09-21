"use client";
import { useState } from 'react';
import styles from './text.module.css';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfurl, setPdfurl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [lang, setLang] = useState('');
  const [history, setHistory] = useState([]); // State to store message history
  const audioUrl1 = '/output.mp3';

  const handleSendMessage = async () => {
    if (!prompt) return;

    setLoading(true);

    try {
      // Add the current prompt to history
      setHistory((prevHistory) => [...prevHistory, prompt]);

      // First request to /api/trans/translate
      const res = await fetch('/api/trans/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: `${prompt} in ${lang}` }),
      });

      const data = await res.json();
      setResponse(data.content);
      setPdfurl(data.pdfUrl);

      // Second request to /api/trans/textToSpeech for audio
      const audioRes = await fetch('/api/trans/textToSpeech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: data.content }), // Sending translated text for TTS
      });

      const audioData = await audioRes.json();
    } catch (error) {
      console.error('Error fetching translation or audio:', error);
    } finally {
      setLoading(false);
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
        <section
          className={styles.chatSection}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div className={styles.messageArea}>
            <h3 style={{ fontWeight: 'bolder' }}>Where knowledge begins</h3>
            <h1 style={{ color: 'grey', fontSize: '0.8rem' }}>
              Uses multiple sources and tools to answer questions with citations.
            </h1>

            <div className={styles.featureGrid} style={{ marginTop: '2rem' }}>
              {loading ? (
                <div className={styles.responseBox}>
                  <h1 style={{ color: 'grey', fontSize: '0.8vw' }}>Loading...</h1>
                </div>
              ) : response ? (
                <div className={styles.responseBox}>
                  <h1 style={{ color: 'grey', fontSize: '1.2vw' }}>{response}</h1>
                  <div style={{ marginTop: '1rem' }}>
                    <a href={pdfurl} download className={styles.downloadButton}>
                      Download PDF
                    </a>
                    <a href={audioUrl1} download className={styles.downloadButton} style={{ marginLeft: '1rem' }}>
                      Download Audio
                    </a>
                  </div>
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
                placeholder="Language"
                className='input1'
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              />
              <input
                type="text"
                className='input2'
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
        {/* Message history displayed here */}
        <div style={{ marginTop: '1rem', padding: '1rem', color: 'grey', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Recent Messages</h2>
          {history.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <ul>
              {history.map((message, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  {message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
