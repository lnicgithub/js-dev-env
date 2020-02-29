export default function getBaseUrl() {
  const inDevelopment = window.location.hostname;
  //console.log( inDevelopment);

  if (inDevelopment === 'localhost') {
    return 'http://' + inDevelopment + ':3001/';
  } else {
    return '/';
  }

}