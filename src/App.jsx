import { useState } from "react";
import "./App.css";
import Download from "./Download";

/* =========================================================
   ẢNH GAME
========================================================= */

const images = [
  "/images/games/wukong-1.jpg",
  "/images/games/wukong-2.jpeg",
  "/images/games/wukong-3.jpg",
  "/images/games/wukong-4.jpeg",
  "/images/games/wukong-5.jpg",
  "/images/games/wukong-6.jpg",
];

/* =========================================================
   GAME LIÊN QUAN
========================================================= */

const relatedGames = [
  {
    name: "Game 1",
    type: "Action RPG",
    image: "/images/related/game-1.jpg",
  },
  {
    name: "Game 2",
    type: "Action",
    image: "/images/related/game-2.jpg",
  },
  {
    name: "Game 3",
    type: "Action RPG",
    image: "/images/related/game-3.jpg",
  },
  {
    name: "Game 4",
    type: "Action Adventure",
    image: "/images/related/game-4.jpg",
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [current, setCurrent] = useState(0);
  const [page, setPage] = useState("home");

  /* =========================
     CHUYỂN ẢNH
  ========================= */

  const nextImage = () => {
    setCurrent((prev) => {
      if (images.length === 0) return 0;
      return (prev + 1) % images.length;
    });
  };

  const prevImage = () => {
    setCurrent((prev) => {
      if (images.length === 0) return 0;
      return (prev - 1 + images.length) % images.length;
    });
  };

  const goToDownload = () => {
    setPage("download");
  };

  /* =========================
     KIỂM TRA ẢNH
  ========================= */
  if (page === "download") {
    return <Download />;
  }

  if (!images.length) {
    return (
      <div className="empty-page">
        <h1>CHƯA CÓ HÌNH ẢNH</h1>

        <p>Hãy thêm ảnh vào:</p>

        <code>public/images/games/</code>
      </div>
    );
  }

  return (
    <div className="app">
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="header">
        <div className="header-inner">
          {/* LOGO */}

          <div className="logo">
            <span className="logo-mark">☯</span>

            <div>
              <div className="logo-main">MYTHIC</div>

              <div className="logo-sub">GAME VIỆT HÓA</div>
            </div>
          </div>

          {/* MENU */}

          <nav className="nav">
            <a href="#home">TRANG CHỦ</a>

            <a href="#games">GAME</a>

            <a href="#description">GIỚI THIỆU</a>

            <a href="#contact">LIÊN HỆ</a>
          </nav>

          {/* DOWNLOAD */}

          <button className="header-download" onClick={goToDownload}>
            TẢI GAME
          </button>
        </div>
      </header>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero" id="home">
        {/* BACKGROUND */}

        <div
          className="hero-background"
          style={{
            backgroundImage: `url("${images[current]}")`,
          }}
        />

        {/* DARK OVERLAY */}

        <div className="hero-overlay" />

        {/* LEFT */}

        <button
          className="gallery-arrow left"
          onClick={prevImage}
          aria-label="Ảnh trước"
        >
          ‹
        </button>

        {/* RIGHT */}

        <button
          className="gallery-arrow right"
          onClick={nextImage}
          aria-label="Ảnh tiếp theo"
        >
          ›
        </button>

        {/* HERO CONTENT */}

        <div className="hero-content">
          <div className="hero-label">VIỆT HÓA GAME</div>
        </div>

        {/* =================================================
            THUMBNAILS
        ================================================= */}

        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={image}
              className={`thumb ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            >
              <img src={image} alt={`Ảnh ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="main-container">
        {/* =================================================
            GAME HEADER
        ================================================= */}

        <section className="game-header">
          <div>
            <div className="breadcrumb">
              TRANG CHỦ &nbsp; / &nbsp; GAME &nbsp; / &nbsp; BLACK MYTH: WUKONG
            </div>

            <h2 className="text-white">Black Myth: Wukong</h2>

            <button
              className="download-game-btn"
              onClick={goToDownload}
            >
              ↓ &nbsp; TẢI GAME NGAY
            </button>

            <div className="tags">
              <span>ACTION</span>

              <span>RPG</span>

              <span>IOS</span>

              <span>VIỆT HÓA</span>
            </div>
          </div>

          <div className="like-box">
            <span>♥</span>

            <strong>173</strong>

            <small>LƯỢT THÍCH</small>
          </div>
        </section>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="content-grid">
          {/* =========================
              DESCRIPTION
          ========================= */}

          <article className="description" id="description">
            <h3>BLACK MYTH: WUKONG</h3>

            <div className="gold-line" />

            <p>
              Black Myth: Wukong là một tựa game hành động nhập vai lấy cảm hứng
              từ thần thoại Trung Hoa và tác phẩm kinh điển Tây Du Ký.
            </p>

            <p>
              Người chơi sẽ vào vai Thiên Mệnh Nhân, bước lên hành trình tìm
              kiếm sự thật ẩn sau truyền thuyết về Đại Thánh.
            </p>

            <p>
              Trên con đường phía Tây, bạn sẽ phải đối mặt với vô số yêu quái,
              những đối thủ mạnh mẽ và các thử thách nguy hiểm.
            </p>

            <p>
              Hệ thống chiến đấu kết hợp các kỹ năng sử dụng gậy, phép thuật,
              biến hình và nhiều năng lực đặc biệt khác.
            </p>

            {/* QUOTE */}

            <div className="quote">
              <span>“</span>

              <div>
                Một thế giới huyền bí đang chờ đợi Thiên Mệnh Nhân khám phá.
              </div>
            </div>

            {/* FEATURES */}

            <h3>TRẢI NGHIỆM</h3>

            <div className="gold-line" />

            <div className="feature-grid">
              <div className="feature">
                <div className="feature-icon">⚔</div>

                <h4>CHIẾN ĐẤU</h4>

                <p>Hệ thống combat tốc độ cao với nhiều kỹ năng.</p>
              </div>

              <div className="feature">
                <div className="feature-icon">☯</div>

                <h4>THẦN THOẠI</h4>

                <p>Khám phá thế giới dựa trên thần thoại Trung Hoa.</p>
              </div>

              <div className="feature">
                <div className="feature-icon">🔥</div>

                <h4>BIẾN HÌNH</h4>

                <p>Sử dụng nhiều năng lực và hình dạng khác nhau.</p>
              </div>
            </div>
          </article>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="sidebar">
            {/* INFO */}

            <div className="info-card">
              <div className="info-title">THÔNG TIN GAME</div>

              <Info title="NHÀ SẢN XUẤT" value="Game Science" />

              <Info title="THỂ LOẠI" value="Action, RPG" />

              <Info title="NỀN TẢNG" value="IOS" />

              <Info title="NGÔN NGỮ" value="English, Chinese, Vietnamese" />

              <Info title="PHÁT HÀNH" value="20/08/2024" />

              <Info title="TRẠNG THÁI" value="VIỆT HÓA" />
            </div>

            {/* DOWNLOAD */}

            <div className="download-card">
              <div className="download-icon">↓</div>

              <h3>
                CÁNH CỬA
                <br />
                ĐẾN THẾ GIỚI
                <br />
                HUYỀN BÍ
              </h3>

              <p>Tải game để chơi và cập nhật bản Việt hóa.</p>

              <button onClick={goToDownload}>TẢI GAME</button>
            </div>
          </aside>
        </div>

        {/* =================================================
            SCREENSHOTS
        ================================================= */}

        <section className="screenshots">
          <div className="section-heading">
            <div>
              <span>GALLERY</span>

              <h2 className="text-white">HÌNH ẢNH GAME</h2>
            </div>
          </div>

          <div className="screenshot-grid">
            {images.slice(0, 5).map((image, index) => (
              <div
                className={`screenshot ${index === 0 ? "large" : ""}`}
                key={image}
                onClick={() => setCurrent(index)}
              >
                <img src={image} alt="Black Myth Wukong" />

                <div className="screenshot-overlay">XEM ẢNH</div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            RELATED GAMES
        ================================================= */}

        <section className="related" id="games">
          <div className="section-heading">
            <div>
              <span>KHÁM PHÁ THÊM</span>

              <h2 className="text-white">GAME CÙNG THỂ LOẠI</h2>
            </div>

            <button>XEM TẤT CẢ →</button>
          </div>

          <div className="related-grid">
            {relatedGames.map((game) => (
              <div className="game-card" key={game.name}>
                <div className="game-card-image">
                  <img src={game.image} alt={game.name} />

                  <div className="card-hover">XEM THÔNG TIN</div>
                </div>

                <div className="game-card-info">
                  <span>{game.type}</span>

                  <h3>{game.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer id="contact">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">MYTHIC</div>

            <p>GAME VIỆT HÓA</p>
          </div>

          <div>© 2025 Mythic Game Việt Hóa</div>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   INFO COMPONENT
========================================================= */

function Info({ title, value }) {
  return (
    <div className="info-row">
      <span>{title}</span>

      <strong>{value}</strong>
    </div>
  );
}

export default App;
