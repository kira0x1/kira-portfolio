import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    const page_path = location.pathname + location.search
    window.gtag('event', 'page_view', {
      page_path,
    })
  }, [location])
}

export default usePageTracking
