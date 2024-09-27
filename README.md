<h1>URL Shortener</h1>

<p>A simple URL shortener application built with React.js for the frontend and Node.js with Express.js for the backend. This application allows users to shorten long URLs, making them easier to share.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
    <li>Shorten long URLs</li>
    <li>Redirect to the original URL when the short URL is clicked</li>
    <li>User-friendly interface</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
    <li><strong>Frontend:</strong> React.js, Axios</li>
   
</ul>

<h2 id="installation">Installation</h2>
<ol>
    <li><strong>Clone the Repository</strong>
        <pre><code>git clone https://github.com/IndraNaik/url-shortener-frontend.git
cd url-shortener</code></pre>
    </li>
    <li><strong>Setup the Frontend</strong>
        <ol>
            <li>Open a new terminal and navigate to the frontend directory:
                <pre><code>cd url-shortener-frontend</code></pre>
            </li>
            <li>Install the required packages:
                <pre><code>npm install</code></pre>
            </li>
        </ol>
    </li>
    <li><strong>Start the Frontend Development Server</strong>
        <pre><code>npm start</code></pre>
        <p>The frontend will be available at <code>http://localhost:3000</code>.</p>
    </li>
</ol>

<h2 id="usage">Usage</h2>
<ol>
    <li>Open your browser and go to <code>http://localhost:3000</code>.</li>
    <li>Enter a long URL in the input field and click the "Shorten" button.</li>
    <li>The shortened URL will be displayed. Click on it to redirect to the original URL.</li>
</ol>

<h2 id="api-endpoints">API Endpoints</h2>

<h3>POST <code>/api/url</code></h3>
<p><strong>Request Body:</strong></p>
<pre><code>{
  "longUrl": "https://www.example.com"
}</code></pre>

<p><strong>Response:</strong></p>
<pre><code>{
  "shortUrl": "http://localhost:4000/abc12345"
}</code></pre>

<h3>GET <code>/:shortCode</code></h3>
<p><strong>Example Request:</strong></p>
<pre><code>http://localhost:4000/abc12345</code></pre>

<p><strong>Response:</strong></p>
<p>Redirects to the original long URL.</p>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! Please fork the repository and create a pull request for any improvements or new features.</p>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
