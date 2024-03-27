import { Link } from "react-router-dom";
import "./styles.css";

export const PageNotFound = () => {
  return (
    <section className="page_404">
      <div className="four_zero_four_bg">
        <h1>404</h1>
      </div>

      <div className="contant_box_404">
        <Link to="/" className="link_404">
          Voltar para home
        </Link>
      </div>
    </section>
  );
};
