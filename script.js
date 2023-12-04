import express from 'express';
import { CNNScraper, FoxScraper } from '@soralinks/news-scrapers';
const app = express();
const port = 3000;

// Scrapers setup
const cnnScraper = new CNNScraper();
const foxScraper = new FoxScraper();
const scrapers = [cnnScraper, foxScraper];

// Endpoint for scraping and returning top headlines
app.get('/scrape-headlines', async (req, res) => {
  try {
    // Scrape headlines using the provided scrapers
    const results = await Promise.allSettled(
      scrapers.map(async (scraper) => {
        return scraper.scrape();
      })
    );

    // Extract the fulfilled results
    const responses = results
      .map((result) => (result.status === 'fulfilled' ? result.value : undefined))
      .filter(Boolean);

    // You can optionally cache the responses or perform additional processing here

    res.json(responses);
  } catch (error) {
    console.error('Error while scraping headlines:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
