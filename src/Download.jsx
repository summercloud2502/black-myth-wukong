import { useEffect, useState } from "react";
import "./Download.css";

function Download() {
  const TOTAL_GB = 82.47;

  const [showDownload, setShowDownload] = useState(false);
  const [downloadedGB, setDownloadedGB] = useState(0);
  const [speed, setSpeed] = useState(0.5);

  /* =========================================================
     TÍNH PHẦN TRĂM
  ========================================================= */

  const progress = Math.min((downloadedGB / TOTAL_GB) * 100, 100);

  /* =========================================================
     TẢI GIẢ LẬP
  ========================================================= */

  useEffect(() => {
    if (!showDownload) return;

    if (downloadedGB >= TOTAL_GB) return;

    const interval = setInterval(() => {
      // Random tốc độ từ 0.40 -> 0.70 GB/s
      const newSpeed = Number((Math.random() * (0.7 - 0.4) + 0.4).toFixed(2));

      setSpeed(newSpeed);

      setDownloadedGB((prev) => {
        const next = prev + newSpeed;

        if (next >= TOTAL_GB) {
          return TOTAL_GB;
        }

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showDownload, downloadedGB]);

  /* =========================================================
     TỰ ĐỘNG TẢI FILE SAU KHI HOÀN TẤT
  ========================================================= */

  /* =========================================================
   TỰ ĐỘNG TẢI FILE + ĐÓNG MODAL SAU KHI HOÀN TẤT
========================================================= */

  useEffect(() => {
    if (progress < 100) return;

    // Chờ 1 giây để hiển thị "TẢI GAME HOÀN TẤT"
    const timeout = setTimeout(() => {
      const link = document.createElement("a");

      // File nằm trong thư mục public
      link.href = "/black-myth-wukong-setup.ipa";

      // Tên file khi tải xuống
      link.download = "black-myth-wukong-setup.ipa";

      document.body.appendChild(link);

      // Bắt đầu tải file
      link.click();

      document.body.removeChild(link);

      // Đóng modal sau khi bắt đầu tải file
      setShowDownload(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [progress]);

  /* =========================================================
     BẮT ĐẦU TẢI
  ========================================================= */

  const handleDownload = () => {
    setDownloadedGB(0);
    setSpeed(0.5);
    setShowDownload(true);
  };

  /* =========================================================
     ĐÓNG MODAL
  ========================================================= */

  const handleCancel = () => {
    setShowDownload(false);
  };

  return (
    <div className="download-page">
      {/* =====================================================
          TRANG DOWNLOAD
      ===================================================== */}

      <div className="download-content">
        <div className="download-logo">MYTHIC</div>

        <div className="download-subtitle">GAME VIỆT HÓA</div>

        <div className="download-line" />

        <h1>BLACK MYTH:</h1>
        <h1 className="mr">WUKONG</h1>

        <p className="download-description">
          Tải game và trải nghiệm hành trình huyền bí của Thiên Mệnh Nhân.
        </p>

        {/* =================================================
            DOWNLOAD CARD
        ================================================= */}

        <div className="download-page-card">
          <h2>TẢI XUỐNG BẢN MIỄN PHÍ</h2>

          <p>
            Black Myth: Wukong
            <br />
            Phiên bản Việt hóa
          </p>

          <div className="download-buttons">
            <button className="download-button" onClick={handleDownload}>
              BẢN CÀI ĐẶT
            </button>

            <button className="support-button">LIÊN HỆ CSKH</button>
          </div>

          <div className="download-info">
            <span>IOS</span>
            <span>VIỆT HÓA</span>
            <span>2025</span>
          </div>
        </div>

        {/* =================================================
            BACK
        ================================================= */}

        <button
          className="back-button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ← QUAY LẠI TRANG GAME
        </button>
      </div>

      {/* =====================================================
          DOWNLOAD MODAL
      ===================================================== */}

      {showDownload && (
        <div className="download-loading-overlay">
          <div className="download-loading-modal">
            {/* LOGO */}

            <div className="loading-logo">MYTHIC</div>

            {/* TITLE */}

            <h2>{progress >= 100 ? "TẢI GAME HOÀN TẤT" : "ĐANG TẢI GAME"}</h2>

            <p className="loading-game-name">BLACK MYTH: WUKONG</p>

            {/* =================================================
                DUNG LƯỢNG
            ================================================= */}

            <div className="loading-size">
              {downloadedGB.toFixed(2)} GB
              <span> / {TOTAL_GB.toFixed(2)} GB</span>
            </div>

            {/* =================================================
                PROGRESS BAR
            ================================================= */}

            <div className="loading-progress">
              <div
                className="loading-progress-bar"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* PHẦN TRĂM */}

            <div className="loading-percent">{progress.toFixed(1)}%</div>

            {/* =================================================
                THÔNG TIN
            ================================================= */}

            <div className="loading-details">
              <span>
                TỐC ĐỘ
                <strong>
                  {progress >= 100 ? "0.00" : speed.toFixed(2)} GB/s
                </strong>
              </span>

              <span>
                DUNG LƯỢNG
                <strong>{TOTAL_GB.toFixed(2)} GB</strong>
              </span>

              <span>
                TRẠNG THÁI
                <strong>{progress >= 100 ? "HOÀN TẤT" : "ĐANG TẢI"}</strong>
              </span>
            </div>

            {/* =================================================
                COMPLETE
            ================================================= */}

            {progress >= 100 && (
              <div className="download-complete">
                ✓ TẢI XUỐNG HOÀN TẤT
                <br />
                <small>File đang được tải xuống...</small>
              </div>
            )}

            {/* =================================================
                CANCEL
            ================================================= */}

            {progress < 100 && (
              <button className="cancel-download" onClick={handleCancel}>
                HỦY TẢI
              </button>
            )}

            {/* =================================================
                CLOSE
            ================================================= */}

            {progress >= 100 && (
              <button className="cancel-download" onClick={handleCancel}>
                ĐÓNG
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Download;
