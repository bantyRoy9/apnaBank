
export const properties = {
    URL: process.env.NODE_ENV == 'development' ? window.env.REACT_APP_API_URL_LOCAL : window.env.REACT_APP_API_URL
} 