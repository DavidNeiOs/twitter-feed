/**
 * Will query the server to get the data from twitter
 * @param {string} candidate the twitter handle of the candidate
 * @returns {object} custom object with needed information
 */
export const fetchCandidate = async (candidate) => {
  const response = await fetch(`http://localhost:3000/api/tweets/${candidate}`);
  const data = await response.json();
  return data.data;
};
