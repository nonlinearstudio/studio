import React, { useState, useEffect } from "react"

const CustomIframePreview = props => {
  const [iframeUrl, setIframeUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const { options, document } = props
  const { defaultSize } = options

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        setIsLoading(true)
        const resolvedUrl = await options.url(document._id)
        setIframeUrl(resolvedUrl)
        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching URL:", err)
        setError("Failed to load preview URL")
        setIsLoading(false)
      }
    }

    fetchUrl()
  }, [document._id, options.url])

  const isMobile = defaultSize === "mobile"

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    overflow: "auto",
  }

  const iframeStyle = isMobile
    ? {
        width: "375px",
        height: "780px",
        border: "16px solid #000",
        borderRadius: "16px",
      }
    : {
        width: "100%",
        height: "100%",
        border: "none",
      }

  if (isLoading) {
    return <div>Loading preview...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <iframe
        src={iframeUrl}
        style={{ ...iframeStyle, border: "none" }}
        allow="fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  )
}

export default CustomIframePreview
