export const FetchGithubInfo = async () => {
  const res = await fetch("https://api.github.com/users/faiz1920");
  return res.json();
};
