import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import getLocalStorageObj from '../helpers/getLocalStorageObj'

const RootRoute = ({ history }: RouteComponentProps) => {
  useEffect(() => {
    const ls = getLocalStorageObj()

    // No langs, go to /welcome
    if (ls.langs.length === 0) {
      history.push('/welcome')
      return () => {}
    }

    // If any langs have an undefined skill level, go to /welcome/langs
    for (let i = 0; i < ls.langs.length; i++) {
      const current = ls.langs[i]

      if (!current.skillLevel) {
        history.push('/welcome/langs/skills')
        return () => {}
      }
    }

    history.push('/word')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default withRouter(RootRoute)
