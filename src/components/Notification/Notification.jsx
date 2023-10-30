import CSS from './Notification.module.css';
const Notification = ({ message }) => {
  return <p className={CSS.message}>{message}</p>;
};
export default Notification;
