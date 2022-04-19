import React from 'react'
import styles from "../Home.module.css";
import html from "../../../assets/logo_html.webp";
import css from "../../../assets/logo_css.jpg";
import brush from "../../../assets/logo_brush.webp";
import { Link, useNavigate } from 'react-router-dom';
import advertising1 from "../../../assets/advertising1.jpg";
import advertising2 from "../../../assets/advertising2.jpg";
import advertising3 from "../../../assets/advertising3.jpg";
import advertising4 from "../../../assets/advertising4.jpg";
import advertising5 from "../../../assets/advertising5.jpg";
import advBottom from "../../../assets/advBottom.webp";


const Items = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.images}>

                <div className={styles.html}>
                    <Link to="/products">
                        <img
                            src={html}
                            alt=""
                            style={{ width: "470px", height: "220px" }}
                            onClick={() => navigate("/html")}
                        />
                        <h4>HTML5 Markup</h4>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                        perspiciatis ipsum incidunt optio repellendus
                    </p>
                </div>

                <div className={styles.css}>
                    <Link to="/products">
                        <img
                            src={css}
                            alt=""
                            style={{ width: "470px", height: "220px" }}
                            onClick={() => navigate("/css")}
                        />
                        <h4>CSS3 Styling</h4>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                        perspiciatis ipsum incidunt optio repellendus
                    </p>{" "}
                </div>

                <div className={styles.brush}>
                    <Link to="/products">
                        <img
                            src={brush}
                            alt=""
                            style={{ width: "470px", height: "220px" }}
                            onClick={() => navigate("/brush")}
                        />
                        <h4>Graphic Design</h4>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                        perspiciatis ipsum incidunt optio repellendus
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.advertising}>
                    <Link to="/products">
                        <img
                            src={advertising1}
                            alt=""
                            onClick={() => navigate("-1")}
                        />
                    </Link>
                    <Link to="/products">
                        <img
                            src={advertising2}
                            alt=""
                            onClick={() => navigate("-1")}
                        />
                    </Link>
                    <Link to="/products">
                        <img
                            src={advertising3}
                            alt=""
                            onClick={() => navigate("-1")}
                        />
                    </Link>
                    <Link to="/products">
                        <img
                            src={advertising4}
                            alt=""
                            onClick={() => navigate("-1")}
                        />
                    </Link>
                    <Link to="/products">
                        <img
                            src={advertising5}
                            alt=""
                            onClick={() => navigate("-1")}
                        />
                    </Link>
                </div>
                <div className={styles.advBottom}>
                    <Link to="/products">
                        <img
                            src={advBottom}
                            alt=""
                            onClick={() => navigate("-1")}
                        />
                    </Link></div>
            </div>
        </div>

    )
}

export default Items
