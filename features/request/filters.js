export const EMPTY_FILTERS = {
  search: "",
  date: "",
  status: "",
  jenis: "",
};

export function hasActiveFilters(f) {
  return Boolean(f.search || f.date || f.status || f.jenis);
}

export function applyFilters(items, f) {
  const q = f.search.trim().toLowerCase();

  return items.filter((item) => {
    if (q && !`${item.title} ${item.id} ${item.name}`.toLowerCase().includes(q))
      return false;
    // Tanggal berformat YYYY-MM-DD di kedua sisi, jadi cukup dibandingkan sama persis.
    if (f.date && item.date !== f.date) return false;
    if (f.status && item.status !== f.status) return false;
    if (f.jenis && item.category !== f.jenis) return false;
    return true;
  });
}

export const EMPTY_EXPORT_FILTERS = {
  status: "",
  jenis: "",
  dateFrom: "",
  dateTo: "",
};

export function hasActiveExportFilters(f) {
  return Boolean(f.status || f.jenis || f.dateFrom || f.dateTo);
}

export function applyExportFilters(items, f) {
  return items.filter((item) => {
    if (f.status && item.status !== f.status) return false;
    if (f.jenis && item.category !== f.jenis) return false;
    if (f.dateFrom && item.date < f.dateFrom) return false;
    if (f.dateTo && item.date > f.dateTo) return false;
    return true;
  });
}
