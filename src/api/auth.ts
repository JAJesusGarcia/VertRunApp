import axios from 'axios';
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_REDIRECT_URI,
} from '@env';

const STRAVA_API_BASE_URL = 'https://www.strava.com/api/v3';

export const authenticateUser = async (code: string) => {
  const response = await axios.post(`${STRAVA_API_BASE_URL}/oauth/token`, {
    client_id: STRAVA_CLIENT_ID,
    client_secret: STRAVA_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: STRAVA_REDIRECT_URI,
  });

  return response.data;
};

// obtener el token
export const getAccessToken = async (code: string) => {
  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: STRAVA_REDIRECT_URI,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching access token', error);
    throw error;
  }
};
