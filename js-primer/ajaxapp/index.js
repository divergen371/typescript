const userId = "divergen371";

fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
  .then((res) => {
    console.log(res.status);
    if (!res.ok) {
      console.log("エラーレスポンス", res);
    } else {
      return res.json().then((userInfo) => {
        console.log(userInfo);
      });
    }
  })
  .catch((err) => {
    console.log(error);
  });
