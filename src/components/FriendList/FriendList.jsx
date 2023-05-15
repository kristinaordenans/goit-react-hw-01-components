import { FriendListItem } from './FriendsListItem';
import PropTypes from 'prop-types';
import css from "./FriendList.module.css";


export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                return (<FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline = {friend.isOnline}
                />)
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({            
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
}