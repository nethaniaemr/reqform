import Breadcrumb from "@/components/layout/Breadcrumb";

export default function FormReviewPage() {
  return (
    <div className="py-6 px-8">
      <h1 className="text-2xl font-bold text-gray-900">Form Review</h1>
      <p className="text-sm text-gray-500 mt-1 mb-5">
        Reviewer Dashboard untuk Permintaan Pengembangan Aplikasi TI - Tinjau
        dan berikan masukan pada permintaan pengembangan aplikasi
      </p>
      <div className="mt-2">
        <Breadcrumb items={[{ label: "Form Review" }]} />
      </div>
    </div>
  );
}
