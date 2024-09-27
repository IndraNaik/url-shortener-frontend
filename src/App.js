import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional: For custom styles

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    try {
      const response = await axios.post('http://localhost:4000/api/url', { longUrl });
      setShortUrl(response.data.shortUrl);
      setLongUrl(response.data.longUrl);

      console.dir(response)
    } catch (err) {
      setError('Failed to shorten the URL. Please try again.');
      console.error('Error shortening URL:', err);
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter your long URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {error && <p className="error">{error}</p>}
      {shortUrl && (
        <div>
          <h3>Shortened URL:</h3>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default App;
