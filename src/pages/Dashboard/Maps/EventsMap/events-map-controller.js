export const handleViewController = ({info, chat, close}) => {
  if (info) {
    return alert('Info');
  }
  if (chat) {
    return alert('chat');
  }
  if (close) {
    return alert('close');
  }
};
