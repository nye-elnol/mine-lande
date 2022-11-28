import { useState, useEffect } from "react"

export const useData = (url, method = "GET") => {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)
  const [loads, setLoads] = useState(false)
  const [ways, setWays] = useState(null)

  const post = (post) => {
    setWays({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
  }

  useEffect(() => {
    const ctrl = new AbortController()

    const bringData = async (bringOpt) => {
      setLoads(true)
      
      try {
        const res = await fetch(url, { ...bringOpt, signal: ctrl.signal })

        if( !res.ok ) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setLoads(false)
        setData(data)
        setErr(null)

      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Processen Med At Hente Data Blev Afbrudt")
        } else {
          setLoads(false)
          setErr("Dataene Kan Ikke Hentes :(")
        }
      }
    }

    if (method === "GET") {
      bringData()
    }
    if (method === "POST" && ways) {
      bringData(ways)
    }

    return () => {
      ctrl.abort()
    }

  }, [url, method, ways])

  return { data, loads, err, post }
}