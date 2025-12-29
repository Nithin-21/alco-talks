import * as XLSX from "xlsx";

export async function loadBrandsFromExcel() {
  const res = await fetch("/brands.xlsx"); // ✅ FIXED
  const buffer = await res.arrayBuffer();

  const workbook = XLSX.read(buffer, { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

  return rows
    .map(row => ({
      name: row["Brand Name"]?.trim(),
      url: normalizeUrl(row["Brand Url"]),
      image: "" // images later
    }))
    .filter(b => b.name && b.url);
}

function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return "https://" + url;
}
