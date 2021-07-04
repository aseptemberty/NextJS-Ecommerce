import { useCallback, useEffect, useState } from "react"

export function useMediaQuery(width){
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
}


export function currencyFormat(num) {
  return num.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' ₽'
}


export function closeMenuExternalClick(node, close){
  const handleClick = e => {
  // @ts-ignore
  if (node.current.contains(e.target)) {
    return;
  }
  close()
};
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return
}


// function slugify(string) {
//   const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
//   const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
//   const p = new RegExp(a.split('').join('|'), 'g')
//
//   return string.toString().toLowerCase()
//     .replace(/\s+/g, '-') // Replace spaces with -
//     .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
//     .replace(/&/g, '-and-') // Replace & with 'and'
//     .replace(/[^\w-]+/g, '') // Remove all non-word characters
//     .replace(/--+/g, '-') // Replace multiple - with single -
//     .replace(/^-+/, '') // Trim - from start of text
//     .replace(/-+$/, '') // Trim - from end of text
// }
//
// function titleIfy(slug) {
//   var words = slug.split('-')
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i]
//     words[i] = word.charAt(0).toUpperCase() + word.slice(1)
//   }
//   return words.join(' ')
// }
//