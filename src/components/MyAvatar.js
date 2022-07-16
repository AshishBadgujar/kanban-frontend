// hooks

//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ word, ...other }) {

  return (
    <Avatar
      src=""
      alt="alt"

      {...other}
    >
      {word}
    </Avatar>
  );
}
