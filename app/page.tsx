"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, Download, Terminal, Wifi, Cpu } from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [bootComplete, setBootComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [typedContent, setTypedContent] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [glitchText, setGlitchText] = useState("madan gopal jha")
  const [scanLine, setScanLine] = useState(0)
  const [networkStatus, setNetworkStatus] = useState("CONNECTING...")

  const [corruptedElements, setCorruptedElements] = useState<Set<number>>(new Set())
  const [staticNoise, setStaticNoise] = useState(false)
  const [screenFlicker, setScreenFlicker] = useState(false)

  const bootSequence = [
    "SYSTEM INITIALIZING...",
    "LOADING NEURAL NETWORKS...",
    "ESTABLISHING SECURE CONNECTION...",
    "PORTFOLIO.EXE LOADED",
    "ACCESS GRANTED",
  ]

  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    setMounted(true)

    // Faster boot sequence
    let bootIndex = 0
    const bootInterval = setInterval(() => {
      if (bootIndex < bootSequence.length) {
        bootIndex++
      } else {
        clearInterval(bootInterval)
        setTimeout(() => {
          setBootComplete(true)
          setNetworkStatus("CONNECTED")
          setTimeout(() => setShowContent(true), 100) // Reduced from 200ms to 100ms
        }, 150) // Reduced from 300ms to 150ms
      }
    }, 200) // Reduced from 400ms to 200ms

    return () => clearInterval(bootInterval)
  }, [])

  // Glitch effect for name
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const originalText = "madan gopal jha"
      let glitched = ""

      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += matrixChars[Math.floor(Math.random() * matrixChars.length)]
        } else {
          glitched += originalText[i]
        }
      }

      setGlitchText(glitched)

      setTimeout(() => setGlitchText(originalText), 50) // Reduced from 100ms to 50ms
    }, 1500) // Reduced from 3000ms to 1500ms

    return () => clearInterval(glitchInterval)
  }, [])

  // Scanning line effect
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLine((prev) => (prev + 1) % 100)
    }, 25) // Reduced from 50ms to 25ms

    return () => clearInterval(scanInterval)
  }, [])

  // Random element corruption
  useEffect(() => {
    const corruptInterval = setInterval(() => {
      const randomElements = new Set<number>()
      for (let i = 0; i < 3; i++) {
        randomElements.add(Math.floor(Math.random() * 20))
      }
      setCorruptedElements(randomElements)

      setTimeout(() => setCorruptedElements(new Set()), 200)
    }, 3000)

    return () => clearInterval(corruptInterval)
  }, [])

  // Static noise effect
  useEffect(() => {
    const noiseInterval = setInterval(() => {
      setStaticNoise(true)
      setTimeout(() => setStaticNoise(false), 100)
    }, 8000)

    return () => clearInterval(noiseInterval)
  }, [])

  // Screen flicker effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setScreenFlicker(true)
      setTimeout(() => setScreenFlicker(false), 150)
    }, 12000)

    return () => clearInterval(flickerInterval)
  }, [])

  // Faster typing effect
  useEffect(() => {
    if (showContent && currentIndex < 500) {
      // Limit initial typing for speed
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, 5) // Reduced from 10ms to 5ms
      return () => clearTimeout(timer)
    }
  }, [showContent, currentIndex])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={`min-h-screen bg-black text-green-400 font-mono relative overflow-hidden ${
        screenFlicker ? "screen-distortion" : ""
      } ${staticNoise ? "static-noise" : ""}`}
    >
      {/* Enhanced Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="matrix-rain-enhanced"></div>
      </div>

      {/* Scanning Lines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent ${scanLine}%, #00ff0020 ${scanLine + 1}%, transparent ${scanLine + 2}%)`,
        }}
      ></div>

      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none scanlines opacity-20"></div>

      {/* Boot Sequence */}
      {!bootComplete && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="text-green-400 text-xl mb-4 glitch-text">SYSTEM BOOT</div>
              <div className="flex items-center justify-center space-x-2 text-green-300">
                <Wifi className="animate-pulse" size={16} />
                <span>{networkStatus}</span>
                <Cpu className="animate-spin" size={16} />
              </div>
            </div>
            <div className="space-y-1">
              {bootSequence.map((line, index) => (
                <div
                  key={index}
                  className={`text-green-300 transition-all duration-300 ${
                    index < bootSequence.length
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform translate-x-4"
                  }`}
                >
                  <span className="text-green-500">{">"}</span> {line}
                  {index === bootSequence.length - 1 && <span className="animate-pulse ml-2">█</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {bootComplete && (
        <div className="relative z-10">
          {/* Enhanced Header with Photo and Links */}
          <div className="absolute top-8 right-8 z-20">
            <div className="relative group">
              {/* Photo Container with Enhanced Effects */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-green-400 shadow-lg shadow-green-400/50 hover:shadow-green-400/80 transition-all duration-300">
                <div className="absolute inset-0 bg-green-400/20 animate-pulse"></div>
                <Image
                  src="/images/madan-photo.jpg"
                  alt="Madan Gopal Jha"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover filter brightness-110 contrast-125 hover:scale-110 transition-transform duration-300"
                />
                {/* Enhanced Glitch overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Enhanced Social Links */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/Madan2468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-green-900/50 border border-green-400 rounded flex items-center justify-center hover:bg-green-400 hover:text-black hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                    title="GitHub"
                  >
                    <Github size={14} className="group-hover:animate-bounce" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/madan-gopal-jha-380865255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-green-900/50 border border-green-400 rounded flex items-center justify-center hover:bg-green-400 hover:text-black hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                    title="LinkedIn"
                  >
                    <Linkedin size={14} className="group-hover:animate-bounce" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1rjet2Db3AIm6XP4i9ouhpb89Gv-AExzG/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-green-900/50 border border-green-400 rounded flex items-center justify-center hover:bg-green-400 hover:text-black hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                    title="Resume"
                  >
                    <Download size={14} className="group-hover:animate-bounce" />
                  </a>
                  <a
                    href="mailto:madanjha2468@gmail.com?subject=Portfolio Contact&body=Hi Madan, I found your portfolio and would like to get in touch!"
                    className="w-8 h-8 bg-green-900/50 border border-green-400 rounded flex items-center justify-center hover:bg-green-400 hover:text-black hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                    title="Email: madanjha2468@gmail.com"
                    onClick={(e) => {
                      // Fallback for systems without email client
                      if (!window.navigator.userAgent.includes("Mobile")) {
                        const fallback = () => {
                          navigator.clipboard
                            ?.writeText("madanjha2468@gmail.com")
                            .then(() => {
                              alert("Email copied to clipboard: madanjha2468@gmail.com")
                            })
                            .catch(() => {
                              alert("Email: madanjha2468@gmail.com")
                            })
                        }

                        // Try to open email client, fallback to copy if it fails
                        setTimeout(() => {
                          if (document.activeElement === e.currentTarget) {
                            fallback()
                          }
                        }, 100)
                      }
                    }}
                  >
                    <Mail size={14} className="group-hover:animate-bounce" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Terminal Header */}
          <div className="p-4 border-b border-green-400/30 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <Terminal size={16} className="ml-2 text-green-400" />
                <span className="ml-2 text-green-300">terminal@madangopal.dev:~$ cat developer.json</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400 text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced JSON Content */}
          <div className="p-8 max-w-5xl">
            <pre className="text-sm leading-relaxed whitespace-pre-wrap">
              <code className="text-green-400">
                {showContent && (
                  <div className="text-sm leading-relaxed">
                    <div className="mb-2 hover:text-green-300 transition-colors">{"{"}</div>

                    <div className="ml-4">
                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300 group">
                        <span className="text-green-300 group-hover:text-green-200">"name"</span>:{" "}
                        <span
                          className={`text-green-200 group-hover:text-green-100 cursor-pointer glitch-text ${
                            corruptedElements.has(0) ? "data-corrupt rgb-split" : ""
                          }`}
                          data-text={glitchText}
                          onMouseEnter={() => setGlitchText(glitchText)}
                        >
                          "{glitchText}"
                        </span>
                        ,
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300 group">
                        <span className="text-green-300 group-hover:text-green-200">"title"</span>:{" "}
                        <span
                          className={`text-green-200 group-hover:text-green-100 hover:glow transition-all duration-300 ${
                            corruptedElements.has(1) ? "data-corrupt" : ""
                          }`}
                        >
                          "Full Stack Web Developer MERN Stack Specialist"
                        </span>
                        ,
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300 group">
                        <span className="text-green-300 group-hover:text-green-200">"location"</span>:{" "}
                        <span className="text-green-200 group-hover:text-green-100">"india"</span>,
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300 group">
                        <span className="text-green-300 group-hover:text-green-200">"status"</span>:{" "}
                        <span
                          className={`text-green-200 group-hover:text-green-100 animate-pulse ${
                            corruptedElements.has(2) ? "rgb-split" : ""
                          }`}
                        >
                          "available for hire"
                        </span>
                        ,
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300 group">
                        <span className="text-green-300 group-hover:text-green-200">"education"</span>: {"{"}
                        <div className="ml-4">
                          <div>
                            <span className="text-green-300">"degree"</span>:{" "}
                            <span className="text-green-200 group-hover:text-green-100">
                              "integrated mtech + btech in computer science engineering"
                            </span>
                            ,
                          </div>
                          <div>
                            <span className="text-green-300">"institution"</span>:{" "}
                            <span className="text-green-200 group-hover:text-green-100">
                              "jaypee institute of information technology, noida sec 62"
                            </span>
                            ,
                          </div>
                          <div>
                            <span className="text-green-300">"current_year"</span>:{" "}
                            <span className="text-green-200 group-hover:text-green-100 animate-pulse">
                              "pre-final year student"
                            </span>
                            ,
                          </div>
                          <div>
                            <span className="text-green-300">"graduation_year"</span>:{" "}
                            <span className="text-green-200 group-hover:text-green-100">"2027"</span>
                          </div>
                        </div>
                        {"}"},
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300">
                        <span className="text-green-300">"about_me"</span>: [
                        <div className="ml-4">
                          <div className="hover:text-green-100 transition-colors duration-300 cursor-pointer">
                            <span className="text-green-200">
                              "passionate and results-driven full stack web developer"
                            </span>
                            ,
                          </div>
                          <div className="hover:text-green-100 transition-colors duration-300 cursor-pointer">
                            <span className="text-green-200">
                              "focus on crafting dynamic, responsive web applications using MERN stack"
                            </span>
                            ,
                          </div>
                          <div className="hover:text-green-100 transition-colors duration-300 cursor-pointer">
                            <span className="text-green-200">
                              "excel at transforming complex ideas into intuitive solutions"
                            </span>
                          </div>
                        </div>
                        ],
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300">
                        <span className="text-green-300">"featured_projects"</span>: [
                        <div className="ml-4 space-y-4">
                          <div className="hover:bg-green-900/20 p-3 rounded transition-all duration-300 border-l-2 border-transparent hover:border-green-400">
                            <div className="text-green-300 hover:text-green-200 font-semibold">
                              "competitive_coding_leaderboard"
                            </div>
                            <div className="text-green-200 text-sm ml-4 hover:text-green-100 leading-relaxed">
                              "track your progress across multiple platforms in one place, compare your rankings, and
                              stay motivated to improve"
                            </div>
                            <div className="text-green-400 text-xs ml-4 mt-1">"stats": "200+ unique visitors"</div>
                            <div className="ml-4 mt-2">
                              <a
                                href="https://competitive-coding-leaderboard.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-200 underline hover:text-green-100 hover:glow transition-all duration-300"
                              >
                                "visit_website" →
                              </a>
                            </div>
                          </div>

                          <div className="hover:bg-green-900/20 p-3 rounded transition-all duration-300 border-l-2 border-transparent hover:border-green-400">
                            <div className="text-green-300 hover:text-green-200 font-semibold">
                              "next_generation_smart_waste_bins"
                            </div>
                            <div className="text-green-200 text-sm ml-4 hover:text-green-100 leading-relaxed">
                              "iot-based waste monitoring and collection optimization - addresses urban waste management
                              challenges like overflowing bins and high operational costs using iot principles and
                              optimization algorithms"
                            </div>
                            <div className="ml-4 mt-2">
                              <a
                                href="https://next-generation-smart-waste-bins-frontend.onrender.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-200 underline hover:text-green-100 hover:glow transition-all duration-300"
                              >
                                "visit_website" →
                              </a>
                            </div>
                          </div>

                          <div className="hover:bg-green-900/20 p-3 rounded transition-all duration-300 border-l-2 border-transparent hover:border-green-400">
                            <div className="text-green-300 hover:text-green-200 font-semibold">
                              "resqlink_real_time_rescue_platform"
                            </div>
                            <div className="text-green-200 text-sm ml-4 hover:text-green-100 leading-relaxed">
                              "real-time rescue platform for injured animals 🆘🐶 - built to help rescue injured or
                              abandoned animals by connecting them with nearby rescuers in real-time"
                            </div>
                            <div className="ml-4 mt-2">
                              <a
                                href="https://resq-link-frontend.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-200 underline hover:text-green-100 hover:glow transition-all duration-300"
                              >
                                "try_it_live" →
                              </a>
                            </div>
                          </div>

                          <div className="hover:bg-green-900/20 p-3 rounded transition-all duration-300 border-l-2 border-transparent hover:border-green-400">
                            <div className="text-green-300 hover:text-green-200 font-semibold">
                              "real_time_user_tracker"
                            </div>
                            <div className="text-green-200 text-sm ml-4 hover:text-green-100 leading-relaxed">
                              "dynamic user tracking system in real-time, showcasing live data updates and tracking
                              functionalities"
                            </div>
                            <div className="ml-4 mt-2">
                              <a
                                href="https://github.com/Madan2468"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-200 underline hover:text-green-100 hover:glow transition-all duration-300"
                              >
                                "view_on_github" →
                              </a>
                            </div>
                          </div>

                          {/* <div className="hover:bg-green-900/20 p-3 rounded transition-all duration-300 border-l-2 border-transparent hover:border-green-400">
                            <div className="text-green-300 hover:text-green-200 font-semibold">
                              "youtube_full_backend"
                            </div>
                            <div className="text-green-200 text-sm ml-4 hover:text-green-100 leading-relaxed">
                              "complete backend solution for youtube-like platform, including user management, video
                              handling, and authentication"
                            </div>
                            <div className="ml-4 mt-2">
                              <a
                                href="https://github.com/Madan2468/youtube-backend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-200 underline hover:text-green-100 hover:glow transition-all duration-300"
                              >
                                "view_on_github" →
                              </a>
                            </div>
                          </div> */}
                        </div>
                        ],
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300">
                        <span className="text-green-300">"skills"</span>: {"{"}
                        <div className="ml-4">
                          <div className="hover:text-green-100 transition-colors duration-300">
                            <span className="text-green-300">"frontend"</span>: [
                            <span className="text-green-200">
                              "react.js", "javascript", "html5", "css3", "tailwind"
                            </span>
                            ],
                          </div>
                          <div className="hover:text-green-100 transition-colors duration-300">
                            <span className="text-green-300">"backend"</span>: [
                            <span className="text-green-200">"node.js", "express.js", "mongodb", "apis"</span>],
                          </div>
                          <div className="hover:text-green-100 transition-colors duration-300">
                            <span className="text-green-300">"other"</span>: [
                            <span className="text-green-200">"iot", "cinematography", "performance_optimization"</span>]
                          </div>
                        </div>
                        {"}"},
                      </div>

                      <div className="mb-4 hover:bg-green-900/10 p-2 rounded transition-all duration-300">
                        <span className="text-green-300">"contact"</span>: {"{"}
                        <div className="ml-4">
                          <div>
                            <span className="text-green-300">"email"</span>:{" "}
                            <a
                              href="mailto:madanjha2468@gmail.com?subject=Portfolio Contact&body=Hi Madan, I found your portfolio and would like to get in touch!"
                              className="text-green-200 underline hover:text-green-100 hover:glow transition-all duration-300"
                              title="Click to send email"
                              onClick={(e) => {
                                // Fallback for systems without email client
                                setTimeout(() => {
                                  if (document.activeElement === e.currentTarget) {
                                    navigator.clipboard
                                      ?.writeText("madanjha2468@gmail.com")
                                      .then(() => {
                                        alert("Email copied to clipboard: madanjha2468@gmail.com")
                                      })
                                      .catch(() => {
                                        alert("Email: madanjha2468@gmail.com")
                                      })
                                  }
                                }, 100)
                              }}
                            >
                              "madanjha2468@gmail.com"
                            </a>
                            ,
                          </div>
                          <div>
                            <span className="text-green-300">"resume"</span>:{" "}
                            <a
                              href="https://drive.google.com/file/d/1rjet2Db3AIm6XP4i9ouhpb89Gv-AExzG/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-200 underline hover:text-green-100 hover:glow transition-all duration-300"
                            >
                              "view_resume" →
                            </a>
                          </div>
                        </div>
                        {"}"}
                      </div>
                    </div>

                    <div className="hover:text-green-300 transition-colors">{"}"}</div>
                    <div className="mt-4 text-green-500">
                      <span className="animate-pulse">█</span>
                      <span className="ml-2 text-xs opacity-70">// End of file - Press any key to continue...</span>
                    </div>
                  </div>
                )}
              </code>
            </pre>
          </div>

          {/* Enhanced Footer Terminal */}
          <div className="fixed bottom-4 left-4 text-green-400 bg-black/80 p-2 rounded border border-green-400/30">
            <div className="flex items-center space-x-2">
              <Terminal size={14} />
              <span className="animate-pulse">terminal@madangopal.dev:~$ </span>
              <span className="text-green-300 text-xs">ready_for_commands</span>
            </div>
          </div>

          {/* System Status */}
          <div className="fixed top-4 left-4 text-green-400 bg-black/80 p-2 rounded border border-green-400/30 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>SYSTEM: ONLINE</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
