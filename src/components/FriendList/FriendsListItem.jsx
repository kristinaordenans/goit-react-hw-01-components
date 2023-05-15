import css from "./FriendList.module.css";
import PropTypes from 'prop-types';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={`${css.item} ${css[isOnline]}`}>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
            <span className={`${css[isOnline]} ${css.status}`}>&#10687;</span>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}