export const fetchTravelNews = async () => {
  try {
    const response = await fetch(
      'https://api.spaceflightnewsapi.net/v4/articles/?limit=6'
    );
    const data = await response.json();

    return data.results.map((item) => ({
      title: item.title,
      summary: item.summary,
      image: item.image_url,
      url: item.url,
    }));
  } catch (error) {
    console.error('News API Error:', error);
    return [];
  }
};

export const fetchTouristPlaces = async (city = 'Delhi') => {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${city}%20tourist%20places&format=json&origin=*`
    );

    const data = await response.json();

    return data.query.search.slice(0, 6).map((place) => ({
      title: place.title,
      description: place.snippet.replace(/<[^>]*>/g, ''),
      link: `https://en.wikipedia.org/wiki/${place.title.replace(/ /g, '_')}`,
    }));
  } catch (error) {
    console.error('Places API Error:', error);
    return [];
  }
};
