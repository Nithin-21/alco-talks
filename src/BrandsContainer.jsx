import React, { useEffect, useState } from "react";
import BrandCard from "./components/BrandCard";
import BrandModal from "./components/BrandModal";
import { loadBrandsFromExcel } from "./scripts/loadBrandsFromExcel";
import "./Pagination.css";

const ITEMS_PER_PAGE = 25;

function BrandsContainer({ query }) {
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(null); // ✅ REQUIRED

  useEffect(() => {
    loadBrandsFromExcel().then(setBrands);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const filtered = brands.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      {/* BRAND GRID */}
      <div className="cards-container">
        {visible.map((brand) => (
          <BrandCard
            key={brand.name}
            brand={brand}
            onSelect={setSelectedBrand} // ✅ THIS opens modal
          />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            Prev
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
          >
            Next
          </button>
        </div>
      )}

      {/* MODAL */}
      {selectedBrand && (
        <BrandModal
          brand={selectedBrand}
          onClose={() => setSelectedBrand(null)}
        />
      )}
    </>
  );
}

export default BrandsContainer;
