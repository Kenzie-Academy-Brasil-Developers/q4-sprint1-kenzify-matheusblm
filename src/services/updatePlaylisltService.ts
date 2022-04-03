import { title } from 'process';
import { UserDb, USERS, MusicDataType } from '../configs';

const updatePlaylistService = (
  username: string,
  addPlaylist: any
): undefined | UserDb => {
  const user: UserDb | undefined = USERS.find((u) => u.username === username);
  const addPlaylistKeys: Array<string> = Object.keys(addPlaylist);

  if (!user) {
    return undefined;
  }

  for (let index = 0; index < addPlaylistKeys.length; index++) {
    addPlaylist[addPlaylistKeys[index]].forEach((element: MusicDataType) => {
      element.title = element.title
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      element.listenedByMe = 0;
    });
    if (!user.playlist[addPlaylistKeys[index]]) {
      user.playlist[addPlaylistKeys[index]] = [
        ...addPlaylist[addPlaylistKeys[index]],
      ];
    } else {
      user.playlist[addPlaylistKeys[index]] = [
        ...user.playlist[addPlaylistKeys[index]],
        ...addPlaylist[addPlaylistKeys[index]],
      ];
    }
  }
  return user;
};

export default updatePlaylistService;
