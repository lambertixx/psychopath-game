"use client"

import React from "react"

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="svg-loader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 41 41"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5 40.1875C31.3731 40.1875 40.1875 31.3731 40.1875 20.5C40.1875 9.62689 31.3731 0.8125 20.5 0.8125C9.6269 0.8125 0.8125 9.62689 0.8125 20.5C0.8125 31.3731 9.6269 40.1875 20.5 40.1875ZM20.5 37.7266C30.014 37.7266 37.7266 30.014 37.7266 20.5C37.7266 10.986 30.014 3.27344 20.5 3.27344C10.986 3.27344 3.27344 10.986 3.27344 20.5C3.27344 30.014 10.986 37.7266 20.5 37.7266Z"
            fill="#DADADA"
          />
          <path
            d="M20.5 1.8125C30.4281 1.8125 38.5486 9.55515 39.1516 19.3309C39.154 19.3713 39.1415 19.4065 39.1097 19.4391C39.0755 19.474 39.0226 19.5 38.957 19.5C38.8475 19.5 38.6949 19.3993 38.6808 19.1989C38.0131 9.7394 30.1289 2.27344 20.5 2.27344C10.8711 2.27344 2.9869 9.7394 2.3192 19.1989C2.30506 19.3993 2.15253 19.5 2.04297 19.5C1.97735 19.5 1.92454 19.474 1.89032 19.4391C1.85845 19.4065 1.84595 19.3713 1.84844 19.3309C2.45139 9.55515 10.5719 1.8125 20.5 1.8125Z"
            stroke="#a24d4d"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

export default Loading
