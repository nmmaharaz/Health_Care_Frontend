export default function InfoRow({label, value}: {label: string, value: string}) {
  return (
    <div> 
        <div className="flex gap-4 border-b pb-3 text-slate-700">
      <span className="font-medium w-32">{label}:</span>
      <span>{value}</span>
    </div>
    </div>
  )
}
