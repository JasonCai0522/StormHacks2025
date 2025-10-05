const fetchWithAuth = async (url, options = {}) => {
    let token = localStorage.getItem('accessToken');
  
    // Attach token
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  
    let res = await fetch(url, options);
  
    if (res.status === 401) {
      // Token likely expired, try to refresh
      const refreshRes = await fetch('https://stormhacks2025-t9xb.onrender.com/refresh', {
        method: 'GET',
        credentials: 'include', // Important to send the cookie
      });
  
      if (refreshRes.ok) {
        const data = await refreshRes.json();
        localStorage.setItem('accessToken', data.accessToken);
  
        // Retry original request with new token
        options.headers.Authorization = `Bearer ${data.accessToken}`;
        res = await fetch(url, options);
      } else {
        // Failed to refresh
        throw new Error('Session expired. Please log in again.');
      }
    }
  
    return res;
  };
  
  export default fetchWithAuth;