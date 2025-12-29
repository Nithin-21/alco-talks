import "./BrandCard.css";

function BrandCard({ brand, onSelect }) {
  return (
    <article
      className="brand-card"
      onClick={() => {
        if (typeof onSelect === "function") {
          onSelect(brand); // ✅ ONLY responsibility
        }
      }}
    >
      <div className="brand-image-wrapper">
        {brand.image ? (
          <img
            src={`/brand-images/${brand.image}`}
            alt={brand.name}
            className="brand-image"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="brand-image-fallback">
            {brand.name}
          </div>
        )}
      </div>

      <div className="brand-body">
        <h3 className="brand-title">{brand.name}</h3>
      </div>
    </article>
  );
}

export default BrandCard;
