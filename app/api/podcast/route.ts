import { NextResponse } from 'next/server';

interface PodcastEpisode {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  episodeNumber?: string;
  seasonNumber?: string;
}

export async function GET() {
  try {
    // Use iTunes Search API to get podcast information
    const itunesUrl = 'https://itunes.apple.com/lookup?id=1435719818&entity=podcastEpisode&limit=5';
    
    const response = await fetch(itunesUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PodcastBot/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch iTunes API: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('No episodes found in iTunes API response');
    }
    
    // Parse iTunes API response to extract episode information
    const episodes: PodcastEpisode[] = [];
    
    // Filter out the podcast info (first result) and get only episodes
    const episodeResults = data.results.filter((item: { kind: string }) => item.kind === 'podcast-episode');
    
    episodeResults.forEach((episode: { trackName?: string; trackViewUrl?: string; releaseDate?: string; description?: string }) => {
      // Extract episode number from title (e.g., "S3:E10")
      const episodeMatch = episode.trackName?.match(/(S\d+:E\d+)/i);
      const episodeNumber = episodeMatch ? episodeMatch[1] : '';
      
      episodes.push({
        title: episode.trackName || 'Untitled Episode',
        link: episode.trackViewUrl || '',
        pubDate: episode.releaseDate || new Date().toISOString(),
        description: episode.description || '',
        episodeNumber: episodeNumber,
      });
    });

    // Sort episodes by release date (newest first)
    episodes.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return NextResponse.json({
      success: true,
      episodes: episodes.slice(0, 5), // Return only the 5 most recent episodes
      lastUpdated: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    
    // Return error response without fallback data
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      episodes: [],
      lastUpdated: new Date().toISOString(),
    });
  }
}
