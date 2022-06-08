
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ margin: "auto", width: "100px"}}>
      <h1>個人ブログアプリ</h1>
      <div>
        <Link to="/create">ブログ記事作成</Link>
      </div>
      <div>
        <Link to="/blogs">ブログ記事一覧</Link>
      </div>
    </div>
  );
}

export default App;
