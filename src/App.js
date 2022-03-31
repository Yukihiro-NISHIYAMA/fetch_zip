import "./styles.css";

export default function App() {
  const onClickSubmit = () => {
    const url = "https://zipcloud.ibsnet.co.jp/api/search";
    const zipCode = document.getElementById("zipCode").value;
    const params = { zipcode: zipCode };
    const query = new URLSearchParams(params);
    console.log(`${url}?${query}`);
    fetch(`${url}?${query}`)
      .then(function (responce) {
        return responce.json();
      })
      .then(function (results) {
        return results["results"];
      })
      .then(function (object) {
        console.log(
          object[0].address1 + object[0].address2 + object[0].address3
        );
      });
  };

  const onClickReset = () => {
    document.getElementById("zipCode").value = "";
  };
  return (
    <div className="App">
      <input type="number" id="zipCode" />
      <p>
        <input type="submit" value="送信する" onClick={onClickSubmit} />
        <input type="reset" value="リセット" onClick={onClickReset} />
      </p>
    </div>
  );
}
