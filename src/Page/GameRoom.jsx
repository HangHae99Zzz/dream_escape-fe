import React from 'react';
import { ThreeRoom } from '../Component/Game';

const GameRoom = () => {
    // const dispatch = useDispatch();

    // // useEffect(() => {
    // //     const sessionRoomId = sessionStorage.getItem('sessionRoomId');
    // //     dispatch(roomActions.refRoom(sessionRoomId));
    // // }, []);
    return (
        <div>
            <ThreeRoom />
        </div>
    );
};

export default GameRoom;
