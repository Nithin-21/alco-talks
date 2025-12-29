import React from "react";
import "./BrandModal.css";

function BrandModal({ brand, onClose }) {
  if (!brand) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          {/* IMAGE SECTION */}
          <div className="modal-image-section">
            {brand.image ? (
              <img
                src={`/brand-images/${brand.image}`}
                alt={brand.name}
                className="modal-image-fixed"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <div className="brand-image-fallback">
                {brand.name}
              </div>
            )}

            <p className="illustration-note">
              *Brand image shown for reference only.
            </p>
          </div>

          {/* INFO SECTION */}
          <div className="modal-info-section">
            <h2 className="modal-title">{brand.name}</h2>

            <h3 className="modal-subheading">Official Website</h3>

            <p className="modal-desc">
              <a href={brand.url} target="_blank" rel="noopener noreferrer">
                {brand.url}
              </a>
            </p>
          </div>
        </div>

        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BrandModal;
