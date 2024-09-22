"use client";
import { useState } from 'react';
import styles from './text.module.css';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfurl, setPdfurl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [text, setText] = useState('');
  const [lang, setLang] = useState('');
  const [history, setHistory] = useState([]); // Message history
  const [videoFile, setVideoFile] = useState<File | null>(null);  // State to handle video file
  
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
        // Correct string interpolation
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
      setAudioUrl(audioData.audioUrl); // Set the returned audio URL
    } catch (error) {
      console.error('Error fetching translation or audio:', error);
    } finally {
      setLoading(false);
    }
  };

  const  handleVideoUpload=async()=>{
    const file = videoFile;
    if (!file) return;
    setLoading(true);
    try{
     const res=await fetch('/api/trans/videoToText',{
      
     })
    }catch(err){
      console.error(err);
    }
    finally{
      setLoading(false);
    }
  }

  

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
              ) : (response) ? (
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

              {/* Video upload section */}
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white text-blue-500 transition-all duration-200 ease-in-out">
                  <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 5.22A3 3 0 0 0 14.5 4h-9a3 3 0 0 0-2.38 1.22L1 8.5V17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.5l-2.12-3.28zM10 15l-3.5-3.5L8 10l2 2 4-4 1.5 1.5L10 15z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">Select a video file</span>
                  <input type="file" className="hidden" accept=".mp4" onChange={handleVideoUpload} />
                </label>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav className={styles.sidebar} style={{ marginRight: '1rem' }}>
        <div>TOOLS</div>
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
