// src/components/CopyLinkButton.jsx
'use client'

export default function CopyLinkButton() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    } catch {
      alert("Sorry—couldn't copy the link.")
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:-translate-y-0.5 hover:bg-gray-200"
      aria-label="Copy Link"
      title="Copy Link"
      type="button"
    >
      🔗
    </button>
  )
}
