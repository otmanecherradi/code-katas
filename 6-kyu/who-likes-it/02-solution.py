def get_sentence(names):
    if len(names) is 0:
        return 'no one';

    if len(names) <= 2:
        return ' and '.join(names)

    if len(names) is 3:
        return ' and '.join((', '.join(names[:2]), names[2]))

    if len(names) > 3:
        return ' and '.join((', '.join(names[:2]), f'{len(names[2:])} others'))

def likes(names):
    suffix = 'like this' if len(names) >=2 else 'likes this'
    sentence = get_sentence(names)

    return ' '.join((sentence, suffix))
