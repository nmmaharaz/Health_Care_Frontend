export default function StatCircle({value, label}: {value: string, label: string}) {
    return (
        <div> 
            <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold text-blue-600">
                {value}
            </div>
            <p className="mt-4 font-medium text-slate-700">{label}</p>
        </div>
        </div>
    )
}
