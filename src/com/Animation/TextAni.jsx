import React, { useState, useEffect } from "react"

const words = [ "Web Developer", "Full Stack Developer"]

const TextAni = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typeSpeed = isDeleting ? 100: 150
    const delay = isDeleting ? 500 : 1500

    const handleTyping = () => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          if (prev === currentWord) {
            setIsDeleting(true)
            return prev
          }
          return currentWord.slice(0, prev.length + 1)
        } else {
          if (prev === "") {
            setIsDeleting(false)
            setCurrentWordIndex((currentWordIndex + 1) % words.length)
            return ""
          }
          return prev.slice(0, -1)
        }
      })
    }

    const timer = setTimeout(
      handleTyping,
      isDeleting && displayedText === "" ? delay : typeSpeed
    )

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWordIndex])

  return (
   
      <span className="border-r-4 border-white text-red-700 pr-2 animate-blink">
        {displayedText}
      </span>
    
  )
}

export default TextAni

// Add this in your CSS for the blinking cursor effect
// @keyframes blink {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0; }
// }
// .animate-blink { animation: blink 1s step-start infinite; }
