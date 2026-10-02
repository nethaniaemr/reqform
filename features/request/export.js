import * as XLSX from "xlsx";

const COLUMNS = [
  { key: "id", header: "Nomor Tiket" },
  { key: "title", header: "Judul" },
  { key: "category", header: "Jenis Pengembangan" },
  { key: "status", header: "Status" },
  { key: "name", header: "Pemohon" },
  { key: "dept", header: "Departemen" },
  { key: "date", header: "Tanggal Inisiasi" },
];

export function exportRequestsToExcel(items, fileName = "formrequest-export") {
  const rows = items.map((item) =>
    Object.fromEntries(COLUMNS.map((col) => [col.header, item[col.key] ?? ""]))
  );

  const worksheet = XLSX.utils.json_to_sheet(rows);
  worksheet["!cols"] = COLUMNS.map(() => ({ wch: 22 }));

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Permintaan");

  const today = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `${fileName}-${today}.xlsx`);
}