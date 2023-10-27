export const YouTube_search_api =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const API_KEY = {};

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";

export const USER_PROFILE =
  "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg";

  export const YOUTUBE_SEARCH_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
    
  export const SEARCH_RESULT_API =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+API_KEY+"&q=";

    export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  API_KEY +
  "&videoId=";

 export const Description_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=";
//  + videoId + "&key=" + API_KEY;


// random string generator

export const MsgGenerator=(length)=> {

  let result = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const charactersLength = characters.length;

  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};


//Generated this function from chatgpt
export function formatNumber(number) {
  if (number >= 1e9) {
    // Convert to billions (B)
    return (number / 1e9).toFixed(1) + "B";
  } else if (number >= 1e6) {
    // Convert to millions (M)
    return (number / 1e6).toFixed(1) + "M";
  } else if (number >= 1e3) {
    // Convert to thousands (K)
    return (number / 1e3).toFixed(1) + "K";
  } else {
    // Leave the number as is
    return number?.toString();
  }
}

// Utility function to calculate time ago(we can also use library for this but library can be heavy than a function)
export function calculateTimeAgo(publishedAt) {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  const timeDifference = currentDate - publishedDate;

  if (timeDifference < 60000) {
    return "just now";
  } else if (timeDifference < 3600000) {
    const minutesAgo = Math.floor(timeDifference / 60000);
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 86400000) {
    const hoursAgo = Math.floor(timeDifference / 3600000);
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 604800000) {
    const daysAgo = Math.floor(timeDifference / 86400000);
    return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 2629800000) {
    const weeksAgo = Math.floor(timeDifference / 604800000);
    return `${weeksAgo} week${weeksAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 31536000000) {
    const monthsAgo = Math.floor(timeDifference / 2629800000);
    return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
  } else {
    const yearsAgo = Math.floor(timeDifference / 31536000000);
    return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
  }
}






// random user generotor
var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export const UserGenerator=()=> {
    return nameList[Math.floor(Math.random() * nameList.length)];
      
    };


  export const data = [
      "BollywoodGossip",
      "CricketFever",
      "COVID19Updates",
      "MonsoonMagic",
      "StartupSuccess",
      "TravelGoals",
      "FitnessMotivation",
      "TechInnovation",
      "IndianCuisine",
      "FashionTrends",
      "DigitalMarketing",
      "EcoFriendlyLiving",
      "WellnessWednesday",
      "DIYHomeDecor",
      "YogaFitness",
      "MovieReviews",
      "BookRecommendations",
      "ArtisticExpression",
      "GreenEnergy",
      "HealthyEating",
      "PoliticalDebates",
      "StudentLife",
      "WildlifeConservation",
      "LocalArtists",
      "HistoricalFacts",
      "SustainableFashion",
      "OnlineLearning",
      "SpaceExploration",
      "TravelPhotography",
      "FoodieAdventures",
      "Entrepreneurship",
      "MusicFestivals",
      "MindfulnessMeditation",
      "FitnessChallenges",
      "IndianCinema",
      "GardeningTips",
      "FolkMusic",
      "HomeCooking",
      "EcoTourism",
      "PhotographySkills",
      "NaturePreservation",
      "SelfCareSunday",
      "FashionInspiration",
      "TechUpdates",
      "CulturalHeritage",
      "HealthyRecipes",
      "EnvironmentalAwareness",
      "MoviePremieres",
      "EconomicNews",
      "CraftyCreations",
      "OutdoorAdventures",
      "SpaceNews",
      "IndianHistory",
      "MotivationalQuotes",
      "ScienceDiscoveries",
      "TravelDiaries",
      "GourmetDining",
      "EducationReform",
      "ArtisticCreativity",
      "FitnessJourney",
      "CookingTips",
      "RenewableEnergy",
      "YogaRetreats",
      "BookClubs",
      "StreetFoodDelights",
      "StartupCulture",
      "DIYCrafts",
      "CulturalDiversity",
      "HealthyLiving",
      "PoliticalAnalysis",
      "StudentLifeHacks",
      "WildlifeProtection",
      "LocalArtisans",
      "HistoricalPlaces",
      "SustainableLiving",
      "OnlineCourses",
      "SpaceExplorers",
      "TravelInspiration",
      "FoodieEscapades",
      "BusinessInnovation",
      "MusicTrends",
      "MindfulLiving",
      "FitnessGoals",
      "IndianCinematography",
      "GardeningIdeas",
      "FolkArt",
      "HomemadeDelights",
      "EcoAdventures",
      "PhotographyHacks",
      "NatureLovers",
      "SelfCareRoutine",
      "FashionForward",
      "TechAdvancements",
      "CulturalExchange",
      "HealthyHabits",
      "EnvironmentalImpact",
      "FilmFestivals",
      "EconomicGrowth",
      "CreativeExpressions",
      "FitnessEnthusiasts",
      "CookingAdventures",
      "GreenSolutions",
      "YogaLifestyle",
      "BookLovers",
      "StreetArt",
      "StartupSuccessStories",
      "DIYProjects",
      "CulturalEnrichment",
      "WellnessJourney",
    ]
