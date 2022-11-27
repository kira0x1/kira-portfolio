import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    const page_path = location.pathname + location.search
    window.gtag('event', 'page_view', {
      page_path,
    })

    ReactGA.send({ hitType: 'pageview', page: page_path })
  }, [location])
}

export default usePageTracking
