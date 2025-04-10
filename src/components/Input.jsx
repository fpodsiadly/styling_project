export default function Input({ label, invalid, ...props }) {
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase '
  let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow'

  if (invalid) {
    labelClasses = 'text-red-500'
    inputClasses += ' border-red-500 bg-red-100 text-red-500'
  } else {
    labelClasses += 'text-stone-300'
    inputClasses += ' border-stone-300 bg-stone-200 text-gray-700'
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  )
}
