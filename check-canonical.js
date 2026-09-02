const https = require('https');

https.get('https://mydigitsign.com/blog/how-to-add-signature-in-word', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<link rel="canonical"[^>]*>/);
    console.log("Canonical:", match ? match[0] : "Not found");
  });
});
