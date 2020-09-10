/**
 * Returns ancestor elt that matches selector, or false
 * Selector is either a classname preceded by "." or an id preceded by "#"
 * Optionally specify levels of ancestors to search. Example: levels = 1 will search parent only
 * */
const matchingAncestor = (elt: { parentElement: HTMLElement | null }, selector: string, levels: number): boolean | HTMLElement => {
  let parent = elt.parentElement
  let counter = 0

  while (parent && (!levels || (levels && counter < levels))) {
    if (!selector) {
      return parent
    }

    if (selector[0] === '.' && parent.classList.contains(selector.slice(1))) {
      return parent
    }
    if (selector[0] === '#' && parent.id === selector.slice(1)) {
      return parent
    }

    parent = parent.parentElement
    counter++
  }

  return false
}

export default matchingAncestor