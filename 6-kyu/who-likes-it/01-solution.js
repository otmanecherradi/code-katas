function getSentence(names){
  if (!names.length) return 'no one';
  if (names.length <= 2) {
    return names.join(' and ');
  }
  if (names.length == 3) {
    return [names.slice(0,2).join(', '), names.slice(2,3)].join(' and ');
  }
  if (names.length > 3) {
    return [names.slice(0,2).join(', '), `${names.slice(2).length} others`].join(' and ');
  }
}

function likes(names) {
  const sentence = getSentence(names);
  const suffix = names.length >= 2 ? 'like this' : 'likes this';
  return [sentence, suffix].join(' ');
}
